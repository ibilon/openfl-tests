package lime.audio;

extern class AudioSource {
	var buffer : AudioBuffer;
	var currentTime(get,set) : Int;
	var gain(get,set) : Float;
	var length(get,set) : Int;
	var loops : Int;
	var offset : Int;
	var onComplete : lime.app.Event<Void -> Void>;
	function new(?buffer : AudioBuffer, offset : Int = 0, length : Null<Int> = 0, loops : Int = 0) : Void;
	function dispose() : Void;
	function pause() : Void;
	function play() : Void;
	function stop() : Void;
}
