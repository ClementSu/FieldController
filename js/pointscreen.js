var loaded = false;
var cell1;
var cell2;
function getData(){
	$.getJSON( "http://localhost:5000/sensors/list/", function( data ) {
		noRows = data.total;

		var table = document.getElementById("sensorlist");
		if (loaded == false) {
			for (i=0; i < noRows; i++){
				
				var row = table.insertRow(0);

				
	    		cell1 = row.insertCell(0);
	    		cell2 = row.insertCell(1);
	    		var name = data.data[i].sname;
	    		cell1.innerHTML = name;
	    		cell1.className = 'BigTableElement';
	    		cell2.className = 'SmallTableElement';
	    		
			}
			loaded = true;
		}
			
		for (i=0; i < noRows; i++){
			var name = data.data[i].sname;
		    var value = data.data[i].svalue;
	    	var cells = table.rows[i].cells;
		    cells[1].innerHTML = value;		    	
		}

		//s1 = data.data[0].sname;
		//s11 = data.data[0].svalue;
		//s2 = data.data[1].sname;
		//s22 = data.data[1].svalue;
		

		//$("#s1").text(s1);
		//$("#s11").text(s11);
		//$("#s2").text(s2);
		//$("#s22").text(s22);


	  setTimeout(function () {
    	getData();
    }, 1000);
	});
}

function myFunction() {
    document.getElementById("Humidity").innerHTML = "Entered Humidity Screen!";
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

document.getElementById("time").innerHTML = d.getHours() + ":" + min + ":" + sec;

	  setTimeout(function () {
    	displayTime();
    }, 1000);
}

/*
function displayHum(humidity) {
	$("#humidity").text(humidity);
}

function displayTemp(temperature) {
	$("#temperature").text(temperature);
}*/


$( document ).ready(function() {
	getData();

});