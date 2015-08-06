package lime;

extern class AssetLibrary {
	var eventCallback : Dynamic;
	function new() : Void;
	function exists(id : String, type : String) : Bool;
	function getAudioBuffer(id : String) : lime.audio.AudioBuffer;
	function getBytes(id : String) : lime.utils.ByteArray;
	function getFont(id : String) : lime.text.Font;
	function getImage(id : String) : lime.graphics.Image;
	function getPath(id : String) : String;
	function getText(id : String) : String;
	function isLocal(id : String, type : String) : Bool;
	function list(type : String) : Array<String>;
	function loadAudioBuffer(id : String, handler : lime.audio.AudioBuffer -> Void) : Void;
	function loadBytes(id : String, handler : lime.utils.ByteArray -> Void) : Void;
	function loadFont(id : String, handler : lime.text.Font -> Void) : Void;
	function loadImage(id : String, handler : lime.graphics.Image -> Void) : Void;
	function loadText(id : String, handler : String -> Void) : Void;
	function unload() : Void;
}
