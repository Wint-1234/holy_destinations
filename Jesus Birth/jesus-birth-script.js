//create fetch using bible api
//create var query, and search key word birth of Jesus

let query = "birth of Jesus";
let bibleUrlBirthOfJesus = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${query}&sort=relevance`;

fetch(bibleUrlBirthOfJesus, {
  headers: {
    accept: "application/json",
    "api-key": "127fa726b182363266302755b5dab363",
  },
})
  .then((res) => res.json())
  .then((resonse) => {
    console.log(resonse);

    //create Bible chapter
    let scripture_birth_of_Jesus = resonse.data.verses[0].reference;

    console.log(scripture_birth_of_Jesus);

    let newP = document.createElement("p");
    newP.classList.add("italics");

    newP.textContent = scripture_birth_of_Jesus;

    document.getElementById("birth_details").appendChild(newP);

    //break create Bible verse
    let verseHolder = resonse.data.verses[0].text;
    let newPVerse = document.createElement("p");

    newPVerse.classList.add("italics");

    newPVerse.textContent = verseHolder;

    document.getElementById("birth_details").appendChild(newPVerse);

    //create image of Bethlehem
    let imagePlacholder = `https://tse4.mm.bing.net/th?id=OIP.IzhKSr2fGzZuQtzmBrV18wHaEf&pid=Api&P=0`;

    let imageTag = document.createElement("img");
    imageTag.classList.add("jesus_image");

    imageTag.setAttribute("src", imagePlacholder);

    document.getElementById("birth_details").appendChild(imageTag);

    //break create paragraph about the birth of Jesus
    let p_tag = document.createElement("p");

    p_tag.textContent =
      "Bethlehem (/ˈbɛθlɪhɛm/; Arabic: بيت لحم Bayt Laḥm; Hebrew: בֵּית לֶחֶם Bet Leḥem) is a city in the central West Bank, Palestine, about 10 km (6.2 miles) south of Jerusalem. Its population is approximately 25,000,[3][4] and it is the capital of the Bethlehem Governorate of the State of Palestine. The economy is primarily tourist-driven, peaking during the Christmas season, when Christians make pilgrimage to the Church of the Nativity.[5][6] The important holy site of Rachel's Tomb is at the northern entrance of Bethlehem, though not freely accessible to the city's own inhabitants and in general Palestinians living in the occupied West Bank due to the Israeli West Bank barrier.";

    document.getElementById("birth_details").appendChild(p_tag);
  });
