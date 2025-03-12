const affirmationHolder = document.getElementById("affirmation");
const newAffirmationBtn = document.getElementById("new-affirmation");

newAffirmationBtn.addEventListener("click", fetchAffirmation);

async function fetchAffirmation() {
  const res = await fetch("affirmations.json");
  const data = await res.json();
  const random = Math.floor(Math.random() * data.affirmations.length);
  const randomAffirmation = data.affirmations[random];
  console.log(randomAffirmation.text);
  affirmationHolder.textContent = randomAffirmation.text;
}
