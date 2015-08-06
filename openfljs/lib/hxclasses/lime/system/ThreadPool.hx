package lime.system;

extern class ThreadPool {
	var currentThreads(default,null) : Int;
	var doWork : lime.app.Event<String -> Dynamic -> Void>;
	var maxThreads : Int;
	var minThreads : Int;
	var onComplete : lime.app.Event<String -> Dynamic -> Void>;
	var onError : lime.app.Event<String -> Dynamic -> Void>;
	var onProgress : lime.app.Event<String -> Dynamic -> Void>;
	function new(minThreads : Int = 0, maxThreads : Int = 0) : Void;
	function queue(id : String, ?message : Dynamic) : Void;
	function sendComplete(id : String, ?message : Dynamic) : Void;
	function sendError(id : String, ?message : Dynamic) : Void;
	function sendProgress(id : String, ?message : Dynamic) : Void;
}
