//reading the query of the local storage
let query = localStorage.getItem("scripture");
//let hotels = JSON.parse(localStorage.getItem("hotels"));

//use the query to fetch

if (query !== null) {
  let bibleURL = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${query}&sort=relevance`;

  fetch(bibleURL, {
    headers: {
      accept: "application/json",
      "api-key": "127fa726b182363266302755b5dab363",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);

      let scripturePlaceHolder = response.data.verses[0].reference;
      //console.log(scripturePlaceHolder);
      let newP = document.createElement("p");

      newP.textContent = scripturePlaceHolder;

      let verseHolder = response.data.verses[0].text;
      let versePara = document.createElement("p");

      versePara.textContent = verseHolder;

      //console.log(scripturePlaceHolder);
      //question as to why the image is not appending to the page.
      document.getElementById("image_david_goliath").appendChild(newP);
      document.getElementById("image_david_goliath").appendChild(versePara);
    });
}
