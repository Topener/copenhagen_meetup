let xhr = new (require('ti.xhr'))();

xhr.GET({
	url: 'http://spoorbaan.com/API/station/asd',
	onSuccess: handleData,
	extraParams: {
		parseJSON: true
	}
});

function handleData(e){
	if (e.data.times){
		let models = []; 
		_.each(e.data.times, (time) => {
			models.push(Alloy.createModel('departures',time));
		});
		$.departures.reset(models);
	}
}

function prepareData(model) {
	console.log("preparing", model.toJSON());
	return {
		title: model.attributes.destination.name,
		template: 'departure'
	};
}
