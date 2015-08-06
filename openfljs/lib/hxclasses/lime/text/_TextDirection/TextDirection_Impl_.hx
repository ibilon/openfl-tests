package lime.text._TextDirection;

@:enum extern class lime.text.priv_TextDirection.TextDirection_Impl_ {
	@:enum @:impl static var BOTTOM_TO_TOP(inline,never) : lime.text.TextDirection;
	@:enum @:impl static var INVALID(inline,never) : lime.text.TextDirection;
	@:enum @:impl static var LEFT_TO_RIGHT(inline,never) : lime.text.TextDirection;
	@:enum @:impl static var RIGHT_TO_LEFT(inline,never) : lime.text.TextDirection;
	@:enum @:impl static var TOP_TO_BOTTOM(inline,never) : lime.text.TextDirection;
	@:impl static var backward(get,never) : Bool;
	@:impl static var forward(get,never) : Bool;
	@:impl static var horizontal(get,never) : Bool;
	@:impl static var vertical(get,never) : Bool;
	@:impl static function reverse(this : Int) : Void;
	@:impl static function toString(this : Int) : String;
}
