package openfl.sensors;

extern class Accelerometer extends openfl.events.EventDispatcher {
	var muted(default,set) : Bool;
	function new() : Void;
	function setRequestedUpdateInterval(interval : Int) : Void;
	static var isSupported(get,null) : Bool;
}
