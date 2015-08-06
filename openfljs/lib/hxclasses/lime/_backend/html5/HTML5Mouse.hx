package lime._backend.html5;

@:access(lime.app.Application) @:access(lime.ui.Window) extern class HTML5Mouse {
	static function get_cursor() : lime.ui.MouseCursor;
	static function get_lock() : Bool;
	static function hide() : Void;
	static function set_cursor(value : lime.ui.MouseCursor) : lime.ui.MouseCursor;
	static function set_lock(value : Bool) : Bool;
	static function show() : Void;
	static function warp(x : Int, y : Int, window : lime.ui.Window) : Void;
}
