package openfl.media;

extern class SoundChannel extends openfl.events.EventDispatcher {
	var leftPeak(default,null) : Float;
	var position(get,set) : Float;
	var rightPeak(default,null) : Float;
	var soundTransform(get,set) : SoundTransform;
	function stop() : Void;
}
