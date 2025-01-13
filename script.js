const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const title = document.querySelectorAll(".letter");

//title annimation
function randomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 120);
	const b = Math.floor(Math.random() * 50);
	return `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
	title.forEach(letter => {
		letter.style.color = randomRGB();
	});
}, 500);

//given fruit list
const fruit = [
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
];

//function that filters the fruits which include anything in str into results array
function search(str) {
	return fruit.filter(fruit => fruit.toUpperCase().includes(str.toUpperCase()));
}

//creates variable for the user input, using the search function with the user input
function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);

	showSuggestions(results, inputVal);
}

function showSuggestions(results) {
	//clears suggestions as results is updated
	suggestions.innerHTML = "";

	//creates li for each element in the results array
	if (results.length > 0) {
		results.forEach(fruit => {
			const li = document.createElement("li");
			li.textContent = fruit;

			//click event that activates useSuggestion function
			li.addEventListener("click", useSuggestion);

			//hover effect over suggestion list
			li.addEventListener("mouseover", e => {
				e.target.style.backgroundColor = "#FFA500";
			});

			li.addEventListener("mouseout", e => {
				e.target.style.backgroundColor = "";
			});

			//adds the created li to the ul
			suggestions.appendChild(li);
		});
	}
}

//click event that fills search bar
function useSuggestion(e) {
	input.value = e.target.textContent;

	//clears suggestions after click
	suggestions.innerHTML = "";
}

//links keyup event to searchHandler
input.addEventListener("keyup", searchHandler);
