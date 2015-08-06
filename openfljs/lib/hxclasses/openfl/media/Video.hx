package openfl.media;

@:access(openfl.geom.Rectangle) @:access(openfl.net.NetStream) extern class Video extends openfl.display.DisplayObject {
	var deblocking : Int;
	var smoothing : Bool;
	function new(width : Int = 0, height : Int = 0) : Void;
	function attachNetStream(ns : openfl.net.NetStream) : Void;
	function clear() : Void;
}
