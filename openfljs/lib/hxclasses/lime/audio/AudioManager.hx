package lime.audio;

extern class AudioManager {
	static var context : AudioContext;
	@:has_untyped static function init(?context : AudioContext) : Void;
	static function resume() : Void;
	static function shutdown() : Void;
	static function suspend() : Void;
}
