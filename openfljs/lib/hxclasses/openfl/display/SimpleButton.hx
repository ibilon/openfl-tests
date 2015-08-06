package openfl.display;

extern class SimpleButton extends DisplayObjectContainer {
	var downState(default,set) : DisplayObject;
	var enabled : Bool;
	var hitTestState(default,set) : DisplayObject;
	var overState(default,set) : DisplayObject;
	var soundTransform(get,set) : openfl.media.SoundTransform;
	var trackAsMenu : Bool;
	var upState(default,set) : DisplayObject;
	var useHandCursor : Bool;
	function new(?upState : DisplayObject, ?overState : DisplayObject, ?downState : DisplayObject, ?hitTestState : DisplayObject) : Void;
}
