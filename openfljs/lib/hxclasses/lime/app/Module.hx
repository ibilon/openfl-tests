package lime.app;

extern class Module implements IModule {
	function new() : Void;
	function init(context : lime.graphics.RenderContext) : Void;
	function onGamepadAxisMove(gamepad : lime.ui.Gamepad, axis : lime.ui.GamepadAxis, value : Float) : Void;
	function onGamepadButtonDown(gamepad : lime.ui.Gamepad, button : lime.ui.GamepadButton) : Void;
	function onGamepadButtonUp(gamepad : lime.ui.Gamepad, button : lime.ui.GamepadButton) : Void;
	function onGamepadConnect(gamepad : lime.ui.Gamepad) : Void;
	function onGamepadDisconnect(gamepad : lime.ui.Gamepad) : Void;
	function onKeyDown(keyCode : lime.ui.KeyCode, modifier : lime.ui.KeyModifier) : Void;
	function onKeyUp(keyCode : lime.ui.KeyCode, modifier : lime.ui.KeyModifier) : Void;
	function onMouseDown(x : Float, y : Float, button : Int) : Void;
	function onMouseMove(x : Float, y : Float) : Void;
	function onMouseMoveRelative(x : Float, y : Float) : Void;
	function onMouseUp(x : Float, y : Float, button : Int) : Void;
	function onMouseWheel(deltaX : Float, deltaY : Float) : Void;
	function onRenderContextLost() : Void;
	function onRenderContextRestored(context : lime.graphics.RenderContext) : Void;
	function onTextEdit(text : String, start : Int, length : Int) : Void;
	function onTextInput(text : String) : Void;
	function onTouchEnd(x : Float, y : Float, id : Int) : Void;
	function onTouchMove(x : Float, y : Float, id : Int) : Void;
	function onTouchStart(x : Float, y : Float, id : Int) : Void;
	function onWindowActivate() : Void;
	function onWindowClose() : Void;
	function onWindowDeactivate() : Void;
	function onWindowEnter() : Void;
	function onWindowFocusIn() : Void;
	function onWindowFocusOut() : Void;
	function onWindowFullscreen() : Void;
	function onWindowLeave() : Void;
	function onWindowMinimize() : Void;
	function onWindowMove(x : Float, y : Float) : Void;
	function onWindowResize(width : Int, height : Int) : Void;
	function onWindowRestore() : Void;
	function render(context : lime.graphics.RenderContext) : Void;
	function update(deltaTime : Int) : Void;
}
