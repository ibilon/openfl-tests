package openfl.media;

@:autoBuild(openfl.Assets.embedSound()) extern class Sound extends openfl.events.EventDispatcher {
	var bytesLoaded(default,null) : Int;
	var bytesTotal(default,null) : Int;
	var id3(get,null) : ID3Info;
	var isBuffering(default,null) : Bool;
	var length(get,never) : Float;
	var url(default,null) : String;
	function new(?stream : openfl.net.URLRequest, ?context : SoundLoaderContext) : Void;
	function close() : Void;
	function load(stream : openfl.net.URLRequest, ?context : SoundLoaderContext) : Void;
	function loadCompressedDataFromByteArray(bytes : openfl.utils.ByteArray, bytesLength : Int, forcePlayAsMusic : Bool = false) : Void;
	function loadPCMFromByteArray(bytes : openfl.utils.ByteArray, samples : Int, ?format : String, stereo : Bool = false, sampleRate : Float = 0) : Void;
	function play(startTime : Float = 0, loops : Int = 0, ?sndTransform : SoundTransform) : SoundChannel;
	static function fromAudioBuffer(buffer : lime.audio.AudioBuffer) : Sound;
	static function fromFile(path : String) : Sound;
}
