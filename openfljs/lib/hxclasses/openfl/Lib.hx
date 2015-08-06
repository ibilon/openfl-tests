package openfl;

@:access(openfl.display.Stage) extern class Lib {
	static var application : lime.app.Application;
	static var current(default,null) : openfl.display.MovieClip;
	static function as<T>(v : Dynamic, c : Class<T>) : Null<T>;
	static function attach(name : String) : openfl.display.MovieClip;
	@:keep @:expose("openfl.embed") static function embed(elementName : String, width : Null<Int> = 0, height : Null<Int> = 0, ?background : String, ?assetsPrefix : String) : Void;
	static function getTimer() : Int;
	static function getURL(request : openfl.net.URLRequest, ?target : String) : Void;
	static function notImplemented(api : String) : Void;
	static function preventDefaultTouchMove() : Void;
	static function trace(arg : Dynamic) : Void;
}
