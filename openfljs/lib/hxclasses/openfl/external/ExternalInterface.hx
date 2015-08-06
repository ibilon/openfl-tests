package openfl.external;

@:access(openfl.display.Stage) @:access(lime.ui.Window) extern class ExternalInterface {
	static var available : Bool;
	static var marshallExceptions : Bool;
	static var objectID : String;
	@:has_untyped static function addCallback(functionName : String, closure : Dynamic) : Void;
	static function call(functionName : String, ?p1 : Dynamic, ?p2 : Dynamic, ?p3 : Dynamic, ?p4 : Dynamic, ?p5 : Dynamic) : Dynamic;
}
