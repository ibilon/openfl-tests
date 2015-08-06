package openfl.media;

@:realPath("openfl.media.SoundJSEventDispatcher") @:native("createjs.EventDispatcher") extern class SoundJSEventDispatcher {
	function addEventListener(type : String, listener : Dynamic, useCapture : Null<Bool> = false) : Dynamic;
	function dispatchEvent(eventObj : Dynamic, ?target : Dynamic) : Bool;
	function hasEventListener(type : String) : Bool;
	function off(type : String, listener : Dynamic, useCapture : Null<Bool> = false) : Bool;
	function on(type : String, listener : Dynamic, ?scope : Dynamic, once : Null<Bool> = false, ?data : Dynamic, useCapture : Null<Bool> = false) : Dynamic;
	function removeAllEventListeners(?type : String) : Void;
	function removeEventListener(type : String, listener : Dynamic, useCapture : Null<Bool> = false) : Void;
	function toString() : String;
	static function initialize(target : Dynamic) : Void;
}
