package lime.system;

extern class Display {
	var bounds(default,null) : lime.math.Rectangle;
	var currentMode(default,null) : DisplayMode;
	var id(default,null) : Int;
	var name(default,null) : String;
	var supportedModes(default,null) : Array<DisplayMode>;
}
