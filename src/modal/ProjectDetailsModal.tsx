import React from "react";
// @ts-ignore
import Modal from 'react-modal';
import './modal.css'
import ProjectInfo from "../sections/cards/ProjectInfo.ts";
import close_ic from "../assets/close_ic.svg"
import ProjectChip from "../chips/ProjectChips.tsx";
import playmarktIc from "../assets/play_market_ic.svg";
import gitHubIc from "../assets/github_icon.svg";

interface ProjectDetailsModalProps{
    show:boolean;
    onHide:()=>void;
    item:ProjectInfo | null;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ show, onHide, item }) => {
    if (item == null) return

    const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.stopPropagation();
        window.open(item.source, "_blank");
    }
    return <>
        <Modal
            isOpen={show}
            onRequestClose={onHide}
            contentLabel="Example Modal"
            className="project-details-modal"
            overlayClassName="project-details-overlay"
        >
            <img src={close_ic} alt="Close" className="close-btn" onClick={onHide}/>

            <div className="project-modal-container">
                <div className="carousel">
                    {item.video && (
                        <iframe className="project-details-modal-slider-img" width="420" height="315" src={item.video}/>
                    )}

                    {item.images.map((path, index) => (
                        <img className="project-details-modal-slider-img" key={index} src={path}/>
                    ))}
                </div>

                <h2>{item.name}</h2>

                <div className="modal-chips">
                    {item.techStack.map((name, index) => (
                        <ProjectChip key={index} title={name}/>
                    ))}
                </div>

                <p className="modal-details" dangerouslySetInnerHTML={{__html: item.description}}/>

                <button className="card-button modal-btn" onClick={click}>
                    <img src={item.isCommercial ? playmarktIc : gitHubIc} className="card_market_img" alt="icon"/>
                    {item.isCommercial ? "PlayMarket" : "GitHub"}
                </button>
            </div>
        </Modal>
    </>
}

export default ProjectDetailsModal