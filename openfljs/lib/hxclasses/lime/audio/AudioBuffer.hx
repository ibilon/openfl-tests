package lime.audio;

extern class AudioBuffer {
	var bitsPerSample : Int;
	var channels : Int;
	var data : lime.utils.ByteArray;
	var id : UInt;
	var sampleRate : Int;
	var src : js.html.Audio;
	function new() : Void;
	function dispose() : Void;
	static function fromBytes(bytes : lime.utils.ByteArray) : AudioBuffer;
	static function fromFile(path : String) : AudioBuffer;
	static function fromURL(url : String, handler : AudioBuffer -> Void) : Void;
}
