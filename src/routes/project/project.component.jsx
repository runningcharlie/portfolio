import "./project.style.scss";

import ProjctItem from "./components/project-item.component";

const projects = [
  {
    title: "E-commerce website",
    id: 1,
    imageUrl: "https://i.ibb.co/HF4FcWh/crwn-clothing.png",
    demo: "https://transcendent-rugelach-932653.netlify.app/",
    github: "https://github.com/runningcharlie/crwn-clothing",
  },
  {
    title: "Social app",
    id: 2,
    imageUrl: "https://i.ibb.co/Ltbpsg0/project2.png",
    demo: "https://igui.netlify.app/",
    github: "https://github.com/runningcharlie/instagram-ui",
  },
  {
    title: "Landing page",
    id: 3,
    imageUrl: "https://i.ibb.co/QH33Qg7/project1.png",
    demo: "https://chipper-taiyaki-2e3043.netlify.app/",
    github: "https://github.com/runningcharlie/natours-deploy",
  },
  {
    title: "Official website",
    id: 4,
    imageUrl: "https://i.ibb.co/6gzt9xW/official-website.png",
    demo: "https://imaginative-llama-aa6611.netlify.app/",
    github: "https://github.com/runningcharlie/nexter-deploy",
  },
  {
    title: "Infinite picture scrolling app",
    id: 5,
    imageUrl: "https://i.ibb.co/TMv5ZZ1/scrollphoto.png",
    demo: "https://endearing-liger-37030e.netlify.app/",
    github: "https://github.com/runningcharlie/stock-photos",
  },
  {
    title: "Snake Game",
    id: 6,
    imageUrl: "https://i.ibb.co/HnXBgWL/snakegame.png",
    demo: "https://loquacious-flan-77f1b5.netlify.app/",
    github: "https://github.com/runningcharlie/snake-game",
  },
];

const Project = () => {
  return (
    <>
      <div className="projects-container">
        {projects.map((project, i) => (
          <ProjctItem {...project} key={i} />
        ))}
      </div>
    </>
  );
};

export default Project;
