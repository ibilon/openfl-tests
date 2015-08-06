package openfl.ui;

@:access(openfl.ui.GameInputControl) extern class GameInputDevice {
	var enabled : Bool;
	var id(default,null) : String;
	var name(default,null) : String;
	var numControls(get,never) : Int;
	var sampleInterval : Int;
	function getCachedSamples(data : openfl.utils.ByteArray, append : Bool = false) : Int;
	function getControlAt(i : Int) : GameInputControl;
	function startCachingSamples(numSamples : Int, controls : openfl.Vector<String>) : Void;
	function stopCachingSamples() : Void;
	static var MAX_BUFFER_SIZE : Int;
}
