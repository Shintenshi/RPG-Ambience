// This file is part of RPG Ambience
// Copyright 2012-2013 Jakob Kallin
// License: GNU GPL (http://www.gnu.org/licenses/gpl-3.0.txt)

Ambience.ExampleAdventure = function() {
	var config = JSON.parse(Ambience.ExampleAdventure.json);
	var adventure = Ambience.Adventure.fromConfig(config);
	return adventure;
};

Ambience.ExampleAdventure.json = '{"title":"Example adventure","scenes":[{"name":"Theme","key":"T","layer":"background","mixin":false,"fade":{"duration":0,"direction":"in out"},"background":{"color":"#000"},"image":{"file":null,"size":"contain"},"sound":{"tracks":[{"id":"example:music","name":"9-Trailer_Music.ogg","mimeType":"audio/ogg"}],"loop":false,"shuffle":false,"volume":100,"overlap":0},"text":{"string":"","size":5,"font":"","color":"#fff","bold":false,"italic":false,"alignment":"center","padding":0}},{"name":"Imagine","key":"1","layer":"foreground","mixin":false,"fade":{"duration":1.6,"direction":"in out"},"background":{"color":"#000000"},"image":{"file":null,"size":"contain"},"sound":{"tracks":[],"loop":true,"shuffle":false,"volume":100,"overlap":0},"text":{"string":"Don’t just imagine your world","size":4.5,"font":"Palatino Linotype, Georgia, serif","color":"#ffffff","bold":false,"italic":true,"alignment":"center","padding":0}},{"name":"Life","key":"2","layer":"foreground","mixin":false,"fade":{"duration":1.6,"direction":"out"},"background":{"color":"#000000"},"image":{"file":null,"size":"contain"},"sound":{"tracks":[],"loop":true,"shuffle":false,"volume":100,"overlap":0},"text":{"string":"Bring it to life","size":9,"font":"Palatino Linotype, Georgia, serif","color":"#ffffff","bold":false,"italic":true,"alignment":"center","padding":0}},{"name":"City","key":"C","layer":"foreground","mixin":false,"fade":{"duration":4,"direction":"in out"},"background":{"color":"#000000"},"image":{"file":{"id":"example:city","name":"ishtar_rooftop.jpg","mimeType":"image/jpeg"},"size":"cover"},"sound":{"tracks":[],"loop":true,"shuffle":false,"volume":100,"overlap":0},"text":{"string":"","size":5,"font":"","color":"#ffffff","bold":false,"italic":false,"alignment":"center","padding":0}},{"name":"Dragon","key":"D","layer":"foreground","mixin":false,"fade":{"duration":3.2,"direction":"out"},"background":{"color":"#000000"},"image":{"file":{"id":"example:dragon-image","name":"sintel-wallpaper-dragon.jpg","mimeType":"image/jpeg"},"size":"cover"},"sound":{"tracks":[{"id":"example:dragon-sound","name":"dragon.ogg","mimeType":"audio/ogg"}],"loop":false,"shuffle":false,"volume":100,"overlap":0},"text":{"string":"","size":5,"font":"","color":"#ffffff","bold":false,"italic":false,"alignment":"center","padding":0}},{"name":"Ambience","key":"A","layer":"foreground","mixin":false,"fade":{"duration":3.2,"direction":"in out"},"background":{"color":"#000000"},"image":{"file":null,"size":"contain"},"sound":{"tracks":[],"loop":true,"shuffle":false,"volume":100,"overlap":0},"text":{"string":"RPG Ambience","size":9,"font":"Constantia, Georgia, serif","color":"#ffffff","bold":false,"italic":false,"alignment":"center","padding":0}}],"creationDate":"2013-04-04T12:34:56.789Z","version":3}';