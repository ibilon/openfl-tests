package lime.utils._Int16Array;

extern class lime.utils.priv_Int16Array.Int16Array_Impl_ {
	static var BYTES_PER_ELEMENT(inline,never) : Int;
	static function fromBytes(bytes : haxe.io.Bytes, byteOffset : Null<Int> = 0, len : Null<Int> = 0) : lime.utils.Int16Array;
	@:impl static function toBytes(this : js.html.Int16Array) : haxe.io.Bytes;
}
