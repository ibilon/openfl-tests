package openfl.ui;

extern class GameInputControl extends openfl.events.EventDispatcher {
	var device(default,null) : GameInputDevice;
	var id(default,null) : String;
	var maxValue(default,null) : Float;
	var minValue(default,null) : Float;
	var value(default,null) : Float;
}
