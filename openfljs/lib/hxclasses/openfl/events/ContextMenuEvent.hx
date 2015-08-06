package openfl.events;

extern class ContextMenuEvent extends Event {
	var contextMenuOwner : openfl.display.InteractiveObject;
	var mouseTarget : openfl.display.InteractiveObject;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, ?mouseTarget : openfl.display.InteractiveObject, ?contextMenuOwner : openfl.display.InteractiveObject) : Void;
	static var MENU_ITEM_SELECT : String;
	static var MENU_SELECT : String;
}
