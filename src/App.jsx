import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  const projects = [
    {
      id: 1,
      title: "🎧 VR Game",
      objectif: " Développement d'un jeu jouable en VR pour apprendre l'anglais",
      techno: " HTML, Tailwind, Javascript, A-FRAME, PHP, MySQL.",
      apercu: " Un TV show mettant en scène différents mini-jeu.",
      img: "./src/assets/chicken.png",
      github: " https://github.com/BradSavary/Let_him_quizz",
      site: " https://vr-game.example.com",
    },
    {
      id: 2,
      title: "🚀 Dashboard dynamique",
      objectif: " Développement d'une application de gestion de projet",
      techno: " HTML, CSS, JavaScript, PHP, MySQL.",
      apercu: " Un projet mettant en avant une gestion de contenu type supermarché avec une base de données.",
      img: "./src/assets/graph.webp",
      github: " https://github.com/BradSavary/SAE303",
      site: " https://vr-game.example.com",
    },
    {
      id: 3,
      title: "🗺️ Personnaliser une carte OpenStreetMap",
      objectif: " Apprendre la manipulation de l'API OpenStreetMap",
      techno: " HTML, CSS, Javascript, API REST.",
      apercu: " Un carte classant des lycées et élèves par région et diplôme.",
      img: "./src/assets/map.webp",
      github: " https://github.com/BradSavary/SAE303-2",
      site: " https://vr-game.example.com",
    },
    {
      id: 4,
      title: "🌃 Nuit MMI",
      objectif: " Créer un jeu et sa landing page promotionnelle sur la pollution digitale, en moins de 24h.",
      techno: " JS, CSS, HTML.",
      apercu:  ` Un jeu type "clicker" avec différentes compétences.`,
      img: "./src/assets/chicken.png",
      github: " https://github.com/BradSavary/Let_him_quizz",
      site: " https://vr-game.example.com",
    },
  ];

  return (
    <div>
      <NavBar />
      <Header />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default App;