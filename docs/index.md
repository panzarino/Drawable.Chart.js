---
title: Drawable.Chart.js Documentation

search: true
---

# Introduction

> Welcome to the Drawable.Chart.js documentation

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

# Chart Properties and Functions

Each DrawableChart has a set of properties and functions. These functions are listed below.

> This example code creates a button to clear the chart when clicked

```html
<button onclick="myDrawableChart.clear()">Clear Chart</button>
```

Name | Description
---- | -----------
element | HTML element that the chart is stored in
ctx | HTML element in a 2D context
data | Starting data used for the chart, includes dataset color options
options | Special options specified for the chart, some are included by default
chart | Chart.js object for the displayed chart
delete | Function to delete a point where clicked, automatically set to run on right click
clear | Function to erase all data in the chart
export | Function to return all value pairs in the chart

# Changing Colors

The default color for drawable charts is black, but you probably want to create a chart with different colors. 
You can specify an `options` parameter when you create a chart that can include the colors that you want to use.

> This example code creates a drawable chart that has green filled dots with a black outline. 
> The line connecting the dots is red and 
> the fill color under the line is a transparent blue. 

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

You can create charts with your own colors using the following options. 
rgba or hex values can be used for all options. 
Obviously, rgba values should be used for fillColor and other colors that you want to be partially transparent.
All of these color options are optional, and the highlight options will not change 
anything if `showTooltips` is set to false (which is highly recomended and set by default). 
All color values (hex or rgba) should be passed as a string. rgba values should be passed as "rgba(r, g, b, a)" 
where r is the red value, g is the green value, b is the blue value, and a is the transparecy value (decimal). 
Hex values should be prefixed with a "#". Note: the tooltip options will not change anything if showTooltips is 
not set to true (set to false by default).

Name | Default | Description
---- | ------- | -----------
fillColor | "rgba(0,0,0,.2)" | The color that fills below the graph line (set transparency to 0 if you dont want to see a fill)
strokeColor | "rgba(0,0,0,1)" | The color of the line on the graph
pointColor | "rgba(0,0,0,1)" | The color of the points
pointStrokeColor | "#000000" | The color of the outline of the points
pointHighlightFill | "#ffffff" | The color of the points shown when highlighted if showTooltips is set to true
pointHighlightStroke | "rgba(0,0,0,1)" | The color of the outline of the points shown when points are highlighted if showTooltips is set to true
scaleGridLineColor | "rgba(0,0,0,.1)" | Color of the grid lines (set a to 0 for no lines)
scaleLineColor | "rgba(0,0,0,.1)" | Color of the scale (axis) line
scaleFontColor | "#666" | Scale label font color (will not show unless scaleShowLabels is set to true)
tooltipFillColor | "rgba(0,0,0,0.8)" | Tooltip background color if showTooltips is set to true
tooltipFontColor | "#fff" | Tooltip label font color if showTooltips is set to true
tooltipTitleFontColor | "#fff" | Tooltip title font color if showTooltips is set to true

# Graph Options

There are a number of special options that you can add to change the graph. 
Most of these options come from Chart.js, 
both the [global chart configuration](http://www.chartjs.org/docs/#getting-started-global-chart-configuration) and 
the [line chart options](http://www.chartjs.org/docs/#line-chart-chart-options). 
There are some options from Chart.js 
that cannot be used because they will break the drawable feature. 
Please only use the following options. 
These options can be specified in an `options` parameter when you create a chart.

> This example code creates a chart with thick lines and large points. 
> There is no curve between points on the line and there is no color fill underneath the line. 
> This chart does not look very nice but is used as an example.

```javascript
var options = {
    bezierCurve: false,
    pointDotRadius: 8,
    datasetStrokeWidth: 10,
    datasetFill : false,
}
var myChart = new DrawableChart("myChart", options);
```

## DrawableChart Specific Options
Name | Value Type | Default | Description
---- | ---------- | ------- | -----------
scaleShowGridLines | boolean | true | Whether grid lines are shown across the chart
scaleGridLineWidth | number | 1 | Width of the grid lines
scaleShowHorizontalLines | boolean | true | Whether to show horizontal lines (except X axis)
scaleShowVerticalLines | boolean | true | Whether to show vertical lines (except Y axis)
bezierCurve | boolean | true | Whether the line is curved between points
bezierCurveTension | number | 0.4 | Tension of the bezier curve between points
pointDot | boolean | true | Whether to show a dot for each point
pointDotRadius | number | 4 | Radius of each point dot in pixels
pointDotStrokeWidth | number | 1 | Pixel width of point dot stroke
datasetStroke | boolean | true | Whether to show a stroke through the plotted points
datasetStrokeWidth | number | 2 | Pixel width of dataset stroke
datasetFill | boolean | true | Whether to fill the dataset with a color underneath the line

## General Chart Options
Name | Value Type | Default | Description
---- | ---------- | ------- | -----------
animation | boolean | true | Whether to animate the chart
animationSteps | number | 60 | Number of animation steps
animationEasing | string | "easeOutQuart" | Animation easing effect. Possible effects are: [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad, easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic, easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack, easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc, easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint, easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce, easeOutElastic, easeInCubic]
showScale | boolean | true | If we should show the scale at all
scaleLineWidth | number | 1 | Pixel width of the scale line
scaleFontFamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Scale label font declaration for the scale label (will not show unless scaleShowLabels is set to true)
scaleFontStyle | string | "normal" | Scale label font weight style (will not show unless scaleShowLabels is set to true)
showTooltips | boolean | false | Determines whether to draw tooltips on the canvas or not, should be left as false
tooltipEvents | string array | ["mousemove", "touchstart", "touchmove"] | Array of string names to attach tooltip events if showTooltips is set to true
tooltipFontFamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Tooltip label font declaration for the scale label if showTooltips is set to true
tooltipFontSize | number | 14 | Tooltip label font size in pixels if showTooltips is set to true
tooltipFontStyle | string | "normal" | Tooltip font weight style if showTooltips is set to true
tooltipTitleFontFamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Tooltip title font declaration for the scale label if showTooltips is set to true
tooltipTitleFontSize | number | 14 | Tooltip title font size in pixels if showTooltips is set to true
tooltipTitleFontStyle | string | "bold" | Tooltip title font weight style if showTooltips is set to true
tooltipYPadding | number | 6 | pixel width of padding around tooltip text if showTooltips is set to true
tooltipXPadding | number | 6 | pixel width of padding around tooltip text if showTooltips is set to true
tooltipCaretSize | number | 8 | Size of the caret on the tooltip if showTooltips is set to true
tooltipCornerRadius | number | 6 | Pixel radius of the tooltip border if showTooltips is set to true
tooltipXOffset | number | 10 | Pixel offset from point x to tooltip edge if showTooltips is set to true
onAnimationProgress | function | function(){} | Will fire on animation progression
onAnimationComplete | function | function(){} | Will fire on animation completion
