// AniVerse demo catalog. Replace sample entries with authorized titles and materials.
const anime = [
  {title:"Moonlit Ronin",genre:"Action",year:2025,score:"Featured",symbol:"月",label:"NIGHT RUNNER",description:"A wandering swordsman follows a trail of mysterious lights across a dreamlike city.",bg:"linear-gradient(135deg,#25204b,#6c4a93 55%,#e3a5c6)",glow:"#b58cff",watchUrl:""},
  {title:"Skybound Atlas",genre:"Adventure",year:2024,score:"Adventure",symbol:"✧",label:"BEYOND THE CLOUDS",description:"A young mapmaker sets out to chart islands hidden above the clouds.",bg:"linear-gradient(135deg,#123d59,#338ba0 55%,#c7d6b8)",glow:"#7be0f0",watchUrl:""},
  {title:"Ember Academy",genre:"Fantasy",year:2025,score:"Fantasy",symbol:"火",label:"SPARK YOUR MAGIC",description:"New students discover that every spell comes with a surprising secret.",bg:"linear-gradient(135deg,#4b1e36,#b94e54 55%,#f2b56d)",glow:"#ff9a6c",watchUrl:""},
  {title:"After the Rain",genre:"Drama",year:2023,score:"Drama",symbol:"雨",label:"A QUIET TOMORROW",description:"Two old friends reconnect in a seaside town full of familiar memories.",bg:"linear-gradient(135deg,#23344e,#6487a8 55%,#d2c4df)",glow:"#9fc8ff",watchUrl:""},
  {title:"Neon Orbit",genre:"Sci-Fi",year:2025,score:"Sci-Fi",symbol:"◎",label:"SIGNAL FROM SPACE",description:"A rookie pilot receives a signal that could change life across the galaxy.",bg:"linear-gradient(135deg,#171b51,#6546ad 55%,#ec75bd)",glow:"#b994ff",watchUrl:""},
  {title:"Forest of Echoes",genre:"Fantasy",year:2024,score:"Mystery",symbol:"森",label:"THE OLD FOREST",description:"A curious village apprentice hears stories whispered by ancient trees.",bg:"linear-gradient(135deg,#173d35,#3e8668 55%,#b9c88a)",glow:"#7df0b5",watchUrl:""}
];

const grid = document.getElementById("anime-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const emptyState = document.getElementById("empty-state");
let selectedGenre = "All";

function renderAnime() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = anime.filter(item => {
    const matchesGenre = selectedGenre === "All" || item.genre === selectedGenre;
    const matchesQuery = `${item.title} ${item.genre} ${item.description}`.toLowerCase().includes(query);
    return matchesGenre && matchesQuery;
  });

  grid.innerHTML = filtered.map((item, index) => {
    const originalIndex = anime.indexOf(item) + 1;
    const destination = item.watchUrl ? item.watchUrl : "";
    return `
      <article class="anime-card">
        <div class="poster" style="--poster-bg:${item.bg};--poster-glow:${item.glow}">
          <div class="poster-glow"></div>
          <span class="poster-symbol" aria-hidden="true">${item.symbol}</span>
          <span class="poster-label">${item.label}</span>
          <span class="poster-index">AV / ${String(originalIndex).padStart(2,"0")}</span>
        </div>
        <div class="card-body">
          <div class="card-meta"><span class="genre-label">${item.genre}</span><span class="year-label">${item.year}</span></div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="card-actions">
            ${destination
              ? `<a href="${destination}" target="_blank" rel="noopener noreferrer">Official watch link <span>↗</span></a>`
              : `<a href="#" class="watch-placeholder" data-title="${item.title}">View details <span>→</span></a>`}
            <span class="rating">✦ ${item.score}</span>
          </div>
        </div>
      </article>`;
  }).join("");

  emptyState.classList.toggle("hidden", filtered.length !== 0);
  grid.classList.toggle("hidden", filtered.length === 0);
  document.getElementById("title-count").textContent = String(anime.length).padStart(2,"0");
  document.querySelectorAll(".filter-chip[data-genre='All'] span")[0].textContent = String(anime.length).padStart(2,"0");

  document.querySelectorAll(".watch-placeholder").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert(`${link.dataset.title} is sample demo content. Add a licensed viewing URL or a details page before publishing.`);
    });
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedGenre = button.dataset.genre;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderAnime();
  });
});
searchInput.addEventListener("input", renderAnime);
document.getElementById("reset-search").addEventListener("click", () => {
  searchInput.value = "";
  selectedGenre = "All";
  filterButtons.forEach(item => item.classList.toggle("active", item.dataset.genre === "All"));
  renderAnime();
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});
renderAnime();
