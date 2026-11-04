// Checklist 2.
const hobbies = [
  "Hiking and backpacking",
  "Working out",
  "Kayaking",
  "Competitive board games",
  "Playing golf",
  "Playing basketball"
];

// Checklist 4.
const list = document.querySelector("#list");

// Checklist 3.
hobbies.forEach(function (hobby) {
  // Checklist 4.
  const li = document.createElement("li");
  li.textContent = hobby;
  list.appendChild(li);
});

// Checklist 5.
const count = document.getElementById("count");
count.textContent = "I have at least " + hobbies.length + " hobbies.";