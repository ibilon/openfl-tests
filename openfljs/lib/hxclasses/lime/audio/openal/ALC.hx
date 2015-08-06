package lime.audio.openal;

extern class ALC {
	static var ALL_ATTRIBUTES(inline,never) : Int;
	static var ALL_DEVICES_SPECIFIER(inline,never) : Int;
	static var ATTRIBUTES_SIZE(inline,never) : Int;
	static var DEFAULT_ALL_DEVICES_SPECIFIER(inline,never) : Int;
	static var DEFAULT_DEVICE_SPECIFIER(inline,never) : Int;
	static var DEVICE_SPECIFIER(inline,never) : Int;
	static var ENUMERATE_ALL_EXT(inline,never) : Int;
	static var EXTENSIONS(inline,never) : Int;
	static var FALSE(inline,never) : Int;
	static var FREQUENCY(inline,never) : Int;
	static var INVALID_CONTEXT(inline,never) : Int;
	static var INVALID_DEVICE(inline,never) : Int;
	static var INVALID_ENUM(inline,never) : Int;
	static var INVALID_VALUE(inline,never) : Int;
	static var MONO_SOURCES(inline,never) : Int;
	static var NO_ERROR(inline,never) : Int;
	static var OUT_OF_MEMORY(inline,never) : Int;
	static var REFRESH(inline,never) : Int;
	static var STEREO_SOURCES(inline,never) : Int;
	static var SYNC(inline,never) : Int;
	static var TRUE(inline,never) : Int;
	static function closeDevice(device : ALDevice) : Bool;
	static function createContext(device : ALDevice, ?attrlist : Array<Int>) : ALContext;
	static function destroyContext(context : ALContext) : Void;
	static function getContextsDevice(context : ALContext) : ALDevice;
	static function getCurrentContext() : ALContext;
	static function getError(device : ALDevice) : Int;
	static function getErrorString(device : ALDevice) : String;
	static function getIntegerv(device : ALDevice, param : Int, size : Int) : Array<Int>;
	static function getString(device : ALDevice, param : Int) : String;
	static function makeContextCurrent(context : ALContext) : Bool;
	static function openDevice(?deviceName : String) : ALDevice;
	static function processContext(context : ALContext) : Void;
	static function suspendContext(context : ALContext) : Void;
}
