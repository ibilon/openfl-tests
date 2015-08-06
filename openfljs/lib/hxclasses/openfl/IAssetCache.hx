package openfl;

@:dox(hide) extern interface IAssetCache {
	var enabled(get,set) : Bool;
	function clear(?prefix : String) : Void;
	function getBitmapData(id : String) : openfl.display.BitmapData;
	function getFont(id : String) : openfl.text.Font;
	function getSound(id : String) : openfl.media.Sound;
	@:compilerGenerated function get_enabled() : Bool;
	function hasBitmapData(id : String) : Bool;
	function hasFont(id : String) : Bool;
	function hasSound(id : String) : Bool;
	function removeBitmapData(id : String) : Bool;
	function removeFont(id : String) : Bool;
	function removeSound(id : String) : Bool;
	function setBitmapData(id : String, bitmapData : openfl.display.BitmapData) : Void;
	function setFont(id : String, font : openfl.text.Font) : Void;
	function setSound(id : String, sound : openfl.media.Sound) : Void;
	@:compilerGenerated function set_enabled(value : Bool) : Bool;
}
