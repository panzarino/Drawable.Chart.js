/*!
 * Drawable.Chart.js
 * Version: 1.0.0
 *
 * Copyright 2015 Zach Panzarino
 * Released under the MIT license
 *
 * https://github.com/zachpanz88/Drawable.Chart.js
 */

function DrawableChart(id, options){
    
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
    
    // set labels
    for (var i=0; i<100; i++){
        this.data['labels'].push("");
        this.data['datasets'][0]['data'].push(null);
    }
    
    // use custom colors if set
    if (options!="undefined"){
        for (var i in options){
            for (var z in this.data['datasets'][0]){
                if (z===i && z!=="data"){
                    this.data['datasets'][0][z]=options[i];
                }
            }
        }
    }
    
    // forced chart options
    this.options = {
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        maintainAspectRatio: false,
        responsive: false,
    };
    
    // use custom options if not forced
    if (typeof options !== "undefined"){
        for (var i in options){
            var isin = false;
            for (var z in this.options){
                if (z===i){
                    isin=true;
                    break;
                }
            }
            if (!isin){
                this.options[i]=options[i];
            }
        }
    }
    
    // recommended options
    var rec_options = {
        scaleShowLabels: false,
        showTooltips: false,
        scaleGridLineColor: "rgba(0,0,0,.1)",
    };
    
    // use recommended options if not set otherwise
    for (var i in rec_options){
        var isin = false;
        for (var z in this.options){
            if (z===i){
                isin=true;
                break;
            }
        }
        if (!isin){
            this.options[i]=rec_options[i];
        }
    }
    
    // create chart
    this.chart = new Chart(this.ctx).Line(this.data, this.options);
    
    // updating chart
    this.update = function(e){
        var rect = this.element.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var width = this.element.width;
        var height = this.element.height;
        var xval = Math.round((x-10)/(width-10)*100);
        var yval = Math.round(100-((y-15)/(height-35)*100));
        this.chart.datasets[0].points[xval].value = yval;
        this.chart.update();
    }.bind(this);
    
    // update when clicked
    this.element.addEventListener('click', this.update);
    
    // delete point
    this.delete = function(e){
        e.preventDefault();
        var rect = this.element.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var width = this.element.width;
        var height = this.element.height;
        var xval = Math.round((x-10)/(width-10)*100);
        var yval = Math.round(100-((y-15)/(height-35)*100));
        if (Math.abs(yval-this.chart.datasets[0].points[xval].value)<5){
            this.chart.datasets[0].points[xval].value = null;
            this.chart.update();
        }
    }.bind(this);
    
    // delete when right clicked
    this.element.addEventListener("contextmenu", this.delete);
    
    // clear all data
    this.clear = function(){
        for (var i=0; i<this.chart.datasets[0].points.length; i++){
            this.chart.datasets[0].points[i].value = null;
        }
        this.chart.update();
    }.bind(this);
    
    // return the values of the chart
    this.export = function(){
        var output = [];
        var data = this.chart.datasets[0].points;
        for (var x=0; x<data.length; x++){
            output.push([x+1, data[x]['value']]);
        }
        return output;
    }.bind(this);

}