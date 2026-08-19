// Mamaroneck Student Capital — all editable content lives here.
// Update rosters, copy, and links in this one file; the HTML pages render
// from it automatically. No other file needs to change for routine edits.

const MSC_DATA = {
  org: {
    name: "Mamaroneck Student Capital",
    short: "MSC",
    tagline: "Students managing real capital, for real community impact.",
    email: "mamaroneckstudentcapital@gmail.com",
    founded: "May 8, 2025",
  },

  mission: {
    statement:
      "The Mamaroneck Student Capital Fund empowers students by giving them real-world investment experience in the management of charitable capital. Through education, collaboration, and responsible investing, the Fund supports initiatives that strengthen Mamaroneck High School and the Larchmont-Mamaroneck community.",
    structure: [
      "Mamaroneck Student Capital is a non-profit organization founded with the dual purpose of providing Mamaroneck High School students with authentic financial experience and supporting the local community. MSC works in partnership with the Mamaroneck High School Student Investment Club.",
      "The MSC is an adult-run organization that is raising money from friends, family, and the community in support of its mission. The MSC investment portfolio is managed by the students in the high school investment club, with oversight from the MSC Board. Like an endowment, a portion of MSC funds is donated annually to support student activities and local charitable organizations. Inspired by many existing programs at MHS, MSC's goal is to provide a hands-on investment learning experience for students — one where they must think critically to promote capital growth, manage investment risk, and maximize community impact.",
    ],
    taxNote:
      "Mamaroneck Student Capital is a recognized 501(c)(3) tax-exempt organization. Donations are tax-deductible, retroactive to our date of formation, May 8, 2025.",
  },

  timeline: [
    {
      no: "01",
      title: "Fall Semester",
      points: [
        "The MHS Student Investment Club begins weekly meetings.",
        "Faculty advisor, guest speakers, and club leadership teach lessons to club members.",
        "Club leadership monitors the existing investment portfolio.",
      ],
    },
    {
      no: "02",
      title: "Spring Semester",
      points: [
        "Students form groups that work together throughout the spring.",
        "Each group researches and prepares a stock pitch on an investment of their choosing.",
        "Club leadership identifies a local charitable organization to support.",
      ],
    },
    {
      no: "03",
      title: "Investment Night",
      points: [
        "Student groups pitch their investments to the adult MSC Board.",
        "Investments that win board approval are made as the portfolio is updated.",
        "A portion of assets is donated to student activities at MHS and a local charity.",
        "The cycle renews for the next school year.",
      ],
    },
  ],

  team: {
    advisor: {
      name: "Peter O'Byrne",
      role: "Faculty Advisor",
      photo: "assets/img/team/peter-obyrne.png",
      bio: "Peter O'Byrne is the President of Mamaroneck Student Capital and the faculty advisor to the Mamaroneck High School Student Investment Club. He currently teaches AP Macroeconomics and Original Civic Research in Action (OCRA) at MHS. During his five years at MHS, Peter has also taught Economics and Personal Finance, Current Issues in Government and Law, and Global History. In addition to his teaching responsibilities, Peter is an assistant coach with the varsity football team. Prior to joining the faculty at Mamaroneck, Peter taught economics and math at KIPP NYC College Prep in the Bronx, NY for nine years.",
      email: "mamaroneckstudentcapital@gmail.com",
    },

    // Org chart — leadership tier (photo optional; falls back to initials).
    leadership: [
      { name: "Will Cohen", role: "Founder/President", photo: "assets/img/team/will-cohen.png" },
      { name: "Jonah Klein", role: "President", photo: null },
      { name: "Ethan Moss", role: "President", photo: null },
    ],

    // Org chart — committee tier. Each committee is a box listing its members.
    committees: [
      { name: "Portfolio Managers", members: ["Hudson Berger", "Ryan Bloch"] },
      { name: "Market Updates", members: ["Alex Blanco", "Bruno Iberez-Hernandez", "Will Charalumbous"] },
      { name: "Reporter", members: ["Spencer Baron"] },
      { name: "Secretary", members: ["Andrew Sami", "Micheal Guidice"] },
    ],

    // Roster year — update this and the lists below each fall.
    rosterYear: "2024-2025",
    members: [
      "Hudson Berger", "Ryan Bloch", "Judd Borenstein", "Maddison Cashman",
      "William Cohen", "Gus Constantine", "Charles Cox", "Jacob Cutler",
      "Cole Dorfman", "Max Dowell", "James Fitzgerald", "Evan Gray",
      "Michael Guidice", "Christian Helgesen", "Jack Jacobson", "Jonah Klein",
      "Owen Koby", "Ryan Lassman", "Quinn Marchant", "Peter McMillan",
      "Andie Millman", "Griffin Moore", "Ethan Moss", "Adam Parker",
      "Shaan Rangraj", "Nathaniel Rudich", "Andrew Sami", "Dylan Schiron",
      "Shel Silverstein", "Cameron Ventura",
    ],
  },

  donate: {
    blurb:
      "Your donation to Mamaroneck Student Capital empowers students to make meaningful financial decisions that benefit both Mamaroneck High School and local community charities. Guided by adult mentors, students invest these funds to maximize returns and local impact.",
  },

  gratitude: {
    body: "Mamaroneck Student Capital was formed thanks to the generous support of a fast-track grant from the Mamaroneck Schools Foundation. The grant, awarded in the spring of 2025, was used to pay for legal services needed to register Mamaroneck Student Capital as a non-profit organization.",
  },

  // Quarterly newsletter — most recent first. Set date + file once an issue
  // is ready; leave file: null to show a "Coming soon" card with no link.
  // Drop the PDF itself in assets/files/.
  newsletters: [
    { date: "June 1, 2026", title: "Year One Annual Report", file: "assets/files/msc-year-one-report-2026-06-01.pdf" },
    { date: null, title: "Newsletter", file: null },
    { date: null, title: "Newsletter", file: null },
  ],

  // Portfolio — exact holdings pulled from the brokerage account (no
  // purchase dates available, so returns are unrealized gain/loss vs. cost
  // basis, computed at render time in main.js from costBasis + marketValue
  // below). Update these two numbers per holding and everything else
  // (allocation %, return %, totals) recalculates automatically.
  portfolio: {
    asOf: "August 19, 2026",
    givenToCommunity: 1000,
    holdings: [
      { name: "Alphabet Inc. Class C", ticker: "GOOG", sector: "Communication Services", thesis: "Dominant position in digital advertising, search, cloud computing, and artificial intelligence through Google and Gemini.", costBasis: 999.83, marketValue: 892.58 },
      { name: "Broadcom Inc.", ticker: "AVGO", sector: "Information Technology", thesis: "Exposure to AI infrastructure, networking, and data center growth.", costBasis: 498.79, marketValue: 459.54 },
      { name: "Dominion Energy, Inc.", ticker: "D", sector: "Utilities", thesis: "Stable defensive utility with dividend and infrastructure exposure.", costBasis: 999.97, marketValue: 1091.70 },
      { name: "Eli Lilly and Co.", ticker: "LLY", sector: "Health Care", thesis: "Leadership in obesity and diabetes treatment markets.", costBasis: 1017.43, marketValue: 1275.63 },
      { name: "EMCOR Group Inc.", ticker: "EME", sector: "Industrials", thesis: "Exposure to U.S. infrastructure spending, electrical construction, data center development, and mission-critical building services.", costBasis: 998.49, marketValue: 944.05 },
      { name: "Fidelity Money Market Fund", ticker: "SPRXX", sector: "Cash & Equivalents", thesis: "Capital preservation and liquidity reserve.", costBasis: 6045.49, marketValue: 6045.49 },
      { name: "Linde PLC", ticker: "LIN", sector: "Materials", thesis: "Global leader in industrial gases with exposure to manufacturing, healthcare, clean energy, and semiconductor production.", costBasis: 1017.32, marketValue: 963.72 },
      { name: "Palo Alto Networks, Inc.", ticker: "PANW", sector: "Information Technology", thesis: "Long-term cybersecurity demand and enterprise security leadership.", costBasis: 999.86, marketValue: 1774.08 },
      { name: "Prologis, Inc.", ticker: "PLD", sector: "Real Estate", thesis: "E-commerce and logistics infrastructure exposure.", costBasis: 999.89, marketValue: 1098.30 },
      { name: "Robinhood Markets, Inc.", ticker: "HOOD", sector: "Financials", thesis: "Retail investing platform and crypto trading exposure.", costBasis: 500.01, marketValue: 614.46 },
      { name: "Taiwan Semiconductor Manufacturing Co. (TSMC)", ticker: "TSM", sector: "Information Technology", thesis: "Foundational semiconductor manufacturing leader powering global AI demand.", costBasis: 499.90, marketValue: 688.54 },
      { name: "Vanguard S&P 500 ETF", ticker: "VOO", sector: "Diversified Market Exposure", thesis: "Core diversified U.S. equity exposure through dollar cost averaging.", costBasis: 4998.92, marketValue: 5525.51 },
    ],
  },

  contact: {
    volunteerNote:
      "We are always looking for community members with financial experience to come speak with students or work with the club in some fashion.",
  },
};
