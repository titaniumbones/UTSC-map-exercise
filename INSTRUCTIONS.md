# Assignment 04: Spatial History with Leaflet Maps

## Assignment

Build a web page that includes a Leaflet Map (complete with markers) as part of a short but substantive historical exploration of a historical topic of interest to you. We will discuss some appropriate themes in class. The final product should meet the following criteria:

Essay  
You should write a short essay, approximately 900 words (\~ 3-4 pages double-spaced, if we were using word processors) addressing a small, specific historical topic *with a spatial history component*. That is, the "spatial" element shouldn't just be an afterthought, but should be at the centre of your analysis.

Here are some plausible examples of appropriate topics:

- Corridor of Power: Berlin's Friedrichstrasse in the Nazi Era
- End of an Era: Toronto's Last Meatpacking Plants
- An Empire at Home: Conservative Think Tanks in Washington, D.C.

I just made these up, of course. You should pick something that you (a) know something about already, and (b) are interested in. Ideally, you will already have done some research into this topic, and will have a small number of sources ready to hand. The essay should introduce the reader to the topic, and make a not-too-complex argument which, again, highlights the spatial component. ("Think tanks, so important in the construction of policy in today's United States, are a relatively new feature of American politics. In this paper, I will discuss the early history of this now-paramount institutional form, and argue that the *geographical proximity* of these think tanks along [K Street](https://goo.gl/maps/Z74f1xY9ah72) in Washington, D.C. contributes to the insular nature of the intellectual culture at these institutions.")

You may notice that some of my examples are drawn from a kind of urban history. Urban history is obviously well-suited to spatial analysis, but there's no reason you can't describe, for instance, more widespread networks (e.g., to take some examples at random, networks of hippies, underground bus networks, comparative suffrage movements. etc.)

Take this opportunity to think about the effect of *form* on *content*. How does the present of the map change the way you express your thoughts? Are new kinds of arguments possible? On the flip side, does the map lead you to ignore or downplay any important elements?

The essay will be written in [Markdown](http://markdowntutorial.com/lesson/1/), which makes traditional citations a little complicated ([pandoc and R Markdown](https://rmarkdown.rstudio.com/authoring_bibliographies_and_citations.html) solve that issue but take a lot of work to set up). So please use simple links for your citations; in Markdown, these take the form `[I'm an inline-style link](https://www.google.com)`. So, for instance: `[Latour, p. 97](http://search.library.utoronto.ca/details?5484640&uuid=4f41639c-43d4-45e8-81f2-d8acd9263f8a)`. Don't worry about a bibliography. [./README.md](./README.md) and [./spatial-history/index.md](./spatial-history/index.md) have some more details about markdown.

Map  
Your map should have at least 5 markers, and could have many more. You can explore more complex objects – such as polygons – using the geoJSON import features of Leaflet Maps, or the native Rectangle, Circle, and Polygon classes. There are links to the API documentation in the code, as well as to <https://geojson.io>, where you can create geoJSON interactively. This is convenient for e.g. mapping complex borders. [There are lots of other geoJSON resources out there as well](https://github.com/tmcw/awesome-geojson).

The assignment template uses a [*for* loop](http://www.w3schools.com/js/js_loop_for.asp) to *iterate* a set of actions for a group of markers. See the template for details. Each marker's popup info window contents should contain, at minimum, a brief headline and some explanatory text. Your essay should refer back to the markers, and you are free to refer to your essay in the marker text itself.

Styling  
The bulk of the work is accomplished for us by the *markdown-it* script that we load at the top of the page, and then initialized in our onload script. We also use the tiny [Chota CSS framework](https://jenil.github.io/chota/) to give us some reasonable CSS defaults for font styles and sizes. It also adds a number of utility classes which you can [read about in the docs](https://jenil.github.io/chota/#docs) and use as you see fit. The classes [are described here](https://jenil.github.io/chota/#utilities). In addition, there are two small style files that you can edit, [../css/site-styles.css](../css/site-styles.css) and [../css/map-styles.css](../css/map-styles.css). You may e.g. want to edit some of the color variables at the top of `site-styles.css`, and/or edit some of the grid areas or devault layouts in `map-styles.css`.

## Controlling Leaflet Maps

As you will remember, we access the Leaflet Map to create & modify markers and other objects, with Javascript, by making *calls* to the *Leaflet Maps API*. An **API** is an "Application Programming Interface": a communications channel that lets programs talk to each other. By "loading" the Leaflet Maps API, our web pages can communicate directly with servers to modify the map that the Leaflet library is presenting to us. In fact, most of the interesting stuff happening on the web these days happens via these machine-to-machine communication channels.

You don't have to understand the Leaflet Maps API very thoroughly to be able to do this assignment. The code comes pre-written; all you have to do is hack at it till it does what you want it to.

### Changing Basemaps

Especially if you are writing about ancient times, you may well want to use a less ****busy**** map than you get by default. Leaflet has a very flexible system for making use of base maps from various providers. The code I've provided you with lets you use any public "tileset" (basemap layer) from mapbox.com. Look at the function `createMap` in ../js/maps-setup.js, near line 288 in my version:

``` javascript
jsL.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  id: 'mapbox/dark-v10',
  // id: 'titaniumbones/ckhnvk5pl18o71apeq8q1duhc',
  tileSize: 512,
  zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGl0YW5pdW1ib25lcyIsImEiOiJjazF0bTdlNXQwM3gxM2hwbXY0bWtiamM3In0.FFPm7UIuj_b15xnd7wOQig'
    })

```

Note the `id` property in the parameter, which is written once, properly, and a second time, commented out. Toggle the commenting on those two lines and the standard 'dark-v10' map style by mapbox user 'mapbox' will be replaced by a custom map style by mapbox user 'titaniumbones'. If you'd like to make your own style, read the brief instructions in the code comments a few lines earlier in the file, create an account at mapbox.com, and edit away.

## Using Markdown

See the hints mentioned above for advanced markdown syntax.

## Checking Your Work

As we move closer to a real-world task, we start to encounter more real-world problems. `markdown-it` needs to acquire the contents of `spatial-history/index.md` so that that file can be processed and fed to `spatial-history/index.html`. But for [many good reasons](https://en.wikipedia.org/wiki/JavaScript#Security), the browser does not allow JavaScript to access local files. So our project will only work inside a web server. This makes debugging your work much harder!

Fortunately, there are many solutions. One is to use the `Preview HTML` functionality in VSCode. However, sometimes it's easier to just work in the full browser environment, especially when you want access to your Dev Tools. That's why I've added a server to the `npm` dependencies of this repository. This allows you to see your work in a regular browser tab. Simply navigate to the repository root directory in a terminal, and run `npm install`. Now whenever you want to look at your work, you can just run:

``` bash
npm run servemap
```

Your browser should open a new tab at `localhost:8080/spatial-history`, pointed at your project. If you want the browser to update automatically, run `npm run watch` instead, but be warned that the map updates a little oddly when run this way.

## Expectations

Push your code to the main branch as usual. The state of the main branch on Github at the due date will constitute your submission!

- Your code should work!
- Remember: minimum 5 markers, but other layers can also add a **lot** of depth, so consider them seriously.
- The map should provide **substantive information** on the topic of your essay, not merely pretty illustration
- The essay should meet the criteria for a B or B+ essay: it should be well-organized; it should make a compelling argument for a coherent thesis; it should display a level of historical understanding appropriate for a mid-level undergraduate course.
- As it stands, there are some minor ugly spots in the CSS for the project. You should try to improve these at least a little bit, using [../css/site-styles.css](../css/site-styles.css).

## Further brief notes on the code

### Javascript

Most of the work involves the JavaScript file. It is structured as follows:

1.  Global Variables at the top

    for various reasons, I found it easier to declare a whole bunch of variables (via `let` and `const`) at the top. Some of these you will not want to touch. Others you will **definitely** want to rename; I suggest doing this with a global search-and-replace through the whole file so you do not end up with undeclared variables causing syntax errors.

2.  Datasets

    I have included sample data which demonstrates the layer creation process.

    -   **marker sets** of simple objects which get turned into marker layerGroup objects by `processMarkerLayer()`
    -   a **geoJSON set** which gets turned into a geoJSON layer by `processJSONLayer()`
    -   two **groups of manually-created features (shapes and lines)** which get turned into layerGroups by `processManualLayers()`.

3.  Functions

    The rest of the file consists mostly of helper functions, and `initializeMap()`, which is called by the onload event of the page, and displays the map. The main functions are:

    -   **createMap()**, which instantiates the map on the page and adds the base tile layer. You can change this layer if you wish.
    -   **processXXXLayer()** functions, which return a leaflet [LayerGroup Object](https://leafletjs.com/reference-1.0.0.html#layergroup) whose content is a set of [Leaflet Layers](https://leafletjs.com/reference-1.0.0.html#layer). These helper functions look for two custom properties – `title` and `description` – which will be used to generate the legend, the tooltip, and the popup window content. `title` should be a plain text string, while `description` can contain arbitrary HTML
    -   **assembleTexts()**, which standardizes the creation of all those texts in the different layer types
    -   **addLayerToLegendHTML()**, which adds a block of HTML to the Legend for a given layer
    -   **locateMapFeature()**, which is used to navigate the map to a given marker or feature
    -   **coordHelp()**, which may be useful while you're developing; it logs a line to the console for every mouse click in the map with the latitude and longitude of the point clicked. This will hopefully allow you to quickly acquire the points you need.

    I have made the Javascript as simple as I can – except where I got carried away – and documented it extensively. There are more efficient and interesting ways to do this, but most of them are a little harder to understand. To make your markers – and to re-centre your map – you will **definitely** need to modify the Javascript directly. You'll also want to take a look at the function `initializePage`, which is defined in index.html; and finally, please just set your name in the author meta tag, so it will appear properly in the header and footer.

### HTML

I *think* you will not need to make many modifications to the HTML, but if you want to change the layout around, you are free to do so. The [markdown-it](https://markdown-it.github.io/) library parses markdown for us dynamically, making it possible to write markdown in <span class="spurious-link" target="index.md">*index.md*</span> and <span class="spurious-link" target="intro.md">*intro.md*</span> and have it appear in <span class="spurious-link" target="index.html">*index.html*</span>. You should be sure to take a look at the javascript and CSS beforehand, so you know what's going on.

### CSS

The CSS for this exercise is deceptively simple. We make only a few small changes to the defaults, *but* we are cheating here. We load [Chota](https://jenil.github.io/chota/#docs) for sensible defaults, and make small modifications. This would be a good time to investigate [CSS variables](https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd), or [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables), as they are properly called.
