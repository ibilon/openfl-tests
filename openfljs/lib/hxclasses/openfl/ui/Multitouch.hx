package openfl.ui;

extern class Multitouch {
	static var inputMode(get,set) : MultitouchInputMode;
	static var maxTouchPoints(default,null) : Int;
	static var supportedGestures(default,null) : Array<String>;
	static var supportsGestureEvents(default,null) : Bool;
	static var supportsTouchEvents(get,null) : Bool;
}
