package lime.system._ThreadPool;

extern class lime.system.priv_ThreadPool.ThreadPoolMessage {
	var id : String;
	var message : Dynamic;
	var type : lime.system.priv_ThreadPool.ThreadPoolMessageType;
	function new(type : lime.system.priv_ThreadPool.ThreadPoolMessageType, id : String, message : Dynamic) : Void;
}
