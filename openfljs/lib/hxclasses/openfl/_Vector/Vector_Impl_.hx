package openfl._Vector;

extern class openfl.priv_Vector.Vector_Impl_ {
	@:impl static var fixed(get,set) : Bool;
	@:impl static var length(get,set) : Int;
	@:impl static function _new(length : Null<Int> = 0, fixed : Null<Bool> = false) : openfl.Vector<T>;
	@:impl static function concat(this : openfl.VectorData<T>, ?a : openfl.VectorData<T>) : openfl.Vector<T>;
	static function convert<T,U>(v : openfl.Vector<T>) : openfl.Vector<U>;
	@:impl static function copy(this : openfl.VectorData<T>) : openfl.Vector<T>;
	@:noCompletion @:from static function fromArray<T>(value : Array<T>) : openfl.Vector<T>;
	@:noCompletion @:from static function fromHaxeVector<T>(value : haxe.ds.Vector<T>) : openfl.Vector<T>;
	@:noCompletion @:from static function fromVectorData<T>(value : openfl.VectorData<T>) : openfl.Vector<T>;
	@:impl @:noCompletion @:arrayAccess static function get(this : openfl.VectorData<T>, index : Int) : Null<T>;
	@:impl static function indexOf(this : openfl.VectorData<T>, x : T, from : Null<Int> = 0) : Int;
	@:impl static function iterator<T>(this : openfl.VectorData<T>) : Iterator<T>;
	@:impl static function join(this : openfl.VectorData<T>, sep : String) : String;
	@:impl static function lastIndexOf(this : openfl.VectorData<T>, x : T, from : Null<Int> = 0) : Int;
	static function ofArray<T>(a : Array<Dynamic>) : openfl.Vector<T>;
	@:impl static function pop(this : openfl.VectorData<T>) : Null<T>;
	@:impl static function push(this : openfl.VectorData<T>, x : T) : Int;
	@:impl static function reverse(this : openfl.VectorData<T>) : Void;
	@:impl @:noCompletion @:arrayAccess static function set(this : openfl.VectorData<T>, key : Int, value : T) : T;
	@:impl static function shift(this : openfl.VectorData<T>) : Null<T>;
	@:impl static function slice(this : openfl.VectorData<T>, pos : Null<Int> = 0, end : Null<Int> = 0) : openfl.Vector<T>;
	@:impl static function sort(this : openfl.VectorData<T>, f : T -> T -> Int) : Void;
	@:impl static function splice(this : openfl.VectorData<T>, pos : Int, len : Int) : openfl.Vector<T>;
	@:impl @:noCompletion @:to static function toArray<T>(this : openfl.VectorData<T>) : Array<T>;
	@:impl @:noCompletion @:to static function toHaxeVector<T>(this : openfl.VectorData<T>) : haxe.ds.Vector<T>;
	@:impl static function toString(this : openfl.VectorData<T>) : String;
	@:impl @:noCompletion @:to static function toVectorData<T>(this : openfl.VectorData<T>) : openfl.VectorData<T>;
	@:impl static function unshift(this : openfl.VectorData<T>, x : T) : Void;
}
