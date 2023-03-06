import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import About from "./routes/about/about.component";
import Project from "./routes/project/project.component";
import Contact from "./routes/contact/contact.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
