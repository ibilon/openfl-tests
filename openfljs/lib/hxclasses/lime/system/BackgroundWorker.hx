package lime.system;

extern class BackgroundWorker {
	var canceled(default,null) : Bool;
	var doWork : lime.app.Event<Dynamic -> Void>;
	var onComplete : lime.app.Event<Dynamic -> Void>;
	var onError : lime.app.Event<Dynamic -> Void>;
	var onProgress : lime.app.Event<Dynamic -> Void>;
	function new() : Void;
	function cancel() : Void;
	function run(?message : Dynamic) : Void;
	function sendComplete(?message : Dynamic) : Void;
	function sendError(?message : Dynamic) : Void;
	function sendProgress(?message : Dynamic) : Void;
}
