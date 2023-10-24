// Add your code here.
const inputWord = document.getElementById("userinput");
const contentParagraph = document.getElementById("intro").innerHTML;

const search = function searchHighlightWord(event) {
  resetSearch();
  let searched = document.getElementById("userinput").value.trim();
  if (searched !== "") {
    let text = document.getElementById("intro").innerHTML;
    let re = new RegExp("\\b" + searched + "\\b", "g");
    let newText = text.replace(
      re,
      `<span class="highlight">${searched}</span>`
    );
    document.getElementById("intro").innerHTML = newText;
  }
};

const resetSearch = function resetContent(event) {
  const text = document.getElementById("intro");
  text.remove();
  let app = document.querySelector(".paragraph");
  const resetPara = document.createElement("div");
  resetPara.innerHTML = `${contentParagraph}`;
  resetPara.setAttribute("id", "intro");
  app.appendChild(resetPara);
};

inputWord.addEventListener("keyup", function (event) {
  if (event) {
    search();
  }
});
