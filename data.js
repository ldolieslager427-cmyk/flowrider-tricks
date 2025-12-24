// ===== LEVEL COLORS =====
const levelColors = {
  "Beginner": "#2ecc71",
  "Lower Intermediate": "#3498db",
  "Intermediate": "#f1c40f",
  "Advanced": "#e67e22",
  "Expert": "#e74c3c",
  "Beginner → Intermediate": "#27ae60",
  "Intermediate → Advanced": "#f39c12"
};

// ===== UTILITY FUNCTIONS =====
const levelOrder = ["Beginner","Lower Intermediate","Intermediate","Advanced","Expert","Beginner → Intermediate","Intermediate → Advanced"];

function sortTricks(tricks){
  return tricks.sort((a,b)=> levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level));
}

// ===== CREATE BUTTONS =====
function createButtons(tricks, containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = "";
  const sorted = sortTricks(tricks);
  sorted.forEach(trick => {
    const btn = document.createElement("button");
    btn.textContent = trick.level + " – " + trick.name;
    btn.style.backgroundColor = levelColors[trick.level] || "#1e3d59";
    // Highlight if learned
    if(localStorage.getItem("learned_"+trick.id)) btn.style.boxShadow = "0 0 10px #f1c40f inset";
    btn.onclick = () => {
      window.location.href = `trick.html?id=${trick.id}`;
    };
    container.appendChild(btn);
  });
}

// ===== HOME PAGE SETUP =====
createButtons(bodyboardTricks, "bodyboard");
createButtons(standupTricks, "standup");

// ===== SEARCH/FILTER =====
const searchInput = document.getElementById("search");
if(searchInput){
  searchInput.addEventListener("input", e=>{
    const query = e.target.value.toLowerCase();
    function filter(tricks, containerId){
      const filtered = tricks.filter(t=> t.name.toLowerCase().includes(query));
      createButtons(filtered, containerId);
    }
    filter(bodyboardTricks, "bodyboard");
    filter(standupTricks, "standup");
  });
}

// ===== TRICK PAGE SETUP =====
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const trick = [...bodyboardTricks, ...standupTricks].find(t => t.id === id);

if(trick){
  const nameEl = document.getElementById("name");
  const levelEl = document.getElementById("level");
  const howEl = document.getElementById("how");
  const preEl = document.getElementById("pre");
  const iframe = document.getElementById("video");
  const tipsEl = document.getElementById("tips");

  if(nameEl) nameEl.textContent = trick.name;
  if(levelEl){
    levelEl.textContent = trick.level;
    levelEl.style.color = levelColors[trick.level] || "#fff";
  }
  if(howEl) howEl.textContent = trick.how;
  if(preEl) trick.pre.forEach(p=>{
    const li = document.createElement("li");
    li.textContent = p;
    preEl.appendChild(li);
  });
  if(tipsEl) tipsEl.innerHTML += "";
  if(iframe) iframe.src = trick.video !== "TBD" ? trick.video : "";

  // Collapsible
  const togglePre = document.getElementById("toggle-pre");
  if(togglePre) togglePre.addEventListener("click", ()=>{
    preEl.classList.toggle("collapsed");
    togglePre.textContent = preEl.classList.contains("collapsed") ? "[Show]" : "[Hide]";
  });

  const toggleTips = document.getElementById("toggle-tips");
  if(toggleTips){
    const tipsContent = document.getElementById("tips");
    toggleTips.addEventListener("click", ()=>{
      tipsContent.classList.toggle("collapsed");
      toggleTips.textContent = tipsContent.classList.contains("collapsed") ? "[Show]" : "[Hide]";
    });
  }

  // Learn button
  const learnBtn = document.getElementById("learned-btn");
  if(learnBtn){
    if(localStorage.getItem("learned_"+trick.id)) learnBtn.textContent = "Learned ✅";
    learnBtn.addEventListener("click", ()=>{
      localStorage.setItem("learned_"+trick.id,true);
      learnBtn.textContent = "Learned ✅";
    });
  }
}

// ===== BACK TO TOP =====
const backTop = document.getElementById("back-top");
if(backTop){
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200) backTop.style.display = "block";
    else backTop.style.display = "none";
  });
  backTop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
}

// ===== DARK/LIGHT THEME =====
const themeBtn = document.querySelectorAll("#theme-toggle");
themeBtn.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  });
});

// Apply saved theme
if(localStorage.getItem("theme") === "light") document.body.classList.add("light");
