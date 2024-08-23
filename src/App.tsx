import './App.css'
import './navigation/NavigationMenu'
import HeaderSection from "./sections/header/HeaderSection.tsx";
import ProjectsSection from "./sections/projects/ProjectsSection.tsx";
import SkillsSection from "./sections/skills/SkillsSection.tsx";
import ContactsSection from "./sections/contacts/ContactsSection.tsx";

function App() {
    return (
    <>
        <HeaderSection/>
        <ProjectsSection/>
        <SkillsSection/>
        <ContactsSection/>
    </>
  )
}

export default App
