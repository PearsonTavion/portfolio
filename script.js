
const hobbies = [
  "Hiking and backpacking",
  "Working out",
  "Kayaking",
  "Competitive board games",
  "Playing golf",
  "Playing basketball"
];

const list = document.querySelector("#list");

hobbies.forEach(function (hobby) {
  const li = document.createElement("li");
  li.textContent = hobby;
  list.appendChild(li);
});

const count = document.getElementById("count");
count.textContent = "I have at least " + hobbies.length + " hobbies.";