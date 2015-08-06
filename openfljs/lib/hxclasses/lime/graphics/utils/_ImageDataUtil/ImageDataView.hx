package lime.graphics.utils._ImageDataUtil;

extern class lime.graphics.utils.priv_ImageDataUtil.ImageDataView {
	var height(default,null) : Int;
	var width(default,null) : Int;
	var x(default,null) : Int;
	var y(default,null) : Int;
	function new(image : lime.graphics.Image, ?rect : lime.math.Rectangle) : Void;
	function clip(x : Int, y : Int, width : Int, height : Int) : Void;
	function row(y : Int) : Int;
}
