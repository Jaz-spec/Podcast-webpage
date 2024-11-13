let episodeTitles = [
	"556: No Such Thing As A Ghost In Blue Jeans",
	"555: No Such Thing As Catherine Of Croydon",
	"554: No Such Thing As A Dragonfish At The Opticians",
];
let episodeDescriptions = [
	"Live from the Theatre Royal, Drury Lane, Dan, James, Anna and Andy discuss failure, theatrics, fraud and a highly litigious member of the Trump family",
	"Live from the Theatre Royal, Drury Lane, Dan, James, Anna and Andy discuss cassettes, cruising, cliffs and clowns",
	"Live from Cardiff Dan, James, Anna and Andy discuss wax, water, Persians and perverts",
];

let episode = document.querySelector("#asideContainer");

episodeTitles.forEach((title, index) => {
	let description = episodeDescriptions[index];

	console.log(title, description);
	episode.innerHTML += `<div class="episode-container" id="episodeContainer">
    <h4 id="episodeTitle">${title}</h4>
<div class="episode-main">
    <img
        class="logo"
        src=" https://s3.amazonaws.com/shecodesio-production/uploads/files/000/148/428/original/nosuchthinglogo.png?1729797897https://s3.amazonaws.com/shecodesio-production/uploads/files/000/148/428/original/nosuchthinglogo.png?1729797897"
        alt="" />
    <p id="episodeDescription">${description}</p>
</div>
<a href="https://music.youtube.com/search?q=no+such+thing+as+a+fish" target=_blank >Listen now</a>
</div>`;
});
