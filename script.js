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

// Function to remove articles
function removeArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort bands alphabetically ignoring articles
const sortedBands = bands.sort((a, b) => {
    return removeArticle(a).localeCompare(removeArticle(b));
});

// Display on UI
const ul = document.getElementById("band");

sortedBands.forEach(band => {
    const li = document.createElement("li");
    li.textContent = band;
    ul.appendChild(li);
});