package openfl.utils;

extern class AGALMiniAssembler {
	var cur : openfl._internal.aglsl.assembler.Part;
	var r : haxe.ds.StringMap<openfl._internal.aglsl.assembler.Part>;
	function new() : Void;
	function addHeader(partname : String, version : Int) : Void;
	function assemble(source : String, ?ext_part : String, ext_version : Null<Int> = 0) : Dynamic;
	function emitDest(pr : openfl._internal.aglsl.assembler.Part, token : String, opdest : String) : Bool;
	function emitHeader(pr : openfl._internal.aglsl.assembler.Part) : Void;
	function emitOpcode(pr : openfl._internal.aglsl.assembler.Part, opcode : Int) : Void;
	function emitSampler(pr : openfl._internal.aglsl.assembler.Part, token : String, opsrc : openfl._internal.aglsl.assembler.FS, opts : Array<String>) : Bool;
	function emitSource(pr : openfl._internal.aglsl.assembler.Part, token : String, opsrc : openfl._internal.aglsl.assembler.FS) : Bool;
	function emitZeroDword(pr : openfl._internal.aglsl.assembler.Part) : Void;
	function emitZeroQword(pr : {data : {writeUnsignedInt : Int -> Void}}) : Void;
	function getGroupMatches(ereg : EReg, text : String, groupCount : UInt = 0) : Array<String>;
	function getMatches(ereg : EReg, text : String) : Array<String>;
	function stringToMask(?s : String) : UInt;
	function stringToSwizzle(s : String) : Int;
}
