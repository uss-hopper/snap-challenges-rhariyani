//Map this array of text to the DOM.
var wizards=['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', ' Sarah'];

// 		// Get the app element
var app = document.querySelector('#app');

// // Create markup
app.innerHTML = '<ul>' + wizards.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('') + '</ul>';