package lime.utils._Float32Array;

extern class lime.utils.priv_Float32Array.Float32Array_Impl_ {
	static var BYTES_PER_ELEMENT(inline,never) : Int;
	static function fromBytes(bytes : haxe.io.Bytes, byteOffset : Null<Int> = 0, len : Null<Int> = 0) : lime.utils.Float32Array;
	@:impl static function toBytes(this : js.html.Float32Array) : haxe.io.Bytes;
}
