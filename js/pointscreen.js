var loaded = false;
var cell1;
var cell2;


function getData(){
	$.getJSON( "http://localhost:5000/objects/list/", function( data ) {
		noRows = data.total;

		var table = document.getElementById("sensorlist");
		if (loaded == false) {
			for (i=0; i < noRows; i++){
				var row = table.insertRow(0);
	    		cell1 = row.insertCell(0);
	    		cell2 = row.insertCell(1);
	    		cell3 = row.insertCell(2);

	    		var name = data.data[noRows-i-1].name;
	    		if (data.data[noRows-i-1].detail == true) {
	    			cell1.innerHTML = "<a class='btn btn-large' href='detail.html?id=" + data.data[noRows-i-1].id + "'>" + name + "</a>";
	    		} else {
					cell1.innerHTML = name;
	    		}
	    		
	    		cell1.className = 'BigTableElement';
	    		cell2.className = 'SmallTableElement';

	    		var btn = document.createElement("a");
				btn.className = 'btn btn-mini';
				btn.href = "chart.html?id=" + data.data[noRows-i-1].id;
 				cell3.appendChild(btn);  
	    		
			}
			loaded = true;
		}
			
		for (i=0; i < noRows; i++){
			var name = data.data[i].name;
		    var value = data.data[i].formatted_value;
	    	var cells = table.rows[i].cells;
		    cells[1].innerHTML = value;		    	    	
		}

	  setTimeout(function () {
    	getData();
    }, 1000);
	});
}


function displayDate(){
var d = new Date();
document.getElementById("date").innerHTML = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
}

function displayTime(){
var d = new Date();
var min = d.getMinutes();
if (min < 10)
min = "0" + min.toString();

var sec = d.getSeconds();
if (sec < 10)
sec = "0" + sec.toString();

var clicked = false, clickY;


var updateScrollPos = function(e) {
    $('html').css('cursor', 'row-resize');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}

document.getElementById("time").innerHTML = d.getHours() + ":" + min + ":" + sec;

	  setTimeout(function () {
    	displayTime();
    }, 1000);
}


$( document ).ready(function() {


	$('#scroller').dragscrollable();
	getData();

});