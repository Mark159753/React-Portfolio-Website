import "./chips.css"

interface ProjectChipArgs{
    title:string
}

function ProjectChip(args:ProjectChipArgs){
    return <span className="project-chip">{args.title}</span>;
}

export default ProjectChip