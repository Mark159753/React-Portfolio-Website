import './card.css'
import ProjectInfo from "./ProjectInfo.ts";
import React from "react";
import ProjectChip from "../../chips/ProjectChips.tsx";
import playmarktIc from "../../assets/play_market_ic.svg"
import gitHubIc from "../../assets/github_icon.svg"

interface ProjectCardProps {
    info: ProjectInfo;
    onClick: (item: ProjectInfo) => void;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ info, onClick }) => {
    const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.stopPropagation();
        window.open(info.source, "_blank");
    }
    return (
        <div className="card-container" onClick={() => onClick(info)}>
            <div className="card-info-column">
                <span className="card-type-title">{info.type}</span>
                <h2 className="card-title">{info.name}</h2>
                <div className="chips">
                    {info.techStack.map((name, index) => (
                        <ProjectChip key={index} title={name}/>
                    ))}
                </div>
                <p className="card-description" dangerouslySetInnerHTML={{__html: info.description}}/>
                <div className="card-bts">
                    <button className="card-button" id="card_detail_btn">Details</button>
                    <button className="card-button" onClick={click}>
                        <img src={ info.isCommercial ? playmarktIc : gitHubIc} className="card_market_img" alt="icon"/>
                        {info.isCommercial ? "PlayMarket" : "GitHub"}
                    </button>
                </div>
            </div>
            <div className="card-img-container">
                <img src={info.image} alt={info.name} className="card-image"/>
            </div>
        </div>
    );
};

export default ProjectCard