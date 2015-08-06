package openfl.system;

extern class LoaderContext {
	var allowCodeImport : Bool;
	var allowLoadBytesCodeExecution : Bool;
	var applicationDomain : ApplicationDomain;
	var checkPolicyFile : Bool;
	var securityDomain : SecurityDomain;
	function new(checkPolicyFile : Bool = false, ?applicationDomain : ApplicationDomain, ?securityDomain : SecurityDomain) : Void;
}
