package openfl.events._EventDispatcher;

extern class openfl.events.priv_EventDispatcher.Listener {
	var callback : Dynamic -> Void;
	var priority : Int;
	var useCapture : Bool;
	function new(callback : Dynamic -> Void, useCapture : Bool, priority : Int) : Void;
	function match(callback : Dynamic -> Void, useCapture : Bool) : Bool;
}
