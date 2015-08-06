package lime.utils._UInt32Array;

extern class lime.utils.priv_UInt32Array.UInt32Array_Impl_ {
	static var BYTES_PER_ELEMENT(inline,never) : Int;
	static function fromBytes(bytes : haxe.io.Bytes, byteOffset : Null<Int> = 0, len : Null<Int> = 0) : lime.utils.UInt32Array;
	@:impl static function toBytes(this : js.html.Uint32Array) : haxe.io.Bytes;
}
