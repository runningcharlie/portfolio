import "./project-item.style.scss";

const icon = {
  display: "block",
  marginRight: "1rem",
};

const ProjctItem = ({ imageUrl, title, demo, github }) => {
  return (
    <>
      <div className="project-container">
        <div className="project-title">{title}</div>
        <div className="project-item">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        </div>

        <div
          className="project-icon-conteiner"
          style={{ marginTop: "1rem", display: "flex" }}
        >
          <div>
            <a href={demo} className="project-icon" style={icon}>
              View demo
            </a>
          </div>
          <div>
            <a href={github} className="project-icon" style={icon}>
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjctItem;
