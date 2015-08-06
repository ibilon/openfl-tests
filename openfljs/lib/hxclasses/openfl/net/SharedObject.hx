package openfl.net;

extern class SharedObject extends openfl.events.EventDispatcher {
	var data(default,null) : Dynamic;
	var size(get,never) : Int;
	function clear() : Void;
	function flush(minDiskSpace : Int = 0) : SharedObjectFlushStatus;
	function setProperty(propertyName : String, ?value : Dynamic) : Void;
	static function getLocal(name : String, ?localPath : String, secure : Bool = false) : SharedObject;
}
