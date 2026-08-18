// Mamaroneck Student Capital — renders js/data.js into whichever page is
// loaded. Every render function checks the element exists first, so this
// one file can be safely included on every page. No build step needed.

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Nav toggle + active link ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("is-open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("is-open"))
  );

  const currentPage = location.pathname.split("/").pop() || "index.html";
  navLinks.querySelectorAll("a").forEach((a) => {
    if (a.getAttribute("href") === currentPage) a.classList.add("is-active");
  });
}

/* ---------- Mission (about page) ---------- */
const missionStatementEl = document.getElementById("missionStatement");
if (missionStatementEl) missionStatementEl.textContent = MSC_DATA.mission.statement;

const missionStructureEl = document.getElementById("missionStructure");
if (missionStructureEl) {
  missionStructureEl.innerHTML = MSC_DATA.mission.structure.map((p) => `<p>${p}</p>`).join("");
}

const taxNoteEl = document.getElementById("taxNote");
if (taxNoteEl) taxNoteEl.textContent = MSC_DATA.mission.taxNote;

/* ---------- Annual cycle diagram + detail cards ---------- */
const cycleLabels = document.querySelectorAll("[data-cycle-label]");
if (cycleLabels.length) {
  cycleLabels.forEach((el) => {
    const phase = MSC_DATA.timeline[Number(el.dataset.cycleLabel)];
    if (phase) el.textContent = phase.title;
  });
}

const timelineDetailEl = document.getElementById("timelineDetail");
if (timelineDetailEl) {
  timelineDetailEl.innerHTML = MSC_DATA.timeline
    .map(
      (phase) => `
    <div class="timeline-phase">
      <div class="no">${phase.no}</div>
      <h3>${phase.title}</h3>
      <ul>${phase.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
    </div>`
    )
    .join("");
}

/* ---------- Team ---------- */
const initials = (name) =>
  name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

const advisorCardEl = document.getElementById("advisorCard");
if (advisorCardEl) {
  const a = MSC_DATA.team.advisor;
  advisorCardEl.innerHTML = `
    <div class="avatar">${initials(a.name)}</div>
    <div>
      <h3>${a.name}</h3>
      <div class="role">${a.role}</div>
      <p>${a.bio}</p>
      <div class="email"><a href="mailto:${a.email}">${a.email}</a></div>
    </div>`;
}

const leaderGridEl = document.getElementById("leaderGrid");
if (leaderGridEl) {
  leaderGridEl.innerHTML = MSC_DATA.team.coPresidents
    .map(
      (name, i) => `
    <div class="leader-card">
      <div class="no">LEAD · ${String(i + 1).padStart(3, "0")}</div>
      <h4>${name}</h4>
      <div class="role">Co-President</div>
    </div>`
    )
    .join("");
}

const memberListEl = document.getElementById("memberList");
if (memberListEl) {
  memberListEl.innerHTML = MSC_DATA.team.members
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((name) => `<li>${name}</li>`)
    .join("");
}

const rosterYearEl = document.getElementById("rosterYear");
if (rosterYearEl) rosterYearEl.textContent = MSC_DATA.team.rosterYear;

/* ---------- Donate ---------- */
const donateBlurbEl = document.getElementById("donateBlurb");
if (donateBlurbEl) donateBlurbEl.textContent = MSC_DATA.donate.blurb;

const donateTaxNoteEl = document.getElementById("donateTaxNote");
if (donateTaxNoteEl) donateTaxNoteEl.textContent = MSC_DATA.mission.taxNote;

/* ---------- Gratitude ---------- */
const gratitudeBodyEl = document.getElementById("gratitudeBody");
if (gratitudeBodyEl) gratitudeBodyEl.textContent = MSC_DATA.gratitude.body;

/* ---------- Contact ---------- */
const contactEmailEl = document.getElementById("contactEmail");
if (contactEmailEl) {
  contactEmailEl.innerHTML = `<a href="mailto:${MSC_DATA.org.email}">${MSC_DATA.org.email}</a>`;
}

const volunteerNoteEl = document.getElementById("volunteerNote");
if (volunteerNoteEl) volunteerNoteEl.textContent = MSC_DATA.contact.volunteerNote;
