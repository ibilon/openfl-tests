package openfl._internal.text;

@:access(openfl.text.TextField) @:access(openfl.text.TextFormat) extern class TextEngine {
	@:noCompletion var __cairoFont : lime.graphics.cairo.CairoFont;
	var antiAliasType : openfl.text.AntiAliasType;
	var autoSize : openfl.text.TextFieldAutoSize;
	var background : Bool;
	var backgroundColor : Int;
	var border : Bool;
	var borderColor : Int;
	var bounds : openfl.geom.Rectangle;
	var caretIndex : Int;
	var displayAsPassword : Bool;
	var embedFonts : Bool;
	var gridFitType : openfl.text.GridFitType;
	var height : Float;
	var maxChars : Int;
	var multiline : Bool;
	var restrict : String;
	var scrollH : Int;
	var scrollV : Int;
	var selectable : Bool;
	var sharpness : Float;
	var text : String;
	var type : openfl.text.TextFieldType;
	var width : Float;
	var wordWrap : Bool;
	function new(textField : openfl.text.TextField) : Void;
	function appendText(text : String) : Void;
	function getBottomScrollV() : Int;
	function getBounds() : openfl.geom.Rectangle;
	function getCaretIndex() : Int;
	function getCharBoundaries(a : Int) : openfl.geom.Rectangle;
	function getCharIndexAtPoint(x : Float, y : Float) : Int;
	function getDefaultTextFormat() : openfl.text.TextFormat;
	function getHTMLText() : String;
	function getHeight() : Float;
	function getLength() : Int;
	function getLineIndexAtPoint(x : Float, y : Float) : Int;
	function getLineMetrics(lineIndex : Int) : openfl.text.TextLineMetrics;
	function getLineOffset(lineIndex : Int) : Int;
	function getLineText(lineIndex : Int) : String;
	function getMaxScrollH() : Int;
	function getMaxScrollV() : Int;
	function getNumLines() : Int;
	function getSelectionBeginIndex() : Int;
	function getSelectionEndIndex() : Int;
	function getText() : String;
	function getTextColor() : Int;
	function getTextFormat(beginIndex : Int = 0, endIndex : Int = 0) : openfl.text.TextFormat;
	function getTextHeight() : Float;
	function getTextWidth() : Float;
	function getWidth() : Float;
	function getWordWrap() : Bool;
	function renderCairo(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function renderCanvas(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function renderDOM(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function renderGL(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function setAntiAliasType(value : openfl.text.AntiAliasType) : openfl.text.AntiAliasType;
	function setAutoSize(value : openfl.text.TextFieldAutoSize) : openfl.text.TextFieldAutoSize;
	function setBackground(value : Bool) : Bool;
	function setBackgroundColor(value : Int) : Int;
	function setBorder(value : Bool) : Bool;
	function setBorderColor(value : Int) : Int;
	function setDefaultTextFormat(value : openfl.text.TextFormat) : openfl.text.TextFormat;
	function setDisplayAsPassword(value : Bool) : Bool;
	function setEmbedFonts(value : Bool) : Bool;
	function setGridFitType(value : openfl.text.GridFitType) : openfl.text.GridFitType;
	function setHTMLText(value : String) : String;
	function setHeight(value : Float) : Float;
	function setMaxChars(value : Int) : Int;
	function setMultiline(value : Bool) : Bool;
	function setRestrict(value : String) : String;
	function setScrollH(value : Int) : Int;
	function setScrollV(value : Int) : Int;
	function setSelectable(value : Bool) : Bool;
	function setSelection(beginIndex : Int, endIndex : Int) : Void;
	function setSharpness(value : Float) : Float;
	function setText(value : String) : String;
	function setTextColor(value : Int) : Int;
	function setTextFormat(format : openfl.text.TextFormat, beginIndex : Int = 0, endIndex : Int = 0) : Void;
	function setType(value : openfl.text.TextFieldType) : openfl.text.TextFieldType;
	function setWidth(value : Float) : Float;
	function setWordWrap(value : Bool) : Bool;
}
