
var myLiveChart;
var latestLabel = 10;
function showChart(data) {
  //alert(JSON.stringify(data));
options = {
  bezierCurve : false,
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,

    //String - The colour of the label backdrop
    scaleBackdropColor : "rgba(255,255,255,0.75)",

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

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
for (i = 0; i < 10; i++){
  data_array[i] = data.data[i];
}

var canvas = document.getElementById('myChart'),
    ctx = canvas.getContext('2d'),
    startingData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    latestLabel = 10;

// Reduce the animation steps for demo clarity.
myLiveChart = new Chart(ctx).Line(startingData, options);


setInterval(function(){
  getUpdatedData(1, 5);
}, 5000);

}

function updateChart(data) {
    // Add two random numbers for each dataset
  myLiveChart.addData([data.data[0]], ++latestLabel);
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
    
    handleData(data);
   /* setTimeout(function () {
      getData();
    }, 1000);
  });*/
  });
  //return returndata;
}

function handleData(data){
  showChart(data);
}






