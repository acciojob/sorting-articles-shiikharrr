//your JS code here. If required.
const bands = [
	'The Plot in You',
	'The Devil wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog'
];

const strip = s => s.replace(/^\s*(?:a|am|the)\s+/i, '');

const sorted = bands.slice().sort((a, b) => 
	strip(a).localeCompare(strip(b), undefined, { sensitivity: 'base' }));

document.getElementById('band').innerHTML = sorted.map(x => `<li>${x}</li>`).join('');