package openfl.events;

extern class Event {
	var bubbles(default,null) : Bool;
	var cancelable(default,null) : Bool;
	var currentTarget : Dynamic;
	var eventPhase(default,null) : EventPhase;
	var target : Dynamic;
	var type(default,null) : String;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false) : Void;
	function clone() : Event;
	function isDefaultPrevented() : Bool;
	function preventDefault() : Void;
	function stopImmediatePropagation() : Void;
	function stopPropagation() : Void;
	function toString() : String;
	static var ACTIVATE : String;
	static var ADDED : String;
	static var ADDED_TO_STAGE : String;
	static var CANCEL : String;
	static var CHANGE : String;
	static var CLOSE : String;
	static var COMPLETE : String;
	static var CONNECT : String;
	static var CONTEXT3D_CREATE : String;
	static var DEACTIVATE : String;
	static var ENTER_FRAME : String;
	static var ID3 : String;
	static var INIT : String;
	static var MOUSE_LEAVE : String;
	static var OPEN : String;
	static var REMOVED : String;
	static var REMOVED_FROM_STAGE : String;
	static var RENDER : String;
	static var RESIZE : String;
	static var SCROLL : String;
	static var SELECT : String;
	static var SOUND_COMPLETE : String;
	static var TAB_CHILDREN_CHANGE : String;
	static var TAB_ENABLED_CHANGE : String;
	static var TAB_INDEX_CHANGE : String;
	static var UNLOAD : String;
}
