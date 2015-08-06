package openfl;

@:dox(hide) extern class AssetLibrary extends lime.AssetLibrary {
	function new() : Void;
	function getMovieClip(id : String) : openfl.display.MovieClip;
	function getMusic(id : String) : openfl.media.Sound;
	function getSound(id : String) : openfl.media.Sound;
	function loadMovieClip(id : String, handler : openfl.display.MovieClip -> Void) : Void;
	function loadMusic(id : String, handler : openfl.media.Sound -> Void) : Void;
	function loadSound(id : String, handler : openfl.media.Sound -> Void) : Void;
}
