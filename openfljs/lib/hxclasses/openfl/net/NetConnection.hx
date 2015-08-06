package openfl.net;

extern class NetConnection extends openfl.events.EventDispatcher {
	function new() : Void;
	function connect(command : String, _ : Null<Unknown> = null, _ : Null<Unknown> = null, _ : Null<Unknown> = null, _ : Null<Unknown> = null, _ : Null<Unknown> = null) : Void;
	static var CONNECT_SUCCESS(inline,never) : String;
}
