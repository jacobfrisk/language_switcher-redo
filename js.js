"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

const languageSelector = document.querySelector("#language-select");

showLocale();

languageSelector.addEventListener("change", () => {
  locale = languageSelector.value;
  console.log(locale);
  showLocale();
});

function showLocale() {
  texts[locale].texts.forEach((textObj) => {
    console.log(textObj);
    document.querySelector(textObj.location).textContent = textObj.text;
  });
}
