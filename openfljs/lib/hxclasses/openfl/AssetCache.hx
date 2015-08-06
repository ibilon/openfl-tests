package openfl;

@:dox(hide) extern class AssetCache implements IAssetCache {
	@:dox(hide) var bitmapData : Map<String,openfl.display.BitmapData>;
	var enabled(get,set) : Bool;
	@:dox(hide) var font : Map<String,openfl.text.Font>;
	@:dox(hide) var sound : Map<String,openfl.media.Sound>;
	function new() : Void;
	function clear(?prefix : String) : Void;
	function getBitmapData(id : String) : openfl.display.BitmapData;
	function getFont(id : String) : openfl.text.Font;
	function getSound(id : String) : openfl.media.Sound;
	function hasBitmapData(id : String) : Bool;
	function hasFont(id : String) : Bool;
	function hasSound(id : String) : Bool;
	function removeBitmapData(id : String) : Bool;
	function removeFont(id : String) : Bool;
	function removeSound(id : String) : Bool;
	function setBitmapData(id : String, bitmapData : openfl.display.BitmapData) : Void;
	function setFont(id : String, font : openfl.text.Font) : Void;
	function setSound(id : String, sound : openfl.media.Sound) : Void;
}
