package openfl._internal.aglsl;

extern class AGLSLParser {
	function new() : Void;
	function parse(desc : Description) : String;
	function regtostring(regtype : Int, regnum : Int, desc : {header : {type : String}, hasindirect : Bool}, tag : String) : String;
	function sourcetostring(s : Destination, subline : Int, dwm : Int, isscalar : Bool, desc : {header : {type : String}, hasindirect : Bool}, tag : String) : String;
}
