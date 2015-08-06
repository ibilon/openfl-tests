package openfl;

@:dox(hide) extern class VectorDataIterator<T> {
	function new(data : VectorData<T>) : Void;
	function hasNext() : Bool;
	function next() : T;
}
