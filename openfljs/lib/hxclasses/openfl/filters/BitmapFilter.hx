package openfl.filters;

extern class BitmapFilter {
	function new() : Void;
	@:noCompletion function __applyFilter(sourceData : js.html.ImageData, targetData : js.html.ImageData, sourceRect : openfl.geom.Rectangle, destPoint : openfl.geom.Point) : Void;
	function clone() : BitmapFilter;
}
