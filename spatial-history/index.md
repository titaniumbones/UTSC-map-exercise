# The essay Proper would start here

Your first task will be to locate some real places.  You can get the precise locations at various services, e.g [latlong.net](http://www.latlong.net/).

Then add those places to the marker array in [../js/maps-setup.js](../js/maps-setup.js) (see instructions there).

The rest of your essay should go under the map, in this file. You may want to paste in the markdown refresher from [the main repository README](../README.md), and/or bookmark [the markdown-it demo](https://markdown-it.github.io/) where you can practice most markdown features yourself. 

Also, here's a little trick that will allow you to link to map feature from the text. This one finds Dumbledore in the current map. It may take a bit of hunting to find the precise marker you're looking for, but try `inspect element` on the markers in the map legend. 

<a href="javascript:locateMapFeature(projectMap._layers[55]._layers[1])">Locate Dumbledore</a>
