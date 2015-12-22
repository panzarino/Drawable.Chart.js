---
title: Drawable.Chart.js Documentation

language_tabs:
  - HTML/JavaScript

search: true
---

# Introduction

Drawable.Chart.js is a JavaScript plugin that allows users to click points on a html canvas Chart. 
Points can be made by right clicking the chart where you want the point to appear. 
To remove a point, you can right click the point that you want to remove.
Drawable.Chart.js reserves a global variable of DrawableChart for drawable charts 
and Chart.js reserves a global variable of Chart for charts.

# Installation

Drawable.Chart.js is available for download in multiple ways. 
The package relies on [Chart.js](https://github.com/nnnick/Chart.js), 
which will be installed in addition to this package
if Drawable.Chart.js is installed with `bower` or `npm`.
> Make sure to also download Chart.js if you download a zip or tarball version of Drawable.Chart.js

- Bower: `bower install Drawable.Chart.js --save`
- NPM: `npm i drawable.chart.js --save`
- Zip: [Download](https://github.com/zachpanz88/Drawable.Chart.js/archive/master.zip) | [Download Chart.js](https://github.com/nnnick/Chart.js/archive/v1.0.2.zip)
- Tarball: [Download](https://github.com/zachpanz88/Drawable.Chart.js/archive/master.tar.gz) | [Download Chart.js](https://github.com/nnnick/Chart.js/archive/v1.0.2.tar.gz)

# Including the Scripts

```html
<script src="js/Chart.min.js"></script>

<script src="js/Drawable.Chart.js"></script>

<!-- Obviously your script paths will probably be different -->

<script>
    // your script goes here
</script>
```

Drawable.Chart.js relies on Chart.js, so make sure to include that script **before** you include Drawable.Chart.js. 
Make sure to specify both these files before your custom script, or the JavaScript will not work properly.

# Getting a Chart Running

Drawable.Chart.js works by drawing on the html canvas element. 
First, create a canvas in your html code where you want the chart to be made.

```html
<canvas id="myChart" width="1000" height="500"></canvas>
```

Next, create the DrawableChart object with the following JavaScript code. 
To create a basic drawable chart, the only parameter that you have to pass is the id of the canvas element. 
Those two lines of HTML and JavaScript are the only required lines to get a simple chart up and running.

```javascript
var myDrawableChart = new DrawableChart("myChart");
```

# Changing Colors

The default color for drawable charts is black, but you probably want to create a chart with different colors. 
You can specify an `options` parameter when you create a chart that can include the colors that you want to use.

```javascript
var options = {
    fillColor: "rgba(0,0,220,.2)",
    strokeColor: "rgba(220,0,0,1)",
    pointColor: "rgba(0,220,0,1)",
    pointStrokeColor: "#000000",
    pointHighlightFill: "#ffffff",
    pointHighlightStroke: "rgba(0,0,220,1)",
}
var myChart = new DrawableChart("myChart", options);
```

This code creates a drawable chart that has green filled dots with a black outline. 
The line connecting the dots is red and 
the fill color under the line is a transparent blue. 

You can create charts with your own colors using the following options. 
rgba or hex values can be used for all options. 
All of these color options are optional, and the highlight options will not change 
anything if `showTooltips` is set to false (which is highly reccomended and set by default).

Name | Reccomended Value Type | Description
---- | ---------------------- | -----------
fillColor | rgba | The color that fills below the graph line (set transparency to 0 if you dont want to see a fill)
strokeColor | rgba | The color of the line on the graph
pointColor | rgba | The color of the points
pointStrokeColor | hex | The color of the outline of the points
pointHighlightFill | hex | The color of the points shown when highlighted if showTooltips is set to true
pointHighlightStroke | rgba | The color of the outline of the points shown when points are highlighted if showTooltips is set to true
