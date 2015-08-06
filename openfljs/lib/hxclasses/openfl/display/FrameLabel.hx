package openfl.display;

extern class FrameLabel extends openfl.events.EventDispatcher {
	var frame(get,null) : Int;
	var name(get,null) : String;
	function new(name : String, frame : Int) : Void;
}
