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

/* ---------- Newsletter ---------- */
const newsletterGridEl = document.getElementById("newsletterGrid");
if (newsletterGridEl) {
  newsletterGridEl.innerHTML = MSC_DATA.newsletters
    .map((n) => {
      if (!n.file) {
        return `
        <div class="newsletter-card is-empty">
          <span class="date">Coming soon</span>
          <h3>${n.title}</h3>
        </div>`;
      }
      return `
        <div class="newsletter-card">
          <span class="date">${n.date}</span>
          <h3>${n.title}</h3>
          <a href="${n.file}" class="btn btn--outline" target="_blank" rel="noopener">Download PDF</a>
        </div>`;
    })
    .join("");
}

/* ---------- Portfolio ---------- */
const PORTFOLIO_COLORS = ["var(--orange)", "var(--ink)", "var(--orange-dark)", "#8a8578", "#c9a876", "#5c5648"];

const portfolioAsOfEl = document.getElementById("portfolioAsOf");
if (portfolioAsOfEl) portfolioAsOfEl.textContent = `As of ${MSC_DATA.portfolio.asOf}`;

const portfolioStatsEl = document.getElementById("portfolioStats");
if (portfolioStatsEl) {
  const s = MSC_DATA.portfolio.summary;
  const stats = [
    { label: "Total Value", value: s.totalValue },
    { label: "Cash", value: s.cash },
    { label: "Total Return YTD", value: s.totalReturnYTD, neg: s.totalReturnYTD.trim().startsWith("-") },
    { label: "vs. S&P 500", value: s.sp500Return },
  ];
  portfolioStatsEl.innerHTML = stats
    .map(
      (st) => `
    <div class="stat-card">
      <span class="stat-label">${st.label}</span>
      <div class="stat-value${st.neg ? " is-negative" : ""}">${st.value}</div>
    </div>`
    )
    .join("");
}

const portfolioDonutEl = document.getElementById("portfolioDonut");
const portfolioLegendEl = document.getElementById("portfolioLegend");
if (portfolioDonutEl && portfolioLegendEl) {
  const data = MSC_DATA.portfolio.allocation;
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;
  const stops = data.map((d, i) => {
    const start = (cumulative / total) * 100;
    cumulative += d.value;
    const end = (cumulative / total) * 100;
    return `${PORTFOLIO_COLORS[i % PORTFOLIO_COLORS.length]} ${start}% ${end}%`;
  });
  portfolioDonutEl.style.background = `conic-gradient(${stops.join(", ")})`;
  portfolioDonutEl.innerHTML = `
    <div class="portfolio-donut-center">
      <div class="value">${MSC_DATA.portfolio.summary.totalValue}</div>
      <div class="label">TOTAL VALUE</div>
    </div>`;

  portfolioLegendEl.innerHTML = data
    .map((d, i) => {
      const pct = ((d.value / total) * 100).toFixed(1);
      const amt = d.value.toLocaleString(undefined, { style: "currency", currency: "USD" });
      return `
      <li>
        <span class="swatch" style="background:${PORTFOLIO_COLORS[i % PORTFOLIO_COLORS.length]}"></span>
        <span class="lbl">${d.label}</span>
        <span class="amt">${amt}</span>
        <span class="pct">${pct}%</span>
      </li>`;
    })
    .join("");
}

const portfolioTableBodyEl = document.getElementById("portfolioTableBody");
if (portfolioTableBodyEl) {
  portfolioTableBodyEl.innerHTML = MSC_DATA.portfolio.holdings
    .map((h) => {
      const hasReturn = typeof h.returnPct === "number";
      const retClass = hasReturn ? (h.returnPct >= 0 ? "is-positive" : "is-negative") : "";
      const retText = hasReturn ? `${h.returnPct >= 0 ? "+" : ""}${h.returnPct.toFixed(2)}%` : "—";
      return `
      <tr>
        <td>
          <div class="name">${h.name}</div>
          <div class="thesis">${h.thesis}</div>
        </td>
        <td class="sector">${h.sector}</td>
        <td class="entry">${h.entryDate || "—"}</td>
        <td class="ret ${retClass}">${retText}</td>
      </tr>`;
    })
    .join("");
}

/* ---------- Contact ---------- */
const contactEmailEl = document.getElementById("contactEmail");
if (contactEmailEl) {
  contactEmailEl.innerHTML = `<a href="mailto:${MSC_DATA.org.email}">${MSC_DATA.org.email}</a>`;
}

const volunteerNoteEl = document.getElementById("volunteerNote");
if (volunteerNoteEl) volunteerNoteEl.textContent = MSC_DATA.contact.volunteerNote;
