.controller('appController', function() {
	this.data = [
		{
			"name": "Button",
			"description": "Your standard form button.",
			"markup": {
				"example": "<div class='one'>This is a button</div>",
				"escaped": "&lt;button&gt;This is a button&lt;/button&gt;"
			}
		},
		{
			"name": "Link",
			"description": "Your standard link.",
			"markup": {
				"example": "<a href=''>This is a link</a>",
				"escaped": "&lt;a href=''&gt;Link&lt;/a&gt;"
			}
		}
	];
})
