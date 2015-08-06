package openfl.events;

extern class SampleDataEvent extends Event {
	var data : openfl.utils.ByteArray;
	var position : Float;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false) : Void;
	static var SAMPLE_DATA : String;
}
