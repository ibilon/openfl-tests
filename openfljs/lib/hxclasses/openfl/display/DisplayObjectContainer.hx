package openfl.display;

@:access(openfl.events.Event) @:access(openfl.display.Graphics) @:access(openfl.geom.Rectangle) extern class DisplayObjectContainer extends InteractiveObject {
	var mouseChildren : Bool;
	var numChildren(get,null) : Int;
	var tabChildren : Bool;
	function new() : Void;
	function addChild(child : DisplayObject) : DisplayObject;
	function addChildAt(child : DisplayObject, index : Int) : DisplayObject;
	function areInaccessibleObjectsUnderPoint(point : openfl.geom.Point) : Bool;
	function contains(child : DisplayObject) : Bool;
	function getChildAt(index : Int) : DisplayObject;
	function getChildByName(name : String) : DisplayObject;
	function getChildIndex(child : DisplayObject) : Int;
	function getObjectsUnderPoint(point : openfl.geom.Point) : Array<DisplayObject>;
	function removeChild(child : DisplayObject) : DisplayObject;
	function removeChildAt(index : Int) : DisplayObject;
	function removeChildren(beginIndex : Int = 0, endIndex : Int = 0) : Void;
	function setChildIndex(child : DisplayObject, index : Int) : Void;
	function swapChildren(child1 : DisplayObject, child2 : DisplayObject) : Void;
	function swapChildrenAt(child1 : Int, child2 : Int) : Void;
}
