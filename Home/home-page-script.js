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
let buttonSearch = document.getElementById("btn_search");

buttonSearch.addEventListener("click", () => {
  //store query in the storage

  localStorage.setItem("scripture", "valley of elah");

  //   let hotels = [];

  //   //go get hotels and airbnb or some shit like that
  //   //object api
  //   //fetch
  //   hotels = [
  //     {
  //       name: "hilton",
  //       city: "san bernardino",
  //     },

  //     {
  //       name: "merriot",
  //       city: "las vegas",
  //     },
  //   ];
  //   localStorage.setItem("hotels", JSON.stringify(hotels));

  //navigate to the next page
  location.pathname = "../David/david-goliath.html";
});
