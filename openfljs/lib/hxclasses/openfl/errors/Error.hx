package openfl.errors;

extern class Error {
	var errorID : Int;
	var message : String;
	var name : String;
	function new(?message : String, id : Int = 0) : Void;
	function getStackTrace() : String;
	function toString() : String;
}
