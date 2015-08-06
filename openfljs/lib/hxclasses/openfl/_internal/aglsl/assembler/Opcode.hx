package openfl._internal.aglsl.assembler;

extern class Opcode {
	var a : FS;
	var b : FS;
	var dest : String;
	var flags : Flags;
	var opcode : Int;
	function new(dest : String, aformat : String, asize : Int, bformat : String, bsize : Int, opcode : Int, simple : Bool, horizontal : Bool = false, fragonly : Bool = false, matrix : Bool = false) : Void;
}
