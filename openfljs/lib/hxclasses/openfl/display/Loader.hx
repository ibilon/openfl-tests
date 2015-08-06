package openfl.display;

@:access(openfl.display.LoaderInfo) extern class Loader extends Sprite {
	var content(default,null) : DisplayObject;
	var contentLoaderInfo(default,null) : LoaderInfo;
	function new() : Void;
	function close() : Void;
	@:has_untyped function load(request : openfl.net.URLRequest, ?context : openfl.system.LoaderContext) : Void;
	function loadBytes(buffer : openfl.utils.ByteArray) : Void;
	function unload() : Void;
	function unloadAndStop(gc : Bool = false) : Void;
}
