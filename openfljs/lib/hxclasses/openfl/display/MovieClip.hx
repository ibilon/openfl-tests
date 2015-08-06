package openfl.display;

extern class MovieClip extends Sprite implements Dynamic<DisplayObject> {
	var currentFrame(get,null) : Int;
	var currentFrameLabel(get,null) : String;
	var currentLabel(get,null) : String;
	var currentLabels(get,null) : Array<FrameLabel>;
	var enabled : Bool;
	var framesLoaded(get,null) : Int;
	var totalFrames(get,null) : Int;
	function new() : Void;
	function gotoAndPlay(frame : Dynamic, ?scene : String) : Void;
	function gotoAndStop(frame : Dynamic, ?scene : String) : Void;
	function nextFrame() : Void;
	function play() : Void;
	function prevFrame() : Void;
	function stop() : Void;
}
