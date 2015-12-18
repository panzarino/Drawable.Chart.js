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
    this.data = {
        labels: [],
        datasets: [
            {
                label: "Data",
                fillColor: "rgba(0,0,0,.2)",
                strokeColor: "rgba(0,0,0,1)",
                pointColor: "rgba(0,0,0,1)",
                pointStrokeColor: "#000000",
                pointHighlightFill: "#ffffff",
                pointHighlightStroke: "rgba(0,0,0,1)",
                data: []
            },
        ]
    };
    
    // special options
    this.options = {
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        showTooltips: true,
        maintainAspectRatio: false,
    };
    
    // create chart
    this.chart = new Chart(this.ctx).Line(this.data, this.options);
    
    // updating chart
    this.update = function(e){
        var rect = this.element.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var width = this.element.width;
        var height = this.element.height;
        var xval = Math.round((x-30)/(width-45)*100);
        var yval = Math.round(100-((y-15)/(height-35)*100));
        this.chart.addData([yval], xval);
    }.bind(this);
    
    // update when clicked
    this.element.addEventListener('click', this.update);

}