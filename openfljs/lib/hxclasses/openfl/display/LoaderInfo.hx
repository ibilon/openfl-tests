package openfl.display;

extern class LoaderInfo extends openfl.events.EventDispatcher {
	var applicationDomain : openfl.system.ApplicationDomain;
	var bytes(default,null) : openfl.utils.ByteArray;
	var bytesLoaded(default,null) : Int;
	var bytesTotal(default,null) : Int;
	var childAllowsParent(default,null) : Bool;
	var content(default,null) : DisplayObject;
	var contentType(default,null) : String;
	var frameRate(default,null) : Float;
	var height(default,null) : Int;
	var loader(default,null) : Loader;
	var loaderURL(default,null) : String;
	var parameters(default,null) : Dynamic<String>;
	var parentAllowsChild(default,null) : Bool;
	var sameDomain(default,null) : Bool;
	var sharedEvents(default,null) : openfl.events.EventDispatcher;
	var uncaughtErrorEvents(default,null) : openfl.events.UncaughtErrorEvents;
	var url(default,null) : String;
	var width(default,null) : Int;
	static function create(loader : Loader) : LoaderInfo;
}
