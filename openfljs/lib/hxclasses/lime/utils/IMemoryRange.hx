package lime.utils;

extern interface IMemoryRange {
	function getByteBuffer() : ByteArray;
	function getLength() : Int;
	function getStart() : Int;
}
