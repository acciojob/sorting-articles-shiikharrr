const bands = [
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

const strip = s => s.replace(/^(?:the|an|a)\s+/i, '').trim();

const sorted = bands
  .slice()
  .sort((a, b) => strip(a).localeCompare(strip(b), 'en', { sensitivity: 'base' }));

document.getElementById('band').innerHTML =
  sorted.map(x => `<li>${x}</li>`).join('');