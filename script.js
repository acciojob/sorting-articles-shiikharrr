const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
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

const strip = s => s.replace(/^(a |an |the )/i, '').trim();

const sorted = bands
  .slice()
  .sort((a, b) => strip(a).localeCompare(strip(b), 'en', { sensitivity: 'base' }));

document.getElementById('band').innerHTML =
  sorted.map(item => `<li>${item}</li>`).join('');