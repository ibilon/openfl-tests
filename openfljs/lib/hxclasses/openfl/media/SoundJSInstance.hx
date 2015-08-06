package openfl.media;

@:realPath("openfl.media.SoundJSInstance") @:native("createjs.SoundInstance") extern class SoundJSInstance extends SoundJSEventDispatcher {
	var gainNode : Dynamic;
	var onComplete : SoundJSInstance -> Void;
	var onLoop : SoundJSInstance -> Void;
	var onPlayFailed : SoundJSInstance -> Void;
	var onPlayInterrupted : SoundJSInstance -> Void;
	var onPlaySucceeded : SoundJSInstance -> Void;
	var onReady : SoundJSInstance -> Void;
	var pan : Float;
	var panNode : Dynamic;
	var playState : String;
	var sourceNode : Dynamic;
	var uniqueId : Dynamic;
	var volume : Float;
	function new(src : String, owner : Dynamic) : Void;
	function getDuration() : Int;
	function getMute() : Bool;
	function getPan() : Float;
	function getPosition() : Int;
	function getVolume() : Float;
	function pause() : Bool;
	function play(?interrupt : String, delay : Null<Int> = 0, offset : Null<Int> = 0, loop : Null<Int> = 0, volume : Null<Float> = 0, pan : Null<Float> = 0) : Void;
	function resume() : Bool;
	function setMute(value : Bool) : Bool;
	function setPan(value : Float) : Float;
	function setPosition(value : Int) : Void;
	function setVolume(value : Float) : Bool;
	function stop() : Bool;
}
