package lime.audio;

extern class FlashAudioContext {
	function new() : Void;
	function close(buffer : AudioBuffer) : Void;
	function createBuffer(?stream : Dynamic, ?context : Dynamic) : AudioBuffer;
	function extract(buffer : AudioBuffer, target : Dynamic, length : Float, startPosition : Float = 0) : Float;
	function getBytesLoaded(buffer : AudioBuffer) : UInt;
	function getBytesTotal(buffer : AudioBuffer) : Int;
	function getID3(buffer : AudioBuffer) : Dynamic;
	function getIsBuffering(buffer : AudioBuffer) : Bool;
	function getIsURLInaccessible(buffer : AudioBuffer) : Bool;
	function getLength(buffer : AudioBuffer) : Float;
	function getURL(buffer : AudioBuffer) : String;
	function load(buffer : AudioBuffer, stream : Dynamic, ?context : Dynamic) : Void;
	function loadCompressedDataFromByteArray(buffer : AudioBuffer, bytes : Dynamic, bytesLength : UInt) : Void;
	function loadPCMFromByteArray(buffer : AudioBuffer, bytes : Dynamic, samples : UInt, ?format : String, stereo : Bool = false, sampleRate : Float = 0) : Void;
	function play(buffer : AudioBuffer, startTime : Float = 0, loops : Int = 0, ?sndTransform : Dynamic) : Dynamic;
}
