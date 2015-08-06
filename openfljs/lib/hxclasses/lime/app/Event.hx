package lime.app;

extern class Event<T> {
	@:noCompletion var listeners : Array<T>;
	@:noCompletion var repeat : Array<Bool>;
	function new() : Void;
	function add(listener : T, once : Bool = false, priority : Int = 0) : Void;
	function has(listener : T) : Bool;
	function remove(listener : T) : Void;
}
