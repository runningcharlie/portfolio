import "./project.style.scss";

import ProjctItem from "./components/project-item.component";

const projects = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/QH33Qg7/project1.png",
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/Ltbpsg0/project2.png",
  },
];

const Project = () => {
  return (
    <>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjctItem {...project} />
        ))}
      </div>
    </>
  );
};

export default Project;
