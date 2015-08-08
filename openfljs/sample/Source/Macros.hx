import haxe.macro.*;

using StringTools;

class Macros
{
	public static function allExposeInLib ()
	{
		Context.onGenerate(function (types:Array<Type>) {
			
			for (type in types) {
				
				switch (type) {
					
					case TInst(t, params):
					
						var t2 = t.get();
					
						if (t2.module.startsWith("lib.")) {
							
							trace(t.toString());
							
							if (!t2.meta.has("@:expose")) {
								
								t2.meta.add("@:expose", [], t2.pos);
								
							}
							
						}
					
					default:
					
				}
				
			}
			
		});
	}
	
	public static function allExternInLib ()
	{
		Compiler.exclude("openfl");
		Compiler.exclude("lime");
	}
}
