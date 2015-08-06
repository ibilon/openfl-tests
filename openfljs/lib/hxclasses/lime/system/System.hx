package lime.system;

@:access(lime.system.Display) @:access(lime.system.DisplayMode) extern class System {
	static var applicationDirectory(get,null) : String;
	static var applicationStorageDirectory(get,null) : String;
	static var desktopDirectory(get,null) : String;
	static var disableCFFI : Bool;
	static var documentsDirectory(get,null) : String;
	static var fontsDirectory(get,null) : String;
	static var numDisplays(get,null) : Int;
	static var userDirectory(get,null) : String;
	@:keep @:expose("lime.embed") static function embed(element : Dynamic, width : Null<Int> = 0, height : Null<Int> = 0, ?background : String, ?assetsPrefix : String) : Void;
	static function exit(code : Int) : Void;
	static function getDisplay(id : Int) : Display;
	static function getTimer() : Int;
	static function load(library : String, method : String, args : Int = 0, lazy : Bool = false) : Dynamic;
}
