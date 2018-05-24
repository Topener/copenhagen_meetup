function handleItemClick(e){
	var item = $.list.sections[e.sectionIndex].items[e.itemIndex];
	$.navWin.openWindow(Alloy.createController(item.properties.controller).getView());
	
}


$.getView().open();
