package lime.graphics.opengl;

extern class GLObject {
	var id(default,null) : Dynamic;
	var invalidated(get,null) : Bool;
	var valid(get,null) : Bool;
	function new(version : Int, id : Dynamic) : Void;
	function invalidate() : Void;
	function isInvalid() : Bool;
	function isValid() : Bool;
	function toString() : String;
}
