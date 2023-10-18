// Add your code here
const inputWord = document.getElementById("userinput");
const contentParagraph = document.getElementById("intro").innerHTML;

const search = function findWordAndHighlight(event) {
  resetSearch();
  let searched = document.getElementById("userinput").value.trim();
  if (searched !== "") {
    let text = document.getElementById("intro").innerHTML;
    let re = new RegExp(searched, "g");
    let newText = text.replace(
      re,
      `<a class="highlight" style="background:yellow; text-decoration:none;">${searched}</a>`
    );
    document.getElementById("intro").innerHTML = newText;
  }
};

const resetSearch = function resetParagraph(event) {
  const text = document.getElementById("intro");
  text.remove();
  let app = document.querySelector(".paragraph");
  const resetpara = document.createElement("div");
  resetpara.innerHTML = `${contentParagraph}`;
  resetpara.setAttribute("id", "intro");
  app.appendChild(resetpara);
};

inputWord.addEventListener("keyup", function (event) {
  if (event) {
    search();
  }
});
