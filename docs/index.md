---
title: Drawable.Chart.js Documentation

language_tabs:
  - javascript

includes:
  - errors

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

- Bower: `bower install Drawable.Chart.js --save`
- NPM: `npm install drawable.chart.js --save`
- Zip: [Download](https://github.com/zachpanz88/Drawable.Chart.js/archive/master.zip) | [Download Chart.js](https://github.com/nnnick/Chart.js/archive/v1.0.2.zip)
- Tarball: [Download](https://github.com/zachpanz88/Drawable.Chart.js/archive/master.tar.gz) | [Download Chart.js](https://github.com/nnnick/Chart.js/archive/v1.0.2.tar.gz)

# Including the Scripts

```html
<script src="js/Chart.min.js"></script>

<script src="js/Drawable.Chart.js"></script>

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