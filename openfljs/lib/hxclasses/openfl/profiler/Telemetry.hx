package openfl.profiler;

@:allow(openfl.display.Stage) extern class Telemetry {
	static var connected(get,never) : Bool;
	static var spanMarker(default,null) : Float;
	static function registerCommandHandler(commandName : String, handler : Dynamic) : Bool;
	static function sendMetric(metric : String, value : Dynamic) : Void;
	static function sendSpanMetric(metric : String, startSpanMarker : Float, ?value : Dynamic) : Void;
	static function unregisterCommandHandler(commandName : String) : Bool;
}
