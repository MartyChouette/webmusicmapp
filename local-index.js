const dogs = [
  { name: "Sammy" },
  { name: "Roscoe" },
  { name: "Pookie" },
  { name: "Bailey" },
  { name: "Butch" },
  { name: "Sunshine" },
];
main();

async function main() {
  //await dogs load
  displayDogs();
}

function displayDogs() {
  for (let dog of dogs) {
    addDogToDisplay(dog);
  }

  function addDogToDisplay(dog) {
    const dogItem = document.createElement("a");
    dogItem.href = "#";
    dogItem.innerText = dog.name;
    dogItem.className = "list-group-item";

    const dogsListUI = document.getElementById("dog-list");
    dogsListUI.appendChild(dogItem);
  }
}
