package openfl.utils;

extern class Timer extends openfl.events.EventDispatcher {
	var currentCount(default,null) : Int;
	var delay(get,set) : Float;
	var repeatCount(default,set) : Int;
	var running(default,null) : Bool;
	function new(delay : Float, repeatCount : Int = 0) : Void;
	function reset() : Void;
	function start() : Void;
	function stop() : Void;
}
