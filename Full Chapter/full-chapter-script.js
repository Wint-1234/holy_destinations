const bibleTerms = [
    "lord",
    "god",
    "man",
    "israel",
    "people",
    "king",
    "son",
    "men",
    "house",
    "land",
];

const queryTerm = bibleTerms[Math.floor(Math.random() * 11)];
const bibleURL = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${queryTerm}&sort=relevance`;
async function getVerse() {
    const response = await fetch(bibleURL, {
        headers: {
            accept: "application/json",
            "api-key": "127fa726b182363266302755b5dab363",
        },
    });
    const data = await response.json();
    let verses = data["data"].verses;

    // iterate through all items in verses
    for (verse of verses) {
        const newP = document.createElement("p");
        let bibleReference = verse.reference;
        let verseOfTheDay = verse.text;
        newP.textContent = `${bibleReference}: ${verseOfTheDay}`;
        const anotherP = document.createElement("p");
        newP.appendChild(anotherP);
        addVerses.appendChild(newP);
    }
}
document.addEventListener("load", getVerse());
