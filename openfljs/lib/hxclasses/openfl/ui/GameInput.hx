package openfl.ui;

@:access(openfl.ui.GameInputControl) @:access(openfl.ui.GameInputDevice) extern class GameInput extends openfl.events.EventDispatcher {
	function new() : Void;
	static var isSupported : Bool;
	static var numDevices(default,null) : Int;
	static function getDeviceAt(index : Int) : GameInputDevice;
}
