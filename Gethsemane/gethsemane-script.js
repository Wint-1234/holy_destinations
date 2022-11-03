//create fetch using bible api
//create var query, and search key word garden of gethsemane

let query = "gethsemane";
let bibleUrlGardenOfGethsemane = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${query}&sort=relevance`;

fetch(bibleUrlGardenOfGethsemane, {
  headers: {
    accept: "application/json",
    "api-key": "127fa726b182363266302755b5dab363",
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log(response);

    //create Bible chapter
    let scripture_gethsemane = response.data.verses[1].reference;
    console.log(scripture_gethsemane);

    let newP = document.createElement("p");
    newP.classList.add("italics");

    newP.textContent = scripture_gethsemane;

    document.getElementById("gethsemane_details").appendChild(newP);

    //break create Bible verse
    let verseHolder = response.data.verses[1].text;
    let newPVerse = document.createElement("p");
    newPVerse.classList.add("italics");

    newPVerse.textContent = verseHolder;

    document.getElementById("gethsemane_details").appendChild(newPVerse);

    //break create image of Garden of Gethsemane
    let imagePlacholder = `https://cbnisrael.org/wp-content/uploads/2021/03/2021-03-23-Garden-of-Gethsemane-Marc-Turnage-2048x1396.jpg
`;
    let imageTag = document.createElement("img");
    imageTag.classList.add("gethsemane_image");

    imageTag.setAttribute("src", imagePlacholder);

    document.getElementById("gethsemane_details").appendChild(imageTag);

    //break create paragraph about the garden of Gethsemane
    let p_tag = document.createElement("p");

    p_tag.textContent = `Gethsemane (/ɡɛθˈsɛməni/)[1] is a garden at the foot of the Mount of Olives in Jerusalem where, according to the four Gospels of the New Testament, Jesus underwent the agony in the garden and was arrested before his crucifixion. It is a place of great resonance in Christianity. There are several small olive groves in church property, all adjacent to each other and identified with biblical Gethsemane.`;

    document.getElementById("gethsemane_details").appendChild(p_tag);
  });
