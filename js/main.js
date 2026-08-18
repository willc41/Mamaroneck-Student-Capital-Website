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

const avatarHTML = (name, photo) =>
  photo ? `<img src="${photo}" alt="${name}" />` : initials(name);

const advisorCardEl = document.getElementById("advisorCard");
if (advisorCardEl) {
  const a = MSC_DATA.team.advisor;
  advisorCardEl.innerHTML = `
    <div class="avatar">${avatarHTML(a.name, a.photo)}</div>
    <div>
      <h3>${a.name}</h3>
      <div class="role">${a.role}</div>
      <p>${a.bio}</p>
      <div class="email"><a href="mailto:${a.email}">${a.email}</a></div>
    </div>`;
}

/* ---------- Org chart (team page) ---------- */
const orgChartEl = document.getElementById("orgChart");
if (orgChartEl) {
  const a = MSC_DATA.team.advisor;

  const advisorNode = `
    <div class="org-tier org-tier--single org-tier--trunk">
      <div class="org-node org-node--advisor">
        <div class="org-avatar">${avatarHTML(a.name, a.photo)}</div>
        <h4>${a.name}</h4>
        <div class="org-role">${a.role}</div>
      </div>
    </div>`;

  const leadershipNode = `
    <div class="org-tier org-tier--branch org-tier--trunk">
      ${MSC_DATA.team.leadership
        .map(
          (m) => `
        <div class="org-node">
          <div class="org-avatar">${avatarHTML(m.name, m.photo)}</div>
          <h4>${m.name}</h4>
          <div class="org-role">${m.role}</div>
        </div>`
        )
        .join("")}
    </div>`;

  const committeeNode = `
    <div class="org-tier org-tier--branch">
      ${MSC_DATA.team.committees
        .map(
          (c) => `
        <div class="org-node org-node--group">
          <div class="org-role">${c.name}</div>
          <ul class="org-member-list">${c.members.map((n) => `<li>${n}</li>`).join("")}</ul>
        </div>`
        )
        .join("")}
    </div>`;

  orgChartEl.innerHTML = advisorNode + leadershipNode + committeeNode;
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
