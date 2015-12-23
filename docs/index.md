---
title: Drawable.Chart.js Documentation

language_tabs:
  - HTML/JavaScript

search: true
---

# Introduction

Drawable.Chart.js is a plugin for Chart.js that allows users to draw charts

Drawable.Chart.js is open source with all code being hosted on [GitHub](https://github.com/zachpanz88/Drawable.Chart.js).
Chart.js is also hosed on [GitHub](https://github.com/nnnick/Chart.js).

Drawable.Chart.js was created by [Zach Panzarino](https://github.com/zachpanz88) and 
Chart.js was created by [Nick Downie](https://github.com/nnnick).

Make sure to check out the creators and source code.

Drawable.Chart.js is a JavaScript plugin that allows users to click points on a html canvas Chart. 
Points can be made by right clicking the chart where you want the point to appear. 
To remove a point, you can right click the point that you want to remove.
Drawable.Chart.js reserves a global variable of DrawableChart for drawable charts 
and Chart.js reserves a global variable of Chart for charts.

Unfortunately, Drawable.Chart.js does not support mobile devices. 
Repeated animation of graphs causes laggy performance (which can be disabled but can still be laggy) 
and the charts are often too small to create accurate graphs. 
Plus, the points do not render where the user clicks. 
If this isn't stopping you, you can still try to use Drawable.Chart.js on mobile.

# Installation

Drawable.Chart.js is available for download in multiple ways. 
The package relies on [Chart.js](https://github.com/nnnick/Chart.js), 
which will be installed in addition to this package
if Drawable.Chart.js is installed with `bower` or `npm`.
> Make sure to also download Chart.js if you download a zip or tarball version of Drawable.Chart.js

- Bower: `bower install Drawable.Chart.js`
- NPM: `npm install drawable.chart.js`
- Zip: [Download](https://github.com/zachpanz88/Drawable.Chart.js/archive/master.zip) | [Download Chart.js](https://github.com/nnnick/Chart.js/archive/v1.0.2.zip)
- Tarball: [Download](https://github.com/zachpanz88/Drawable.Chart.js/archive/master.tar.gz) | [Download Chart.js](https://github.com/nnnick/Chart.js/archive/v1.0.2.tar.gz)

# Including the Scripts

```html
<script src="js/Chart.min.js"></script>

<script src="js/Drawable.Chart.js"></script>

<!-- Your script paths will probably be different -->

<script>
    // you can link to an external js file
    // or you can write your script here
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
    pointHighlightStroke: "#000000",
}
var myChart = new DrawableChart("myChart", options);
```

This code creates a drawable chart that has green filled dots with a black outline. 
The line connecting the dots is red and 
the fill color under the line is a transparent blue. 

You can create charts with your own colors using the following options. 
rgba or hex values can be used for all options. 
Obviously, rgba values should be used for fillColor and other colors that you want to be partially transparent.
All of these color options are optional, and the highlight options will not change 
anything if `showTooltips` is set to false (which is highly recomended and set by default). 
All color values (hex or rgba) should be passed as a string. rgba values should be passed as "rgba(r, g, b, a)" 
where r is the red value, g is the green value, b is the blue value, and a is the transparecy value (decimal). 
Hex values should be prefixed with a "#". Note: the tooltip options will not change anything if showTooltips is 
not set to true (set to false by default).

Name | Description
---- | -----------
fillColor | The color that fills below the graph line (set transparency to 0 if you dont want to see a fill)
strokeColor | The color of the line on the graph
pointColor | The color of the points
pointStrokeColor | The color of the outline of the points
pointHighlightFill | The color of the points shown when highlighted if showTooltips is set to true
pointHighlightStroke | The color of the outline of the points shown when points are highlighted if showTooltips is set to true
scaleGridLineColor | Color of the grid lines
scaleLineColor | Color of the scale line
tooltipFillColor | Tooltip background color if showTooltips is set to true
tooltipFontColor | Tooltip label font color if showTooltips is set to true
tooltipTitleFontColor | Tooltip title font color if showTooltips is set to true

# Graph Options

There are a number of special options that you can add to change the graph. 
Most of these options come from Chart.js, 
both the [global chart configuration](http://www.chartjs.org/docs/#getting-started-global-chart-configuration) and 
the [line chart options](http://www.chartjs.org/docs/#line-chart-chart-options). 
There are some options from Chart.js 
that cannot be used because they will break the drawable feature. 
Please only use the following options.

Name | Value Type | Description
---- | ---------- | -----------
