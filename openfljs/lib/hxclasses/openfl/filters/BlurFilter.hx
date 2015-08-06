package openfl.filters;

extern class BlurFilter extends BitmapFilter {
	var blurX : Float;
	var blurY : Float;
	var quality : Int;
	function new(blurX : Float = 0, blurY : Float = 0, quality : Int = 0) : Void;
}
