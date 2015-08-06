package lime.utils._UInt8Array;

extern class lime.utils.priv_UInt8Array.UInt8Array_Impl_ {
	static var BYTES_PER_ELEMENT(inline,never) : Int;
	static function fromBytes(bytes : haxe.io.Bytes, byteOffset : Null<Int> = 0, len : Null<Int> = 0) : lime.utils.UInt8Array;
	@:impl static function toBytes(this : js.html.Uint8Array) : haxe.io.Bytes;
}
