package openfl.system;

extern class System {
	static var totalMemory(get,null) : Int;
	static var useCodePage : Bool;
	static var vmVersion(get,null) : String;
	static function exit(code : Int) : Void;
	static function gc() : Void;
	static function pause() : Void;
	static function resume() : Void;
	static function setClipboard(string : String) : Void;
}
