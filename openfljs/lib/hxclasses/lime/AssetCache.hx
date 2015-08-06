package lime;

extern class AssetCache {
	var audio : Map<String,lime.audio.AudioBuffer>;
	var enabled : Bool;
	var font : Map<String,Dynamic>;
	var image : Map<String,lime.graphics.Image>;
	function new() : Void;
	function clear(?prefix : String) : Void;
}
