$( document ).ready(function() {
  showChart();
});

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 

var interval = 5;
var id = null;
var myLiveChart;
var numSamples = 10;
var latestLabel = numSamples;
var updateinterval;

function showChart() {

  id = getUrlParameter('id');
  if (getUrlParameter('interval')) {
    interval = parseInt(getUrlParameter('interval'));
    if (interval < 1) {
      interval = 1;
    }
  }

  if (id != undefined && id != null) {
    getData(id, interval);
  }

}


function renderChart(data) {

options = {
  bezierCurve : false,
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,

    //String - The colour of the label backdrop
    scaleBackdropColor : "rgba(255,255,255,0.75)",

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : false,

    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY : 2,

    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX : 2,

    //Boolean - Show line for each value in the scale
    scaleShowLine : true,

    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke : true,

    //String - The colour of the stroke on each segement.
    segmentStrokeColor : "#fff",

    //Number - The width of the stroke value in pixels
    segmentStrokeWidth : 2,

    //Number - Amount of animation steps
    animationSteps : 10,

    //String - Animation easing effect.
    animationEasing : null,

    //Boolean - Whether to animate the rotation of the chart
    animateRotate : true,

    //Boolean - Whether to animate scaling the chart from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}
//alert(data.data)
var x_axis;
var y_axis;
data_array = [];
label_array = [];
for (i = 0; i < numSamples; i++){
  data_array[i] = data.data[i];
}
var d = new Date();



for (i = numSamples-1; i >= 0; i--){
var min = d.getMinutes();
if (min < 10)
min = "0" + min.toString();

var sec = d.getSeconds();
if (sec < 10)
sec = "0" + sec.toString();
  label_array[i] = min + ":" + sec;
  d.setSeconds(d.getSeconds() - interval);
}
data_array.reverse();
var canvas = document.getElementById('myChart'),
    ctx = canvas.getContext('2d'),
    startingData = {
      labels: label_array,
      datasets: [
          {
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              data: data_array
          }
      ]
    },
    latestLabel = numSamples;
if (myLiveChart) {
  myLiveChart.destroy();
}
// Reduce the animation steps for demo clarity.
myLiveChart = new Chart(ctx).Line(startingData, options);
if (updateinterval) {
clearInterval(updateinterval);
}
updateinterval = setInterval(function(){
  getUpdatedData(id, interval);
}, interval * 1000);

}

function updateChart(data) {
var d = new Date();
var min = d.getMinutes();
if (min < 10)
min = "0" + min.toString();

var sec = d.getSeconds();
if (sec < 10)
sec = "0" + sec.toString();

    // Add two random numbers for each dataset
  myLiveChart.addData([data.data[0]], min + ":" + sec);
  // Remove the first point so we dont just add values forever
  myLiveChart.removeData();
}

function getUpdatedData(sensor_id, interval) {
  JSONrequest = "http://localhost:5000/objects/get/historic/?id="+sensor_id+"&num=1&interval="+interval;
  $.getJSON( JSONrequest, function( data ) {
    
    updateChart(data);
   /* setTimeout(function () {
      getData();
    }, 1000);
  });*/
  });
}

function getData(sensor_id, interval){
  
  JSONrequest = "http://localhost:5000/objects/get/historic/?id="+sensor_id+"&num=10&interval="+interval;
  $.getJSON( JSONrequest, function( data ) {
    $("#screenname").text(data.objname);
    handleData(data);
   /* setTimeout(function () {
      getData();
    }, 1000);
  });*/
  });
  //return returndata;
}

function handleData(data){
  renderChart(data);
}


function newInterval(sec) {
    interval = parseInt(sec);
    if (interval < 1) {
      interval = 1;
    }
    getData(id, interval);
} 





