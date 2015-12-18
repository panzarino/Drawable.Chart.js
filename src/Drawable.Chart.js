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
    this.element = document.getElementById(id);
    this.ctx = this.element.getContext("2d");
    
    // set data
    var data = {
        labels: [0,10,20],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,0,0,.2)",
                strokeColor: "rgba(220,0,0,1)",
                pointColor: "rgba(220,0,0,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [20,40,10]
            },
        ]
    };
    
    // special options
    var options = {
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        showTooltips: true,
    };
    
    // create chart
    this.chart = new Chart(this.ctx).Line(data, options);
    
    // updating chart
    this.update = function(e){
        
    };
    
    // update when clicked
    this.element.addEventListener('click',this.update);

}