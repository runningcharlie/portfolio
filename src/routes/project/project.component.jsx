import "./project.style.scss";

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
          <div className="project-container">
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${project.imageUrl})`,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
