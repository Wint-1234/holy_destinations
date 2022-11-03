// const bibleURL =
//     "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=Goliath&sort=relevance";

// const data5 = fetch(bibleURL, {
//     headers: {
//         accept: "application/json",
//         "api-key": "127fa726b182363266302755b5dab363",
//     },
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// const bibleURL =
//     "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=Goliath&sort=relevance";

// const data5 = fetch(bibleURL, {
//     headers: {
//         accept: "application/json",
//         "api-key": "127fa726b182363266302755b5dab363",
//     },
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//James Code
let buttonSearchDavidAndGoliath = document.getElementById(
  "btn_search_david_goliath"
);

buttonSearchDavidAndGoliath.addEventListener("click", () => {
  //store query in the storage

  localStorage.setItem("scripture", "valley of elah");

  //navigate to the next page
  location.pathname = "../David/david-goliath.html";
});

//break birth of Jesus
let buttonSearchJesusBirth = document.getElementById("btn_search_jesus_birth");

buttonSearchJesusBirth.addEventListener("click", () => {
  //alert("Jesus is King");
  localStorage.setItem("scripture_birth_of_Jesus", "birth of Jesus");
  location.pathname = "../Jesus Birth/jesus-birth.html";
});

//break garden of gethsemane
let buttonSearchGardenOfGethsemane = document.getElementById(
  "btn_search_garden_of_gethsemane"
);

buttonSearchGardenOfGethsemane.addEventListener("click", () => {
  //alert("garden of gethsemane");
  location.pathname = "../Gethsemane/gethsemane.html";
});
