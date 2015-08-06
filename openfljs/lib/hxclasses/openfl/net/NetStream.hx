package openfl.net;

extern class NetStream extends openfl.events.EventDispatcher {
	var audioCodec : Int;
	var bufferLength : Float;
	var bufferTime : Float;
	var bytesLoaded : Int;
	var bytesTotal : Int;
	var checkPolicyFile : Bool;
	var client : Dynamic;
	var currentFPS : Float;
	var decodedFrames : Int;
	var liveDelay : Float;
	var objectEncoding : Int;
	var soundTransform : openfl.media.SoundTransform;
	var speed(get,set) : Float;
	var time : Float;
	var videoCodec : Int;
	function new(connection : NetConnection) : Void;
	function pause() : Void;
	function play(url : String, _ : Null<Unknown> = null, _ : Null<Unknown> = null, _ : Null<Unknown> = null, _ : Null<Unknown> = null, _ : Null<Unknown> = null) : Void;
	function requestVideoStatus() : Void;
	function resume() : Void;
	function seek(offset : Float) : Void;
	function togglePause() : Void;
}
