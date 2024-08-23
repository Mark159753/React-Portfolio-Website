import NavigationMenu from "../../navigation/NavigationMenu.tsx";
import './headerSection.css'
import personImage from '../../assets/person.png'


function HeaderSection(){
    return <>
        <section id="HEADER">
            <div className="section-container head">
                <NavigationMenu/>
                <div className="header-content">
                    <img className="person-img" src={personImage}/>

                    <div className="header_texts">
                        <div className="titles">
                            <div className="column_titles">
                                <span className="hey_there">Hey There,</span>
                                <span className="hey_there">I'm Mark</span>
                            </div>
                            <span className="sub_title">
                                I create beautiful android apps, and I love what I do.
                            </span>
                        </div>
                        <a href="mailto:marek867@ukr.net">
                            <span className="email-text">marek867@ukr.net</span>
                        </a>

                        <div className="experience-container">
                            <span id="thre_years">3</span>
                            <div className="experience-titles">
                                <span>YEARS</span>
                                <span>EXPERIENCE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default HeaderSection