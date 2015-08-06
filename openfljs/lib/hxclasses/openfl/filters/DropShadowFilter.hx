package openfl.filters;

extern class DropShadowFilter extends BitmapFilter {
	var alpha : Float;
	var angle : Float;
	var blurX : Float;
	var blurY : Float;
	var color : Int;
	var distance : Float;
	var hideObject : Bool;
	var inner : Bool;
	var knockout : Bool;
	var quality : Int;
	var strength : Float;
	function new(distance : Float = 0, angle : Float = 0, color : Int = 0, alpha : Float = 0, blurX : Float = 0, blurY : Float = 0, strength : Float = 0, quality : Int = 0, inner : Bool = false, knockout : Bool = false, hideObject : Bool = false) : Void;
}
