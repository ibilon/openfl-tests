package lime.audio;

extern class ALCAudioContext {
	var ALL_ATTRIBUTES : Int;
	var ALL_DEVICES_SPECIFIER : Int;
	var ATTRIBUTES_SIZE : Int;
	var DEFAULT_ALL_DEVICES_SPECIFIER : Int;
	var DEFAULT_DEVICE_SPECIFIER : Int;
	var DEVICE_SPECIFIER : Int;
	var ENUMERATE_ALL_EXT : Int;
	var EXTENSIONS : Int;
	var FALSE : Int;
	var FREQUENCY : Int;
	var INVALID_CONTEXT : Int;
	var INVALID_DEVICE : Int;
	var INVALID_ENUM : Int;
	var INVALID_VALUE : Int;
	var MONO_SOURCES : Int;
	var NO_ERROR : Int;
	var OUT_OF_MEMORY : Int;
	var REFRESH : Int;
	var STEREO_SOURCES : Int;
	var SYNC : Int;
	var TRUE : Int;
	function new() : Void;
	function closeDevice(device : lime.audio.openal.ALDevice) : Bool;
	function createContext(device : lime.audio.openal.ALDevice, ?attrlist : Array<Int>) : lime.audio.openal.ALContext;
	function destroyContext(context : lime.audio.openal.ALContext) : Void;
	function getContextsDevice(context : lime.audio.openal.ALContext) : lime.audio.openal.ALDevice;
	function getCurrentContext() : lime.audio.openal.ALContext;
	function getError(device : lime.audio.openal.ALDevice) : Int;
	function getErrorString(device : lime.audio.openal.ALDevice) : String;
	function getIntegerv(device : lime.audio.openal.ALDevice, param : Int, count : Int = 0) : Array<Int>;
	function getString(device : lime.audio.openal.ALDevice, param : Int) : String;
	function makeContextCurrent(context : lime.audio.openal.ALContext) : Bool;
	function openDevice(?deviceName : String) : lime.audio.openal.ALDevice;
	function processContext(context : lime.audio.openal.ALContext) : Void;
	function suspendContext(context : lime.audio.openal.ALContext) : Void;
}
