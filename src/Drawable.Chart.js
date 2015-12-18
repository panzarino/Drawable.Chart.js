/*!
 * Drawable.Chart.js
 * Version: 0.0.0
 *
 * Copyright 2015 Zach Panzarino
 * Released under the MIT license
 *
 * https://github.com/zachpanz88/Drawable.Chart.js
 */


function DrawableChart(id){
    
    // get canvas
    this.ctx = document.getElementById(id).getContext("2d");
    
    // set data
    var data = {
        labels: [],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: []
            },
        ]
    };
    
    // special options
    var options = {
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0,
    };
    
    // create chart
    this.chart = new Chart(this.ctx).Line(data, options);
}