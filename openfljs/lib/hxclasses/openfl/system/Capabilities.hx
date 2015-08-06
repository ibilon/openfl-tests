package openfl.system;

extern class Capabilities {
	static var avHardwareDisable(default,null) : Bool;
	static var cpuArchitecture(default,null) : String;
	static var hasAccessibility(default,null) : Bool;
	static var hasAudio(default,null) : Bool;
	static var hasAudioEncoder(default,null) : Bool;
	static var hasEmbeddedVideo(default,null) : Bool;
	static var hasIME(default,null) : Bool;
	static var hasMP3(default,null) : Bool;
	static var hasPrinting(default,null) : Bool;
	static var hasScreenBroadcast(default,null) : Bool;
	static var hasScreenPlayback(default,null) : Bool;
	static var hasStreamingAudio(default,null) : Bool;
	static var hasStreamingVideo(default,null) : Bool;
	static var hasTLS(default,null) : Bool;
	static var hasVideoEncoder(default,null) : Bool;
	static var isDebugger(default,null) : Bool;
	static var isEmbeddedInAcrobat(default,null) : Bool;
	static var language(get,null) : String;
	static var localFileReadDisable(default,null) : Bool;
	static var manufacturer(default,null) : String;
	static var maxLevelIDC(default,null) : Int;
	static var os(get,null) : String;
	static var pixelAspectRatio(get,null) : Float;
	static var playerType(default,null) : String;
	static var screenColor(default,null) : String;
	static var screenDPI(get,null) : Float;
	static var screenResolutionX(get,null) : Float;
	static var screenResolutionY(get,null) : Float;
	static var serverString(default,null) : String;
	static var supports32BitProcesses(default,null) : Bool;
	static var supports64BitProcesses(default,null) : Bool;
	static var touchscreenType(default,null) : TouchscreenType;
	static var version(get,null) : String;
	static function hasMultiChannelAudio(type : String) : Bool;
}
