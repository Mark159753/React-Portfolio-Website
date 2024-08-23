import "./projects.css"
import ProjectInfo, {projectsList} from "../cards/ProjectInfo.ts";
import ProjectCard from "../cards/ProjectCard.tsx";
import ProjectDetailsModal from "../../modal/ProjectDetailsModal.tsx";
import {useState} from "react";

function ProjectsSection(){

    const [show, setShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState<ProjectInfo | null>(null);

    const handleCardClick = (item: ProjectInfo) => {
        setShow(true)
        setSelectedItem(item)
    };
    return <>
        <ProjectDetailsModal show={show} onHide={()=>{ setShow(false) }} item={selectedItem}/>

        <section id="WORKS">
            <div className="section-container">
                <h2 className="section-title">Latest Projects</h2>
                <div className="projects-row">
                    {projectsList.map((project, index) => (
                        <ProjectCard key={index} info={project} onClick={handleCardClick}  />
                    ))}
                </div>

                <a href="https://github.com/Mark159753?tab=repositories" className="github-repositories-link" target='_blank'>
                    Checkout my GitHub Repositories
                </a>
            </div>
        </section>
    </>
}

export default ProjectsSection