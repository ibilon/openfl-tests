package openfl._internal.aglsl;

extern class Description {
	var hasindirect : Bool;
	var hasmatrix : Bool;
	var header : Header;
	var regread : Array<Dynamic>;
	var regwrite : Array<Dynamic>;
	var samplers : Array<Dynamic>;
	var tokens : Array<Dynamic>;
	var writedepth : Bool;
	function new() : Void;
}
