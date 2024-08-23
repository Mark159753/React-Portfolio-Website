import "./skills.css"
import composeIc from "../../assets/compose_icon.svg"
import googleMapIc from "../../assets/google_map_icon.svg"
import graphQlIc from "../../assets/graphQL_icon.svg"
import room from "../../assets/room_icon.svg"
import retrofit from "../../assets/retrofit_icon.svg"
import firebase from "../../assets/firebase_icon.svg"

function SkillsSection(){
    return <>
        <section id="SKILLS">
            <div className="section-container skills-main">
                <div className="skills-container">
                <div className="skills-tech-stack">
                    <h2 className="section-title">Skills</h2>
                        <div className="familiar-tech">
                            {techItems.map((item, index) => (
                                <TechItem key={index} title={item.title} icon={item.icon}/>
                            ))}
                        </div>
                        <div className="programing-languages">
                            <h2 className="section-title">Programing Languages</h2>

                            {languageItems.map((item, index) => (
                                <LanguageItem key={index} name={item.name} value={item.value}/>
                            ))}
                        </div>
                </div>


                <div className="about-me">
                    <h2 className="section-title">About me</h2>

                    <p className="abount-me-details">My journey into Android began in 2020, and since 2021, I’ve been
                        working commercially, focusing on delivering high-quality solutions. My experience ranges from
                        creating apps from scratch to refactoring existing projects, with a strong emphasis on modern
                        Android practices like Jetpack Compose and multi-module architectures.<br/><br/> Beyond
                        Android, I have a growing interest in Kotlin Multiplatform (KMP), intrigued by the potential of
                        sharing code across platforms while maintaining a native feel. I’ve also explored iOS
                        development, as understanding cross-platform dynamics adds value to the projects I work
                        on.<br/><br/> What drives me is the continuous learning and problem-solving that come with Android
                        development. I stay updated with the latest trends and technologies, always looking for ways to
                        improve my skills and deliver better results. My goal is to create innovative and practical
                        applications, leveraging the best of Android while keeping an eye on future opportunities in
                        cross-platform development.</p>
                </div>
                </div>
            </div>
        </section>
    </>
}

interface TechItemPres {
    title: string;
    icon: string;
}

function TechItem(args: TechItemPres) {
    return <div className="tech-item">
        <div className="tech-icon-container">
            <img className="tech-ic" src={args.icon}/>
        </div>

        <span className="tech-item-title">{args.title}</span>
    </div>
}

let techItems: TechItemPres[] = [
    {
        title: "Jetpack Compose",
        icon: composeIc
    },
    {
        title: "Google map",
        icon: googleMapIc
    },
    {
        title: "QraphQL",
        icon: graphQlIc
    },
    {
        title: "Room",
        icon: room
    },
    {
        title: "Retrofit",
        icon: retrofit
    },
    {
        title: "Firebase",
        icon: firebase
    }
]

interface LanguagePres {
    name: string;
    value: string;
}

let languageItems:LanguagePres[] = [
    {
        name: "Kotlin",
        value: "80%"
    },
    {
        name: "Java",
        value: "70%"
    },
]

function LanguageItem(args: LanguagePres) {
    return <div className="language-item">
        <span className="language-name">{args.name}</span>
        <div className="progress-container">
            <div className="progress-bar">
                <span className="progress-bar-path"></span>
                <span className="progress-value-path" style={{width: args.value}} ></span>
            </div>
            <div className="progress">{args.value}</div>
        </div>
    </div>
}

export default SkillsSection