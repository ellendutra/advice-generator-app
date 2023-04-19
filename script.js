async function randomAdvice() {
  let adviceResponse = await fetch("https://api.adviceslip.com/advice");
  let adviceData = await adviceResponse.json();

  let id = document.getElementById("id-advice");
  let advice = document.getElementById("advice");

  id.innerText = `ADVICE #${adviceData.slip.id}`;
  advice.innerText = `${adviceData.slip.advice}`;

  return adviceData;
}

randomAdvice();

let button = document.getElementById("button");
button.addEventListener("click", () => {
  randomAdvice();
});
