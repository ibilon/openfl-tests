package lime.ui;

extern class Gamepad {
	var connected(default,null) : Bool;
	var guid(get,never) : String;
	var id(default,null) : Int;
	var name(get,never) : String;
	function new(id : Int) : Void;
	static var devices : Map<Int,Gamepad>;
	static function addMappings(mappings : Array<String>) : Void;
}
