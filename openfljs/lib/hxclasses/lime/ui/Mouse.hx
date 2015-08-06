package lime.ui;

extern class Mouse {
	static var cursor(get,set) : MouseCursor;
	static var lock(get,set) : Bool;
	static function hide() : Void;
	static function show() : Void;
	static function warp(x : Int, y : Int, ?window : Window) : Void;
}
