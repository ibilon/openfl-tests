package openfl.net;

extern class XMLSocket extends openfl.events.EventDispatcher {
	var connected(default,null) : Bool;
	var timeout : Int;
	function new(?host : String, port : Int = 0) : Void;
	function close() : Void;
	function connect(host : String, port : Int) : Void;
	@:has_untyped function connectWithProto(host : String, port : Int, protocol : String) : Void;
	function send(object : Dynamic) : Void;
}
