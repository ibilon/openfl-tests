package openfl.filters;

extern class GlowFilter extends BitmapFilter {
	var alpha : Float;
	var blurX : Float;
	var blurY : Float;
	var color : Int;
	var inner : Bool;
	var knockout : Bool;
	var quality : Int;
	var strength : Float;
	function new(color : Int = 0, alpha : Float = 0, blurX : Float = 0, blurY : Float = 0, strength : Float = 0, quality : Int = 0, inner : Bool = false, knockout : Bool = false) : Void;
}
