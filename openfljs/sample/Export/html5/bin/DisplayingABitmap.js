(function (console, $hx_exports) { "use strict";
$hx_exports.openfl = $hx_exports.openfl || {};
$hx_exports.lime = $hx_exports.lime || {};
var $hxClasses = {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = true;
ApplicationMain.config = null;
ApplicationMain.preloader = null;
ApplicationMain.create = function() {
	var app = new lime.app.Application();
	app.create(ApplicationMain.config);
	openfl.Lib.application = app;
	var stage = new openfl.display.Stage(app.get_window().get_width(),app.get_window().get_height(),ApplicationMain.config.background);
	stage.addChild(openfl.Lib.current);
	app.addModule(stage);
	var display = new NMEPreloader();
	ApplicationMain.preloader = new openfl.display.Preloader(display);
	ApplicationMain.preloader.onComplete = ApplicationMain.init;
	ApplicationMain.preloader.create(ApplicationMain.config);
	var urls = [];
	var types = [];
	urls.push("assets/openfl.png");
	types.push("IMAGE");
	if(ApplicationMain.config.assetsPrefix != null) {
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(types[i] != "FONT") urls[i] = ApplicationMain.config.assetsPrefix + urls[i];
		}
	}
	ApplicationMain.preloader.load(urls,types);
	var result = app.exec();
};
ApplicationMain.init = function() {
	var loaded = 0;
	var total = 0;
	var library_onLoad = function(__) {
		loaded++;
		if(loaded == total) ApplicationMain.start();
	};
	ApplicationMain.preloader = null;
	if(total == 0) ApplicationMain.start();
};
ApplicationMain.main = function() {
	ApplicationMain.config = { element : null, assetsPrefix : "", antialiasing : 0, background : 16777215, borderless : false, company : "OpenFL", depthBuffer : false, file : "DisplayingABitmap", fps : 60, fullscreen : false, hardware : true, height : 0, orientation : "", packageName : "org.openfl.samples.displayingabitmap", resizable : true, stencilBuffer : true, title : "Displaying a Bitmap", version : "1.0.0", vsync : false, width : 0};
};
ApplicationMain.start = function() {
	var hasMain = false;
	var entryPoint = Type.resolveClass("Main");
	var _g = 0;
	var _g1 = Type.getClassFields(entryPoint);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	lime_Assets.initialize();
	if(hasMain) Reflect.callMethod(entryPoint,Reflect.field(entryPoint,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
	}
	openfl.Lib.current.stage.dispatchEvent(new openfl.events.Event(openfl.events.Event.RESIZE,false,false));
};
var Main = function() {
	openfl.display.Sprite.call(this);
	var bitmap = new openfl.display.Bitmap(openfl_Assets.getBitmapData("assets/openfl.png"));
	this.addChild(bitmap);
	bitmap.set_x((this.stage.stageWidth - bitmap.get_width()) / 2);
	bitmap.set_y((this.stage.stageHeight - bitmap.get_height()) / 2);
};
$hxClasses["Main"] = Main;
Main.__name__ = true;
Main.__super__ = openfl.display.Sprite;
Main.prototype = $extend(openfl.display.Sprite.prototype,{
	__class__: Main
});
var DocumentClass = function() {
	openfl.Lib.current.addChild(this);
	Main.call(this);
	this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = true;
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
var lime_AssetLibrary = function() {
};
$hxClasses["lime.AssetLibrary"] = lime_AssetLibrary;
lime_AssetLibrary.__name__ = true;
lime_AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getAudioBuffer: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getImage: function(id) {
		return null;
	}
	,getPath: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		return null;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadAudioBuffer: function(id,handler) {
		handler(this.getAudioBuffer(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadImage: function(id,handler) {
		handler(this.getImage(id));
	}
	,loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,unload: function() {
	}
	,__class__: lime_AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe_ds_StringMap();
	this.path = new haxe_ds_StringMap();
	this.className = new haxe_ds_StringMap();
	lime_AssetLibrary.call(this);
	var id;
	id = "assets/openfl.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	var assetsPrefix = ApplicationMain.config.assetsPrefix;
	if(assetsPrefix != null) {
		var $it0 = this.path.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			var value = assetsPrefix + this.path.get(k);
			this.path.set(k,value);
		}
	}
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = true;
DefaultAssetLibrary.__super__ = lime_AssetLibrary;
DefaultAssetLibrary.prototype = $extend(lime_AssetLibrary.prototype,{
	createThreadPool: function() {
		var _g = this;
		this.threadPool = new lime.system.ThreadPool(0,2);
		this.threadPool.doWork.add(function(id,data) {
			data.result = data.getMethod(id);
			_g.threadPool.sendComplete(data.handler,data);
		});
		this.threadPool.onComplete.add(function(id1,data1) {
			data1.handler(data1.result);
		});
	}
	,exists: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js_Boot.__cast(type , String); else requestedType = null;
		var assetType = this.type.get(id);
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) return true;
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") return true;
		}
		return false;
	}
	,getAudioBuffer: function(id) {
		return null;
	}
	,getBytes: function(id) {
		var bytes = null;
		var loader;
		var key = this.path.get(id);
		loader = lime_app_Preloader.loaders.get(key);
		if(loader == null) return null;
		var data = loader.data;
		if(typeof(data) == "string") {
			bytes = new lime.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js_Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getFont: function(id) {
		return js_Boot.__cast(Type.createInstance(this.className.get(id),[]) , lime.text.Font);
	}
	,getImage: function(id) {
		return lime.graphics.Image.fromImageElement((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = lime_app_Preloader.images.get(key);
			return $r;
		}(this)));
	}
	,getPath: function(id) {
		return this.path.get(id);
	}
	,getText: function(id) {
		var bytes = null;
		var loader;
		var key = this.path.get(id);
		loader = lime_app_Preloader.loaders.get(key);
		if(loader == null) return null;
		var data = loader.data;
		if(typeof(data) == "string") return data; else if(js_Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js_Boot.__cast(type , String); else requestedType = null;
		return true;
	}
	,list: function(type) {
		var requestedType;
		if(type != null) requestedType = js_Boot.__cast(type , String); else requestedType = null;
		var items = [];
		var $it0 = this.type.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			if(requestedType == null || this.exists(id,type)) items.push(id);
		}
		return items;
	}
	,loadAudioBuffer: function(id,handler) {
		handler(this.getAudioBuffer(id));
	}
	,loadBytes: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new lime.net.URLLoader();
			loader.set_dataFormat(lime.net.URLLoaderDataFormat.BINARY);
			loader.onComplete.add(function(_) {
				handler(loader.data);
			});
			loader.load(new lime.net.URLRequest(this.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadImage: function(id,handler) {
		if(this.path.exists(id)) {
			var image = new Image();
			image.onload = function(_) {
				handler(lime.graphics.Image.fromImageElement(image));
			};
			image.src = this.path.get(id);
		} else handler(this.getImage(id));
	}
	,loadText: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new lime.net.URLLoader();
			loader.onComplete.add(function(_) {
				handler(loader.data);
			});
			loader.load(new lime.net.URLRequest(this.path.get(id)));
		} else handler(this.getText(id));
	}
	,__class__: DefaultAssetLibrary
});
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
Math.__name__ = true;
var NMEPreloader = function() {
	openfl.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 7;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 2;
	this.outline = new openfl.display.Sprite();
	this.outline.get_graphics().beginFill(color,0.07);
	this.outline.get_graphics().drawRect(0,0,width,height);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new openfl.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = true;
NMEPreloader.__super__ = openfl.display.Sprite;
NMEPreloader.prototype = $extend(openfl.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 16777215;
	}
	,getHeight: function() {
		var height = 0;
		if(height > 0) return height; else return openfl.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 0;
		if(width > 0) return width; else return openfl.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded = 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"__meta__");
	HxOverrides.remove(a,"prototype");
	return a;
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = true;
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = true;
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = true;
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.measure = function(f,pos) {
	var t0 = haxe_Timer.stamp();
	var r = f();
	haxe_Log.trace(haxe_Timer.stamp() - t0 + "s",pos);
	return r;
};
haxe_Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = true;
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_ds__$Vector_Vector_$Impl_$ = {};
$hxClasses["haxe.ds._Vector.Vector_Impl_"] = haxe_ds__$Vector_Vector_$Impl_$;
haxe_ds__$Vector_Vector_$Impl_$.__name__ = true;
haxe_ds__$Vector_Vector_$Impl_$.blit = function(src,srcPos,dest,destPos,len) {
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		dest[destPos + i] = src[srcPos + i];
	}
};
haxe_ds__$Vector_Vector_$Impl_$.toArray = function(this1) {
	var a = [];
	var len = this1.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		a[i] = this1[i];
	}
	return a;
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.prototype = {
	__class__: haxe_io_Bytes
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; return $x; };
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Object.prototype.hasOwnProperty.call(val,"name")) this.name = Reflect.field(val,"name"); else this.name = "Error";
	if(Object.prototype.hasOwnProperty.call(val,"message")) this.message = Reflect.field(val,"message"); else this.message = Std.string(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = true;
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
};
js_Boot.isClass = function(o) {
	return o.__name__;
};
js_Boot.isEnum = function(e) {
	return e.__ename__;
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
$hxClasses["js.html.compat.ArrayBuffer"] = js_html_compat_ArrayBuffer;
js_html_compat_ArrayBuffer.__name__ = true;
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
$hxClasses["js.html.compat.DataView"] = js_html_compat_DataView;
js_html_compat_DataView.__name__ = true;
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
$hxClasses["js.html.compat.Uint8Array"] = js_html_compat_Uint8Array;
js_html_compat_Uint8Array.__name__ = true;
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var lime_AssetCache = function() {
	this.enabled = true;
	this.audio = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.image = new haxe_ds_StringMap();
};
$hxClasses["lime.AssetCache"] = lime_AssetCache;
lime_AssetCache.__name__ = true;
lime_AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.audio = new haxe_ds_StringMap();
			this.font = new haxe_ds_StringMap();
			this.image = new haxe_ds_StringMap();
		} else {
			var keys = this.audio.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.audio.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.image.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.image.remove(key2);
			}
		}
	}
	,__class__: lime_AssetCache
};
var lime_Assets = function() { };
$hxClasses["lime.Assets"] = lime_Assets;
lime_Assets.__name__ = true;
lime_Assets.exists = function(id,type) {
	lime_Assets.initialize();
	if(type == null) type = "BINARY";
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
lime_Assets.getAudioBuffer = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime_Assets.initialize();
	if(useCache && lime_Assets.cache.enabled && lime_Assets.cache.audio.exists(id)) {
		var audio = lime_Assets.cache.audio.get(id);
		if(lime_Assets.isValidAudio(audio)) return audio;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"SOUND")) {
			if(library.isLocal(symbolName,"SOUND")) {
				var audio1 = library.getAudioBuffer(symbolName);
				if(useCache && lime_Assets.cache.enabled) lime_Assets.cache.audio.set(id,audio1);
				return audio1;
			} else haxe_Log.trace("[Assets] Audio asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 115, className : "lime.Assets", methodName : "getAudioBuffer"});
		} else haxe_Log.trace("[Assets] There is no audio asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 121, className : "lime.Assets", methodName : "getAudioBuffer"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 127, className : "lime.Assets", methodName : "getAudioBuffer"});
	return null;
};
lime_Assets.getBytes = function(id) {
	lime_Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"BINARY")) {
			if(library.isLocal(symbolName,"BINARY")) return library.getBytes(symbolName); else haxe_Log.trace("[Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 164, className : "lime.Assets", methodName : "getBytes"});
		} else haxe_Log.trace("[Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 170, className : "lime.Assets", methodName : "getBytes"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 176, className : "lime.Assets", methodName : "getBytes"});
	return null;
};
lime_Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime_Assets.initialize();
	if(useCache && lime_Assets.cache.enabled && lime_Assets.cache.font.exists(id)) return lime_Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"FONT")) {
			if(library.isLocal(symbolName,"FONT")) {
				var font = library.getFont(symbolName);
				if(useCache && lime_Assets.cache.enabled) lime_Assets.cache.font.set(id,font);
				return font;
			} else haxe_Log.trace("[Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 227, className : "lime.Assets", methodName : "getFont"});
		} else haxe_Log.trace("[Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 233, className : "lime.Assets", methodName : "getFont"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 239, className : "lime.Assets", methodName : "getFont"});
	return null;
};
lime_Assets.getImage = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime_Assets.initialize();
	if(useCache && lime_Assets.cache.enabled && lime_Assets.cache.image.exists(id)) {
		var image = lime_Assets.cache.image.get(id);
		if(lime_Assets.isValidImage(image)) return image;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"IMAGE")) {
			if(library.isLocal(symbolName,"IMAGE")) {
				var image1 = library.getImage(symbolName);
				if(useCache && lime_Assets.cache.enabled) lime_Assets.cache.image.set(id,image1);
				return image1;
			} else haxe_Log.trace("[Assets] Image asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 297, className : "lime.Assets", methodName : "getImage"});
		} else haxe_Log.trace("[Assets] There is no Image asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 303, className : "lime.Assets", methodName : "getImage"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 309, className : "lime.Assets", methodName : "getImage"});
	return null;
};
lime_Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return lime_Assets.libraries.get(name);
};
lime_Assets.getPath = function(id) {
	lime_Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe_Log.trace("[Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 426, className : "lime.Assets", methodName : "getPath"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 432, className : "lime.Assets", methodName : "getPath"});
	return null;
};
lime_Assets.getText = function(id) {
	lime_Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"TEXT")) {
			if(library.isLocal(symbolName,"TEXT")) return library.getText(symbolName); else haxe_Log.trace("[Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 469, className : "lime.Assets", methodName : "getText"});
		} else haxe_Log.trace("[Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 475, className : "lime.Assets", methodName : "getText"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 481, className : "lime.Assets", methodName : "getText"});
	return null;
};
lime_Assets.initialize = function() {
	if(!lime_Assets.initialized) {
		lime_Assets.registerLibrary("default",new DefaultAssetLibrary());
		lime_Assets.initialized = true;
	}
};
lime_Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	lime_Assets.initialize();
	if(useCache && lime_Assets.cache.enabled) {
		if(type == "IMAGE" || type == null) {
			if(lime_Assets.cache.image.exists(id)) return true;
		}
		if(type == "FONT" || type == null) {
			if(lime_Assets.cache.font.exists(id)) return true;
		}
		if(type == "SOUND" || type == "MUSIC" || type == null) {
			if(lime_Assets.cache.audio.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
lime_Assets.isValidAudio = function(buffer) {
	return buffer != null;
	return true;
};
lime_Assets.isValidImage = function(buffer) {
	return true;
};
lime_Assets.list = function(type) {
	lime_Assets.initialize();
	var items = [];
	var $it0 = lime_Assets.libraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var libraryItems = library.list(type);
		if(libraryItems != null) items = items.concat(libraryItems);
	}
	return items;
};
lime_Assets.loadAudioBuffer = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	lime_Assets.initialize();
	if(useCache && lime_Assets.cache.enabled && lime_Assets.cache.audio.exists(id)) {
		var audio = lime_Assets.cache.audio.get(id);
		if(lime_Assets.isValidAudio(audio)) {
			handler(audio);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"SOUND")) {
			if(useCache && lime_Assets.cache.enabled) library.loadAudioBuffer(symbolName,function(audio1) {
				var value = audio1;
				lime_Assets.cache.audio.set(id,value);
				handler(audio1);
			}); else library.loadAudioBuffer(symbolName,handler);
			return;
		} else haxe_Log.trace("[Assets] There is no audio asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 666, className : "lime.Assets", methodName : "loadAudioBuffer"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 672, className : "lime.Assets", methodName : "loadAudioBuffer"});
	handler(null);
};
lime_Assets.loadBytes = function(id,handler) {
	lime_Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"BINARY")) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe_Log.trace("[Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 702, className : "lime.Assets", methodName : "loadBytes"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 708, className : "lime.Assets", methodName : "loadBytes"});
	handler(null);
};
lime_Assets.loadImage = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	lime_Assets.initialize();
	if(useCache && lime_Assets.cache.enabled && lime_Assets.cache.image.exists(id)) {
		var image = lime_Assets.cache.image.get(id);
		if(lime_Assets.isValidImage(image)) {
			handler(image);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"IMAGE")) {
			if(useCache && lime_Assets.cache.enabled) library.loadImage(symbolName,function(image1) {
				lime_Assets.cache.image.set(id,image1);
				handler(image1);
			}); else library.loadImage(symbolName,handler);
			return;
		} else haxe_Log.trace("[Assets] There is no Image asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 765, className : "lime.Assets", methodName : "loadImage"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 771, className : "lime.Assets", methodName : "loadImage"});
	handler(null);
};
lime_Assets.loadLibrary = function(name,handler) {
	lime_Assets.initialize();
	var data = lime_Assets.getText("libraries/" + name + ".json");
	if(data != null && data != "") {
		var info = JSON.parse(data);
		var library = Type.createInstance(Type.resolveClass(info.type),info.args);
		lime_Assets.libraries.set(name,library);
		library.eventCallback = lime_Assets.library_onEvent;
		library.load(handler);
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 800, className : "lime.Assets", methodName : "loadLibrary"});
};
lime_Assets.loadText = function(id,handler) {
	lime_Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"TEXT")) {
			library.loadText(symbolName,handler);
			return;
		} else haxe_Log.trace("[Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 891, className : "lime.Assets", methodName : "loadText"});
	} else haxe_Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 897, className : "lime.Assets", methodName : "loadText"});
	handler(null);
};
lime_Assets.registerLibrary = function(name,library) {
	if(lime_Assets.libraries.exists(name)) lime_Assets.unloadLibrary(name);
	if(library != null) library.eventCallback = lime_Assets.library_onEvent;
	lime_Assets.libraries.set(name,library);
};
lime_Assets.unloadLibrary = function(name) {
	lime_Assets.initialize();
	var library = lime_Assets.libraries.get(name);
	if(library != null) {
		lime_Assets.cache.clear(name + ":");
		library.unload();
		library.eventCallback = null;
	}
	lime_Assets.libraries.remove(name);
};
lime_Assets.library_onEvent = function(library,type) {
	if(type == "change") lime_Assets.cache.clear();
};
var lime_app_Preloader = function() {
	this.total = 0;
	this.loaded = 0;
};
$hxClasses["lime.app.Preloader"] = lime_app_Preloader;
lime_app_Preloader.__name__ = true;
lime_app_Preloader.prototype = {
	create: function(config) {
	}
	,load: function(urls,types) {
		var url = null;
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			url = urls[i];
			var _g2 = types[i];
			switch(_g2) {
			case "IMAGE":
				var image = new Image();
				lime_app_Preloader.images.set(url,image);
				image.onload = $bind(this,this.image_onLoad);
				image.src = url;
				this.total++;
				break;
			case "BINARY":
				var loader = new lime.net.URLLoader();
				loader.set_dataFormat(lime.net.URLLoaderDataFormat.BINARY);
				lime_app_Preloader.loaders.set(url,loader);
				this.total++;
				break;
			case "TEXT":
				var loader1 = new lime.net.URLLoader();
				lime_app_Preloader.loaders.set(url,loader1);
				this.total++;
				break;
			case "FONT":
				this.total++;
				this.loadFont(url);
				break;
			default:
			}
		}
		var $it0 = lime_app_Preloader.loaders.keys();
		while( $it0.hasNext() ) {
			var url1 = $it0.next();
			var loader2 = lime_app_Preloader.loaders.get(url1);
			loader2.onComplete.add($bind(this,this.loader_onComplete));
			loader2.load(new lime.net.URLRequest(url1));
		}
		if(this.total == 0) this.start();
	}
	,loadFont: function(font) {
		var _g = this;
		if(window.document.fonts && ($_=window.document.fonts,$bind($_,$_.load))) window.document.fonts.load("1em '" + font + "'").then(function(_) {
			_g.loaded++;
			_g.update(_g.loaded,_g.total);
			if(_g.loaded == _g.total) _g.start();
		}); else {
			var node = window.document.createElement("span");
			node.innerHTML = "giItT1WQy@!-/#";
			var style = node.style;
			style.position = "absolute";
			style.left = "-10000px";
			style.top = "-10000px";
			style.fontSize = "300px";
			style.fontFamily = "sans-serif";
			style.fontVariant = "normal";
			style.fontStyle = "normal";
			style.fontWeight = "normal";
			style.letterSpacing = "0";
			window.document.body.appendChild(node);
			var width = node.offsetWidth;
			style.fontFamily = "'" + font + "', sans-serif";
			var interval = null;
			var found = false;
			var checkFont = function() {
				if(node.offsetWidth != width) {
					if(!found) {
						found = true;
						return false;
					}
					_g.loaded++;
					if(interval != null) window.clearInterval(interval);
					node.parentNode.removeChild(node);
					node = null;
					_g.update(_g.loaded,_g.total);
					if(_g.loaded == _g.total) _g.start();
					return true;
				}
				return false;
			};
			if(!checkFont()) interval = window.setInterval(checkFont,50);
		}
	}
	,start: function() {
		if(this.onComplete != null) this.onComplete();
	}
	,update: function(loaded,total) {
	}
	,image_onLoad: function(_) {
		this.loaded++;
		this.update(this.loaded,this.total);
		if(this.loaded == this.total) this.start();
	}
	,loader_onComplete: function(loader) {
		this.loaded++;
		this.update(this.loaded,this.total);
		if(this.loaded == this.total) this.start();
	}
	,__class__: lime_app_Preloader
};
var lime_audio_openal_AL = function() { };
$hxClasses["lime.audio.openal.AL"] = lime_audio_openal_AL;
lime_audio_openal_AL.__name__ = true;
lime_audio_openal_AL.bufferData = function(buffer,format,data,size,freq) {
};
lime_audio_openal_AL.buffer3f = function(buffer,param,value1,value2,value3) {
};
lime_audio_openal_AL.buffer3i = function(buffer,param,value1,value2,value3) {
};
lime_audio_openal_AL.bufferf = function(buffer,param,value) {
};
lime_audio_openal_AL.bufferfv = function(buffer,param,values) {
};
lime_audio_openal_AL.bufferi = function(buffer,param,value) {
};
lime_audio_openal_AL.bufferiv = function(buffer,param,values) {
};
lime_audio_openal_AL.deleteBuffer = function(buffer) {
};
lime_audio_openal_AL.deleteBuffers = function(buffers) {
};
lime_audio_openal_AL.deleteSource = function(source) {
};
lime_audio_openal_AL.deleteSources = function(sources) {
};
lime_audio_openal_AL.disable = function(capability) {
};
lime_audio_openal_AL.distanceModel = function(distanceModel) {
};
lime_audio_openal_AL.dopplerFactor = function(value) {
};
lime_audio_openal_AL.dopplerVelocity = function(value) {
};
lime_audio_openal_AL.enable = function(capability) {
};
lime_audio_openal_AL.genSource = function() {
	return 0;
};
lime_audio_openal_AL.genSources = function(n) {
	return null;
};
lime_audio_openal_AL.genBuffer = function() {
	return 0;
};
lime_audio_openal_AL.genBuffers = function(n) {
	return null;
};
lime_audio_openal_AL.getBoolean = function(param) {
	return false;
};
lime_audio_openal_AL.getBooleanv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getBuffer3f = function(buffer,param) {
	return null;
};
lime_audio_openal_AL.getBuffer3i = function(buffer,param) {
	return null;
};
lime_audio_openal_AL.getBufferf = function(buffer,param) {
	return 0;
};
lime_audio_openal_AL.getBufferfv = function(buffer,param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getBufferi = function(buffer,param) {
	return 0;
};
lime_audio_openal_AL.getBufferiv = function(buffer,param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getDouble = function(param) {
	return 0;
};
lime_audio_openal_AL.getDoublev = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getEnumValue = function(ename) {
	return 0;
};
lime_audio_openal_AL.getError = function() {
	return 0;
};
lime_audio_openal_AL.getErrorString = function() {
	var _g = lime_audio_openal_AL.getError();
	switch(_g) {
	case 40961:
		return "INVALID_NAME: Invalid parameter name";
	case 40962:
		return "INVALID_ENUM: Invalid enum value";
	case 40963:
		return "INVALID_VALUE: Invalid parameter value";
	case 40964:
		return "INVALID_OPERATION: Illegal operation or call";
	case 40965:
		return "OUT_OF_MEMORY: OpenAL has run out of memory";
	default:
		return "";
	}
};
lime_audio_openal_AL.getFloat = function(param) {
	return 0;
};
lime_audio_openal_AL.getFloatv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getInteger = function(param) {
	return 0;
};
lime_audio_openal_AL.getIntegerv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getListener3f = function(param) {
	return null;
};
lime_audio_openal_AL.getListener3i = function(param) {
	return null;
};
lime_audio_openal_AL.getListenerf = function(param) {
	return 0;
};
lime_audio_openal_AL.getListenerfv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getListeneri = function(param) {
	return 0;
};
lime_audio_openal_AL.getListeneriv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getProcAddress = function(fname) {
	return null;
};
lime_audio_openal_AL.getSource3f = function(source,param) {
	return null;
};
lime_audio_openal_AL.getSourcef = function(source,param) {
	return 0;
};
lime_audio_openal_AL.getSource3i = function(source,param) {
	return null;
};
lime_audio_openal_AL.getSourcefv = function(source,param) {
	return null;
};
lime_audio_openal_AL.getSourcei = function(source,param) {
	return 0;
};
lime_audio_openal_AL.getSourceiv = function(source,param,count) {
	if(count == null) count = 1;
	return null;
};
lime_audio_openal_AL.getString = function(param) {
	return null;
};
lime_audio_openal_AL.isBuffer = function(buffer) {
	return false;
};
lime_audio_openal_AL.isEnabled = function(capability) {
	return false;
};
lime_audio_openal_AL.isExtensionPresent = function(extname) {
	return false;
};
lime_audio_openal_AL.isSource = function(source) {
	return false;
};
lime_audio_openal_AL.listener3f = function(param,value1,value2,value3) {
};
lime_audio_openal_AL.listener3i = function(param,value1,value2,value3) {
};
lime_audio_openal_AL.listenerf = function(param,value) {
};
lime_audio_openal_AL.listenerfv = function(param,values) {
};
lime_audio_openal_AL.listeneri = function(param,value) {
};
lime_audio_openal_AL.listeneriv = function(param,values) {
};
lime_audio_openal_AL.source3f = function(source,param,value1,value2,value3) {
};
lime_audio_openal_AL.source3i = function(source,param,value1,value2,value3) {
};
lime_audio_openal_AL.sourcef = function(source,param,value) {
};
lime_audio_openal_AL.sourcefv = function(source,param,values) {
};
lime_audio_openal_AL.sourcei = function(source,param,value) {
};
lime_audio_openal_AL.sourceiv = function(source,param,values) {
};
lime_audio_openal_AL.sourcePlay = function(source) {
};
lime_audio_openal_AL.sourcePlayv = function(sources) {
};
lime_audio_openal_AL.sourceStop = function(source) {
};
lime_audio_openal_AL.sourceStopv = function(sources) {
};
lime_audio_openal_AL.sourceRewind = function(source) {
};
lime_audio_openal_AL.sourceRewindv = function(sources) {
};
lime_audio_openal_AL.sourcePause = function(source) {
};
lime_audio_openal_AL.sourcePausev = function(sources) {
};
lime_audio_openal_AL.sourceQueueBuffer = function(source,buffer) {
};
lime_audio_openal_AL.sourceQueueBuffers = function(source,nb,buffers) {
};
lime_audio_openal_AL.sourceUnqueueBuffer = function(source) {
	return 0;
};
lime_audio_openal_AL.sourceUnqueueBuffers = function(source,nb) {
	return null;
};
lime_audio_openal_AL.speedOfSound = function(value) {
};
var lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$ = {};
$hxClasses["lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_"] = lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$;
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.__name__ = true;
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$._new = function(format,width,height) {
	return 0;
};
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.create = function(data,format,width,height,stride) {
	return 0;
};
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.fromImage = function(image) {
	return null;
};
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.get_data = function(this1) {
	return null;
};
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.get_format = function(this1) {
	return 0;
};
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.get_height = function(this1) {
	return 0;
};
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.get_stride = function(this1) {
	return 0;
};
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.get_width = function(this1) {
	return 0;
};
var lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$ = {};
$hxClasses["lime.graphics.cairo._CairoPattern.CairoPattern_Impl_"] = lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$;
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.__name__ = true;
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$._new = function(handle) {
	return handle;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.addColorStopRGB = function(this1,offset,r,g,b) {
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.addColorStopRGBA = function(this1,offset,r,g,b,a) {
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.createForSurface = function(surface) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.createLinear = function(x0,y0,x1,y1) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.createRadial = function(cx0,cy0,radius0,cx1,cy1,radius1) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.createRGB = function(r,g,b) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.createRGBA = function(r,g,b,a) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.destroy = function(this1) {
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.get_colorStopCount = function(this1) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.get_extend = function(this1) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.set_extend = function(this1,value) {
	return value;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.get_filter = function(this1) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.set_filter = function(this1,value) {
	return value;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.get_matrix = function(this1) {
	return null;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.set_matrix = function(this1,value) {
	return value;
};
var lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$ = {};
$hxClasses["lime.graphics.cairo._CairoSurface.CairoSurface_Impl_"] = lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$;
lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$.__name__ = true;
lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$.destroy = function(this1) {
};
lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$.flush = function(this1) {
};
var lime_graphics_opengl_GL = function() { };
$hxClasses["lime.graphics.opengl.GL"] = lime_graphics_opengl_GL;
lime_graphics_opengl_GL.__name__ = true;
lime_graphics_opengl_GL.version = null;
lime_graphics_opengl_GL.context = null;
lime_graphics_opengl_GL.activeTexture = function(texture) {
	lime_graphics_opengl_GL.context.activeTexture(texture);
};
lime_graphics_opengl_GL.attachShader = function(program,shader) {
	lime_graphics_opengl_GL.context.attachShader(program,shader);
};
lime_graphics_opengl_GL.bindAttribLocation = function(program,index,name) {
	lime_graphics_opengl_GL.context.bindAttribLocation(program,index,name);
};
lime_graphics_opengl_GL.bindBuffer = function(target,buffer) {
	lime_graphics_opengl_GL.context.bindBuffer(target,buffer);
};
lime_graphics_opengl_GL.bindFramebuffer = function(target,framebuffer) {
	lime_graphics_opengl_GL.context.bindFramebuffer(target,framebuffer);
};
lime_graphics_opengl_GL.bindRenderbuffer = function(target,renderbuffer) {
	lime_graphics_opengl_GL.context.bindRenderbuffer(target,renderbuffer);
};
lime_graphics_opengl_GL.bindTexture = function(target,texture) {
	lime_graphics_opengl_GL.context.bindTexture(target,texture);
};
lime_graphics_opengl_GL.blendColor = function(red,green,blue,alpha) {
	lime_graphics_opengl_GL.context.blendColor(red,green,blue,alpha);
};
lime_graphics_opengl_GL.blendEquation = function(mode) {
	lime_graphics_opengl_GL.context.blendEquation(mode);
};
lime_graphics_opengl_GL.blendEquationSeparate = function(modeRGB,modeAlpha) {
	lime_graphics_opengl_GL.context.blendEquationSeparate(modeRGB,modeAlpha);
};
lime_graphics_opengl_GL.blendFunc = function(sfactor,dfactor) {
	lime_graphics_opengl_GL.context.blendFunc(sfactor,dfactor);
};
lime_graphics_opengl_GL.blendFuncSeparate = function(srcRGB,dstRGB,srcAlpha,dstAlpha) {
	lime_graphics_opengl_GL.context.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);
};
lime_graphics_opengl_GL.bufferData = function(target,data,usage) {
	lime_graphics_opengl_GL.context.bufferData(target,data,usage);
};
lime_graphics_opengl_GL.bufferSubData = function(target,offset,data) {
	lime_graphics_opengl_GL.context.bufferSubData(target,offset,data);
};
lime_graphics_opengl_GL.checkFramebufferStatus = function(target) {
	return lime_graphics_opengl_GL.context.checkFramebufferStatus(target);
};
lime_graphics_opengl_GL.clear = function(mask) {
	lime_graphics_opengl_GL.context.clear(mask);
};
lime_graphics_opengl_GL.clearColor = function(red,green,blue,alpha) {
	lime_graphics_opengl_GL.context.clearColor(red,green,blue,alpha);
};
lime_graphics_opengl_GL.clearDepth = function(depth) {
	lime_graphics_opengl_GL.context.clearDepth(depth);
};
lime_graphics_opengl_GL.clearStencil = function(s) {
	lime_graphics_opengl_GL.context.clearStencil(s);
};
lime_graphics_opengl_GL.colorMask = function(red,green,blue,alpha) {
	lime_graphics_opengl_GL.context.colorMask(red,green,blue,alpha);
};
lime_graphics_opengl_GL.compileShader = function(shader) {
	lime_graphics_opengl_GL.context.compileShader(shader);
};
lime_graphics_opengl_GL.compressedTexImage2D = function(target,level,internalformat,width,height,border,data) {
	lime_graphics_opengl_GL.context.compressedTexImage2D(target,level,internalformat,width,height,border,data);
};
lime_graphics_opengl_GL.compressedTexSubImage2D = function(target,level,xoffset,yoffset,width,height,format,data) {
	lime_graphics_opengl_GL.context.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data);
};
lime_graphics_opengl_GL.copyTexImage2D = function(target,level,internalformat,x,y,width,height,border) {
	lime_graphics_opengl_GL.context.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
};
lime_graphics_opengl_GL.copyTexSubImage2D = function(target,level,xoffset,yoffset,x,y,width,height) {
	lime_graphics_opengl_GL.context.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
};
lime_graphics_opengl_GL.createBuffer = function() {
	return lime_graphics_opengl_GL.context.createBuffer();
};
lime_graphics_opengl_GL.createFramebuffer = function() {
	return lime_graphics_opengl_GL.context.createFramebuffer();
};
lime_graphics_opengl_GL.createProgram = function() {
	return lime_graphics_opengl_GL.context.createProgram();
};
lime_graphics_opengl_GL.createRenderbuffer = function() {
	return lime_graphics_opengl_GL.context.createRenderbuffer();
};
lime_graphics_opengl_GL.createShader = function(type) {
	return lime_graphics_opengl_GL.context.createShader(type);
};
lime_graphics_opengl_GL.createTexture = function() {
	return lime_graphics_opengl_GL.context.createTexture();
};
lime_graphics_opengl_GL.cullFace = function(mode) {
	lime_graphics_opengl_GL.context.cullFace(mode);
};
lime_graphics_opengl_GL.deleteBuffer = function(buffer) {
	lime_graphics_opengl_GL.context.deleteBuffer(buffer);
};
lime_graphics_opengl_GL.deleteFramebuffer = function(framebuffer) {
	lime_graphics_opengl_GL.context.deleteFramebuffer(framebuffer);
};
lime_graphics_opengl_GL.deleteProgram = function(program) {
	lime_graphics_opengl_GL.context.deleteProgram(program);
};
lime_graphics_opengl_GL.deleteRenderbuffer = function(renderbuffer) {
	lime_graphics_opengl_GL.context.deleteRenderbuffer(renderbuffer);
};
lime_graphics_opengl_GL.deleteShader = function(shader) {
	lime_graphics_opengl_GL.context.deleteShader(shader);
};
lime_graphics_opengl_GL.deleteTexture = function(texture) {
	lime_graphics_opengl_GL.context.deleteTexture(texture);
};
lime_graphics_opengl_GL.depthFunc = function(func) {
	lime_graphics_opengl_GL.context.depthFunc(func);
};
lime_graphics_opengl_GL.depthMask = function(flag) {
	lime_graphics_opengl_GL.context.depthMask(flag);
};
lime_graphics_opengl_GL.depthRange = function(zNear,zFar) {
	lime_graphics_opengl_GL.context.depthRange(zNear,zFar);
};
lime_graphics_opengl_GL.detachShader = function(program,shader) {
	lime_graphics_opengl_GL.context.detachShader(program,shader);
};
lime_graphics_opengl_GL.disable = function(cap) {
	lime_graphics_opengl_GL.context.disable(cap);
};
lime_graphics_opengl_GL.disableVertexAttribArray = function(index) {
	lime_graphics_opengl_GL.context.disableVertexAttribArray(index);
};
lime_graphics_opengl_GL.drawArrays = function(mode,first,count) {
	lime_graphics_opengl_GL.context.drawArrays(mode,first,count);
};
lime_graphics_opengl_GL.drawElements = function(mode,count,type,offset) {
	lime_graphics_opengl_GL.context.drawElements(mode,count,type,offset);
};
lime_graphics_opengl_GL.enable = function(cap) {
	lime_graphics_opengl_GL.context.enable(cap);
};
lime_graphics_opengl_GL.enableVertexAttribArray = function(index) {
	lime_graphics_opengl_GL.context.enableVertexAttribArray(index);
};
lime_graphics_opengl_GL.finish = function() {
	lime_graphics_opengl_GL.context.finish();
};
lime_graphics_opengl_GL.flush = function() {
	lime_graphics_opengl_GL.context.flush();
};
lime_graphics_opengl_GL.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {
	lime_graphics_opengl_GL.context.framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer);
};
lime_graphics_opengl_GL.framebufferTexture2D = function(target,attachment,textarget,texture,level) {
	lime_graphics_opengl_GL.context.framebufferTexture2D(target,attachment,textarget,texture,level);
};
lime_graphics_opengl_GL.frontFace = function(mode) {
	lime_graphics_opengl_GL.context.frontFace(mode);
};
lime_graphics_opengl_GL.generateMipmap = function(target) {
	lime_graphics_opengl_GL.context.generateMipmap(target);
};
lime_graphics_opengl_GL.getActiveAttrib = function(program,index) {
	return lime_graphics_opengl_GL.context.getActiveAttrib(program,index);
};
lime_graphics_opengl_GL.getActiveUniform = function(program,index) {
	return lime_graphics_opengl_GL.context.getActiveUniform(program,index);
};
lime_graphics_opengl_GL.getAttachedShaders = function(program) {
	return lime_graphics_opengl_GL.context.getAttachedShaders(program);
};
lime_graphics_opengl_GL.getAttribLocation = function(program,name) {
	return lime_graphics_opengl_GL.context.getAttribLocation(program,name);
};
lime_graphics_opengl_GL.getBufferParameter = function(target,pname) {
	return lime_graphics_opengl_GL.context.getBufferParameter(target,pname);
};
lime_graphics_opengl_GL.getContextAttributes = function() {
	return lime_graphics_opengl_GL.context.getContextAttributes();
};
lime_graphics_opengl_GL.getError = function() {
	return lime_graphics_opengl_GL.context.getError();
};
lime_graphics_opengl_GL.getExtension = function(name) {
	return lime_graphics_opengl_GL.context.getExtension(name);
};
lime_graphics_opengl_GL.getFramebufferAttachmentParameter = function(target,attachment,pname) {
	return lime_graphics_opengl_GL.context.getFramebufferAttachmentParameter(target,attachment,pname);
};
lime_graphics_opengl_GL.getParameter = function(pname) {
	return lime_graphics_opengl_GL.context.getParameter(pname);
};
lime_graphics_opengl_GL.getProgramInfoLog = function(program) {
	return lime_graphics_opengl_GL.context.getProgramInfoLog(program);
};
lime_graphics_opengl_GL.getProgramParameter = function(program,pname) {
	return lime_graphics_opengl_GL.context.getProgramParameter(program,pname);
};
lime_graphics_opengl_GL.getRenderbufferParameter = function(target,pname) {
	return lime_graphics_opengl_GL.context.getRenderbufferParameter(target,pname);
};
lime_graphics_opengl_GL.getShaderInfoLog = function(shader) {
	return lime_graphics_opengl_GL.context.getShaderInfoLog(shader);
};
lime_graphics_opengl_GL.getShaderParameter = function(shader,pname) {
	return lime_graphics_opengl_GL.context.getShaderParameter(shader,pname);
};
lime_graphics_opengl_GL.getShaderPrecisionFormat = function(shadertype,precisiontype) {
	return lime_graphics_opengl_GL.context.getShaderPrecisionFormat(shadertype,precisiontype);
};
lime_graphics_opengl_GL.getShaderSource = function(shader) {
	return lime_graphics_opengl_GL.context.getShaderSource(shader);
};
lime_graphics_opengl_GL.getSupportedExtensions = function() {
	return lime_graphics_opengl_GL.context.getSupportedExtensions();
};
lime_graphics_opengl_GL.getTexParameter = function(target,pname) {
	return lime_graphics_opengl_GL.context.getTexParameter(target,pname);
};
lime_graphics_opengl_GL.getUniform = function(program,location) {
	return lime_graphics_opengl_GL.context.getUniform(program,location);
};
lime_graphics_opengl_GL.getUniformLocation = function(program,name) {
	return lime_graphics_opengl_GL.context.getUniformLocation(program,name);
};
lime_graphics_opengl_GL.getVertexAttrib = function(index,pname) {
	return lime_graphics_opengl_GL.context.getVertexAttrib(index,pname);
};
lime_graphics_opengl_GL.getVertexAttribOffset = function(index,pname) {
	return lime_graphics_opengl_GL.context.getVertexAttribOffset(index,pname);
};
lime_graphics_opengl_GL.hint = function(target,mode) {
	lime_graphics_opengl_GL.context.hint(target,mode);
};
lime_graphics_opengl_GL.isBuffer = function(buffer) {
	return lime_graphics_opengl_GL.context.isBuffer(buffer);
};
lime_graphics_opengl_GL.isContextLost = function() {
	return lime_graphics_opengl_GL.context.isContextLost();
};
lime_graphics_opengl_GL.isEnabled = function(cap) {
	return lime_graphics_opengl_GL.context.isEnabled(cap);
};
lime_graphics_opengl_GL.isFramebuffer = function(framebuffer) {
	return lime_graphics_opengl_GL.context.isFramebuffer(framebuffer);
};
lime_graphics_opengl_GL.isProgram = function(program) {
	return lime_graphics_opengl_GL.context.isProgram(program);
};
lime_graphics_opengl_GL.isRenderbuffer = function(renderbuffer) {
	return lime_graphics_opengl_GL.context.isRenderbuffer(renderbuffer);
};
lime_graphics_opengl_GL.isShader = function(shader) {
	return lime_graphics_opengl_GL.context.isShader(shader);
};
lime_graphics_opengl_GL.isTexture = function(texture) {
	return lime_graphics_opengl_GL.context.isTexture(texture);
};
lime_graphics_opengl_GL.lineWidth = function(width) {
	lime_graphics_opengl_GL.context.lineWidth(width);
};
lime_graphics_opengl_GL.linkProgram = function(program) {
	lime_graphics_opengl_GL.context.linkProgram(program);
};
lime_graphics_opengl_GL.pixelStorei = function(pname,param) {
	lime_graphics_opengl_GL.context.pixelStorei(pname,param);
};
lime_graphics_opengl_GL.polygonOffset = function(factor,units) {
	lime_graphics_opengl_GL.context.polygonOffset(factor,units);
};
lime_graphics_opengl_GL.readPixels = function(x,y,width,height,format,type,pixels) {
	lime_graphics_opengl_GL.context.readPixels(x,y,width,height,format,type,pixels);
};
lime_graphics_opengl_GL.renderbufferStorage = function(target,internalformat,width,height) {
	lime_graphics_opengl_GL.context.renderbufferStorage(target,internalformat,width,height);
};
lime_graphics_opengl_GL.sampleCoverage = function(value,invert) {
	lime_graphics_opengl_GL.context.sampleCoverage(value,invert);
};
lime_graphics_opengl_GL.scissor = function(x,y,width,height) {
	lime_graphics_opengl_GL.context.scissor(x,y,width,height);
};
lime_graphics_opengl_GL.shaderSource = function(shader,source) {
	lime_graphics_opengl_GL.context.shaderSource(shader,source);
};
lime_graphics_opengl_GL.stencilFunc = function(func,ref,mask) {
	lime_graphics_opengl_GL.context.stencilFunc(func,ref,mask);
};
lime_graphics_opengl_GL.stencilFuncSeparate = function(face,func,ref,mask) {
	lime_graphics_opengl_GL.context.stencilFuncSeparate(face,func,ref,mask);
};
lime_graphics_opengl_GL.stencilMask = function(mask) {
	lime_graphics_opengl_GL.context.stencilMask(mask);
};
lime_graphics_opengl_GL.stencilMaskSeparate = function(face,mask) {
	lime_graphics_opengl_GL.context.stencilMaskSeparate(face,mask);
};
lime_graphics_opengl_GL.stencilOp = function(fail,zfail,zpass) {
	lime_graphics_opengl_GL.context.stencilOp(fail,zfail,zpass);
};
lime_graphics_opengl_GL.stencilOpSeparate = function(face,fail,zfail,zpass) {
	lime_graphics_opengl_GL.context.stencilOpSeparate(face,fail,zfail,zpass);
};
lime_graphics_opengl_GL.texImage2D = function(target,level,internalformat,width,height,border,format,type,pixels) {
	lime_graphics_opengl_GL.context.texImage2D(target,level,internalformat,width,height,border,format,type,pixels);
};
lime_graphics_opengl_GL.texParameterf = function(target,pname,param) {
	lime_graphics_opengl_GL.context.texParameterf(target,pname,param);
};
lime_graphics_opengl_GL.texParameteri = function(target,pname,param) {
	lime_graphics_opengl_GL.context.texParameteri(target,pname,param);
};
lime_graphics_opengl_GL.texSubImage2D = function(target,level,xoffset,yoffset,width,height,format,type,pixels) {
	lime_graphics_opengl_GL.context.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,pixels);
};
lime_graphics_opengl_GL.uniform1f = function(location,x) {
	lime_graphics_opengl_GL.context.uniform1f(location,x);
};
lime_graphics_opengl_GL.uniform1fv = function(location,x) {
	lime_graphics_opengl_GL.context.uniform1fv(location,x);
};
lime_graphics_opengl_GL.uniform1i = function(location,x) {
	lime_graphics_opengl_GL.context.uniform1i(location,x);
};
lime_graphics_opengl_GL.uniform1iv = function(location,v) {
	lime_graphics_opengl_GL.context.uniform1iv(location,v);
};
lime_graphics_opengl_GL.uniform2f = function(location,x,y) {
	lime_graphics_opengl_GL.context.uniform2f(location,x,y);
};
lime_graphics_opengl_GL.uniform2fv = function(location,v) {
	lime_graphics_opengl_GL.context.uniform2fv(location,v);
};
lime_graphics_opengl_GL.uniform2i = function(location,x,y) {
	lime_graphics_opengl_GL.context.uniform2i(location,x,y);
};
lime_graphics_opengl_GL.uniform2iv = function(location,v) {
	lime_graphics_opengl_GL.context.uniform2iv(location,v);
};
lime_graphics_opengl_GL.uniform3f = function(location,x,y,z) {
	lime_graphics_opengl_GL.context.uniform3f(location,x,y,z);
};
lime_graphics_opengl_GL.uniform3fv = function(location,v) {
	lime_graphics_opengl_GL.context.uniform3fv(location,v);
};
lime_graphics_opengl_GL.uniform3i = function(location,x,y,z) {
	lime_graphics_opengl_GL.context.uniform3i(location,x,y,z);
};
lime_graphics_opengl_GL.uniform3iv = function(location,v) {
	lime_graphics_opengl_GL.context.uniform3iv(location,v);
};
lime_graphics_opengl_GL.uniform4f = function(location,x,y,z,w) {
	lime_graphics_opengl_GL.context.uniform4f(location,x,y,z,w);
};
lime_graphics_opengl_GL.uniform4fv = function(location,v) {
	lime_graphics_opengl_GL.context.uniform4fv(location,v);
};
lime_graphics_opengl_GL.uniform4i = function(location,x,y,z,w) {
	lime_graphics_opengl_GL.context.uniform4i(location,x,y,z,w);
};
lime_graphics_opengl_GL.uniform4iv = function(location,v) {
	lime_graphics_opengl_GL.context.uniform4iv(location,v);
};
lime_graphics_opengl_GL.uniformMatrix2fv = function(location,transpose,v) {
	lime_graphics_opengl_GL.context.uniformMatrix2fv(location,transpose,v);
};
lime_graphics_opengl_GL.uniformMatrix3fv = function(location,transpose,v) {
	lime_graphics_opengl_GL.context.uniformMatrix3fv(location,transpose,v);
};
lime_graphics_opengl_GL.uniformMatrix4fv = function(location,transpose,v) {
	lime_graphics_opengl_GL.context.uniformMatrix4fv(location,transpose,v);
};
lime_graphics_opengl_GL.useProgram = function(program) {
	lime_graphics_opengl_GL.context.useProgram(program);
};
lime_graphics_opengl_GL.validateProgram = function(program) {
	lime_graphics_opengl_GL.context.validateProgram(program);
};
lime_graphics_opengl_GL.vertexAttrib1f = function(indx,x) {
	lime_graphics_opengl_GL.context.vertexAttrib1f(indx,x);
};
lime_graphics_opengl_GL.vertexAttrib1fv = function(indx,values) {
	lime_graphics_opengl_GL.context.vertexAttrib1fv(indx,values);
};
lime_graphics_opengl_GL.vertexAttrib2f = function(indx,x,y) {
	lime_graphics_opengl_GL.context.vertexAttrib2f(indx,x,y);
};
lime_graphics_opengl_GL.vertexAttrib2fv = function(indx,values) {
	lime_graphics_opengl_GL.context.vertexAttrib2fv(indx,values);
};
lime_graphics_opengl_GL.vertexAttrib3f = function(indx,x,y,z) {
	lime_graphics_opengl_GL.context.vertexAttrib3f(indx,x,y,z);
};
lime_graphics_opengl_GL.vertexAttrib3fv = function(indx,values) {
	lime_graphics_opengl_GL.context.vertexAttrib3fv(indx,values);
};
lime_graphics_opengl_GL.vertexAttrib4f = function(indx,x,y,z,w) {
	lime_graphics_opengl_GL.context.vertexAttrib4f(indx,x,y,z,w);
};
lime_graphics_opengl_GL.vertexAttrib4fv = function(indx,values) {
	lime_graphics_opengl_GL.context.vertexAttrib4fv(indx,values);
};
lime_graphics_opengl_GL.vertexAttribPointer = function(indx,size,type,normalized,stride,offset) {
	lime_graphics_opengl_GL.context.vertexAttribPointer(indx,size,type,normalized,stride,offset);
};
lime_graphics_opengl_GL.viewport = function(x,y,width,height) {
	lime_graphics_opengl_GL.context.viewport(x,y,width,height);
};
lime_graphics_opengl_GL.get_version = function() {
	return 2;
};
var lime_math__$ColorMatrix_ColorMatrix_$Impl_$ = {};
$hxClasses["lime.math._ColorMatrix.ColorMatrix_Impl_"] = lime_math__$ColorMatrix_ColorMatrix_$Impl_$;
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.__name__ = true;
lime_math__$ColorMatrix_ColorMatrix_$Impl_$._new = function(data) {
	var this1;
	if(data != null && data.length == 20) this1 = data; else {
		var array = lime_math__$ColorMatrix_ColorMatrix_$Impl_$.__identity;
		var this2;
		if(array != null) this2 = new Float32Array(array); else this2 = null;
		this1 = this2;
	}
	return this1;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.clone = function(this1) {
	return lime_math__$ColorMatrix_ColorMatrix_$Impl_$._new((function($this) {
		var $r;
		var this2;
		if(this1 != null) this2 = new Float32Array(this1); else this2 = null;
		$r = this2;
		return $r;
	}(this)));
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.concat = function(this1,second) {
	var _g = this1;
	_g[0] = _g[0] + second[0];
	var _g1 = this1;
	_g1[6] = _g1[6] + second[6];
	var _g2 = this1;
	_g2[12] = _g2[12] + second[12];
	var _g3 = this1;
	_g3[18] = _g3[18] + second[18];
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.copyFrom = function(this1,other) {
	this1.set(other);
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.identity = function(this1) {
	this1[0] = 1;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = 0;
	this1[5] = 0;
	this1[6] = 1;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = 0;
	this1[11] = 0;
	this1[12] = 1;
	this1[13] = 0;
	this1[14] = 0;
	this1[15] = 0;
	this1[16] = 0;
	this1[17] = 0;
	this1[18] = 1;
	this1[19] = 0;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.getAlphaTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[18];
	var offset = this1[19] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.getBlueTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[12];
	var offset = this1[14] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.getGreenTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[6];
	var offset = this1[9] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.getRedTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[0];
	var offset = this1[4] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.__toFlashColorTransform = function(this1) {
	return null;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_alphaMultiplier = function(this1) {
	return this1[18];
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_alphaMultiplier = function(this1,value) {
	return this1[18] = value;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_alphaOffset = function(this1) {
	return this1[19] * 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_alphaOffset = function(this1,value) {
	return this1[19] = value / 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_blueMultiplier = function(this1) {
	return this1[12];
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_blueMultiplier = function(this1,value) {
	return this1[12] = value;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_blueOffset = function(this1) {
	return this1[14] * 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_blueOffset = function(this1,value) {
	return this1[14] = value / 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_color = function(this1) {
	return (this1[4] * 255 | 0) << 16 | (this1[9] * 255 | 0) << 8 | (this1[14] * 255 | 0);
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_color = function(this1,value) {
	this1[4] = (value >> 16 & 255) / 255;
	this1[9] = (value >> 8 & 255) / 255;
	this1[14] = (value & 255) / 255;
	this1[0] = 0;
	this1[6] = 0;
	this1[12] = 0;
	return lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_color(this1);
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_greenMultiplier = function(this1) {
	return this1[6];
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_greenMultiplier = function(this1,value) {
	return this1[6] = value;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_greenOffset = function(this1) {
	return this1[9] * 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_greenOffset = function(this1,value) {
	return this1[9] = value / 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_redMultiplier = function(this1) {
	return this1[0];
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_redMultiplier = function(this1,value) {
	return this1[0] = value;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get_redOffset = function(this1) {
	return this1[4] * 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set_redOffset = function(this1,value) {
	return this1[4] = value / 255;
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.get = function(this1,index) {
	return this1[index];
};
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.set = function(this1,index,value) {
	return this1[index] = value;
};
var lime_text__$Glyph_Glyph_$Impl_$ = {};
$hxClasses["lime.text._Glyph.Glyph_Impl_"] = lime_text__$Glyph_Glyph_$Impl_$;
lime_text__$Glyph_Glyph_$Impl_$.__name__ = true;
lime_text__$Glyph_Glyph_$Impl_$._new = function(i) {
	return i;
};
var lime_ui__$GamepadAxis_GamepadAxis_$Impl_$ = {};
$hxClasses["lime.ui._GamepadAxis.GamepadAxis_Impl_"] = lime_ui__$GamepadAxis_GamepadAxis_$Impl_$;
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.__name__ = true;
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "LEFT_X";
	case 1:
		return "LEFT_Y";
	case 2:
		return "RIGHT_X";
	case 3:
		return "RIGHT_Y";
	case 4:
		return "TRIGGER_LEFT";
	case 5:
		return "TRIGGER_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
};
var lime_ui__$GamepadButton_GamepadButton_$Impl_$ = {};
$hxClasses["lime.ui._GamepadButton.GamepadButton_Impl_"] = lime_ui__$GamepadButton_GamepadButton_$Impl_$;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.__name__ = true;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "A";
	case 1:
		return "B";
	case 2:
		return "X";
	case 3:
		return "Y";
	case 4:
		return "BACK";
	case 5:
		return "GUIDE";
	case 6:
		return "START";
	case 7:
		return "LEFT_STICK";
	case 8:
		return "RIGHT_STICK";
	case 9:
		return "LEFT_SHOULDER";
	case 10:
		return "RIGHT_SHOULDER";
	case 11:
		return "DPAD_UP";
	case 12:
		return "DPAD_DOWN";
	case 13:
		return "DPAD_LEFT";
	case 14:
		return "DPAD_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
};
var lime_ui__$KeyModifier_KeyModifier_$Impl_$ = {};
$hxClasses["lime.ui._KeyModifier.KeyModifier_Impl_"] = lime_ui__$KeyModifier_KeyModifier_$Impl_$;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.__name__ = true;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_altKey = function(this1) {
	return (this1 & 256) > 0 || (this1 & 512) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.set_altKey = function(this1,value) {
	if(value) this1 |= 768; else this1 &= 268435455 - 768;
	return value;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_capsLock = function(this1) {
	return (this1 & 8192) > 0 || (this1 & 8192) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.set_capsLock = function(this1,value) {
	if(value) this1 |= 8192; else this1 &= 268435455 - 8192;
	return value;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey = function(this1) {
	return (this1 & 64) > 0 || (this1 & 128) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.set_ctrlKey = function(this1,value) {
	if(value) this1 |= 192; else this1 &= 268435455 - 192;
	return value;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey = function(this1) {
	return (this1 & 1024) > 0 || (this1 & 2048) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.set_metaKey = function(this1,value) {
	if(value) this1 |= 3072; else this1 &= 268435455 - 3072;
	return value;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_numLock = function(this1) {
	return (this1 & 4096) > 0 || (this1 & 4096) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.set_numLock = function(this1,value) {
	if(value) this1 |= 4096; else this1 &= 268435455 - 4096;
	return value;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_shiftKey = function(this1) {
	return (this1 & 1) > 0 || (this1 & 2) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.set_shiftKey = function(this1,value) {
	if(value) this1 |= 3; else this1 &= 268435455 - 3;
	return value;
};
var lime_utils__$ArrayBufferView_TAError = $hxClasses["lime.utils._ArrayBufferView.TAError"] = { __ename__ : true, __constructs__ : ["RangeError"] };
lime_utils__$ArrayBufferView_TAError.RangeError = ["RangeError",0];
lime_utils__$ArrayBufferView_TAError.RangeError.__enum__ = lime_utils__$ArrayBufferView_TAError;
var lime_utils__$Float32Array_Float32Array_$Impl_$ = {};
$hxClasses["lime.utils._Float32Array.Float32Array_Impl_"] = lime_utils__$Float32Array_Float32Array_$Impl_$;
lime_utils__$Float32Array_Float32Array_$Impl_$.__name__ = true;
lime_utils__$Float32Array_Float32Array_$Impl_$.__set = function(this1,idx,val) {
	return this1[idx] = val;
};
lime_utils__$Float32Array_Float32Array_$Impl_$.__get = function(this1,idx) {
	return this1[idx];
};
lime_utils__$Float32Array_Float32Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) byteOffset = 0;
	if(byteOffset == null) return new Float32Array(bytes.b.buffer);
	if(len == null) return new Float32Array(bytes.b.buffer,byteOffset);
	return new Float32Array(bytes.b.buffer,byteOffset,len);
};
lime_utils__$Float32Array_Float32Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils__$Float32Array_Float32Array_$Impl_$.toString = function(this1) {
	if(this1 != null) return "Float32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]"; else return null;
};
var lime_utils__$Int16Array_Int16Array_$Impl_$ = {};
$hxClasses["lime.utils._Int16Array.Int16Array_Impl_"] = lime_utils__$Int16Array_Int16Array_$Impl_$;
lime_utils__$Int16Array_Int16Array_$Impl_$.__name__ = true;
lime_utils__$Int16Array_Int16Array_$Impl_$.__set = function(this1,idx,val) {
	return this1[idx] = val;
};
lime_utils__$Int16Array_Int16Array_$Impl_$.__get = function(this1,idx) {
	return this1[idx];
};
lime_utils__$Int16Array_Int16Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) byteOffset = 0;
	if(byteOffset == null) return new Int16Array(bytes.b.buffer);
	if(len == null) return new Int16Array(bytes.b.buffer,byteOffset);
	return new Int16Array(bytes.b.buffer,byteOffset,len);
};
lime_utils__$Int16Array_Int16Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils__$Int16Array_Int16Array_$Impl_$.toString = function(this1) {
	if(this1 != null) return "Int16Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]"; else return null;
};
var lime_utils__$Int32Array_Int32Array_$Impl_$ = {};
$hxClasses["lime.utils._Int32Array.Int32Array_Impl_"] = lime_utils__$Int32Array_Int32Array_$Impl_$;
lime_utils__$Int32Array_Int32Array_$Impl_$.__name__ = true;
lime_utils__$Int32Array_Int32Array_$Impl_$.__set = function(this1,idx,val) {
	return this1[idx] = val;
};
lime_utils__$Int32Array_Int32Array_$Impl_$.__get = function(this1,idx) {
	return this1[idx];
};
lime_utils__$Int32Array_Int32Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) byteOffset = 0;
	if(byteOffset == null) return new Int32Array(bytes.b.buffer);
	if(len == null) return new Int32Array(bytes.b.buffer,byteOffset);
	return new Int32Array(bytes.b.buffer,byteOffset,len);
};
lime_utils__$Int32Array_Int32Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils__$Int32Array_Int32Array_$Impl_$.toString = function(this1) {
	if(this1 != null) return "Int32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]"; else return null;
};
var lime_utils__$UInt16Array_UInt16Array_$Impl_$ = {};
$hxClasses["lime.utils._UInt16Array.UInt16Array_Impl_"] = lime_utils__$UInt16Array_UInt16Array_$Impl_$;
lime_utils__$UInt16Array_UInt16Array_$Impl_$.__name__ = true;
lime_utils__$UInt16Array_UInt16Array_$Impl_$.__set = function(this1,idx,val) {
	return this1[idx] = val;
};
lime_utils__$UInt16Array_UInt16Array_$Impl_$.__get = function(this1,idx) {
	return this1[idx];
};
lime_utils__$UInt16Array_UInt16Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) byteOffset = 0;
	if(byteOffset == null) return new Uint16Array(bytes.b.buffer);
	if(len == null) return new Uint16Array(bytes.b.buffer,byteOffset);
	return new Uint16Array(bytes.b.buffer,byteOffset,len);
};
lime_utils__$UInt16Array_UInt16Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils__$UInt16Array_UInt16Array_$Impl_$.toString = function(this1) {
	if(this1 != null) return "UInt16Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]"; else return null;
};
var lime_utils__$UInt32Array_UInt32Array_$Impl_$ = {};
$hxClasses["lime.utils._UInt32Array.UInt32Array_Impl_"] = lime_utils__$UInt32Array_UInt32Array_$Impl_$;
lime_utils__$UInt32Array_UInt32Array_$Impl_$.__name__ = true;
lime_utils__$UInt32Array_UInt32Array_$Impl_$.__set = function(this1,idx,val) {
	return this1[idx] = val;
};
lime_utils__$UInt32Array_UInt32Array_$Impl_$.__get = function(this1,idx) {
	return this1[idx];
};
lime_utils__$UInt32Array_UInt32Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) byteOffset = 0;
	if(byteOffset == null) return new Uint32Array(bytes.b.buffer);
	if(len == null) return new Uint32Array(bytes.b.buffer,byteOffset);
	return new Uint32Array(bytes.b.buffer,byteOffset,len);
};
lime_utils__$UInt32Array_UInt32Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils__$UInt32Array_UInt32Array_$Impl_$.toString = function(this1) {
	if(this1 != null) return "UInt32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]"; else return null;
};
var lime_utils__$UInt8Array_UInt8Array_$Impl_$ = {};
$hxClasses["lime.utils._UInt8Array.UInt8Array_Impl_"] = lime_utils__$UInt8Array_UInt8Array_$Impl_$;
lime_utils__$UInt8Array_UInt8Array_$Impl_$.__name__ = true;
lime_utils__$UInt8Array_UInt8Array_$Impl_$.__set = function(this1,idx,val) {
	return this1[idx] = val;
};
lime_utils__$UInt8Array_UInt8Array_$Impl_$.__get = function(this1,idx) {
	return this1[idx];
};
lime_utils__$UInt8Array_UInt8Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) return new Uint8Array(bytes.b.buffer);
	if(len == null) return new Uint8Array(bytes.b.buffer,byteOffset);
	return new Uint8Array(bytes.b.buffer,byteOffset,len);
};
lime_utils__$UInt8Array_UInt8Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
lime_utils__$UInt8Array_UInt8Array_$Impl_$.toString = function(this1) {
	if(this1 != null) return "UInt8Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]"; else return null;
};
var openfl_IAssetCache = function() { };
$hxClasses["openfl.IAssetCache"] = openfl_IAssetCache;
openfl_IAssetCache.__name__ = true;
openfl_IAssetCache.prototype = {
	__class__: openfl_IAssetCache
};
var openfl_AssetCache = function() {
	this.__enabled = true;
	this.bitmapData = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.sound = new haxe_ds_StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl_AssetCache;
openfl_AssetCache.__name__ = true;
openfl_AssetCache.__interfaces__ = [openfl_IAssetCache];
openfl_AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.bitmapData = new haxe_ds_StringMap();
			this.font = new haxe_ds_StringMap();
			this.sound = new haxe_ds_StringMap();
		} else {
			var keys = this.bitmapData.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.bitmapData.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.sound.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.sound.remove(key2);
			}
		}
	}
	,getBitmapData: function(id) {
		return this.bitmapData.get(id);
	}
	,getFont: function(id) {
		return this.font.get(id);
	}
	,getSound: function(id) {
		return this.sound.get(id);
	}
	,hasBitmapData: function(id) {
		return this.bitmapData.exists(id);
	}
	,hasFont: function(id) {
		return this.font.exists(id);
	}
	,hasSound: function(id) {
		return this.sound.exists(id);
	}
	,removeBitmapData: function(id) {
		return this.bitmapData.remove(id);
	}
	,removeFont: function(id) {
		return this.font.remove(id);
	}
	,removeSound: function(id) {
		return this.sound.remove(id);
	}
	,setBitmapData: function(id,bitmapData) {
		this.bitmapData.set(id,bitmapData);
	}
	,setFont: function(id,font) {
		this.font.set(id,font);
	}
	,setSound: function(id,sound) {
		this.sound.set(id,sound);
	}
	,get_enabled: function() {
		return this.__enabled;
	}
	,set_enabled: function(value) {
		return this.__enabled = value;
	}
	,__class__: openfl_AssetCache
};
var openfl_Assets = function() { };
$hxClasses["openfl.Assets"] = openfl_Assets;
openfl_Assets.__name__ = true;
openfl_Assets.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	openfl_Assets.dispatcher.addEventListener(type,listener,useCapture,priority,useWeakReference);
};
openfl_Assets.dispatchEvent = function(event) {
	return openfl_Assets.dispatcher.dispatchEvent(event);
};
openfl_Assets.exists = function(id,type) {
	return lime_Assets.exists(id,type);
};
openfl_Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.hasBitmapData(id)) {
		var bitmapData = openfl_Assets.cache.getBitmapData(id);
		if(openfl_Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var image = lime_Assets.getImage(id,false);
	if(image != null) {
		var bitmapData1 = openfl.display.BitmapData.fromImage(image);
		if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.setBitmapData(id,bitmapData1);
		return bitmapData1;
	}
	return null;
};
openfl_Assets.getBytes = function(id) {
	return lime_Assets.getBytes(id);
};
openfl_Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.hasFont(id)) return openfl_Assets.cache.getFont(id);
	var limeFont = lime_Assets.getFont(id,false);
	if(limeFont != null) {
		var font = openfl.text.Font.__fromLimeFont(limeFont);
		if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.setFont(id,font);
		return font;
	}
	return new openfl.text.Font();
};
openfl_Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return lime_Assets.libraries.get(name);
};
openfl_Assets.getMovieClip = function(id) {
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"MOVIE_CLIP")) {
			if(library.isLocal(symbolName,"MOVIE_CLIP")) return library.getMovieClip(symbolName); else haxe_Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 221, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe_Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 227, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe_Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 233, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
};
openfl_Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	var path = lime_Assets.getPath(id);
	if(path != null) return new openfl.media.Sound(new openfl.net.URLRequest(path));
	return null;
};
openfl_Assets.getPath = function(id) {
	return lime_Assets.getPath(id);
};
openfl_Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.hasSound(id)) {
		var sound = openfl_Assets.cache.getSound(id);
		if(openfl_Assets.isValidSound(sound)) return sound;
	}
	var path = lime_Assets.getPath(id);
	if(path != null) return new openfl.media.Sound(new openfl.net.URLRequest(path));
	return null;
};
openfl_Assets.getText = function(id) {
	return lime_Assets.getText(id);
};
openfl_Assets.hasEventListener = function(type) {
	return openfl_Assets.dispatcher.hasEventListener(type);
};
openfl_Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl_Assets.cache.get_enabled()) {
		if(type == "IMAGE" || type == null) {
			if(openfl_Assets.cache.hasBitmapData(id)) return true;
		}
		if(type == "FONT" || type == null) {
			if(openfl_Assets.cache.hasFont(id)) return true;
		}
		if(type == "SOUND" || type == "MUSIC" || type == null) {
			if(openfl_Assets.cache.hasSound(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
openfl_Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData != null && bitmapData.__image != null;
	return true;
};
openfl_Assets.isValidSound = function(sound) {
	return true;
};
openfl_Assets.list = function(type) {
	return lime_Assets.list(type);
};
openfl_Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.hasBitmapData(id)) {
		var bitmapData = openfl_Assets.cache.getBitmapData(id);
		if(openfl_Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	lime_Assets.loadImage(id,function(image) {
		if(image != null) {
			var bitmapData1 = openfl.display.BitmapData.fromImage(image);
			if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.setBitmapData(id,bitmapData1);
			handler(bitmapData1);
		}
	},false);
};
openfl_Assets.loadBytes = function(id,handler) {
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"BINARY")) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe_Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 546, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe_Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 552, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
};
openfl_Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.hasFont(id)) {
		handler(openfl_Assets.cache.getFont(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"FONT")) {
			library.loadFont(symbolName,function(limeFont) {
				var font = openfl.text.Font.__fromLimeFont(limeFont);
				if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.setFont(id,font);
				handler(font);
			});
			return;
		} else haxe_Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 611, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe_Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 617, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
};
openfl_Assets.loadLibrary = function(name,handler) {
	lime_Assets.loadLibrary(name,handler);
};
openfl_Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	handler(openfl_Assets.getMusic(id,useCache));
};
openfl_Assets.loadMovieClip = function(id,handler) {
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"MOVIE_CLIP")) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe_Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 695, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe_Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 701, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
};
openfl_Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	handler(openfl_Assets.getSound(id,useCache));
};
openfl_Assets.loadText = function(id,handler) {
	lime_Assets.loadText(id,handler);
};
openfl_Assets.registerLibrary = function(name,library) {
	lime_Assets.registerLibrary(name,library);
};
openfl_Assets.removeEventListener = function(type,listener,capture) {
	if(capture == null) capture = false;
	openfl_Assets.dispatcher.removeEventListener(type,listener,capture);
};
openfl_Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
};
openfl_Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
};
openfl_Assets.unloadLibrary = function(name) {
	lime_Assets.unloadLibrary(name);
};
openfl_Assets.library_onEvent = function(library,type) {
	if(type == "change") {
		openfl_Assets.cache.clear();
		openfl_Assets.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
var openfl_AssetLibrary = function() {
	lime_AssetLibrary.call(this);
};
$hxClasses["openfl.AssetLibrary"] = openfl_AssetLibrary;
openfl_AssetLibrary.__name__ = true;
openfl_AssetLibrary.__super__ = lime_AssetLibrary;
openfl_AssetLibrary.prototype = $extend(lime_AssetLibrary.prototype,{
	getMovieClip: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getSound: function(id) {
		return null;
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,__class__: openfl_AssetLibrary
});
var openfl__$Vector_Vector_$Impl_$ = {};
$hxClasses["openfl._Vector.Vector_Impl_"] = openfl__$Vector_Vector_$Impl_$;
openfl__$Vector_Vector_$Impl_$.__name__ = true;
openfl__$Vector_Vector_$Impl_$._new = function(length,fixed) {
	if(fixed == null) fixed = false;
	if(length == null) length = 0;
	var this1;
	this1 = new openfl_VectorData();
	var this2;
	this2 = new Array(length);
	this1.data = this2;
	this1.length = length;
	this1.fixed = fixed;
	return this1;
};
openfl__$Vector_Vector_$Impl_$.concat = function(this1,a) {
	var vectorData = new openfl_VectorData();
	if(a != null) vectorData.length = this1.length + a.length; else vectorData.length = this1.length;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(vectorData.length);
	vectorData.data = this2;
	haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,0,vectorData.data,0,this1.length);
	if(a != null) haxe_ds__$Vector_Vector_$Impl_$.blit(a.data,0,vectorData.data,this1.length,a.length);
	return vectorData;
};
openfl__$Vector_Vector_$Impl_$.copy = function(this1) {
	var vectorData = new openfl_VectorData();
	vectorData.length = this1.length;
	vectorData.fixed = this1.fixed;
	var this2;
	this2 = new Array(this1.length);
	vectorData.data = this2;
	haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,0,vectorData.data,0,this1.length);
	return vectorData;
};
openfl__$Vector_Vector_$Impl_$.iterator = function(this1) {
	return new openfl_VectorDataIterator(this1);
};
openfl__$Vector_Vector_$Impl_$.join = function(this1,sep) {
	var output = "";
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(i > 0) output += sep;
		output += Std.string(this1.data[i]);
	}
	return output;
};
openfl__$Vector_Vector_$Impl_$.pop = function(this1) {
	var value = null;
	if(!this1.fixed) {
		if(this1.length > 0) {
			this1.length--;
			value = this1.data[this1.length];
		}
	}
	return value;
};
openfl__$Vector_Vector_$Impl_$.push = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.data.length + 10);
			data = this2;
			haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,0,data,0,this1.data.length);
			this1.data = data;
		}
		this1.data[this1.length - 1] = x;
	}
	return this1.length;
};
openfl__$Vector_Vector_$Impl_$.reverse = function(this1) {
	var data;
	var this2;
	this2 = new Array(this1.length);
	data = this2;
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		data[this1.length - 1 - i] = this1.data[i];
	}
	this1.data = data;
};
openfl__$Vector_Vector_$Impl_$.shift = function(this1) {
	if(!this1.fixed && this1.length > 0) {
		this1.length--;
		var value = this1.data[0];
		haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,1,this1.data,0,this1.length);
		return value;
	}
	return null;
};
openfl__$Vector_Vector_$Impl_$.unshift = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.length + 10);
			data = this2;
			haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,0,data,1,this1.data.length);
			this1.data = data;
		} else haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,0,this1.data,1,this1.length - 1);
		this1.data[0] = x;
	}
};
openfl__$Vector_Vector_$Impl_$.slice = function(this1,pos,end) {
	if(end == null) end = 0;
	if(pos == null) pos = 0;
	if(pos < 0) pos += this1.length;
	if(end <= 0) end += this1.length;
	if(end > this1.length) end = this1.length;
	var length = end - pos;
	if(length <= 0 || length > this1.length) length = this1.length;
	var vectorData = new openfl_VectorData();
	vectorData.length = end - pos;
	vectorData.fixed = true;
	var this2;
	this2 = new Array(length);
	vectorData.data = this2;
	haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,pos,vectorData.data,0,length);
	return vectorData;
};
openfl__$Vector_Vector_$Impl_$.sort = function(this1,f) {
	var array = haxe_ds__$Vector_Vector_$Impl_$.toArray(this1.data);
	array.sort(f);
	var vec;
	var this2;
	this2 = new Array(array.length);
	vec = this2;
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = array[i];
	}
	this1.data = vec;
};
openfl__$Vector_Vector_$Impl_$.splice = function(this1,pos,len) {
	if(pos < 0) pos += this1.length;
	if(pos + len > this1.length) len = this1.length - pos;
	if(len < 0) len = 0;
	var vectorData = new openfl_VectorData();
	vectorData.length = len;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(len);
	vectorData.data = this2;
	haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,pos,vectorData.data,0,len);
	if(len > 0) {
		this1.length -= len;
		haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,pos + len,this1.data,pos,this1.length - pos);
	}
	return vectorData;
};
openfl__$Vector_Vector_$Impl_$.toString = function(this1) {
	return haxe_ds__$Vector_Vector_$Impl_$.toArray(this1.data).toString();
};
openfl__$Vector_Vector_$Impl_$.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var value = -1;
	var _g1 = from;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1.data[i] == x) {
			value = i;
			break;
		}
	}
	return value;
};
openfl__$Vector_Vector_$Impl_$.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var value = -1;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1.data[i] == x) {
			value = i;
			break;
		}
		i--;
	}
	return value;
};
openfl__$Vector_Vector_$Impl_$.ofArray = function(a) {
	var vectorData = new openfl_VectorData();
	vectorData.length = a.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(a.length);
	vec = this1;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = a[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl__$Vector_Vector_$Impl_$.convert = function(v) {
	return v;
};
openfl__$Vector_Vector_$Impl_$.get = function(this1,index) {
	return this1.data[index];
};
openfl__$Vector_Vector_$Impl_$.set = function(this1,key,value) {
	if(!this1.fixed) {
		if(key >= this1.length) this1.length = key + 1;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.data.length + 10);
			data = this2;
			haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,0,data,0,this1.data.length);
			this1.data = data;
		}
	}
	return this1.data[key] = value;
};
openfl__$Vector_Vector_$Impl_$.fromArray = function(value) {
	var vectorData = new openfl_VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(value.length);
	vec = this1;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = value[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl__$Vector_Vector_$Impl_$.toArray = function(this1) {
	var value = [];
	var _g1 = 0;
	var _g = this1.data.length;
	while(_g1 < _g) {
		var i = _g1++;
		value.push(this1.data[i]);
	}
	return value;
};
openfl__$Vector_Vector_$Impl_$.fromHaxeVector = function(value) {
	var vectorData = new openfl_VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	vectorData.data = value;
	return vectorData;
};
openfl__$Vector_Vector_$Impl_$.toHaxeVector = function(this1) {
	return this1.data;
};
openfl__$Vector_Vector_$Impl_$.fromVectorData = function(value) {
	return value;
};
openfl__$Vector_Vector_$Impl_$.toVectorData = function(this1) {
	return this1;
};
openfl__$Vector_Vector_$Impl_$.get_length = function(this1) {
	return this1.length;
};
openfl__$Vector_Vector_$Impl_$.set_length = function(this1,value) {
	if(!this1.fixed) {
		if(value > this1.length) {
			var data;
			var this2;
			this2 = new Array(value);
			data = this2;
			haxe_ds__$Vector_Vector_$Impl_$.blit(this1.data,0,data,0,Std["int"](Math.min(this1.data.length,value)));
			this1.data = data;
		}
		this1.length = value;
	}
	return value;
};
openfl__$Vector_Vector_$Impl_$.get_fixed = function(this1) {
	return this1.fixed;
};
openfl__$Vector_Vector_$Impl_$.set_fixed = function(this1,value) {
	return this1.fixed = value;
};
var openfl_VectorData = function() {
	this.length = 0;
};
$hxClasses["openfl.VectorData"] = openfl_VectorData;
openfl_VectorData.__name__ = true;
openfl_VectorData.prototype = {
	__class__: openfl_VectorData
};
var openfl_VectorDataIterator = function(data) {
	this.index = 0;
	this.vectorData = data;
};
$hxClasses["openfl.VectorDataIterator"] = openfl_VectorDataIterator;
openfl_VectorDataIterator.__name__ = true;
openfl_VectorDataIterator.prototype = {
	hasNext: function() {
		return this.index < this.vectorData.length;
	}
	,next: function() {
		var index = this.index++;
		return this.vectorData.data[index];
	}
	,__class__: openfl_VectorDataIterator
};
var openfl__$internal_renderer_opengl_shaders2_Shader = function(gl) {
	this.uniforms = new haxe_ds_StringMap();
	this.attributes = new haxe_ds_StringMap();
	this.ID = openfl__$internal_renderer_opengl_shaders2_Shader.UID++;
	this.gl = gl;
	this.program = null;
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.Shader"] = openfl__$internal_renderer_opengl_shaders2_Shader;
openfl__$internal_renderer_opengl_shaders2_Shader.__name__ = true;
openfl__$internal_renderer_opengl_shaders2_Shader.compileProgram = function(gl,vertexSrc,fragmentSrc) {
	var vertexShader = openfl__$internal_renderer_opengl_shaders2_Shader.compileShader(gl,vertexSrc,gl.VERTEX_SHADER);
	var fragmentShader = openfl__$internal_renderer_opengl_shaders2_Shader.compileShader(gl,fragmentSrc,gl.FRAGMENT_SHADER);
	var program = gl.createProgram();
	if(vertexShader != null && fragmentShader != null) {
		gl.attachShader(program,vertexShader);
		gl.attachShader(program,fragmentShader);
		gl.linkProgram(program);
		if(gl.getProgramParameter(program,gl.LINK_STATUS) == 0) haxe_Log.trace("Could not initialize shaders",{ fileName : "Shader.hx", lineNumber : 127, className : "openfl._internal.renderer.opengl.shaders2.Shader", methodName : "compileProgram"});
	}
	return program;
};
openfl__$internal_renderer_opengl_shaders2_Shader.compileShader = function(gl,shaderSrc,type) {
	var src = shaderSrc.join("\n");
	var shader = gl.createShader(type);
	gl.shaderSource(shader,src);
	gl.compileShader(shader);
	if(gl.getShaderParameter(shader,gl.COMPILE_STATUS) == 0) {
		haxe_Log.trace(gl.getShaderInfoLog(shader),{ fileName : "Shader.hx", lineNumber : 141, className : "openfl._internal.renderer.opengl.shaders2.Shader", methodName : "compileShader"});
		return null;
	}
	return shader;
};
openfl__$internal_renderer_opengl_shaders2_Shader.prototype = {
	init: function() {
		this.program = openfl__$internal_renderer_opengl_shaders2_Shader.compileProgram(this.gl,this.vertexSrc,this.fragmentSrc);
		this.gl.useProgram(this.program);
	}
	,destroy: function() {
		if(this.program != null) this.gl.deleteProgram(this.program);
		this.attributes = null;
	}
	,getAttribLocation: function(attribute) {
		if(this.program == null) throw new js__$Boot_HaxeError("Shader isn't initialized");
		if(this.attributes.exists(attribute)) return this.attributes.get(attribute); else {
			var location = this.gl.getAttribLocation(this.program,attribute);
			this.attributes.set(attribute,location);
			return location;
		}
	}
	,getUniformLocation: function(uniform) {
		if(this.program == null) throw new js__$Boot_HaxeError("Shader isn't initialized");
		if(this.uniforms.exists(uniform)) return this.uniforms.get(uniform); else {
			var location = this.gl.getUniformLocation(this.program,uniform);
			this.uniforms.set(uniform,location);
			return location;
		}
	}
	,enableVertexAttribute: function(attribute,stride,offset) {
		var location = this.getAttribLocation(attribute.name);
		this.gl.enableVertexAttribArray(location);
		this.gl.vertexAttribPointer(location,attribute.components,attribute.type,attribute.normalized,stride,offset * 4);
	}
	,disableVertexAttribute: function(attribute,setDefault) {
		if(setDefault == null) setDefault = true;
		var location = this.getAttribLocation(attribute.name);
		this.gl.disableVertexAttribArray(location);
		if(setDefault) {
			var _g = attribute.components;
			switch(_g) {
			case 1:
				this.gl.vertexAttrib1fv(location,attribute.defaultValue.subarray(0,1));
				break;
			case 2:
				this.gl.vertexAttrib2fv(location,attribute.defaultValue.subarray(0,2));
				break;
			case 3:
				this.gl.vertexAttrib3fv(location,attribute.defaultValue.subarray(0,3));
				break;
			default:
				this.gl.vertexAttrib4fv(location,attribute.defaultValue.subarray(0,4));
			}
		}
	}
	,bindVertexArray: function(va) {
		var offset = 0;
		var stride = va.get_stride();
		var _g = 0;
		var _g1 = va.attributes;
		while(_g < _g1.length) {
			var attribute = _g1[_g];
			++_g;
			if(attribute.enabled) {
				this.enableVertexAttribute(attribute,stride,offset);
				offset += Math.floor(attribute.components * attribute.getElementsBytes() / 4);
			} else this.disableVertexAttribute(attribute,true);
		}
	}
	,unbindVertexArray: function(va) {
		var _g = 0;
		var _g1 = va.attributes;
		while(_g < _g1.length) {
			var attribute = _g1[_g];
			++_g;
			this.disableVertexAttribute(attribute,false);
		}
	}
	,__class__: openfl__$internal_renderer_opengl_shaders2_Shader
};
var openfl__$internal_renderer_opengl_shaders2_DefaultShader = function(gl) {
	openfl__$internal_renderer_opengl_shaders2_Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + "aPosition" + ";","attribute vec2 " + "aTexCoord0" + ";","attribute vec4 " + "aColor" + ";","uniform mat3 " + "uProjectionMatrix" + ";","varying vec2 vTexCoord;","varying vec4 vColor;","void main(void) {","   gl_Position = vec4((" + "uProjectionMatrix" + " * vec3(" + "aPosition" + ", 1.0)).xy, 0.0, 1.0);","   vTexCoord = " + "aTexCoord0" + ";","   vColor = " + "aColor" + ";","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform sampler2D " + "uSampler0" + ";","uniform vec4 " + "uColorMultiplier" + ";","uniform vec4 " + "uColorOffset" + ";","varying vec2 vTexCoord;","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const vec4 tint, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * tint * multiplier;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   vec4 tc = texture2D(" + "uSampler0" + ", vTexCoord);","   gl_FragColor = colorTransform(tc, vColor, " + "uColorMultiplier" + ", " + "uColorOffset" + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.DefaultShader"] = openfl__$internal_renderer_opengl_shaders2_DefaultShader;
openfl__$internal_renderer_opengl_shaders2_DefaultShader.__name__ = true;
openfl__$internal_renderer_opengl_shaders2_DefaultShader.__super__ = openfl__$internal_renderer_opengl_shaders2_Shader;
openfl__$internal_renderer_opengl_shaders2_DefaultShader.prototype = $extend(openfl__$internal_renderer_opengl_shaders2_Shader.prototype,{
	init: function() {
		openfl__$internal_renderer_opengl_shaders2_Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aTexCoord0");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl__$internal_renderer_opengl_shaders2_DefaultShader
});
var openfl__$internal_renderer_opengl_shaders2_DrawTrianglesShader = function(gl) {
	openfl__$internal_renderer_opengl_shaders2_Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + "aPosition" + ";","attribute vec2 " + "aTexCoord0" + ";","attribute vec4 " + "aColor" + ";","uniform mat3 " + "uProjectionMatrix" + ";","varying vec2 vTexCoord;","varying vec4 vColor;","void main(void) {","   gl_Position = vec4((" + "uProjectionMatrix" + " * vec3(" + "aPosition" + ", 1.0)).xy, 0.0, 1.0);","   vTexCoord = " + "aTexCoord0" + ";","   vColor = " + "aColor" + ".bgra;","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform sampler2D " + "uSampler0" + ";","uniform vec3 " + "uColor" + ";","uniform bool " + "uUseTexture" + ";","uniform float " + "uAlpha" + ";","uniform vec4 " + "uColorMultiplier" + ";","uniform vec4 " + "uColorOffset" + ";","varying vec2 vTexCoord;","varying vec4 vColor;","vec4 tmp;","vec4 colorTransform(const vec4 color, const vec4 tint, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * tint * multiplier;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   if(" + "uUseTexture" + ") {","       tmp = texture2D(" + "uSampler0" + ", vTexCoord);","   } else {","       tmp = vec4(" + "uColor" + ", 1.);","   }","   gl_FragColor = colorTransform(tmp, vColor, " + "uColorMultiplier" + ", " + "uColorOffset" + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader"] = openfl__$internal_renderer_opengl_shaders2_DrawTrianglesShader;
openfl__$internal_renderer_opengl_shaders2_DrawTrianglesShader.__name__ = true;
openfl__$internal_renderer_opengl_shaders2_DrawTrianglesShader.__super__ = openfl__$internal_renderer_opengl_shaders2_Shader;
openfl__$internal_renderer_opengl_shaders2_DrawTrianglesShader.prototype = $extend(openfl__$internal_renderer_opengl_shaders2_Shader.prototype,{
	init: function() {
		openfl__$internal_renderer_opengl_shaders2_Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aTexCoord0");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uColor");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uUseTexture");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl__$internal_renderer_opengl_shaders2_DrawTrianglesShader
});
var openfl__$internal_renderer_opengl_shaders2_FillShader = function(gl) {
	openfl__$internal_renderer_opengl_shaders2_Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + "aPosition" + ";","uniform mat3 " + "uTranslationMatrix" + ";","uniform mat3 " + "uProjectionMatrix" + ";","uniform vec4 " + "uColor" + ";","uniform float " + "uAlpha" + ";","uniform vec4 " + "uColorMultiplier" + ";","uniform vec4 " + "uColorOffset" + ";","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 result = color * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   gl_Position = vec4((" + "uProjectionMatrix" + " * " + "uTranslationMatrix" + " * vec3(" + "aPosition" + ", 1.0)).xy, 0.0, 1.0);","   vColor = colorTransform(" + "uColor" + ", " + "uAlpha" + ", " + "uColorMultiplier" + ", " + "uColorOffset" + ");","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.FillShader"] = openfl__$internal_renderer_opengl_shaders2_FillShader;
openfl__$internal_renderer_opengl_shaders2_FillShader.__name__ = true;
openfl__$internal_renderer_opengl_shaders2_FillShader.__super__ = openfl__$internal_renderer_opengl_shaders2_Shader;
openfl__$internal_renderer_opengl_shaders2_FillShader.prototype = $extend(openfl__$internal_renderer_opengl_shaders2_Shader.prototype,{
	init: function() {
		openfl__$internal_renderer_opengl_shaders2_Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uColor");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl__$internal_renderer_opengl_shaders2_FillShader
});
var openfl__$internal_renderer_opengl_shaders2_PatternFillShader = function(gl) {
	openfl__$internal_renderer_opengl_shaders2_Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + "aPosition" + ";","uniform mat3 " + "uTranslationMatrix" + ";","uniform mat3 " + "uProjectionMatrix" + ";","uniform mat3 " + "uPatternMatrix" + ";","varying vec2 vPosition;","void main(void) {","   gl_Position = vec4((" + "uProjectionMatrix" + " * " + "uTranslationMatrix" + " * vec3(" + "aPosition" + ", 1.0)).xy, 0.0, 1.0);","   vPosition = (" + "uPatternMatrix" + " * vec3(" + "aPosition" + ", 1)).xy;","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform float " + "uAlpha" + ";","uniform vec2 " + "uPatternTL" + ";","uniform vec2 " + "uPatternBR" + ";","uniform sampler2D " + "uSampler0" + ";","uniform vec4 " + "uColorMultiplier" + ";","uniform vec4 " + "uColorOffset" + ";","varying vec2 vPosition;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   vec2 pos = mix(" + "uPatternTL" + ", " + "uPatternBR" + ", vPosition);","   vec4 tcol = texture2D(" + "uSampler0" + ", pos);","   gl_FragColor = colorTransform(tcol, " + "uAlpha" + ", " + "uColorMultiplier" + ", " + "uColorOffset" + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.PatternFillShader"] = openfl__$internal_renderer_opengl_shaders2_PatternFillShader;
openfl__$internal_renderer_opengl_shaders2_PatternFillShader.__name__ = true;
openfl__$internal_renderer_opengl_shaders2_PatternFillShader.__super__ = openfl__$internal_renderer_opengl_shaders2_Shader;
openfl__$internal_renderer_opengl_shaders2_PatternFillShader.prototype = $extend(openfl__$internal_renderer_opengl_shaders2_Shader.prototype,{
	init: function() {
		openfl__$internal_renderer_opengl_shaders2_Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uPatternMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uPatternTL");
		this.getUniformLocation("uPatternBR");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl__$internal_renderer_opengl_shaders2_PatternFillShader
});
var openfl__$internal_renderer_opengl_shaders2_PrimitiveShader = function(gl) {
	openfl__$internal_renderer_opengl_shaders2_Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + "aPosition" + ";","attribute vec4 " + "aColor" + ";","uniform mat3 " + "uTranslationMatrix" + ";","uniform mat3 " + "uProjectionMatrix" + ";","uniform vec4 " + "uColorMultiplier" + ";","uniform vec4 " + "uColorOffset" + ";","uniform float " + "uAlpha" + ";","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 result = color * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   gl_Position = vec4((" + "uProjectionMatrix" + " * " + "uTranslationMatrix" + " * vec3(" + "aPosition" + ", 1.0)).xy, 0.0, 1.0);","   vColor = colorTransform(" + "aColor" + ", " + "uAlpha" + ", " + "uColorMultiplier" + ", " + "uColorOffset" + ");","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.PrimitiveShader"] = openfl__$internal_renderer_opengl_shaders2_PrimitiveShader;
openfl__$internal_renderer_opengl_shaders2_PrimitiveShader.__name__ = true;
openfl__$internal_renderer_opengl_shaders2_PrimitiveShader.__super__ = openfl__$internal_renderer_opengl_shaders2_Shader;
openfl__$internal_renderer_opengl_shaders2_PrimitiveShader.prototype = $extend(openfl__$internal_renderer_opengl_shaders2_Shader.prototype,{
	init: function() {
		openfl__$internal_renderer_opengl_shaders2_Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl__$internal_renderer_opengl_shaders2_PrimitiveShader
});
var openfl__$internal_renderer_opengl_utils_DrawPath = function() {
	this.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
	this.points = [];
	this.winding = 0;
	this.isRemovable = true;
	this.fillIndex = 0;
	this.line = new openfl__$internal_renderer_opengl_utils_LineStyle();
	this.fill = openfl__$internal_renderer_opengl_utils_FillType.None;
};
$hxClasses["openfl._internal.renderer.opengl.utils.DrawPath"] = openfl__$internal_renderer_opengl_utils_DrawPath;
openfl__$internal_renderer_opengl_utils_DrawPath.__name__ = true;
openfl__$internal_renderer_opengl_utils_DrawPath.getStack = function(graphics,gl) {
	return openfl__$internal_renderer_opengl_utils_PathBuiler.build(graphics,gl);
};
openfl__$internal_renderer_opengl_utils_DrawPath.prototype = {
	update: function(line,fill,fillIndex,winding) {
		this.updateLine(line);
		this.fill = fill;
		this.fillIndex = fillIndex;
		this.winding = winding;
	}
	,updateLine: function(line) {
		this.line.width = line.width;
		this.line.color = line.color;
		if(line.alpha == null) this.line.alpha = 1; else this.line.alpha = line.alpha;
		if(line.scaleMode == null) this.line.scaleMode = openfl.display.LineScaleMode.NORMAL; else this.line.scaleMode = line.scaleMode;
		if(line.caps == null) this.line.caps = openfl.display.CapsStyle.ROUND; else this.line.caps = line.caps;
		if(line.joints == null) this.line.joints = openfl.display.JointStyle.ROUND; else this.line.joints = line.joints;
		this.line.miterLimit = line.miterLimit;
	}
	,__class__: openfl__$internal_renderer_opengl_utils_DrawPath
};
var openfl__$internal_renderer_opengl_utils_PathBuiler = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.PathBuiler"] = openfl__$internal_renderer_opengl_utils_PathBuiler;
openfl__$internal_renderer_opengl_utils_PathBuiler.__name__ = true;
openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = null;
openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths = null;
openfl__$internal_renderer_opengl_utils_PathBuiler.__line = null;
openfl__$internal_renderer_opengl_utils_PathBuiler.__fill = null;
openfl__$internal_renderer_opengl_utils_PathBuiler.closePath = function() {
	var l = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length;
	if(l <= 0) return;
	if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type == openfl__$internal_renderer_opengl_utils_GraphicType.Polygon && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.fill != openfl__$internal_renderer_opengl_utils_FillType.None) {
		var sx = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points[0];
		var sy = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points[1];
		var ex = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points[l - 2];
		var ey = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points[l - 1];
		if(!(sx == ex && sy == ey)) openfl__$internal_renderer_opengl_utils_PathBuiler.lineTo(sx,sy);
	}
};
openfl__$internal_renderer_opengl_utils_PathBuiler.endFill = function() {
	openfl__$internal_renderer_opengl_utils_PathBuiler.__fill = openfl__$internal_renderer_opengl_utils_FillType.None;
	openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex++;
};
openfl__$internal_renderer_opengl_utils_PathBuiler.moveTo = function(x,y) {
	if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
	openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
	openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
	openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
	openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(x);
	openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(y);
	openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
};
openfl__$internal_renderer_opengl_utils_PathBuiler.lineTo = function(x,y) {
	var points = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points;
	var push_point = true;
	if(points.length > 1) {
		var lastX = points[points.length - 2];
		var lastY = points[points.length - 1];
		if(lastX == x && lastY == y) push_point = false;
	}
	if(push_point == true) {
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(x);
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(y);
	}
};
openfl__$internal_renderer_opengl_utils_PathBuiler.curveTo = function(cx,cy,x,y) {
	if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) {
		if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(0);
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(0);
		openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
	}
	var xa = 0;
	var ya = 0;
	var n = 20;
	var points = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points;
	var fromX = points[points.length - 2];
	var fromY = points[points.length - 1];
	var px = 0;
	var py = 0;
	var tmp = 0;
	var _g1 = 1;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		tmp = i / n;
		xa = fromX + (cx - fromX) * tmp;
		ya = fromY + (cy - fromY) * tmp;
		px = xa + (cx + (x - cx) * tmp - xa) * tmp;
		py = ya + (cy + (y - cy) * tmp - ya) * tmp;
		points.push(px);
		points.push(py);
	}
};
openfl__$internal_renderer_opengl_utils_PathBuiler.cubicCurveTo = function(cx,cy,cx2,cy2,x,y) {
	if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) {
		if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(0);
		openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(0);
		openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
	}
	var n = 20;
	var dt = 0;
	var dt2 = 0;
	var dt3 = 0;
	var t2 = 0;
	var t3 = 0;
	var points = openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points;
	var fromX = points[points.length - 2];
	var fromY = points[points.length - 1];
	var px = 0;
	var py = 0;
	var tmp = 0;
	var _g1 = 1;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		tmp = i / n;
		dt = 1 - tmp;
		dt2 = dt * dt;
		dt3 = dt2 * dt;
		t2 = tmp * tmp;
		t3 = t2 * tmp;
		px = dt3 * fromX + 3 * dt2 * tmp * cx + 3 * dt * t2 * cx2 + t3 * x;
		py = dt3 * fromY + 3 * dt2 * tmp * cy + 3 * dt * t2 * cy2 + t3 * y;
		points.push(px);
		points.push(py);
	}
};
openfl__$internal_renderer_opengl_utils_PathBuiler.graphicDataPop = function() {
	if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
};
openfl__$internal_renderer_opengl_utils_PathBuiler.build = function(graphics,gl) {
	var glStack = null;
	var bounds = graphics.__bounds;
	openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths = [];
	openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
	openfl__$internal_renderer_opengl_utils_PathBuiler.__line = new openfl__$internal_renderer_opengl_utils_LineStyle();
	openfl__$internal_renderer_opengl_utils_PathBuiler.__fill = openfl__$internal_renderer_opengl_utils_FillType.None;
	openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex = 0;
	glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
	if(glStack == null) glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId] = new openfl__$internal_renderer_opengl_utils_GLStack(gl);
	if(!graphics.__visible || graphics.__commands.length == 0 || bounds == null || bounds.width == 0 || bounds.height == 0) {
	} else {
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 0:
				var smooth = command[5];
				var repeat = command[4];
				var matrix = command[3];
				var bitmap = command[2];
				openfl__$internal_renderer_opengl_utils_PathBuiler.endFill();
				if(bitmap != null) openfl__$internal_renderer_opengl_utils_PathBuiler.__fill = openfl__$internal_renderer_opengl_utils_FillType.Texture(bitmap,matrix,repeat,smooth); else openfl__$internal_renderer_opengl_utils_PathBuiler.__fill = openfl__$internal_renderer_opengl_utils_FillType.None;
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) {
					if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points = [];
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
					openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				}
				break;
			case 1:
				var alpha = command[3];
				var rgb = command[2];
				openfl__$internal_renderer_opengl_utils_PathBuiler.endFill();
				if(alpha > 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__fill = openfl__$internal_renderer_opengl_utils_FillType.Color(rgb & 16777215,alpha); else openfl__$internal_renderer_opengl_utils_PathBuiler.__fill = openfl__$internal_renderer_opengl_utils_FillType.None;
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) {
					if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points = [];
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
					openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				}
				break;
			case 3:
				var y = command[7];
				var x = command[6];
				var cy2 = command[5];
				var cx2 = command[4];
				var cy = command[3];
				var cx = command[2];
				openfl__$internal_renderer_opengl_utils_PathBuiler.cubicCurveTo(cx,cy,cx2,cy2,x,y);
				break;
			case 4:
				var y1 = command[5];
				var x1 = command[4];
				var cy1 = command[3];
				var cx1 = command[2];
				openfl__$internal_renderer_opengl_utils_PathBuiler.curveTo(cx1,cy1,x1,y1);
				break;
			case 5:
				var radius = command[4];
				var y2 = command[3];
				var x2 = command[2];
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Circle;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points = [x2,y2,radius];
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 6:
				var height = command[5];
				var width = command[4];
				var y3 = command[3];
				var x3 = command[2];
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Ellipse;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points = [x3,y3,width,height];
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 7:
				var height1 = command[5];
				var width1 = command[4];
				var y4 = command[3];
				var x4 = command[2];
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Rectangle(false);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points = [x4,y4,width1,height1];
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 8:
				var ry = command[7];
				var rx = command[6];
				var height2 = command[5];
				var width2 = command[4];
				var y5 = command[3];
				var x5 = command[2];
				if(ry == -1) ry = rx;
				rx *= 0.5;
				ry *= 0.5;
				if(rx > width2 / 2) rx = width2 / 2;
				if(ry > height2 / 2) ry = height2 / 2;
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Rectangle(true);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points = [x5,y5,width2,height2,rx,ry];
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 11:
				openfl__$internal_renderer_opengl_utils_PathBuiler.endFill();
				break;
			case 12:
				var miterLimit = command[9];
				var joints = command[8];
				var caps = command[7];
				var scaleMode = command[6];
				var pixelHinting = command[5];
				var alpha1 = command[4];
				var color = command[3];
				var thickness = command[2];
				openfl__$internal_renderer_opengl_utils_PathBuiler.__line = new openfl__$internal_renderer_opengl_utils_LineStyle();
				if(thickness == null || isNaN(thickness) || thickness < 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__line.width = 0; else if(thickness == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__line.width = 1; else openfl__$internal_renderer_opengl_utils_PathBuiler.__line.width = thickness;
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				if(color == null) openfl__$internal_renderer_opengl_utils_PathBuiler.__line.color = 0; else openfl__$internal_renderer_opengl_utils_PathBuiler.__line.color = color;
				if(alpha1 == null) openfl__$internal_renderer_opengl_utils_PathBuiler.__line.alpha = 1; else openfl__$internal_renderer_opengl_utils_PathBuiler.__line.alpha = alpha1;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__line.scaleMode = scaleMode;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__line.caps = caps;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__line.joints = joints;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__line.miterLimit = miterLimit;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points = [];
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 15:
				var y6 = command[3];
				var x6 = command[2];
				openfl__$internal_renderer_opengl_utils_PathBuiler.lineTo(x6,y6);
				break;
			case 16:
				var y7 = command[3];
				var x7 = command[2];
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(x7);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(y7);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 10:
				var blendMode = command[7];
				var colors = command[6];
				var culling = command[5];
				var uvtData = command[4];
				var indices = command[3];
				var vertices = command[2];
				var isColor;
				{
					var _g2 = openfl__$internal_renderer_opengl_utils_PathBuiler.__fill;
					switch(_g2[1]) {
					case 1:
						isColor = true;
						break;
					default:
						isColor = false;
					}
				}
				if(isColor && uvtData != null) continue;
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				if(uvtData == null) {
					var this1;
					this1 = new openfl_VectorData();
					var this2;
					this2 = new Array(0);
					this1.data = this2;
					this1.length = 0;
					this1.fixed = false;
					uvtData = this1;
					{
						var _g21 = openfl__$internal_renderer_opengl_utils_PathBuiler.__fill;
						switch(_g21[1]) {
						case 2:
							var b = _g21[2];
							var _g4 = 0;
							var _g3 = vertices.length / 2 | 0;
							while(_g4 < _g3) {
								var i = _g4++;
								if(!uvtData.fixed) {
									uvtData.length++;
									if(uvtData.data.length < uvtData.length) {
										var data;
										var this3;
										this3 = new Array(uvtData.data.length + 10);
										data = this3;
										haxe_ds__$Vector_Vector_$Impl_$.blit(uvtData.data,0,data,0,uvtData.data.length);
										uvtData.data = data;
									}
									uvtData.data[uvtData.length - 1] = vertices.data[i * 2] / b.width;
								}
								uvtData.length;
								if(!uvtData.fixed) {
									uvtData.length++;
									if(uvtData.data.length < uvtData.length) {
										var data1;
										var this4;
										this4 = new Array(uvtData.data.length + 10);
										data1 = this4;
										haxe_ds__$Vector_Vector_$Impl_$.blit(uvtData.data,0,data1,0,uvtData.data.length);
										uvtData.data = data1;
									}
									uvtData.data[uvtData.length - 1] = vertices.data[i * 2 + 1] / b.height;
								}
								uvtData.length;
							}
							break;
						default:
						}
					}
				}
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.DrawTriangles(vertices,indices,uvtData,culling,colors,blendMode);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable = false;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 9:
				var count = command[6];
				var flags = command[5];
				var smooth1 = command[4];
				var tileData = command[3];
				var sheet = command[2];
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex++;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.DrawTiles(sheet,tileData,smooth1,flags,count);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable = false;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			case 17:
				var winding = command[4];
				var data2 = command[3];
				var commands = command[2];
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				switch(winding) {
				case openfl.display.GraphicsPathWinding.EVEN_ODD:
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding = 0;
					break;
				case openfl.display.GraphicsPathWinding.NON_ZERO:
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding = 1;
					break;
				default:
					openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding = 0;
				}
				var command1;
				var cx3;
				var cy3;
				var cx21;
				var cy21;
				var ax;
				var ay;
				var idx = 0;
				var _g31 = 0;
				var _g22 = commands.length;
				while(_g31 < _g22) {
					var i1 = _g31++;
					command1 = commands.data[i1];
					switch(command1) {
					case 1:
						ax = data2.data[idx];
						ay = data2.data[idx + 1];
						idx += 2;
						if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(ax);
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(ay);
						openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
						break;
					case 4:
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(ax);
						openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.push(ay);
						openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
						break;
					case 2:
						ax = data2.data[idx];
						ay = data2.data[idx + 1];
						idx += 2;
						openfl__$internal_renderer_opengl_utils_PathBuiler.lineTo(ax,ay);
						break;
					case 5:
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						openfl__$internal_renderer_opengl_utils_PathBuiler.lineTo(ax,ay);
						break;
					case 3:
						cx3 = data2.data[idx];
						cy3 = data2.data[idx + 1];
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						openfl__$internal_renderer_opengl_utils_PathBuiler.curveTo(cx3,cy3,ax,ay);
						break;
					case 6:
						cx3 = data2.data[idx];
						cy3 = data2.data[idx + 1];
						cx21 = data2.data[idx + 2];
						cy21 = data2.data[idx + 3];
						ax = data2.data[idx + 4];
						ay = data2.data[idx + 5];
						idx += 6;
						openfl__$internal_renderer_opengl_utils_PathBuiler.cubicCurveTo(cx3,cy3,cx21,cy21,ax,ay);
						break;
					default:
					}
				}
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding = 0;
				break;
			case 18:
				var m = command[2];
				if(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable && openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.points.length == 0) openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.pop(); else openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath = new openfl__$internal_renderer_opengl_utils_DrawPath();
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.update(openfl__$internal_renderer_opengl_utils_PathBuiler.__line,openfl__$internal_renderer_opengl_utils_PathBuiler.__fill,openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex,openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.type = openfl__$internal_renderer_opengl_utils_GraphicType.OverrideMatrix(m);
				openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath.isRemovable = false;
				openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths.push(openfl__$internal_renderer_opengl_utils_PathBuiler.__currentPath);
				break;
			default:
			}
		}
		openfl__$internal_renderer_opengl_utils_PathBuiler.closePath();
	}
	graphics.__drawPaths = openfl__$internal_renderer_opengl_utils_PathBuiler.__drawPaths;
	return glStack;
};
var openfl__$internal_renderer_opengl_utils_LineStyle = function() {
	this.width = 0;
	this.color = 0;
	this.alpha = 1;
	this.scaleMode = openfl.display.LineScaleMode.NORMAL;
	this.caps = openfl.display.CapsStyle.ROUND;
	this.joints = openfl.display.JointStyle.ROUND;
	this.miterLimit = 3;
};
$hxClasses["openfl._internal.renderer.opengl.utils.LineStyle"] = openfl__$internal_renderer_opengl_utils_LineStyle;
openfl__$internal_renderer_opengl_utils_LineStyle.__name__ = true;
openfl__$internal_renderer_opengl_utils_LineStyle.prototype = {
	__class__: openfl__$internal_renderer_opengl_utils_LineStyle
};
var openfl__$internal_renderer_opengl_utils_FillType = $hxClasses["openfl._internal.renderer.opengl.utils.FillType"] = { __ename__ : true, __constructs__ : ["None","Color","Texture","Gradient"] };
openfl__$internal_renderer_opengl_utils_FillType.None = ["None",0];
openfl__$internal_renderer_opengl_utils_FillType.None.__enum__ = openfl__$internal_renderer_opengl_utils_FillType;
openfl__$internal_renderer_opengl_utils_FillType.Color = function(color,alpha) { var $x = ["Color",1,color,alpha]; $x.__enum__ = openfl__$internal_renderer_opengl_utils_FillType; return $x; };
openfl__$internal_renderer_opengl_utils_FillType.Texture = function(bitmap,matrix,repeat,smooth) { var $x = ["Texture",2,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl__$internal_renderer_opengl_utils_FillType; return $x; };
openfl__$internal_renderer_opengl_utils_FillType.Gradient = ["Gradient",3];
openfl__$internal_renderer_opengl_utils_FillType.Gradient.__enum__ = openfl__$internal_renderer_opengl_utils_FillType;
var openfl__$internal_renderer_opengl_utils_VertexAttribute = function(components,type,normalized,name,defaultValue) {
	if(normalized == null) normalized = false;
	this.enabled = true;
	this.normalized = false;
	this.components = components;
	this.type = type;
	this.normalized = normalized;
	this.name = name;
	if(defaultValue == null) {
		var this1;
		if(components != null) this1 = new Float32Array(components); else this1 = null;
		this.defaultValue = this1;
	} else this.defaultValue = defaultValue;
};
$hxClasses["openfl._internal.renderer.opengl.utils.VertexAttribute"] = openfl__$internal_renderer_opengl_utils_VertexAttribute;
openfl__$internal_renderer_opengl_utils_VertexAttribute.__name__ = true;
openfl__$internal_renderer_opengl_utils_VertexAttribute.prototype = {
	copy: function() {
		return new openfl__$internal_renderer_opengl_utils_VertexAttribute(this.components,this.type,this.normalized,this.name,this.defaultValue);
	}
	,getElementsBytes: function() {
		var _g = this.type;
		switch(_g) {
		case 5120:case 5121:
			return 1;
		case 5122:case 5123:
			return 2;
		default:
			return 4;
		}
	}
	,get_elements: function() {
		return Math.floor(this.components * this.getElementsBytes() / 4);
	}
	,__class__: openfl__$internal_renderer_opengl_utils_VertexAttribute
};
var openfl__$internal_renderer_opengl_utils_GraphicsRenderer = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.GraphicsRenderer"] = openfl__$internal_renderer_opengl_utils_GraphicsRenderer;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.__name__ = true;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.lastVertsBuffer = null;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.lastBucketMode = null;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.lastTexture = null;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.lastTextureRepeat = null;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.lastTextureSmooth = null;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.overrideMatrix = null;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildCircle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var rectData = path.points;
	var x = rectData[0];
	var y = rectData[1];
	var width = rectData[2];
	var height;
	if(rectData.length == 3) height = width; else height = rectData[3];
	if(path.type == openfl__$internal_renderer_opengl_utils_GraphicType.Ellipse) {
		width /= 2;
		height /= 2;
		x += width;
		y += height;
	}
	if(localCoords) {
		x -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
		y -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
	}
	var totalSegs = 40;
	var seg = Math.PI * 2 / totalSegs;
	var bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl__$internal_renderer_opengl_utils_BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vertPos = verts.length / 2 | 0;
		indices.push(vertPos);
		var _g1 = 0;
		var _g = totalSegs + 1;
		while(_g1 < _g) {
			var i = _g1++;
			verts.push(x);
			verts.push(y);
			verts.push(x + Math.sin(seg * i) * width);
			verts.push(y + Math.cos(seg * i) * height);
			indices.push(vertPos++);
			indices.push(vertPos++);
		}
		indices.push(vertPos - 1);
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = [];
		var _g11 = 0;
		var _g2 = totalSegs + 1;
		while(_g11 < _g2) {
			var i1 = _g11++;
			path.points.push(x + Math.sin(seg * i1) * width);
			path.points.push(y + Math.cos(seg * i1) * height);
		}
		openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildComplexPoly = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var bucket = null;
	if(path.points.length >= 6) {
		var points = path.points.slice();
		if(localCoords) {
			var _g1 = 0;
			var _g = points.length / 2 | 0;
			while(_g1 < _g) {
				var i = _g1++;
				points[i * 2] -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
				points[i * 2 + 1] -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
			}
		}
		bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
		var fill = bucket.getData(openfl__$internal_renderer_opengl_utils_BucketDataType.Fill);
		fill.drawMode = glStack.gl.TRIANGLE_FAN;
		fill.verts = points;
		var indices = fill.indices;
		var length = points.length / 2 | 0;
		var _g2 = 0;
		while(_g2 < length) {
			var i1 = _g2++;
			indices.push(i1);
		}
	}
	if(path.line.width > 0) {
		if(bucket == null) bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
		openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildLine(path,bucket,localCoords);
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildLine = function(path,bucket,localCoords) {
	if(localCoords == null) localCoords = false;
	var points = path.points;
	if(points.length == 0) return;
	var line = bucket.getData(openfl__$internal_renderer_opengl_utils_BucketDataType.Line);
	if(localCoords) {
		var _g1 = 0;
		var _g = points.length / 2 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			points[i * 2] -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
			points[i * 2 + 1] -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
		}
	}
	var firstPoint = new openfl.geom.Point(points[0],points[1]);
	var lastPoint = new openfl.geom.Point(points[points.length - 2 | 0],points[points.length - 1 | 0]);
	if(firstPoint.x == lastPoint.x && firstPoint.y == lastPoint.y) {
		points = points.slice();
		points.pop();
		points.pop();
		lastPoint = new openfl.geom.Point(points[points.length - 2 | 0],points[points.length - 1 | 0]);
		var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
		var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;
		points.unshift(midPointY);
		points.unshift(midPointX);
		points.push(midPointX);
		points.push(midPointY);
	}
	var verts = line.verts;
	var indices = line.indices;
	var length = points.length / 2 | 0;
	var indexCount = points.length;
	var indexStart = verts.length / 6 | 0;
	var width = path.line.width / 2;
	var color = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.hex2rgb(path.line.color);
	var alpha = path.line.alpha;
	var r = color[0];
	var g = color[1];
	var b = color[2];
	var px;
	var py;
	var p1x;
	var p1y;
	var p2x;
	var p2y;
	var p3x;
	var p3y;
	var perpx;
	var perpy;
	var perp2x;
	var perp2y;
	var perp3x;
	var perp3y;
	var a1;
	var b1;
	var c1;
	var a2;
	var b2;
	var c2;
	var denom;
	var pdist;
	var dist;
	p1x = points[0];
	p1y = points[1];
	p2x = points[2];
	p2y = points[3];
	perpx = -(p1y - p2y);
	perpy = p1x - p2x;
	dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
	perpx = perpx / dist;
	perpy = perpy / dist;
	perpx = perpx * width;
	perpy = perpy * width;
	verts.push(p1x - perpx);
	verts.push(p1y - perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	verts.push(p1x + perpx);
	verts.push(p1y + perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	var _g11 = 1;
	var _g2 = length - 1;
	while(_g11 < _g2) {
		var i1 = _g11++;
		p1x = points[(i1 - 1) * 2];
		p1y = points[(i1 - 1) * 2 + 1];
		p2x = points[i1 * 2];
		p2y = points[i1 * 2 + 1];
		p3x = points[(i1 + 1) * 2];
		p3y = points[(i1 + 1) * 2 + 1];
		perpx = -(p1y - p2y);
		perpy = p1x - p2x;
		dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
		perpx = perpx / dist;
		perpy = perpy / dist;
		perpx = perpx * width;
		perpy = perpy * width;
		perp2x = -(p2y - p3y);
		perp2y = p2x - p3x;
		dist = Math.sqrt(Math.abs(perp2x * perp2x + perp2y * perp2y));
		perp2x = perp2x / dist;
		perp2y = perp2y / dist;
		perp2x = perp2x * width;
		perp2y = perp2y * width;
		a1 = -perpy + p1y - (-perpy + p2y);
		b1 = -perpx + p2x - (-perpx + p1x);
		c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
		a2 = -perp2y + p3y - (-perp2y + p2y);
		b2 = -perp2x + p2x - (-perp2x + p3x);
		c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);
		denom = a1 * b2 - a2 * b1;
		if(Math.abs(denom) < 0.1) {
			denom += 10.1;
			verts.push(p2x - perpx);
			verts.push(p2y - perpy);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x + perpx);
			verts.push(p2y + perpy);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			continue;
		}
		px = (b1 * c2 - b2 * c1) / denom;
		py = (a2 * c1 - a1 * c2) / denom;
		pdist = (px - p2x) * (px - p2x) + (py - p2y) + (py - p2y);
		if(pdist > 19600) {
			perp3x = perpx - perp2x;
			perp3y = perpy - perp2y;
			dist = Math.sqrt(Math.abs(perp3x * perp3x + perp3y * perp3y));
			perp3x = perp3x / dist;
			perp3y = perp3y / dist;
			perp3x = perp3x * width;
			perp3y = perp3y * width;
			verts.push(p2x - perp3x);
			verts.push(p2y - perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x + perp3x);
			verts.push(p2y + perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x - perp3x);
			verts.push(p2y - perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			indexCount++;
		} else {
			verts.push(px);
			verts.push(py);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x - (px - p2x));
			verts.push(p2y - (py - p2y));
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
		}
	}
	p1x = points[(length - 2) * 2];
	p1y = points[(length - 2) * 2 + 1];
	p2x = points[(length - 1) * 2];
	p2y = points[(length - 1) * 2 + 1];
	perpx = -(p1y - p2y);
	perpy = p1x - p2x;
	dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
	if(!isFinite(dist)) haxe_Log.trace(perpx * perpx + perpy * perpy,{ fileName : "GraphicsRenderer.hx", lineNumber : 411, className : "openfl._internal.renderer.opengl.utils.GraphicsRenderer", methodName : "buildLine"});
	perpx = perpx / dist;
	perpy = perpy / dist;
	perpx = perpx * width;
	perpy = perpy * width;
	verts.push(p2x - perpx);
	verts.push(p2y - perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	verts.push(p2x + perpx);
	verts.push(p2y + perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	indices.push(indexStart);
	var _g3 = 0;
	while(_g3 < indexCount) {
		var i2 = _g3++;
		indices.push(indexStart++);
	}
	indices.push(indexStart - 1);
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildPoly = function(path,glStack) {
	if(path.points.length < 6) return;
	var points = path.points;
	var l = points.length;
	var sx = points[0];
	var sy = points[1];
	var ex = points[l - 2];
	var ey = points[l - 1];
	if(sx != ex || sy != ey) {
		points.push(sx);
		points.push(sy);
	}
	var length = points.length / 2 | 0;
	var bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl__$internal_renderer_opengl_utils_BucketDataType.Fill);
	var verts = fill.verts;
	var indices = fill.indices;
	if(fill != null) {
		var triangles = openfl__$internal_renderer_opengl_utils_PolyK.triangulate(points);
		var vertPos = verts.length / 2;
		var i = 0;
		while(i < triangles.length) {
			indices.push(triangles[i] + vertPos | 0);
			indices.push(triangles[i] + vertPos | 0);
			indices.push(triangles[i + 1] + vertPos | 0);
			indices.push(triangles[i + 2] + vertPos | 0);
			indices.push(triangles[i + 2] + vertPos | 0);
			i += 3;
		}
		var _g = 0;
		while(_g < length) {
			var i1 = _g++;
			verts.push(points[i1 * 2]);
			verts.push(points[i1 * 2 + 1]);
		}
	}
	if(path.line.width > 0) openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildLine(path,bucket);
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildRectangle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var rectData = path.points;
	var x = rectData[0];
	var y = rectData[1];
	var width = rectData[2];
	var height = rectData[3];
	if(localCoords) {
		x -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
		y -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
	}
	var bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl__$internal_renderer_opengl_utils_BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vertPos = verts.length / 2 | 0;
		verts.push(x);
		verts.push(y);
		verts.push(x + width);
		verts.push(y);
		verts.push(x);
		verts.push(y + height);
		verts.push(x + width);
		verts.push(y + height);
		indices.push(vertPos);
		indices.push(vertPos);
		indices.push(vertPos + 1);
		indices.push(vertPos + 2);
		indices.push(vertPos + 3);
		indices.push(vertPos + 3);
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = [x,y,x + width,y,x + width,y + height,x,y + height,x,y];
		openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildRoundedRectangle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var points = path.points.slice();
	var x = points[0];
	var y = points[1];
	var width = points[2];
	var height = points[3];
	var rx = points[4];
	var ry = points[5];
	if(localCoords) {
		x -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
		y -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
	}
	var xe = x + width;
	var ye = y + height;
	var cx1 = -rx + rx * openfl__$internal_renderer_opengl_utils_GraphicsRenderer.SIN45;
	var cx2 = -rx + rx * openfl__$internal_renderer_opengl_utils_GraphicsRenderer.TAN22;
	var cy1 = -ry + ry * openfl__$internal_renderer_opengl_utils_GraphicsRenderer.SIN45;
	var cy2 = -ry + ry * openfl__$internal_renderer_opengl_utils_GraphicsRenderer.TAN22;
	var recPoints = [];
	recPoints.push(xe);
	recPoints.push(ye - ry);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,xe,ye + cy2,xe + cx1,ye + cy1);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,xe + cx2,ye,xe - rx,ye);
	recPoints.push(x + rx);
	recPoints.push(ye);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,x - cx2,ye,x - cx1,ye + cy1);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,x,ye + cy2,x,ye - ry);
	recPoints.push(x);
	recPoints.push(y + ry);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,x,y - cy2,x - cx1,y - cy1);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,x - cx2,y,x + rx,y);
	recPoints.push(xe - rx);
	recPoints.push(y);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,xe + cx2,y,xe + cx1,y - cy1);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo(recPoints,xe,y - cy2,xe,y + ry);
	recPoints.push(xe);
	recPoints.push(ye - ry);
	var bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl__$internal_renderer_opengl_utils_BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vecPos = verts.length / 2;
		var triangles = openfl__$internal_renderer_opengl_utils_PolyK.triangulate(recPoints);
		var i = 0;
		while(i < triangles.length) {
			indices.push(triangles[i] + vecPos | 0);
			indices.push(triangles[i] + vecPos | 0);
			indices.push(triangles[i + 1] + vecPos | 0);
			indices.push(triangles[i + 2] + vecPos | 0);
			indices.push(triangles[i + 2] + vecPos | 0);
			i += 3;
		}
		i = 0;
		while(i < recPoints.length) {
			verts.push(recPoints[i]);
			verts.push(recPoints[++i]);
			i++;
		}
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = recPoints;
		openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildDrawTriangles = function(path,object,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var args = path.type.slice(2);
	var vertices = args[0];
	var indices = args[1];
	var uvtData = args[2];
	var culling = args[3];
	var colors = args[4];
	var blendMode = args[5];
	var a;
	var b;
	var c;
	var d;
	var tx;
	var ty;
	if(localCoords) {
		a = 1.0;
		b = 0.0;
		c = 0.0;
		d = 1.0;
		tx = 0.0;
		ty = 0.0;
	} else {
		a = object.__worldTransform.a;
		b = object.__worldTransform.b;
		c = object.__worldTransform.c;
		d = object.__worldTransform.d;
		tx = object.__worldTransform.tx;
		ty = object.__worldTransform.ty;
	}
	var hasColors = colors != null && colors.length > 0;
	var bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl__$internal_renderer_opengl_utils_BucketDataType.Fill);
	var colorAttrib = fill.vertexArray.attributes[2];
	colorAttrib.enabled = hasColors;
	var array = [1,1,1,1];
	var this1;
	if(array != null) this1 = new Float32Array(array); else this1 = null;
	colorAttrib.defaultValue = this1;
	fill.rawVerts = true;
	fill.glLength = indices.length;
	fill.stride = Std["int"](fill.vertexArray.get_stride() / 4);
	var vertsLength = fill.glLength * fill.stride;
	var verts;
	if(fill.glVerts == null || fill.glVerts.length < vertsLength) {
		var this2;
		if(vertsLength != null) this2 = new Float32Array(vertsLength); else this2 = null;
		verts = this2;
		fill.glVerts = verts;
	} else verts = fill.glVerts;
	var glColors;
	var buffer = verts.buffer;
	var this3;
	if(buffer != null) this3 = new Uint32Array(buffer,0); else this3 = null;
	glColors = this3;
	var v0 = 0;
	var v1 = 0;
	var v2 = 0;
	var i0 = 0;
	var i1 = 0;
	var i2 = 0;
	var x0 = 0.0;
	var y0 = 0.0;
	var x1 = 0.0;
	var y1 = 0.0;
	var x2 = 0.0;
	var y2 = 0.0;
	var idx = 0;
	var _g1 = 0;
	var _g = indices.length / 3 | 0;
	while(_g1 < _g) {
		var i = _g1++;
		i0 = indices.data[i * 3];
		i1 = indices.data[i * 3 + 1];
		i2 = indices.data[i * 3 + 2];
		v0 = i0 * 2;
		v1 = i1 * 2;
		v2 = i2 * 2;
		x0 = vertices.data[v0];
		y0 = vertices.data[v0 + 1];
		x1 = vertices.data[v1];
		y1 = vertices.data[v1 + 1];
		x2 = vertices.data[v2];
		y2 = vertices.data[v2 + 1];
		if(localCoords) {
			x0 -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
			y0 -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
			x1 -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
			y1 -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
			x2 -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.x;
			y2 -= openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.y;
		}
		switch(culling[1]) {
		case 2:
			if(!((x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0)) continue;
			break;
		case 0:
			if((x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0) continue;
			break;
		default:
		}
		var idx1 = idx++;
		verts[idx1] = a * x0 + c * y0 + tx;
		var idx2 = idx++;
		verts[idx2] = b * x0 + d * y0 + ty;
		var idx3 = idx++;
		verts[idx3] = uvtData.data[v0];
		var idx4 = idx++;
		verts[idx4] = uvtData.data[v0 + 1];
		if(hasColors) {
			var idx5 = idx++;
			glColors[idx5] = colors.data[i0];
		}
		var idx6 = idx++;
		verts[idx6] = a * x1 + c * y1 + tx;
		var idx7 = idx++;
		verts[idx7] = b * x1 + d * y1 + ty;
		var idx8 = idx++;
		verts[idx8] = uvtData.data[v1];
		var idx9 = idx++;
		verts[idx9] = uvtData.data[v1 + 1];
		if(hasColors) {
			var idx10 = idx++;
			glColors[idx10] = colors.data[i1];
		}
		var idx11 = idx++;
		verts[idx11] = a * x2 + c * y2 + tx;
		var idx12 = idx++;
		verts[idx12] = b * x2 + d * y2 + ty;
		var idx13 = idx++;
		verts[idx13] = uvtData.data[v2];
		var idx14 = idx++;
		verts[idx14] = uvtData.data[v2 + 1];
		if(hasColors) {
			var idx15 = idx++;
			glColors[idx15] = colors.data[i2];
		}
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildDrawTiles = function(path,glStack) {
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.curveTo = function(points,cx,cy,x,y) {
	var xa = 0;
	var ya = 0;
	var n = 20;
	var fromX = points[points.length - 2];
	var fromY = points[points.length - 1];
	var px = 0;
	var py = 0;
	var tmp = 0;
	var _g1 = 1;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		tmp = i / n;
		xa = fromX + (cx - fromX) * tmp;
		ya = fromY + (cy - fromY) * tmp;
		px = xa + (cx + (x - cx) * tmp - xa) * tmp;
		py = ya + (cy + (y - cy) * tmp - ya) * tmp;
		points.push(px);
		points.push(py);
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.quadraticBezierCurve = function(fromX,fromY,cpX,cpY,toX,toY) {
	var xa;
	var ya;
	var xb;
	var yb;
	var x;
	var y;
	var n = 20;
	var points = [];
	var getPt = function(n1,n2,perc) {
		var diff = n2 - n1;
		return n1 + diff * perc;
	};
	var j = 0.0;
	var _g1 = 0;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		j = i / n;
		xa = getPt(fromX,cpX,j);
		ya = getPt(fromY,cpY,j);
		xb = getPt(cpX,toX,j);
		yb = getPt(cpY,toY,j);
		x = getPt(xa,xb,j);
		y = getPt(ya,yb,j);
		points.push(x);
		points.push(y);
	}
	return points;
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.render = function(object,renderSession) {
	var graphics = object.__graphics;
	var spritebatch = renderSession.spriteBatch;
	var dirty = graphics.__dirty;
	if(graphics.__commands.length <= 0) return;
	if(dirty) openfl__$internal_renderer_opengl_utils_GraphicsRenderer.updateGraphics(object,object.__graphics,renderSession.gl,object.cacheAsBitmap);
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.renderGraphics(object,renderSession,false);
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.renderGraphics = function(object,renderSession,localCoords) {
	if(localCoords == null) localCoords = false;
	var graphics = object.__graphics;
	var gl = renderSession.gl;
	var glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
	var bucket;
	var translationMatrix;
	if(localCoords) translationMatrix = openfl.geom.Matrix.__identity; else translationMatrix = object.__worldTransform;
	var clipRect = renderSession.spriteBatch.clipRect;
	var batchDrawing = renderSession.spriteBatch.drawing;
	batchDrawing = renderSession.spriteBatch.drawing;
	var _g1 = 0;
	var _g = glStack.buckets.length;
	while(_g1 < _g) {
		var i = _g1++;
		batchDrawing = renderSession.spriteBatch.drawing;
		if(batchDrawing && !localCoords) renderSession.spriteBatch.finish();
		renderSession.blendModeManager.setBlendMode(object.__blendMode);
		if(clipRect != null) {
			gl.enable(gl.SCISSOR_TEST);
			gl.scissor(Math.floor(clipRect.x),Math.floor(clipRect.y),Math.floor(clipRect.width),Math.floor(clipRect.height));
		}
		bucket = glStack.buckets[i];
		var _g2 = bucket.mode;
		switch(_g2[1]) {
		case 1:case 2:
			renderSession.stencilManager.pushBucket(bucket,renderSession,translationMatrix.toArray(true));
			var shader = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareShader(bucket,renderSession,object,translationMatrix.toArray(true));
			openfl__$internal_renderer_opengl_utils_GraphicsRenderer.renderFill(bucket,shader,renderSession);
			renderSession.stencilManager.popBucket(object,bucket,renderSession);
			break;
		case 5:
			var shader1 = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareShader(bucket,renderSession,object,null);
			openfl__$internal_renderer_opengl_utils_GraphicsRenderer.renderDrawTriangles(bucket,shader1,renderSession);
			break;
		case 6:
			if(!batchDrawing) renderSession.spriteBatch.begin(renderSession,clipRect);
			var args = bucket.graphicType.slice(2);
			renderSession.spriteBatch.renderTiles(object,args[0],args[1],args[2],args[3],args[4]);
			renderSession.spriteBatch.finish();
			break;
		default:
		}
		var ct = object.__worldColorTransform;
		var _g21 = 0;
		var _g3 = bucket.lines;
		while(_g21 < _g3.length) {
			var line = _g3[_g21];
			++_g21;
			if(line != null && line.verts.length > 0) {
				var shader2 = renderSession.shaderManager.primitiveShader;
				renderSession.shaderManager.setShader(shader2);
				gl.uniformMatrix3fv(shader2.getUniformLocation("uTranslationMatrix"),false,translationMatrix.toArray(true));
				gl.uniformMatrix3fv(shader2.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
				gl.uniform1f(shader2.getUniformLocation("uAlpha"),1);
				gl.uniform4f(shader2.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,ct.alphaMultiplier);
				gl.uniform4f(shader2.getUniformLocation("uColorOffset"),ct.redOffset / 255,ct.greenOffset / 255,ct.blueOffset / 255,ct.alphaOffset / 255);
				line.vertexArray.bind();
				shader2.bindVertexArray(line.vertexArray);
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,line.indexBuffer);
				gl.drawElements(gl.TRIANGLE_STRIP,line.indices.length,gl.UNSIGNED_SHORT,0);
			}
		}
		if(clipRect != null) gl.disable(gl.SCISSOR_TEST);
		batchDrawing = renderSession.spriteBatch.drawing;
		if(!batchDrawing && !localCoords) renderSession.spriteBatch.begin(renderSession,clipRect);
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.updateGraphics = function(object,graphics,gl,localCoords) {
	if(localCoords == null) localCoords = false;
	openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectPosition.setTo(object.get_x(),object.get_y());
	if(graphics.__bounds == null) openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds = new openfl.geom.Rectangle(); else openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.copyFrom(graphics.__bounds);
	var glStack = null;
	if(graphics.__dirty) glStack = openfl__$internal_renderer_opengl_utils_DrawPath.getStack(graphics,gl);
	graphics.set___dirty(false);
	var _g = 0;
	var _g1 = glStack.buckets;
	while(_g < _g1.length) {
		var data = _g1[_g];
		++_g;
		data.reset();
		openfl__$internal_renderer_opengl_utils_GraphicsRenderer.bucketPool.push(data);
	}
	glStack.reset();
	var _g11 = glStack.lastIndex;
	var _g2 = graphics.__drawPaths.length;
	while(_g11 < _g2) {
		var i = _g11++;
		var path = graphics.__drawPaths[i];
		{
			var _g21 = path.type;
			switch(_g21[1]) {
			case 0:
				openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildComplexPoly(path,glStack,localCoords);
				break;
			case 1:
				var rounded = _g21[2];
				if(rounded) openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildRoundedRectangle(path,glStack,localCoords); else openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildRectangle(path,glStack,localCoords);
				break;
			case 2:case 3:
				openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildCircle(path,glStack,localCoords);
				break;
			case 4:
				openfl__$internal_renderer_opengl_utils_GraphicsRenderer.buildDrawTriangles(path,object,glStack,localCoords);
				break;
			case 5:
				openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket(path,glStack);
				break;
			case 6:
				var m = _g21[2];
				openfl__$internal_renderer_opengl_utils_GraphicsRenderer.overrideMatrix = m;
				break;
			}
		}
		glStack.lastIndex++;
	}
	var _g3 = 0;
	var _g12 = glStack.buckets;
	while(_g3 < _g12.length) {
		var bucket = _g12[_g3];
		++_g3;
		if(bucket.uploadTileBuffer) bucket.uploadTile(Math.ceil(openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.get_left()),Math.ceil(openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.get_top()),Math.floor(openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.get_right()),Math.floor(openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds.get_bottom()));
		bucket.optimize();
	}
	glStack.upload();
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareBucket = function(path,glStack) {
	var bucket = null;
	{
		var _g = path.fill;
		switch(_g[1]) {
		case 1:
			var a = _g[3];
			var c = _g[2];
			bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl__$internal_renderer_opengl_utils_BucketMode.Fill);
			if(c == null) bucket.color = [1,1,1]; else bucket.color = [(c >> 16 & 255) / 255,(c >> 8 & 255) / 255,(c & 255) / 255];
			bucket.color[3] = a;
			bucket.uploadTileBuffer = true;
			break;
		case 2:
			var s = _g[5];
			var r = _g[4];
			var m = _g[3];
			var b = _g[2];
			bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl__$internal_renderer_opengl_utils_BucketMode.PatternFill);
			bucket.bitmap = b;
			bucket.textureRepeat = r;
			bucket.textureSmooth = s;
			bucket.texture = b.getTexture(glStack.gl);
			bucket.uploadTileBuffer = true;
			var pMatrix;
			if(m == null) pMatrix = new openfl.geom.Matrix(); else pMatrix = m.clone();
			pMatrix.invert();
			pMatrix.scale(1 / b.width,1 / b.height);
			var tx = pMatrix.tx;
			var ty = pMatrix.ty;
			pMatrix.tx = 0;
			pMatrix.ty = 0;
			bucket.textureTL.x = tx;
			bucket.textureTL.y = ty;
			bucket.textureBR.x = tx + 1;
			bucket.textureBR.y = ty + 1;
			bucket.textureMatrix = pMatrix;
			break;
		default:
			bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl__$internal_renderer_opengl_utils_BucketMode.Line);
			bucket.uploadTileBuffer = false;
		}
	}
	{
		var _g1 = path.type;
		switch(_g1[1]) {
		case 4:
			bucket.mode = openfl__$internal_renderer_opengl_utils_BucketMode.DrawTriangles;
			bucket.uploadTileBuffer = false;
			break;
		case 5:
			bucket.mode = openfl__$internal_renderer_opengl_utils_BucketMode.DrawTiles;
			bucket.uploadTileBuffer = false;
			break;
		default:
		}
	}
	bucket.graphicType = path.type;
	bucket.overrideMatrix = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.overrideMatrix;
	return bucket;
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.getBucket = function(glStack,mode) {
	var b = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.bucketPool.pop();
	if(b == null) b = new openfl__$internal_renderer_opengl_utils_GLBucket(glStack.gl);
	b.mode = mode;
	glStack.buckets.push(b);
	return b;
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.switchBucket = function(fillIndex,glStack,mode) {
	var bucket = null;
	var _g = 0;
	var _g1 = glStack.buckets;
	while(_g < _g1.length) {
		var b = _g1[_g];
		++_g;
		if(b.fillIndex == fillIndex) {
			bucket = b;
			break;
		}
	}
	if(bucket == null) bucket = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.getBucket(glStack,mode);
	bucket.dirty = true;
	bucket.fillIndex = fillIndex;
	return bucket;
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.prepareShader = function(bucket,renderSession,object,translationMatrix) {
	var gl = renderSession.gl;
	var shader = null;
	var _g = bucket.mode;
	switch(_g[1]) {
	case 1:
		shader = renderSession.shaderManager.fillShader;
		break;
	case 2:
		shader = renderSession.shaderManager.patternFillShader;
		break;
	case 5:
		shader = renderSession.shaderManager.drawTrianglesShader;
		break;
	default:
		shader = null;
	}
	if(shader == null) return null;
	var newShader = renderSession.shaderManager.setShader(shader);
	gl.uniform1f(shader.getUniformLocation("uAlpha"),object.__worldAlpha);
	gl.uniformMatrix3fv(shader.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
	var ct = object.__worldColorTransform;
	gl.uniform4f(shader.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,ct.alphaMultiplier);
	gl.uniform4f(shader.getUniformLocation("uColorOffset"),ct.redOffset / 255,ct.greenOffset / 255,ct.blueOffset / 255,ct.alphaOffset / 255);
	var _g1 = bucket.mode;
	switch(_g1[1]) {
	case 1:
		gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		gl.uniform4fv(shader.getUniformLocation("uColor"),(function($this) {
			var $r;
			var array = bucket.color;
			var this1;
			if(array != null) this1 = new Float32Array(array); else this1 = null;
			$r = this1;
			return $r;
		}(this)));
		break;
	case 2:
		gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		gl.uniform2f(shader.getUniformLocation("uPatternTL"),bucket.textureTL.x,bucket.textureTL.y);
		gl.uniform2f(shader.getUniformLocation("uPatternBR"),bucket.textureBR.x,bucket.textureBR.y);
		gl.uniformMatrix3fv(shader.getUniformLocation("uPatternMatrix"),false,bucket.textureMatrix.toArray(true));
		break;
	case 5:
		if(bucket.texture != null) gl.uniform1i(shader.getUniformLocation("uUseTexture"),1); else {
			gl.uniform1i(shader.getUniformLocation("uUseTexture"),0);
			gl.uniform4fv(shader.getUniformLocation("uColor"),(function($this) {
				var $r;
				var array1 = bucket.color;
				var this2;
				if(array1 != null) this2 = new Float32Array(array1); else this2 = null;
				$r = this2;
				return $r;
			}(this)));
		}
		break;
	default:
	}
	return shader;
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.renderFill = function(bucket,shader,renderSession) {
	var gl = renderSession.gl;
	if(bucket.mode == openfl__$internal_renderer_opengl_utils_BucketMode.PatternFill && bucket.texture != null) openfl__$internal_renderer_opengl_utils_GraphicsRenderer.bindTexture(gl,bucket);
	gl.bindBuffer(gl.ARRAY_BUFFER,bucket.tileBuffer);
	gl.vertexAttribPointer(shader.getAttribLocation("aPosition"),4,gl.SHORT,false,0,0);
	gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.renderDrawTriangles = function(bucket,shader,renderSession) {
	var gl = renderSession.gl;
	var _g = 0;
	var _g1 = bucket.fills;
	while(_g < _g1.length) {
		var fill = _g1[_g];
		++_g;
		if(fill.available) continue;
		openfl__$internal_renderer_opengl_utils_GraphicsRenderer.bindTexture(gl,bucket);
		fill.vertexArray.bind();
		shader.bindVertexArray(fill.vertexArray);
		gl.drawArrays(gl.TRIANGLES,fill.glStart,fill.glLength);
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.bindTexture = function(gl,bucket) {
	gl.bindTexture(gl.TEXTURE_2D,bucket.texture);
	if(bucket.textureRepeat && bucket.bitmap.__image.get_powerOfTwo()) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.REPEAT);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
	}
	if(bucket.textureSmooth) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
	}
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.isCCW = function(x1,y1,x2,y2,x3,y3) {
	return (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0;
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.hex2rgb = function(hex) {
	if(hex == null) return [1,1,1]; else return [(hex >> 16 & 255) / 255,(hex >> 8 & 255) / 255,(hex & 255) / 255];
};
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.hex2rgba = function(hex) {
	if(hex == null) return [1,1,1,1]; else return [(hex >> 16 & 255) / 255,(hex >> 8 & 255) / 255,(hex & 255) / 255,(hex >> 24 & 255) / 255];
};
var openfl__$internal_renderer_opengl_utils_GLStack = function(gl) {
	this.lastIndex = 0;
	this.gl = gl;
	this.buckets = [];
	this.lastIndex = 0;
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLStack"] = openfl__$internal_renderer_opengl_utils_GLStack;
openfl__$internal_renderer_opengl_utils_GLStack.__name__ = true;
openfl__$internal_renderer_opengl_utils_GLStack.prototype = {
	reset: function() {
		this.buckets = [];
		this.lastIndex = 0;
	}
	,upload: function() {
		var _g = 0;
		var _g1 = this.buckets;
		while(_g < _g1.length) {
			var bucket = _g1[_g];
			++_g;
			if(bucket.dirty) bucket.upload();
		}
	}
	,__class__: openfl__$internal_renderer_opengl_utils_GLStack
};
var openfl__$internal_renderer_opengl_utils_GLBucket = function(gl) {
	this.uploadTileBuffer = true;
	this.textureSmooth = true;
	this.textureRepeat = false;
	this.lines = [];
	this.fills = [];
	this.fillIndex = -1;
	this.gl = gl;
	this.color = [0,0,0];
	this.lastIndex = 0;
	this.alpha = 1;
	this.dirty = true;
	this.mode = openfl__$internal_renderer_opengl_utils_BucketMode.Fill;
	this.textureMatrix = new openfl.geom.Matrix();
	this.textureTL = new openfl.geom.Point();
	this.textureBR = new openfl.geom.Point(1,1);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLBucket"] = openfl__$internal_renderer_opengl_utils_GLBucket;
openfl__$internal_renderer_opengl_utils_GLBucket.__name__ = true;
openfl__$internal_renderer_opengl_utils_GLBucket.prototype = {
	getData: function(type) {
		var data;
		switch(type[1]) {
		case 1:
			data = this.fills;
			break;
		default:
			data = this.lines;
		}
		var result = null;
		var remove = false;
		var _g = 0;
		while(_g < data.length) {
			var d = data[_g];
			++_g;
			if(d.available) {
				result = d;
				remove = true;
				break;
			}
		}
		if(result == null) result = new openfl__$internal_renderer_opengl_utils_GLBucketData(this.gl);
		result.available = false;
		result.parent = this;
		result.type = type;
		if(remove) HxOverrides.remove(data,result);
		data.push(result);
		switch(type[1]) {
		case 1:
			var _g1 = this.mode;
			switch(_g1[1]) {
			case 1:case 2:
				result.vertexArray.attributes = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.fillVertexAttributes;
				break;
			case 5:
				result.vertexArray.attributes = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.drawTrianglesVertexAttributes.slice();
				result.vertexArray.attributes[2] = result.vertexArray.attributes[2].copy();
				break;
			default:
			}
			break;
		case 0:
			result.vertexArray.attributes = openfl__$internal_renderer_opengl_utils_GraphicsRenderer.primitiveVertexAttributes;
			break;
		}
		return result;
	}
	,optimize: function() {
		var _g = this;
		var data = this.lines;
		if(data.length > 1) {
			var result = [];
			var tmp = null;
			var last = null;
			var idx = 0;
			var vi = 0;
			var ii = 0;
			var before = data.length;
			var _g1 = 0;
			while(_g1 < data.length) {
				var d = data[_g1];
				++_g1;
				if(d.available || d.rawVerts || d.rawIndices) {
					if(tmp != null) {
						result.push(tmp);
						tmp = null;
					}
					result.push(d);
					last = d;
					continue;
				}
				if(last == null || last.drawMode == d.drawMode) {
					if(tmp == null) tmp = d; else {
						vi = tmp.verts.length;
						ii = tmp.indices.length;
						var _g2 = 0;
						var _g11 = d.verts.length;
						while(_g2 < _g11) {
							var j = _g2++;
							tmp.verts[j + vi] = d.verts[j];
						}
						var _g21 = 0;
						var _g12 = d.indices.length;
						while(_g21 < _g12) {
							var j1 = _g21++;
							tmp.indices[j1 + ii] = d.indices[j1] + idx;
						}
					}
					idx = tmp.indices[tmp.indices.length - 1] + 1;
					last = d;
				} else {
					if(tmp != null) {
						result.push(tmp);
						tmp = null;
					}
					result.push(d);
					last = d;
					continue;
				}
			}
			if(result.length == 0 && tmp != null) result.push(tmp);
			if(result.length > 0) switch(openfl__$internal_renderer_opengl_utils_BucketDataType.Line[1]) {
			case 1:
				_g.fills = result;
				break;
			default:
				_g.lines = result;
			}
		}
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this.fills;
		while(_g < _g1.length) {
			var fill = _g1[_g];
			++_g;
			fill.reset();
		}
		var _g2 = 0;
		var _g11 = this.lines;
		while(_g2 < _g11.length) {
			var line = _g11[_g2];
			++_g2;
			line.reset();
		}
		this.fillIndex = -1;
		this.uploadTileBuffer = true;
		this.graphicType = openfl__$internal_renderer_opengl_utils_GraphicType.Polygon;
	}
	,uploadTile: function(x,y,w,h) {
		if(this.tileBuffer == null) this.tileBuffer = this.gl.createBuffer();
		this.tile = [x,y,0,0,w,y,1,0,x,h,0,1,w,h,1,1];
		var array = this.tile;
		var this1;
		if(array != null) this1 = new Int16Array(array); else this1 = null;
		this.glTile = this1;
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.tileBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER,this.glTile,this.gl.STATIC_DRAW);
	}
	,upload: function() {
		if(this.mode != openfl__$internal_renderer_opengl_utils_BucketMode.Line) {
			var _g = 0;
			var _g1 = this.fills;
			while(_g < _g1.length) {
				var fill = _g1[_g];
				++_g;
				if(!fill.available) fill.upload();
			}
		}
		var _g2 = 0;
		var _g11 = this.lines;
		while(_g2 < _g11.length) {
			var line = _g11[_g2];
			++_g2;
			if(!line.available) line.upload();
		}
		this.dirty = false;
	}
	,__class__: openfl__$internal_renderer_opengl_utils_GLBucket
};
var openfl__$internal_renderer_opengl_utils_GLBucketData = function(gl) {
	this.available = false;
	this.rawIndices = false;
	this.stride = 0;
	this.rawVerts = false;
	this.lastVertsSize = 0;
	this.glStart = 0;
	this.glLength = 0;
	this.gl = gl;
	this.drawMode = gl.TRIANGLE_STRIP;
	this.verts = [];
	this.indices = [];
	this.vertexArray = new openfl._internal.renderer.opengl.utils.VertexArray([]);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLBucketData"] = openfl__$internal_renderer_opengl_utils_GLBucketData;
openfl__$internal_renderer_opengl_utils_GLBucketData.__name__ = true;
openfl__$internal_renderer_opengl_utils_GLBucketData.prototype = {
	reset: function() {
		this.available = true;
		this.verts = [];
		this.indices = [];
		this.glLength = 0;
		this.glStart = 0;
		this.stride = 0;
		this.rawVerts = false;
		this.rawIndices = false;
		this.drawMode = this.gl.TRIANGLE_STRIP;
	}
	,upload: function() {
		if(this.rawVerts && this.glVerts != null && this.glVerts.length > 0 || this.verts.length > 0) {
			if(!this.rawVerts) {
				var array = this.verts;
				var this1;
				if(array != null) this1 = new Float32Array(array); else this1 = null;
				this.glVerts = this1;
			}
			this.vertexArray.buffer = this.glVerts.buffer;
			if(this.glVerts.length <= this.lastVertsSize) {
				this.vertexArray.bind();
				var end = this.glLength * 4 * this.stride;
				if(this.glLength > 0 && this.lastVertsSize > end) {
					var view = this.glVerts.subarray(0,end);
					this.vertexArray.upload(view);
				} else this.vertexArray.upload(this.glVerts);
			} else {
				this.vertexArray.setContext(this.gl,this.glVerts);
				this.lastVertsSize = this.glVerts.length;
			}
		}
		if(this.glLength == 0 && (this.rawIndices && this.glIndices != null && this.glIndices.length > 0 || this.indices.length > 0)) {
			if(this.indexBuffer == null) this.indexBuffer = this.gl.createBuffer();
			if(!this.rawIndices) {
				var array1 = this.indices;
				var this2;
				if(array1 != null) this2 = new Uint16Array(array1); else this2 = null;
				this.glIndices = this2;
			}
			this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
			this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.glIndices,this.gl.STREAM_DRAW);
		}
	}
	,__class__: openfl__$internal_renderer_opengl_utils_GLBucketData
};
var openfl__$internal_renderer_opengl_utils_BucketMode = $hxClasses["openfl._internal.renderer.opengl.utils.BucketMode"] = { __ename__ : true, __constructs__ : ["None","Fill","PatternFill","Line","PatternLine","DrawTriangles","DrawTiles"] };
openfl__$internal_renderer_opengl_utils_BucketMode.None = ["None",0];
openfl__$internal_renderer_opengl_utils_BucketMode.None.__enum__ = openfl__$internal_renderer_opengl_utils_BucketMode;
openfl__$internal_renderer_opengl_utils_BucketMode.Fill = ["Fill",1];
openfl__$internal_renderer_opengl_utils_BucketMode.Fill.__enum__ = openfl__$internal_renderer_opengl_utils_BucketMode;
openfl__$internal_renderer_opengl_utils_BucketMode.PatternFill = ["PatternFill",2];
openfl__$internal_renderer_opengl_utils_BucketMode.PatternFill.__enum__ = openfl__$internal_renderer_opengl_utils_BucketMode;
openfl__$internal_renderer_opengl_utils_BucketMode.Line = ["Line",3];
openfl__$internal_renderer_opengl_utils_BucketMode.Line.__enum__ = openfl__$internal_renderer_opengl_utils_BucketMode;
openfl__$internal_renderer_opengl_utils_BucketMode.PatternLine = ["PatternLine",4];
openfl__$internal_renderer_opengl_utils_BucketMode.PatternLine.__enum__ = openfl__$internal_renderer_opengl_utils_BucketMode;
openfl__$internal_renderer_opengl_utils_BucketMode.DrawTriangles = ["DrawTriangles",5];
openfl__$internal_renderer_opengl_utils_BucketMode.DrawTriangles.__enum__ = openfl__$internal_renderer_opengl_utils_BucketMode;
openfl__$internal_renderer_opengl_utils_BucketMode.DrawTiles = ["DrawTiles",6];
openfl__$internal_renderer_opengl_utils_BucketMode.DrawTiles.__enum__ = openfl__$internal_renderer_opengl_utils_BucketMode;
var openfl__$internal_renderer_opengl_utils_BucketDataType = $hxClasses["openfl._internal.renderer.opengl.utils.BucketDataType"] = { __ename__ : true, __constructs__ : ["Line","Fill"] };
openfl__$internal_renderer_opengl_utils_BucketDataType.Line = ["Line",0];
openfl__$internal_renderer_opengl_utils_BucketDataType.Line.__enum__ = openfl__$internal_renderer_opengl_utils_BucketDataType;
openfl__$internal_renderer_opengl_utils_BucketDataType.Fill = ["Fill",1];
openfl__$internal_renderer_opengl_utils_BucketDataType.Fill.__enum__ = openfl__$internal_renderer_opengl_utils_BucketDataType;
var openfl__$internal_renderer_opengl_utils_GLGraphicsData = function(gl) {
	this.indices = [];
	this.data = [];
	this.lastIndex = 0;
	this.mode = 0;
	this.dirty = true;
	this.alpha = 1.0;
	this.tint = [1.0,1.0,1.0];
	this.gl = gl;
	this.dataBuffer = gl.createBuffer();
	this.indexBuffer = gl.createBuffer();
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLGraphicsData"] = openfl__$internal_renderer_opengl_utils_GLGraphicsData;
openfl__$internal_renderer_opengl_utils_GLGraphicsData.__name__ = true;
openfl__$internal_renderer_opengl_utils_GLGraphicsData.prototype = {
	reset: function() {
		this.data = [];
		this.indices = [];
		this.lastIndex = 0;
	}
	,upload: function() {
		var elements = this.data;
		var this1;
		if(elements != null) this1 = new Float32Array(elements); else this1 = null;
		this.glData = this1;
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.dataBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER,this.glData,this.gl.STATIC_DRAW);
		var elements1 = this.indices;
		var this2;
		if(elements1 != null) this2 = new Uint16Array(elements1); else this2 = null;
		this.glIndices = this2;
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.glIndices,this.gl.STATIC_DRAW);
		this.dirty = false;
	}
	,__class__: openfl__$internal_renderer_opengl_utils_GLGraphicsData
};
var openfl__$internal_renderer_opengl_utils_PolyK = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.PolyK"] = openfl__$internal_renderer_opengl_utils_PolyK;
openfl__$internal_renderer_opengl_utils_PolyK.__name__ = true;
openfl__$internal_renderer_opengl_utils_PolyK.triangulate = function(p) {
	var sign = true;
	var n = p.length >> 1;
	if(n < 3) return [];
	var tgs = [];
	var avl;
	var _g = [];
	var _g1 = 0;
	while(_g1 < n) {
		var i1 = _g1++;
		_g.push(i1);
	}
	avl = _g;
	var i = 0;
	var al = n;
	var earFound = false;
	while(al > 3) {
		var i0 = avl[i % al];
		var i11 = avl[(i + 1) % al];
		var i2 = avl[(i + 2) % al];
		var ax = p[2 * i0];
		var ay = p[2 * i0 + 1];
		var bx = p[2 * i11];
		var by = p[2 * i11 + 1];
		var cx = p[2 * i2];
		var cy = p[2 * i2 + 1];
		earFound = false;
		if(openfl__$internal_renderer_opengl_utils_PolyK._convex(ax,ay,bx,by,cx,cy,sign)) {
			earFound = true;
			var _g11 = 0;
			while(_g11 < al) {
				var j = _g11++;
				var vi = avl[j];
				if(vi == i0 || vi == i11 || vi == i2) continue;
				if(openfl__$internal_renderer_opengl_utils_PolyK._PointInTriangle(p[2 * vi],p[2 * vi + 1],ax,ay,bx,by,cx,cy)) {
					earFound = false;
					break;
				}
			}
		}
		if(earFound) {
			tgs.push(i0);
			tgs.push(i11);
			tgs.push(i2);
			avl.splice((i + 1) % al,1);
			al--;
			i = 0;
		} else if(i++ > 3 * al) {
			if(sign) {
				tgs = [];
				var _g12 = [];
				var _g2 = 0;
				while(_g2 < n) {
					var k = _g2++;
					_g12.push(k);
				}
				avl = _g12;
				i = 0;
				al = n;
				sign = false;
			} else {
				haxe_Log.trace("Warning: shape too complex to fill",{ fileName : "GraphicsRenderer.hx", lineNumber : 1718, className : "openfl._internal.renderer.opengl.utils.PolyK", methodName : "triangulate"});
				return [];
			}
		}
	}
	tgs.push(avl[0]);
	tgs.push(avl[1]);
	tgs.push(avl[2]);
	return tgs;
};
openfl__$internal_renderer_opengl_utils_PolyK._PointInTriangle = function(px,py,ax,ay,bx,by,cx,cy) {
	var v0x = cx - ax | 0;
	var v0y = cy - ay | 0;
	var v1x = bx - ax | 0;
	var v1y = by - ay | 0;
	var v2x = px - ax | 0;
	var v2y = py - ay | 0;
	var dot00 = v0x * v0x + v0y * v0y;
	var dot01 = v0x * v1x + v0y * v1y;
	var dot02 = v0x * v2x + v0y * v2y;
	var dot11 = v1x * v1x + v1y * v1y;
	var dot12 = v1x * v2x + v1y * v2y;
	var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
	var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
	return u >= 0 && v >= 0 && u + v < 1;
};
openfl__$internal_renderer_opengl_utils_PolyK._convex = function(ax,ay,bx,by,cx,cy,sign) {
	return (ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0 == sign;
};
var openfl__$internal_renderer_opengl_utils_GraphicType = $hxClasses["openfl._internal.renderer.opengl.utils.GraphicType"] = { __ename__ : true, __constructs__ : ["Polygon","Rectangle","Circle","Ellipse","DrawTriangles","DrawTiles","OverrideMatrix"] };
openfl__$internal_renderer_opengl_utils_GraphicType.Polygon = ["Polygon",0];
openfl__$internal_renderer_opengl_utils_GraphicType.Polygon.__enum__ = openfl__$internal_renderer_opengl_utils_GraphicType;
openfl__$internal_renderer_opengl_utils_GraphicType.Rectangle = function(rounded) { var $x = ["Rectangle",1,rounded]; $x.__enum__ = openfl__$internal_renderer_opengl_utils_GraphicType; return $x; };
openfl__$internal_renderer_opengl_utils_GraphicType.Circle = ["Circle",2];
openfl__$internal_renderer_opengl_utils_GraphicType.Circle.__enum__ = openfl__$internal_renderer_opengl_utils_GraphicType;
openfl__$internal_renderer_opengl_utils_GraphicType.Ellipse = ["Ellipse",3];
openfl__$internal_renderer_opengl_utils_GraphicType.Ellipse.__enum__ = openfl__$internal_renderer_opengl_utils_GraphicType;
openfl__$internal_renderer_opengl_utils_GraphicType.DrawTriangles = function(vertices,indices,uvtData,culling,colors,blendMode) { var $x = ["DrawTriangles",4,vertices,indices,uvtData,culling,colors,blendMode]; $x.__enum__ = openfl__$internal_renderer_opengl_utils_GraphicType; return $x; };
openfl__$internal_renderer_opengl_utils_GraphicType.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",5,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl__$internal_renderer_opengl_utils_GraphicType; return $x; };
openfl__$internal_renderer_opengl_utils_GraphicType.OverrideMatrix = function(matrix) { var $x = ["OverrideMatrix",6,matrix]; $x.__enum__ = openfl__$internal_renderer_opengl_utils_GraphicType; return $x; };
var openfl_display_Graphics = function() {
	this.__visible = true;
	this.__glStack = [];
	this.__dirty = true;
	this.__commands = [];
	this.__commands = [];
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
	this.__hardware = true;
	this.moveTo(0,0);
};
$hxClasses["openfl.display.Graphics"] = openfl_display_Graphics;
openfl_display_Graphics.__name__ = true;
openfl_display_Graphics.prototype = {
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(openfl_display_DrawCommand.BeginBitmapFill(bitmap,matrix != null?matrix.clone():null,repeat,smooth));
		this.__visible = true;
	}
	,beginFill: function(color,alpha) {
		if(alpha == null) alpha = 1;
		if(color == null) color = 0;
		this.__commands.push(openfl_display_DrawCommand.BeginFill(color & 16777215,alpha));
		if(alpha > 0) this.__visible = true;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.__commands.push(openfl_display_DrawCommand.BeginGradientFill(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio));
		this.__hardware = false;
		var _g = 0;
		while(_g < alphas.length) {
			var alpha = alphas[_g];
			++_g;
			if(alpha > 0) {
				this.__visible = true;
				break;
			}
		}
	}
	,clear: function() {
		this.__commands = [];
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) {
			this.set___dirty(true);
			this.__transformDirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
		this.__hardware = true;
		this.moveTo(0,0);
	}
	,copyFrom: function(sourceGraphics) {
		this.__bounds = sourceGraphics.__bounds.clone();
		this.__commands = sourceGraphics.__commands.slice();
		this.set___dirty(true);
		this.__halfStrokeWidth = sourceGraphics.__halfStrokeWidth;
		this.__positionX = sourceGraphics.__positionX;
		this.__positionY = sourceGraphics.__positionY;
		this.__transformDirty = true;
		this.__visible = sourceGraphics.__visible;
	}
	,cubicCurveTo: function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		var ix1;
		var iy1;
		var ix2;
		var iy2;
		ix1 = anchorX;
		ix2 = anchorX;
		if(!((controlX1 < anchorX && controlX1 > this.__positionX || controlX1 > anchorX && controlX1 < this.__positionX) && (controlX2 < anchorX && controlX2 > this.__positionX || controlX2 > anchorX && controlX2 < this.__positionX))) {
			var u = 2 * this.__positionX - 4 * controlX1 + 2 * controlX2;
			var v = controlX1 - this.__positionX;
			var w = -this.__positionX + 3 * controlX1 + anchorX - 3 * controlX2;
			var t1 = (-u + Math.sqrt(u * u - 4 * v * w)) / (2 * w);
			var t2 = (-u - Math.sqrt(u * u - 4 * v * w)) / (2 * w);
			if(t1 > 0 && t1 < 1) ix1 = this.__calculateBezierCubicPoint(t1,this.__positionX,controlX1,controlX2,anchorX);
			if(t2 > 0 && t2 < 1) ix2 = this.__calculateBezierCubicPoint(t2,this.__positionX,controlX1,controlX2,anchorX);
		}
		iy1 = anchorY;
		iy2 = anchorY;
		if(!((controlY1 < anchorY && controlY1 > this.__positionX || controlY1 > anchorY && controlY1 < this.__positionX) && (controlY2 < anchorY && controlY2 > this.__positionX || controlY2 > anchorY && controlY2 < this.__positionX))) {
			var u1 = 2 * this.__positionX - 4 * controlY1 + 2 * controlY2;
			var v1 = controlY1 - this.__positionX;
			var w1 = -this.__positionX + 3 * controlY1 + anchorY - 3 * controlY2;
			var t11 = (-u1 + Math.sqrt(u1 * u1 - 4 * v1 * w1)) / (2 * w1);
			var t21 = (-u1 - Math.sqrt(u1 * u1 - 4 * v1 * w1)) / (2 * w1);
			if(t11 > 0 && t11 < 1) iy1 = this.__calculateBezierCubicPoint(t11,this.__positionX,controlY1,controlY2,anchorY);
			if(t21 > 0 && t21 < 1) iy2 = this.__calculateBezierCubicPoint(t21,this.__positionX,controlY1,controlY2,anchorY);
		}
		this.__inflateBounds(ix1 - this.__halfStrokeWidth,iy1 - this.__halfStrokeWidth);
		this.__inflateBounds(ix1 + this.__halfStrokeWidth,iy1 + this.__halfStrokeWidth);
		this.__inflateBounds(ix2 - this.__halfStrokeWidth,iy2 - this.__halfStrokeWidth);
		this.__inflateBounds(ix2 + this.__halfStrokeWidth,iy2 + this.__halfStrokeWidth);
		this.__positionX = anchorX;
		this.__positionY = anchorY;
		this.__commands.push(openfl_display_DrawCommand.CubicCurveTo(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		var ix;
		var iy;
		if(controlX < anchorX && controlX > this.__positionX || controlX > anchorX && controlX < this.__positionX) ix = anchorX; else {
			var tx = (this.__positionX - controlX) / (this.__positionX - 2 * controlX + anchorX);
			ix = this.__calculateBezierQuadPoint(tx,this.__positionX,controlX,anchorX);
		}
		if(controlY < anchorY && controlY > this.__positionY || controlY > anchorY && controlY < this.__positionY) iy = anchorY; else {
			var ty = (this.__positionY - controlY) / (this.__positionY - 2 * controlY + anchorY);
			iy = this.__calculateBezierQuadPoint(ty,this.__positionY,controlY,anchorY);
		}
		this.__inflateBounds(ix - this.__halfStrokeWidth,iy - this.__halfStrokeWidth);
		this.__inflateBounds(ix + this.__halfStrokeWidth,iy + this.__halfStrokeWidth);
		this.__positionX = anchorX;
		this.__positionY = anchorY;
		this.__commands.push(openfl_display_DrawCommand.CurveTo(controlX,controlY,anchorX,anchorY));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__halfStrokeWidth,y - radius - this.__halfStrokeWidth);
		this.__inflateBounds(x + radius + this.__halfStrokeWidth,y + radius + this.__halfStrokeWidth);
		this.__commands.push(openfl_display_DrawCommand.DrawCircle(x,y,radius));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl_display_DrawCommand.DrawEllipse(x,y,width,height));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,drawGraphicsData: function(graphicsData) {
		var fill;
		var bitmapFill;
		var gradientFill;
		var stroke;
		var path;
		var _g = 0;
		while(_g < graphicsData.length) {
			var graphics = graphicsData.data[_g];
			++_g;
			if(js_Boot.__instanceof(graphics,openfl.display.GraphicsSolidFill)) {
				fill = graphics;
				this.beginFill(fill.color,fill.alpha);
			} else if(js_Boot.__instanceof(graphics,openfl.display.GraphicsBitmapFill)) {
				bitmapFill = graphics;
				this.beginBitmapFill(bitmapFill.bitmapData,bitmapFill.matrix,bitmapFill.repeat,bitmapFill.smooth);
			} else if(js_Boot.__instanceof(graphics,openfl.display.GraphicsGradientFill)) {
				gradientFill = graphics;
				this.beginGradientFill(gradientFill.type,gradientFill.colors,gradientFill.alphas,gradientFill.ratios,gradientFill.matrix,gradientFill.spreadMethod,gradientFill.interpolationMethod,gradientFill.focalPointRatio);
			} else if(js_Boot.__instanceof(graphics,openfl.display.GraphicsStroke)) {
				stroke = graphics;
				if(js_Boot.__instanceof(stroke.fill,openfl.display.GraphicsSolidFill)) {
					fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
				} else {
					this.lineStyle(stroke.thickness,0,1,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					if(js_Boot.__instanceof(stroke.fill,openfl.display.GraphicsBitmapFill)) {
						bitmapFill = stroke.fill;
						this.lineBitmapStyle(bitmapFill.bitmapData,bitmapFill.matrix,bitmapFill.repeat,bitmapFill.smooth);
					} else if(js_Boot.__instanceof(stroke.fill,openfl.display.GraphicsGradientFill)) {
						gradientFill = stroke.fill;
						this.lineGradientStyle(gradientFill.type,gradientFill.colors,gradientFill.alphas,gradientFill.ratios,gradientFill.matrix,gradientFill.spreadMethod,gradientFill.interpolationMethod,gradientFill.focalPointRatio);
					}
				}
			} else if(js_Boot.__instanceof(graphics,openfl.display.GraphicsPath)) {
				path = graphics;
				this.drawPath(path.commands,path.data,path.winding);
			} else if(js_Boot.__instanceof(graphics,openfl.display.GraphicsEndFill)) this.endFill();
		}
	}
	,drawPath: function(commands,data,winding) {
		var dataIndex = 0;
		var _g = 0;
		try {
			while(_g < commands.length) {
				var command = commands.data[_g];
				++_g;
				if(command != null) switch(command) {
				case 1:
					this.moveTo(data.data[dataIndex],data.data[dataIndex + 1]);
					dataIndex += 2;
					break;
				case 2:
					this.lineTo(data.data[dataIndex],data.data[dataIndex + 1]);
					dataIndex += 2;
					break;
				case 4:
					this.moveTo(data.data[dataIndex + 2],data.data[dataIndex + 3]);
					throw "__break__";
					dataIndex += 4;
					break;
				case 5:
					this.lineTo(data.data[dataIndex + 2],data.data[dataIndex + 3]);
					throw "__break__";
					dataIndex += 4;
					break;
				case 3:
					this.curveTo(data.data[dataIndex],data.data[dataIndex + 1],data.data[dataIndex + 2],data.data[dataIndex + 3]);
					dataIndex += 4;
					break;
				case 6:
					this.cubicCurveTo(data.data[dataIndex],data.data[dataIndex + 1],data.data[dataIndex + 2],data.data[dataIndex + 3],data.data[dataIndex + 4],data.data[dataIndex + 5]);
					dataIndex += 6;
					break;
				default:
				} else {
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl_display_DrawCommand.DrawRect(x,y,width,height));
		this.set___dirty(true);
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl_display_DrawCommand.DrawRoundRect(x,y,width,height,rx,ry));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
		openfl.Lib.notImplemented("Graphics.drawRoundRectComplex");
	}
	,drawTiles: function(sheet,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__inflateBounds(0,0);
		this.__inflateBounds(openfl.Lib.current.stage.stageWidth,openfl.Lib.current.stage.stageHeight);
		this.__commands.push(openfl_display_DrawCommand.DrawTiles(sheet,tileData,smooth,flags,count));
		this.set___dirty(true);
		this.__visible = true;
	}
	,drawTriangles: function(vertices,indices,uvtData,culling,colors,blendMode) {
		if(blendMode == null) blendMode = 0;
		var vlen = vertices.length / 2 | 0;
		if(culling == null) culling = openfl.display.TriangleCulling.NONE;
		if(indices == null) {
			if(vlen % 3 != 0) throw new js__$Boot_HaxeError(new openfl.errors.ArgumentError("Not enough vertices to close a triangle."));
			var this1;
			this1 = new openfl_VectorData();
			var this2;
			this2 = new Array(0);
			this1.data = this2;
			this1.length = 0;
			this1.fixed = false;
			indices = this1;
			var _g = 0;
			while(_g < vlen) {
				var i = _g++;
				if(!indices.fixed) {
					indices.length++;
					if(indices.data.length < indices.length) {
						var data;
						var this3;
						this3 = new Array(indices.data.length + 10);
						data = this3;
						haxe_ds__$Vector_Vector_$Impl_$.blit(indices.data,0,data,0,indices.data.length);
						indices.data = data;
					}
					indices.data[indices.length - 1] = i;
				}
				indices.length;
			}
		}
		this.__inflateBounds(0,0);
		var tmpx = -Infinity;
		var tmpy = -Infinity;
		var maxX = -Infinity;
		var maxY = -Infinity;
		var _g1 = 0;
		while(_g1 < vlen) {
			var i1 = _g1++;
			tmpx = vertices.data[i1 * 2];
			tmpy = vertices.data[i1 * 2 + 1];
			if(maxX < tmpx) maxX = tmpx;
			if(maxY < tmpy) maxY = tmpy;
		}
		this.__inflateBounds(maxX,maxY);
		this.__commands.push(openfl_display_DrawCommand.DrawTriangles(vertices,indices,uvtData,culling,colors,blendMode));
		this.set___dirty(true);
		this.__visible = true;
	}
	,endFill: function() {
		this.__commands.push(openfl_display_DrawCommand.EndFill);
	}
	,lineBitmapStyle: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(openfl_display_DrawCommand.LineBitmapStyle(bitmap,matrix != null?matrix.clone():null,repeat,smooth));
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.__commands.push(openfl_display_DrawCommand.LineGradientStyle(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio));
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness > this.__halfStrokeWidth) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = this.__halfStrokeWidth;
		this.__commands.push(openfl_display_DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
		if(thickness != null) this.__visible = true;
	}
	,lineTo: function(x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl_display_DrawCommand.LineTo(x,y));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,moveTo: function(x,y) {
		this.__positionX = x;
		this.__positionY = y;
		this.__commands.push(openfl_display_DrawCommand.MoveTo(x,y));
	}
	,__calculateBezierCubicPoint: function(t,p1,p2,p3,p4) {
		var iT = 1 - t;
		return p1 * (iT * iT * iT) + 3 * p2 * t * (iT * iT) + 3 * p3 * iT * (t * t) + p4 * (t * t * t);
	}
	,__calculateBezierQuadPoint: function(t,p1,p2,p3) {
		var iT = 1 - t;
		return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = openfl.geom.Rectangle.__temp;
		this.__bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var px = matrix.__transformInverseX(x,y);
		var py = matrix.__transformInverseY(x,y);
		if(this.__bounds.contains(px,py)) {
			if(shapeFlag) {
				if(this.__dirty) {
				}
				if(this.__context != null) {
				}
			}
			return true;
		}
		return false;
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new openfl.geom.Rectangle(x,y,0,0);
			this.__transformDirty = true;
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
			this.__transformDirty = true;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
			this.__transformDirty = true;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,set___dirty: function(value) {
		if(value && this.__owner != null) this.__owner.__setRenderDirty();
		return this.__dirty = value;
	}
	,__class__: openfl_display_Graphics
};
var openfl_display_DrawCommand = $hxClasses["openfl.display.DrawCommand"] = { __ename__ : true, __constructs__ : ["BeginBitmapFill","BeginFill","BeginGradientFill","CubicCurveTo","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawRoundRect","DrawTiles","DrawTriangles","EndFill","LineStyle","LineBitmapStyle","LineGradientStyle","LineTo","MoveTo","DrawPathC","OverrideMatrix"] };
openfl_display_DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.BeginFill = function(color,alpha) { var $x = ["BeginFill",1,color,alpha]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.BeginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["BeginGradientFill",2,type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.CubicCurveTo = function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) { var $x = ["CubicCurveTo",3,controlX1,controlY1,controlX2,controlY2,anchorX,anchorY]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.CurveTo = function(controlX,controlY,anchorX,anchorY) { var $x = ["CurveTo",4,controlX,controlY,anchorX,anchorY]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",5,x,y,radius]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",6,x,y,width,height]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",7,x,y,width,height]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.DrawRoundRect = function(x,y,width,height,rx,ry) { var $x = ["DrawRoundRect",8,x,y,width,height,rx,ry]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",9,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.DrawTriangles = function(vertices,indices,uvtData,culling,colors,blendMode) { var $x = ["DrawTriangles",10,vertices,indices,uvtData,culling,colors,blendMode]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.EndFill = ["EndFill",11];
openfl_display_DrawCommand.EndFill.__enum__ = openfl_display_DrawCommand;
openfl_display_DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",12,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.LineBitmapStyle = function(bitmap,matrix,repeat,smooth) { var $x = ["LineBitmapStyle",13,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.LineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["LineGradientStyle",14,type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",15,x,y]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",16,x,y]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.DrawPathC = function(commands,data,winding) { var $x = ["DrawPathC",17,commands,data,winding]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
openfl_display_DrawCommand.OverrideMatrix = function(matrix) { var $x = ["OverrideMatrix",18,matrix]; $x.__enum__ = openfl_display_DrawCommand; return $x; };
var openfl_display_GraphicsPathCommand = function() { };
$hxClasses["openfl.display.GraphicsPathCommand"] = openfl_display_GraphicsPathCommand;
openfl_display_GraphicsPathCommand.__name__ = true;
var openfl_display_Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = [];
	this.__tileRects = [];
	this.__tileUVs = [];
	this.__rectTile = new openfl.geom.Rectangle();
	this.__rectUV = new openfl.geom.Rectangle();
	this.__point = new openfl.geom.Point();
};
$hxClasses["openfl.display.Tilesheet"] = openfl_display_Tilesheet;
openfl_display_Tilesheet.__name__ = true;
openfl_display_Tilesheet.prototype = {
	addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = openfl_display_Tilesheet.__defaultPoint;
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new openfl.geom.Rectangle(rectangle.get_left() / this.__bitmap.width,rectangle.get_top() / this.__bitmap.height,rectangle.get_right() / this.__bitmap.width,rectangle.get_bottom() / this.__bitmap.height));
		return this.__tileRects.length - 1;
	}
	,drawTiles: function(graphics,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags,count);
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,__class__: openfl_display_Tilesheet
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = true;
$hxClasses.Array = Array;
Array.__name__ = true;
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
var ArrayBuffer = typeof(window) != "undefined" && window.ArrayBuffer || typeof(global) != "undefined" && global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = typeof(window) != "undefined" && window.DataView || typeof(global) != "undefined" && global.DataView || js_html_compat_DataView;
var Uint8Array = typeof(window) != "undefined" && window.Uint8Array || typeof(global) != "undefined" && global.Uint8Array || js_html_compat_Uint8Array._new;
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
lime_Assets.cache = new lime_AssetCache();
lime_Assets.libraries = new haxe_ds_StringMap();
lime_Assets.initialized = false;
lime_app_Preloader.images = new haxe_ds_StringMap();
lime_app_Preloader.loaders = new haxe_ds_StringMap();
lime_audio_openal_AL.NONE = 0;
lime_audio_openal_AL.FALSE = 0;
lime_audio_openal_AL.TRUE = 1;
lime_audio_openal_AL.SOURCE_RELATIVE = 514;
lime_audio_openal_AL.CONE_INNER_ANGLE = 4097;
lime_audio_openal_AL.CONE_OUTER_ANGLE = 4098;
lime_audio_openal_AL.PITCH = 4099;
lime_audio_openal_AL.POSITION = 4100;
lime_audio_openal_AL.DIRECTION = 4101;
lime_audio_openal_AL.VELOCITY = 4102;
lime_audio_openal_AL.LOOPING = 4103;
lime_audio_openal_AL.BUFFER = 4105;
lime_audio_openal_AL.GAIN = 4106;
lime_audio_openal_AL.MIN_GAIN = 4109;
lime_audio_openal_AL.MAX_GAIN = 4110;
lime_audio_openal_AL.ORIENTATION = 4111;
lime_audio_openal_AL.SOURCE_STATE = 4112;
lime_audio_openal_AL.INITIAL = 4113;
lime_audio_openal_AL.PLAYING = 4114;
lime_audio_openal_AL.PAUSED = 4115;
lime_audio_openal_AL.STOPPED = 4116;
lime_audio_openal_AL.BUFFERS_QUEUED = 4117;
lime_audio_openal_AL.BUFFERS_PROCESSED = 4118;
lime_audio_openal_AL.REFERENCE_DISTANCE = 4128;
lime_audio_openal_AL.ROLLOFF_FACTOR = 4129;
lime_audio_openal_AL.CONE_OUTER_GAIN = 4130;
lime_audio_openal_AL.MAX_DISTANCE = 4131;
lime_audio_openal_AL.SEC_OFFSET = 4132;
lime_audio_openal_AL.SAMPLE_OFFSET = 4133;
lime_audio_openal_AL.BYTE_OFFSET = 4134;
lime_audio_openal_AL.SOURCE_TYPE = 4135;
lime_audio_openal_AL.STATIC = 4136;
lime_audio_openal_AL.STREAMING = 4137;
lime_audio_openal_AL.UNDETERMINED = 4144;
lime_audio_openal_AL.FORMAT_MONO8 = 4352;
lime_audio_openal_AL.FORMAT_MONO16 = 4353;
lime_audio_openal_AL.FORMAT_STEREO8 = 4354;
lime_audio_openal_AL.FORMAT_STEREO16 = 4355;
lime_audio_openal_AL.FREQUENCY = 8193;
lime_audio_openal_AL.BITS = 8194;
lime_audio_openal_AL.CHANNELS = 8195;
lime_audio_openal_AL.SIZE = 8196;
lime_audio_openal_AL.NO_ERROR = 0;
lime_audio_openal_AL.INVALID_NAME = 40961;
lime_audio_openal_AL.INVALID_ENUM = 40962;
lime_audio_openal_AL.INVALID_VALUE = 40963;
lime_audio_openal_AL.INVALID_OPERATION = 40964;
lime_audio_openal_AL.OUT_OF_MEMORY = 40965;
lime_audio_openal_AL.VENDOR = 45057;
lime_audio_openal_AL.VERSION = 45058;
lime_audio_openal_AL.RENDERER = 45059;
lime_audio_openal_AL.EXTENSIONS = 45060;
lime_audio_openal_AL.DOPPLER_FACTOR = 49152;
lime_audio_openal_AL.SPEED_OF_SOUND = 49155;
lime_audio_openal_AL.DOPPLER_VELOCITY = 49153;
lime_audio_openal_AL.DISTANCE_MODEL = 53248;
lime_audio_openal_AL.INVERSE_DISTANCE = 53249;
lime_audio_openal_AL.INVERSE_DISTANCE_CLAMPED = 53250;
lime_audio_openal_AL.LINEAR_DISTANCE = 53251;
lime_audio_openal_AL.LINEAR_DISTANCE_CLAMPED = 53252;
lime_audio_openal_AL.EXPONENT_DISTANCE = 53253;
lime_audio_openal_AL.EXPONENT_DISTANCE_CLAMPED = 53254;
lime_graphics_opengl_GL.DEPTH_BUFFER_BIT = 256;
lime_graphics_opengl_GL.STENCIL_BUFFER_BIT = 1024;
lime_graphics_opengl_GL.COLOR_BUFFER_BIT = 16384;
lime_graphics_opengl_GL.POINTS = 0;
lime_graphics_opengl_GL.LINES = 1;
lime_graphics_opengl_GL.LINE_LOOP = 2;
lime_graphics_opengl_GL.LINE_STRIP = 3;
lime_graphics_opengl_GL.TRIANGLES = 4;
lime_graphics_opengl_GL.TRIANGLE_STRIP = 5;
lime_graphics_opengl_GL.TRIANGLE_FAN = 6;
lime_graphics_opengl_GL.ZERO = 0;
lime_graphics_opengl_GL.ONE = 1;
lime_graphics_opengl_GL.SRC_COLOR = 768;
lime_graphics_opengl_GL.ONE_MINUS_SRC_COLOR = 769;
lime_graphics_opengl_GL.SRC_ALPHA = 770;
lime_graphics_opengl_GL.ONE_MINUS_SRC_ALPHA = 771;
lime_graphics_opengl_GL.DST_ALPHA = 772;
lime_graphics_opengl_GL.ONE_MINUS_DST_ALPHA = 773;
lime_graphics_opengl_GL.DST_COLOR = 774;
lime_graphics_opengl_GL.ONE_MINUS_DST_COLOR = 775;
lime_graphics_opengl_GL.SRC_ALPHA_SATURATE = 776;
lime_graphics_opengl_GL.FUNC_ADD = 32774;
lime_graphics_opengl_GL.BLEND_EQUATION = 32777;
lime_graphics_opengl_GL.BLEND_EQUATION_RGB = 32777;
lime_graphics_opengl_GL.BLEND_EQUATION_ALPHA = 34877;
lime_graphics_opengl_GL.FUNC_SUBTRACT = 32778;
lime_graphics_opengl_GL.FUNC_REVERSE_SUBTRACT = 32779;
lime_graphics_opengl_GL.BLEND_DST_RGB = 32968;
lime_graphics_opengl_GL.BLEND_SRC_RGB = 32969;
lime_graphics_opengl_GL.BLEND_DST_ALPHA = 32970;
lime_graphics_opengl_GL.BLEND_SRC_ALPHA = 32971;
lime_graphics_opengl_GL.CONSTANT_COLOR = 32769;
lime_graphics_opengl_GL.ONE_MINUS_CONSTANT_COLOR = 32770;
lime_graphics_opengl_GL.CONSTANT_ALPHA = 32771;
lime_graphics_opengl_GL.ONE_MINUS_CONSTANT_ALPHA = 32772;
lime_graphics_opengl_GL.BLEND_COLOR = 32773;
lime_graphics_opengl_GL.ARRAY_BUFFER = 34962;
lime_graphics_opengl_GL.ELEMENT_ARRAY_BUFFER = 34963;
lime_graphics_opengl_GL.ARRAY_BUFFER_BINDING = 34964;
lime_graphics_opengl_GL.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
lime_graphics_opengl_GL.STREAM_DRAW = 35040;
lime_graphics_opengl_GL.STATIC_DRAW = 35044;
lime_graphics_opengl_GL.DYNAMIC_DRAW = 35048;
lime_graphics_opengl_GL.BUFFER_SIZE = 34660;
lime_graphics_opengl_GL.BUFFER_USAGE = 34661;
lime_graphics_opengl_GL.CURRENT_VERTEX_ATTRIB = 34342;
lime_graphics_opengl_GL.FRONT = 1028;
lime_graphics_opengl_GL.BACK = 1029;
lime_graphics_opengl_GL.FRONT_AND_BACK = 1032;
lime_graphics_opengl_GL.CULL_FACE = 2884;
lime_graphics_opengl_GL.BLEND = 3042;
lime_graphics_opengl_GL.DITHER = 3024;
lime_graphics_opengl_GL.STENCIL_TEST = 2960;
lime_graphics_opengl_GL.DEPTH_TEST = 2929;
lime_graphics_opengl_GL.SCISSOR_TEST = 3089;
lime_graphics_opengl_GL.POLYGON_OFFSET_FILL = 32823;
lime_graphics_opengl_GL.SAMPLE_ALPHA_TO_COVERAGE = 32926;
lime_graphics_opengl_GL.SAMPLE_COVERAGE = 32928;
lime_graphics_opengl_GL.NO_ERROR = 0;
lime_graphics_opengl_GL.INVALID_ENUM = 1280;
lime_graphics_opengl_GL.INVALID_VALUE = 1281;
lime_graphics_opengl_GL.INVALID_OPERATION = 1282;
lime_graphics_opengl_GL.OUT_OF_MEMORY = 1285;
lime_graphics_opengl_GL.CW = 2304;
lime_graphics_opengl_GL.CCW = 2305;
lime_graphics_opengl_GL.LINE_WIDTH = 2849;
lime_graphics_opengl_GL.ALIASED_POINT_SIZE_RANGE = 33901;
lime_graphics_opengl_GL.ALIASED_LINE_WIDTH_RANGE = 33902;
lime_graphics_opengl_GL.CULL_FACE_MODE = 2885;
lime_graphics_opengl_GL.FRONT_FACE = 2886;
lime_graphics_opengl_GL.DEPTH_RANGE = 2928;
lime_graphics_opengl_GL.DEPTH_WRITEMASK = 2930;
lime_graphics_opengl_GL.DEPTH_CLEAR_VALUE = 2931;
lime_graphics_opengl_GL.DEPTH_FUNC = 2932;
lime_graphics_opengl_GL.STENCIL_CLEAR_VALUE = 2961;
lime_graphics_opengl_GL.STENCIL_FUNC = 2962;
lime_graphics_opengl_GL.STENCIL_FAIL = 2964;
lime_graphics_opengl_GL.STENCIL_PASS_DEPTH_FAIL = 2965;
lime_graphics_opengl_GL.STENCIL_PASS_DEPTH_PASS = 2966;
lime_graphics_opengl_GL.STENCIL_REF = 2967;
lime_graphics_opengl_GL.STENCIL_VALUE_MASK = 2963;
lime_graphics_opengl_GL.STENCIL_WRITEMASK = 2968;
lime_graphics_opengl_GL.STENCIL_BACK_FUNC = 34816;
lime_graphics_opengl_GL.STENCIL_BACK_FAIL = 34817;
lime_graphics_opengl_GL.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
lime_graphics_opengl_GL.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
lime_graphics_opengl_GL.STENCIL_BACK_REF = 36003;
lime_graphics_opengl_GL.STENCIL_BACK_VALUE_MASK = 36004;
lime_graphics_opengl_GL.STENCIL_BACK_WRITEMASK = 36005;
lime_graphics_opengl_GL.VIEWPORT = 2978;
lime_graphics_opengl_GL.SCISSOR_BOX = 3088;
lime_graphics_opengl_GL.COLOR_CLEAR_VALUE = 3106;
lime_graphics_opengl_GL.COLOR_WRITEMASK = 3107;
lime_graphics_opengl_GL.UNPACK_ALIGNMENT = 3317;
lime_graphics_opengl_GL.PACK_ALIGNMENT = 3333;
lime_graphics_opengl_GL.MAX_TEXTURE_SIZE = 3379;
lime_graphics_opengl_GL.MAX_VIEWPORT_DIMS = 3386;
lime_graphics_opengl_GL.SUBPIXEL_BITS = 3408;
lime_graphics_opengl_GL.RED_BITS = 3410;
lime_graphics_opengl_GL.GREEN_BITS = 3411;
lime_graphics_opengl_GL.BLUE_BITS = 3412;
lime_graphics_opengl_GL.ALPHA_BITS = 3413;
lime_graphics_opengl_GL.DEPTH_BITS = 3414;
lime_graphics_opengl_GL.STENCIL_BITS = 3415;
lime_graphics_opengl_GL.POLYGON_OFFSET_UNITS = 10752;
lime_graphics_opengl_GL.POLYGON_OFFSET_FACTOR = 32824;
lime_graphics_opengl_GL.TEXTURE_BINDING_2D = 32873;
lime_graphics_opengl_GL.SAMPLE_BUFFERS = 32936;
lime_graphics_opengl_GL.SAMPLES = 32937;
lime_graphics_opengl_GL.SAMPLE_COVERAGE_VALUE = 32938;
lime_graphics_opengl_GL.SAMPLE_COVERAGE_INVERT = 32939;
lime_graphics_opengl_GL.COMPRESSED_TEXTURE_FORMATS = 34467;
lime_graphics_opengl_GL.DONT_CARE = 4352;
lime_graphics_opengl_GL.FASTEST = 4353;
lime_graphics_opengl_GL.NICEST = 4354;
lime_graphics_opengl_GL.GENERATE_MIPMAP_HINT = 33170;
lime_graphics_opengl_GL.BYTE = 5120;
lime_graphics_opengl_GL.UNSIGNED_BYTE = 5121;
lime_graphics_opengl_GL.SHORT = 5122;
lime_graphics_opengl_GL.UNSIGNED_SHORT = 5123;
lime_graphics_opengl_GL.INT = 5124;
lime_graphics_opengl_GL.UNSIGNED_INT = 5125;
lime_graphics_opengl_GL.FLOAT = 5126;
lime_graphics_opengl_GL.DEPTH_COMPONENT = 6402;
lime_graphics_opengl_GL.ALPHA = 6406;
lime_graphics_opengl_GL.RGB = 6407;
lime_graphics_opengl_GL.RGBA = 6408;
lime_graphics_opengl_GL.LUMINANCE = 6409;
lime_graphics_opengl_GL.LUMINANCE_ALPHA = 6410;
lime_graphics_opengl_GL.UNSIGNED_SHORT_4_4_4_4 = 32819;
lime_graphics_opengl_GL.UNSIGNED_SHORT_5_5_5_1 = 32820;
lime_graphics_opengl_GL.UNSIGNED_SHORT_5_6_5 = 33635;
lime_graphics_opengl_GL.FRAGMENT_SHADER = 35632;
lime_graphics_opengl_GL.VERTEX_SHADER = 35633;
lime_graphics_opengl_GL.MAX_VERTEX_ATTRIBS = 34921;
lime_graphics_opengl_GL.MAX_VERTEX_UNIFORM_VECTORS = 36347;
lime_graphics_opengl_GL.MAX_VARYING_VECTORS = 36348;
lime_graphics_opengl_GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
lime_graphics_opengl_GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
lime_graphics_opengl_GL.MAX_TEXTURE_IMAGE_UNITS = 34930;
lime_graphics_opengl_GL.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
lime_graphics_opengl_GL.SHADER_TYPE = 35663;
lime_graphics_opengl_GL.DELETE_STATUS = 35712;
lime_graphics_opengl_GL.LINK_STATUS = 35714;
lime_graphics_opengl_GL.VALIDATE_STATUS = 35715;
lime_graphics_opengl_GL.ATTACHED_SHADERS = 35717;
lime_graphics_opengl_GL.ACTIVE_UNIFORMS = 35718;
lime_graphics_opengl_GL.ACTIVE_ATTRIBUTES = 35721;
lime_graphics_opengl_GL.SHADING_LANGUAGE_VERSION = 35724;
lime_graphics_opengl_GL.CURRENT_PROGRAM = 35725;
lime_graphics_opengl_GL.NEVER = 512;
lime_graphics_opengl_GL.LESS = 513;
lime_graphics_opengl_GL.EQUAL = 514;
lime_graphics_opengl_GL.LEQUAL = 515;
lime_graphics_opengl_GL.GREATER = 516;
lime_graphics_opengl_GL.NOTEQUAL = 517;
lime_graphics_opengl_GL.GEQUAL = 518;
lime_graphics_opengl_GL.ALWAYS = 519;
lime_graphics_opengl_GL.KEEP = 7680;
lime_graphics_opengl_GL.REPLACE = 7681;
lime_graphics_opengl_GL.INCR = 7682;
lime_graphics_opengl_GL.DECR = 7683;
lime_graphics_opengl_GL.INVERT = 5386;
lime_graphics_opengl_GL.INCR_WRAP = 34055;
lime_graphics_opengl_GL.DECR_WRAP = 34056;
lime_graphics_opengl_GL.VENDOR = 7936;
lime_graphics_opengl_GL.RENDERER = 7937;
lime_graphics_opengl_GL.VERSION = 7938;
lime_graphics_opengl_GL.NEAREST = 9728;
lime_graphics_opengl_GL.LINEAR = 9729;
lime_graphics_opengl_GL.NEAREST_MIPMAP_NEAREST = 9984;
lime_graphics_opengl_GL.LINEAR_MIPMAP_NEAREST = 9985;
lime_graphics_opengl_GL.NEAREST_MIPMAP_LINEAR = 9986;
lime_graphics_opengl_GL.LINEAR_MIPMAP_LINEAR = 9987;
lime_graphics_opengl_GL.TEXTURE_MAG_FILTER = 10240;
lime_graphics_opengl_GL.TEXTURE_MIN_FILTER = 10241;
lime_graphics_opengl_GL.TEXTURE_WRAP_S = 10242;
lime_graphics_opengl_GL.TEXTURE_WRAP_T = 10243;
lime_graphics_opengl_GL.TEXTURE_2D = 3553;
lime_graphics_opengl_GL.TEXTURE = 5890;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP = 34067;
lime_graphics_opengl_GL.TEXTURE_BINDING_CUBE_MAP = 34068;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
lime_graphics_opengl_GL.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
lime_graphics_opengl_GL.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
lime_graphics_opengl_GL.TEXTURE0 = 33984;
lime_graphics_opengl_GL.TEXTURE1 = 33985;
lime_graphics_opengl_GL.TEXTURE2 = 33986;
lime_graphics_opengl_GL.TEXTURE3 = 33987;
lime_graphics_opengl_GL.TEXTURE4 = 33988;
lime_graphics_opengl_GL.TEXTURE5 = 33989;
lime_graphics_opengl_GL.TEXTURE6 = 33990;
lime_graphics_opengl_GL.TEXTURE7 = 33991;
lime_graphics_opengl_GL.TEXTURE8 = 33992;
lime_graphics_opengl_GL.TEXTURE9 = 33993;
lime_graphics_opengl_GL.TEXTURE10 = 33994;
lime_graphics_opengl_GL.TEXTURE11 = 33995;
lime_graphics_opengl_GL.TEXTURE12 = 33996;
lime_graphics_opengl_GL.TEXTURE13 = 33997;
lime_graphics_opengl_GL.TEXTURE14 = 33998;
lime_graphics_opengl_GL.TEXTURE15 = 33999;
lime_graphics_opengl_GL.TEXTURE16 = 34000;
lime_graphics_opengl_GL.TEXTURE17 = 34001;
lime_graphics_opengl_GL.TEXTURE18 = 34002;
lime_graphics_opengl_GL.TEXTURE19 = 34003;
lime_graphics_opengl_GL.TEXTURE20 = 34004;
lime_graphics_opengl_GL.TEXTURE21 = 34005;
lime_graphics_opengl_GL.TEXTURE22 = 34006;
lime_graphics_opengl_GL.TEXTURE23 = 34007;
lime_graphics_opengl_GL.TEXTURE24 = 34008;
lime_graphics_opengl_GL.TEXTURE25 = 34009;
lime_graphics_opengl_GL.TEXTURE26 = 34010;
lime_graphics_opengl_GL.TEXTURE27 = 34011;
lime_graphics_opengl_GL.TEXTURE28 = 34012;
lime_graphics_opengl_GL.TEXTURE29 = 34013;
lime_graphics_opengl_GL.TEXTURE30 = 34014;
lime_graphics_opengl_GL.TEXTURE31 = 34015;
lime_graphics_opengl_GL.ACTIVE_TEXTURE = 34016;
lime_graphics_opengl_GL.REPEAT = 10497;
lime_graphics_opengl_GL.CLAMP_TO_EDGE = 33071;
lime_graphics_opengl_GL.MIRRORED_REPEAT = 33648;
lime_graphics_opengl_GL.FLOAT_VEC2 = 35664;
lime_graphics_opengl_GL.FLOAT_VEC3 = 35665;
lime_graphics_opengl_GL.FLOAT_VEC4 = 35666;
lime_graphics_opengl_GL.INT_VEC2 = 35667;
lime_graphics_opengl_GL.INT_VEC3 = 35668;
lime_graphics_opengl_GL.INT_VEC4 = 35669;
lime_graphics_opengl_GL.BOOL = 35670;
lime_graphics_opengl_GL.BOOL_VEC2 = 35671;
lime_graphics_opengl_GL.BOOL_VEC3 = 35672;
lime_graphics_opengl_GL.BOOL_VEC4 = 35673;
lime_graphics_opengl_GL.FLOAT_MAT2 = 35674;
lime_graphics_opengl_GL.FLOAT_MAT3 = 35675;
lime_graphics_opengl_GL.FLOAT_MAT4 = 35676;
lime_graphics_opengl_GL.SAMPLER_2D = 35678;
lime_graphics_opengl_GL.SAMPLER_CUBE = 35680;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
lime_graphics_opengl_GL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
lime_graphics_opengl_GL.VERTEX_PROGRAM_POINT_SIZE = 34370;
lime_graphics_opengl_GL.POINT_SPRITE = 34913;
lime_graphics_opengl_GL.COMPILE_STATUS = 35713;
lime_graphics_opengl_GL.LOW_FLOAT = 36336;
lime_graphics_opengl_GL.MEDIUM_FLOAT = 36337;
lime_graphics_opengl_GL.HIGH_FLOAT = 36338;
lime_graphics_opengl_GL.LOW_INT = 36339;
lime_graphics_opengl_GL.MEDIUM_INT = 36340;
lime_graphics_opengl_GL.HIGH_INT = 36341;
lime_graphics_opengl_GL.FRAMEBUFFER = 36160;
lime_graphics_opengl_GL.RENDERBUFFER = 36161;
lime_graphics_opengl_GL.RGBA4 = 32854;
lime_graphics_opengl_GL.RGB5_A1 = 32855;
lime_graphics_opengl_GL.RGB565 = 36194;
lime_graphics_opengl_GL.DEPTH_COMPONENT16 = 33189;
lime_graphics_opengl_GL.STENCIL_INDEX = 6401;
lime_graphics_opengl_GL.STENCIL_INDEX8 = 36168;
lime_graphics_opengl_GL.DEPTH_STENCIL = 34041;
lime_graphics_opengl_GL.RENDERBUFFER_WIDTH = 36162;
lime_graphics_opengl_GL.RENDERBUFFER_HEIGHT = 36163;
lime_graphics_opengl_GL.RENDERBUFFER_INTERNAL_FORMAT = 36164;
lime_graphics_opengl_GL.RENDERBUFFER_RED_SIZE = 36176;
lime_graphics_opengl_GL.RENDERBUFFER_GREEN_SIZE = 36177;
lime_graphics_opengl_GL.RENDERBUFFER_BLUE_SIZE = 36178;
lime_graphics_opengl_GL.RENDERBUFFER_ALPHA_SIZE = 36179;
lime_graphics_opengl_GL.RENDERBUFFER_DEPTH_SIZE = 36180;
lime_graphics_opengl_GL.RENDERBUFFER_STENCIL_SIZE = 36181;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
lime_graphics_opengl_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
lime_graphics_opengl_GL.COLOR_ATTACHMENT0 = 36064;
lime_graphics_opengl_GL.DEPTH_ATTACHMENT = 36096;
lime_graphics_opengl_GL.STENCIL_ATTACHMENT = 36128;
lime_graphics_opengl_GL.DEPTH_STENCIL_ATTACHMENT = 33306;
lime_graphics_opengl_GL.NONE = 0;
lime_graphics_opengl_GL.FRAMEBUFFER_COMPLETE = 36053;
lime_graphics_opengl_GL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
lime_graphics_opengl_GL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
lime_graphics_opengl_GL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
lime_graphics_opengl_GL.FRAMEBUFFER_UNSUPPORTED = 36061;
lime_graphics_opengl_GL.FRAMEBUFFER_BINDING = 36006;
lime_graphics_opengl_GL.RENDERBUFFER_BINDING = 36007;
lime_graphics_opengl_GL.MAX_RENDERBUFFER_SIZE = 34024;
lime_graphics_opengl_GL.INVALID_FRAMEBUFFER_OPERATION = 1286;
lime_graphics_opengl_GL.UNPACK_FLIP_Y_WEBGL = 37440;
lime_graphics_opengl_GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
lime_graphics_opengl_GL.CONTEXT_LOST_WEBGL = 37442;
lime_graphics_opengl_GL.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
lime_graphics_opengl_GL.BROWSER_DEFAULT_WEBGL = 37444;
lime_math__$ColorMatrix_ColorMatrix_$Impl_$.__identity = [1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0];
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.LEFT_X = 0;
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.LEFT_Y = 1;
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.RIGHT_X = 2;
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.RIGHT_Y = 3;
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.TRIGGER_LEFT = 4;
lime_ui__$GamepadAxis_GamepadAxis_$Impl_$.TRIGGER_RIGHT = 5;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.A = 0;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.B = 1;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.X = 2;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.Y = 3;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.BACK = 4;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.GUIDE = 5;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.START = 6;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.LEFT_STICK = 7;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.RIGHT_STICK = 8;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.LEFT_SHOULDER = 9;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.RIGHT_SHOULDER = 10;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.DPAD_UP = 11;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.DPAD_DOWN = 12;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.DPAD_LEFT = 13;
lime_ui__$GamepadButton_GamepadButton_$Impl_$.DPAD_RIGHT = 14;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.NONE = 0;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.LEFT_SHIFT = 1;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.RIGHT_SHIFT = 2;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.LEFT_CTRL = 64;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.RIGHT_CTRL = 128;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.LEFT_ALT = 256;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.RIGHT_ALT = 512;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.LEFT_META = 1024;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.RIGHT_META = 2048;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.NUM_LOCK = 4096;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.CAPS_LOCK = 8192;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.MODE = 16384;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.CTRL = 192;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.SHIFT = 3;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.ALT = 768;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.META = 3072;
lime_utils__$Float32Array_Float32Array_$Impl_$.BYTES_PER_ELEMENT = 4;
lime_utils__$Int16Array_Int16Array_$Impl_$.BYTES_PER_ELEMENT = 2;
lime_utils__$Int32Array_Int32Array_$Impl_$.BYTES_PER_ELEMENT = 4;
lime_utils__$UInt16Array_UInt16Array_$Impl_$.BYTES_PER_ELEMENT = 2;
lime_utils__$UInt32Array_UInt32Array_$Impl_$.BYTES_PER_ELEMENT = 4;
lime_utils__$UInt8Array_UInt8Array_$Impl_$.BYTES_PER_ELEMENT = 1;
openfl_Assets.cache = new openfl_AssetCache();
openfl_Assets.dispatcher = new openfl.events.EventDispatcher();
openfl__$internal_renderer_opengl_shaders2_Shader.UID = 0;
openfl__$internal_renderer_opengl_utils_PathBuiler.__currentWinding = 0;
openfl__$internal_renderer_opengl_utils_PathBuiler.__fillIndex = 0;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.fillVertexAttributes = [new openfl__$internal_renderer_opengl_utils_VertexAttribute(2,5126,false,"aPosition")];
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.drawTrianglesVertexAttributes = [new openfl__$internal_renderer_opengl_utils_VertexAttribute(2,5126,false,"aPosition"),new openfl__$internal_renderer_opengl_utils_VertexAttribute(2,5126,false,"aTexCoord0"),new openfl__$internal_renderer_opengl_utils_VertexAttribute(4,5121,true,"aColor")];
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.primitiveVertexAttributes = [new openfl__$internal_renderer_opengl_utils_VertexAttribute(2,5126,false,"aPosition"),new openfl__$internal_renderer_opengl_utils_VertexAttribute(4,5126,false,"aColor")];
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.graphicsDataPool = [];
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.bucketPool = [];
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.SIN45 = 0.70710678118654752440084436210485;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.TAN22 = 0.4142135623730950488016887242097;
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectPosition = new openfl.geom.Point();
openfl__$internal_renderer_opengl_utils_GraphicsRenderer.objectBounds = new openfl.geom.Rectangle();
openfl_display_Graphics.TILE_SCALE = 1;
openfl_display_Graphics.TILE_ROTATION = 2;
openfl_display_Graphics.TILE_RGB = 4;
openfl_display_Graphics.TILE_ALPHA = 8;
openfl_display_Graphics.TILE_TRANS_2x2 = 16;
openfl_display_Graphics.TILE_RECT = 32;
openfl_display_Graphics.TILE_ORIGIN = 64;
openfl_display_Graphics.TILE_BLEND_NORMAL = 0;
openfl_display_Graphics.TILE_BLEND_ADD = 65536;
openfl_display_GraphicsPathCommand.LINE_TO = 2;
openfl_display_GraphicsPathCommand.MOVE_TO = 1;
openfl_display_GraphicsPathCommand.CURVE_TO = 3;
openfl_display_GraphicsPathCommand.WIDE_LINE_TO = 5;
openfl_display_GraphicsPathCommand.WIDE_MOVE_TO = 4;
openfl_display_GraphicsPathCommand.NO_OP = 0;
openfl_display_GraphicsPathCommand.CUBIC_CURVE_TO = 6;
openfl_display_Tilesheet.TILE_SCALE = 1;
openfl_display_Tilesheet.TILE_ROTATION = 2;
openfl_display_Tilesheet.TILE_RGB = 4;
openfl_display_Tilesheet.TILE_ALPHA = 8;
openfl_display_Tilesheet.TILE_TRANS_2x2 = 16;
openfl_display_Tilesheet.TILE_RECT = 32;
openfl_display_Tilesheet.TILE_ORIGIN = 64;
openfl_display_Tilesheet.TILE_BLEND_NORMAL = 0;
openfl_display_Tilesheet.TILE_BLEND_ADD = 65536;
openfl_display_Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl_display_Tilesheet.TILE_BLEND_SCREEN = 262144;
openfl_display_Tilesheet.TILE_BLEND_SUBTRACT = 524288;
openfl_display_Tilesheet.__defaultPoint = new openfl.geom.Point(0,0);
ApplicationMain.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
