// All page content lives here — edit this file to update the website.
// Files placed in /public (e.g. /public/reports/stage1.pdf) can be linked as "/reports/stage1.pdf".

export type Status = "done" | "current" | "upcoming";

export const site = {
  name: "Erasmus@FCT",
  course: "Interação Pessoa-Máquina · 2026/27",
  university: "NOVA FCT",
  tagline: "One place for everything an Erasmus student needs at NOVA FCT.",
  intro:
    "We are a student team in the Human-Computer Interaction course at NOVA FCT. Our project is an information platform that helps incoming Erasmus students find their way: from the first paperwork to their first lecture on campus.",
};

export const about = {
  problem:
    "Incoming Erasmus students find the information they need scattered across university pages, emails, PDFs and group chats, often only in Portuguese. Simple questions like “Where do I sign my Learning Agreement?” or “How do I get to campus?” take hours to answer.",
  solution:
    "Erasmus@FCT puts this knowledge in one simple, English-first place: checklists for arrival, campus orientation, course information and contacts. It is structured around what students actually need to do.",
  goals: [
    { title: "Find fast", text: "Every key answer within a few taps — no digging through PDFs." },
    { title: "Step by step", text: "Guided checklists from before arrival until the semester ends." },
    { title: "Feel at home", text: "Campus, city and community tips from students for students." },
  ],
};

export const stages: {
  n: number;
  title: string;
  date: string;
  status: Status;
  text: string;
  report?: string;
}[] = [
  {
    n: 1,
    title: "Project Proposal",
    date: "Sep 2026",
    status: "done",
    text: "Problem definition, target users and first idea of the Erasmus information platform.",
    report: "",
  },
  {
    n: 2,
    title: "User & Task Analysis",
    date: "Oct 2026",
    status: "done",
    text: "Interviews with Erasmus students, user profiles, tasks and the scenarios our prototypes have to support.",
    report: "",
  },
  {
    n: 3,
    title: "First Prototype",
    date: "Testing 26/28 Oct · Report 2 Nov 2026",
    status: "current",
    text: "A hand-drawn paper prototype covering three scenarios, tested by colleagues in the lab class. Includes sketches, storyboards, briefing, scenarios and observations.",
    report: "",
  },
  {
    n: 4,
    title: "Computational Prototype",
    date: "Nov 2026",
    status: "upcoming",
    text: "An interactive prototype built from the lessons of the paper tests.",
  },
  {
    n: 5,
    title: "Heuristic Evaluation",
    date: "Nov 2026",
    status: "upcoming",
    text: "Evaluating another group's interface with Nielsen's usability heuristics.",
  },
  {
    n: 6,
    title: "Evaluation & Final Results",
    date: "Dec 2026",
    status: "upcoming",
    text: "Final corrections, usability test results and justification of our design decisions.",
  },
];

export const prototype = {
  briefing:
    "Imagine you just got accepted for an Erasmus semester at NOVA FCT in Lisbon. You don't speak Portuguese yet and you need to organise your documents, find your way around campus and choose your courses. Erasmus@FCT is a platform that gathers all the information you need for this in one place.",
  scenarios: [
    { title: "Scenario 1", text: "Find out which documents you need to hand in during your first week and where to hand them in." },
    { title: "Scenario 2", text: "You have a class in building VII tomorrow at 9:00. Find out how to get there from Lisbon city centre." },
    { title: "Scenario 3", text: "Find a course taught in English for your semester and the contact of its professor." },
  ],
  // Add photos to /public/gallery and list them here, e.g. { src: "/gallery/sketch1.jpg", caption: "Home screen sketch" }
  gallery: [] as { src: string; caption: string }[],
};

export const team: { name: string; role: string }[] = [
  { name: "Jakob Varenbud", role: "Team member" },
  { name: "Team member 2", role: "Team member" },
  { name: "Team member 3", role: "Team member" },
  { name: "Team member 4", role: "Team member" },
];
