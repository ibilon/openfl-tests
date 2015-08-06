package lime.net;

extern class URLVariables implements Dynamic {
	function new(?inEncoded : String) : Void;
	function decode(inVars : String) : Void;
	function toString() : String;
}
