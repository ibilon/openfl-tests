package lime.utils._Int32Array;

extern class lime.utils.priv_Int32Array.Int32Array_Impl_ {
	static var BYTES_PER_ELEMENT(inline,never) : Int;
	static function fromBytes(bytes : haxe.io.Bytes, byteOffset : Null<Int> = 0, len : Null<Int> = 0) : lime.utils.Int32Array;
	@:impl static function toBytes(this : js.html.Int32Array) : haxe.io.Bytes;
}
