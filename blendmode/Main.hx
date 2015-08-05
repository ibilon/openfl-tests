import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite
{
	public function new ()
	{
		super();
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = ADD;
		bitmap.y = 45;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = ALPHA;
		bitmap.y = 90;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = DARKEN;
		bitmap.y = 135;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = DIFFERENCE;
		bitmap.y = 180;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = HARDLIGHT;
		bitmap.y = 225;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = INVERT;
		bitmap.y = 270;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = LAYER;
		bitmap.y = 315;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = LIGHTEN;
		bitmap.y = 360;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = MULTIPLY;
		bitmap.y = 405;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = OVERLAY;
		bitmap.y = 450;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = SCREEN;
		bitmap.y = 495;
		addChild(bitmap);
		
		var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
		bitmap.blendMode = SUBTRACT;
		bitmap.y = 540;
		addChild(bitmap);
	}
}
