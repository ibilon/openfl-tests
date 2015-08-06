package lime.graphics;

extern enum RenderContext {
	OPENGL(gl : GLRenderContext);
	CANVAS(context : CanvasRenderContext);
	DOM(element : DOMRenderContext);
	FLASH(stage : FlashRenderContext);
	CAIRO(cairo : CairoRenderContext);
	CONSOLE(context : ConsoleRenderContext);
	CUSTOM(data : Dynamic);
	NONE;
}
