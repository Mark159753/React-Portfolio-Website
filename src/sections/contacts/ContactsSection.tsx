import "./contacts.css"
import emailIc from "../../assets/chat_icon.svg"
import callIc from "../../assets/call_icon.svg"
import wavingHand from "../../assets/waving-hand.svg"
import arrowTopIc from "../../assets/arrow_top.svg"

function ContactsSection(){
    return <>
        <section id="CONTACTS">
            <div className="section-container">
                <h2 className="section-title" id="contacts_title">Contacts</h2>

                <div className="contact-container">
                    <div className="contacts-column">
                        <span className="lets-discuss-title">Let's Discuss</span>
                        <span className="lets-discuss-title">Your Project</span>
                        <ContactItem title="Email" value="marek867@ukr.net" icon={emailIc}/>
                        <ContactItem title="Phone" value="+380687867767" icon={callIc} />
                    </div>
                    <div className="say-hi-column">
                        <div className="say-hi-circle">
                            <div className="say-hi-container">
                                <img src={wavingHand} className="say-hi-ic" alt="waving Hand"/>
                                <span className="say-hi-title">Say Hi!</span>
                                <span className="say-hi-space"></span>
                                <a href="#HEADER" className="link-to-top">
                                    <div className="link-top-container">
                                        <img src={arrowTopIc} className="arrow-top-ic"/>
                                    </div>
                                </a>
                            </div>
                            <span className="say-hi-line"></span>
                        </div>
                    </div>
                </div>

                <span className="contact-footer-spacer" ></span>
                <div className="contacts-footer">
                    <span className="footer-line"></span>
                    <span className="footer-year">2024</span>
                </div>
            </div>
        </section>
    </>
}

interface ContactItemPres{
    title:string;
    value:string;
    icon:string;
}

function ContactItem(args:ContactItemPres){
    return <div className="contact-item">
        <span className="divider"></span>
        <div className="contact-item-container">
            <div className="contact-icon-container">
                <img className="contact-ic" src={args.icon} />
            </div>

            <div className="contact-item-column">
                <span className="contact-item-title">{args.title}</span>
                <span className="contact-item-value">{args.value}</span>
            </div>
        </div>
    </div>
}

export default ContactsSection