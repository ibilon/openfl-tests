package lime.utils._UInt16Array;

extern class lime.utils.priv_UInt16Array.UInt16Array_Impl_ {
	static var BYTES_PER_ELEMENT(inline,never) : Int;
	static function fromBytes(bytes : haxe.io.Bytes, byteOffset : Null<Int> = 0, len : Null<Int> = 0) : lime.utils.UInt16Array;
	@:impl static function toBytes(this : js.html.Uint16Array) : haxe.io.Bytes;
}
