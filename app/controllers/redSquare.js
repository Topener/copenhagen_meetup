if ($.args.color) {
	$.first.backgroundColor = $.args.color;
}

if ($.args.textColor) {
	$.firstLabel.color = $.args.textColor;
	$.secondLabel.color = $.args.textColor;
}

if ($.args.title) {
	$.firstLabel.text = $.args.title;
}

if ($.args.hasOwnProperty('top')) {
	$.wrapper.top = $.args.top;
}
