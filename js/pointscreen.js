var loaded = false;
var cell1;
var cell2
var cell3;



$( document ).ready(function() {


	$('#scroller').dragscrollable();
	getData();

});

function getData(){
	data = $.ajax({
		  type: "GET",
		  url: "http://localhost:5000/objects/list/",
		  success: function(response){
		        parseData(response);
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
		     alert("Error: Could not connect to field controller");
		  }
		});
}
	
		


function parseData(data){
	noRows = data.total;

		var table = document.getElementById("sensorlist");
		if (loaded == false) {
			for (i=0; i < noRows; i++){
				var row = table.insertRow(0);
	    		cell1 = row.insertCell(0);
	    		cell2 = row.insertCell(1);
	    		cell3 = row.insertCell(2);
	    		cell4 = row.insertCell(3);


	    		var name = data.data[noRows-i-1].name;
	    		/*if (data.data[noRows-i-1].detail == true) {
	    			cell1.innerHTML = "<a class='btn btn-large' href='detail.html?id=" + data.data[noRows-i-1].id + "'>" + name + "</a>";
	    		} else {*/
					cell1.innerHTML = name;
	    		//}
	    		
	    		cell1.className = 'BigTableElement';
	    		cell2.className = 'SmallTableElement';
	    		if (data.data[noRows-i-1].detail == true) {
		    		var sensorbutton = document.createElement("a");
		    		sensorbutton.className = 'btn btn-mini';
		    		sensorbutton.id = 'sensorbutton';
		    		sensorbutton.href = "detail.html?id=" + data.data[noRows-i-1].id;
		    		cell3.appendChild(sensorbutton);
		    	}

		    	if (data.data[noRows-i-1].historic == true) {
	    		var btn = document.createElement("a");
				btn.className = 'btn btn-mini';
				btn.id = 'chartbutton'
				btn.href = "chart.html?id=" + data.data[noRows-i-1].id;
 				cell4.appendChild(btn);  
	    		}
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
}




var updateScrollPos = function(e) {
    $('html').css('cursor', 'row-resize');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}


