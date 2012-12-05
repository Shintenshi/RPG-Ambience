var Adventure = function() {
	var self = this;
	
	self.title = '';
	self.scenes = [];
	
	Object.defineProperty(self, 'media', {
		get: function() {
			return self.scenes.map(get('media')).flatten();
		}
	});
};