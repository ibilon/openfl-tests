package lime.audio;

extern enum AudioContext {
	OPENAL(alc : ALCAudioContext, al : ALAudioContext);
	HTML5(context : HTML5AudioContext);
	WEB(context : WebAudioContext);
	FLASH(context : FlashAudioContext);
	CUSTOM(data : Dynamic);
}
