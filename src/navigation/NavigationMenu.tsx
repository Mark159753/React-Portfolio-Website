import './navigation.css'
import {useEffect, useRef} from "react";
import githubIcon from '../assets/github_icon.svg'
import '../fonts/faces.css'

function NavigationMenu(){
    const navMenuRef = useRef<HTMLDivElement | null>(null);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    const handleToggleMenu = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.toggle('nav-active');
        }
        if (hamburgerRef.current) {
            hamburgerRef.current.classList.toggle('toggle');
        }
    };

    useEffect(() => {
        const navMenu = navMenuRef.current;
        const hamburger = hamburgerRef.current;

        if (navMenu && hamburger) {
            const navLinks = navMenu.querySelectorAll('li');

            const handleClick = () => {
                if (hamburger.classList.contains('toggle')) {
                    hamburger.classList.remove('toggle');
                }
                if (navMenu.classList.contains('nav-active')) {
                    navMenu.classList.remove('nav-active');
                }
            };

            navLinks.forEach((li) => {
                li.addEventListener('click', handleClick);
            });
            // Clean up the event listeners on unmount
            return () => {
                navLinks.forEach((li) => {
                    li.removeEventListener('click', handleClick);
                });
            };
        }
    }, []);

    return <>
        <nav>
            {/*This is the button to toggele the menu on mobile devices*/}
            <div id="hamburger" ref={hamburgerRef} onClick={handleToggleMenu}>
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
            </div>

            {/*This is the list of menu items*/}
            <div className="navMenu" ref={navMenuRef}>
                <span>Developer</span>
                <ul>
                    <li className="navItem"><a href='#HEADER'>Home</a></li>
                    <li className="navItem"><a href='#WORKS'>Works</a></li>
                    <li className="navItem"><a href='#SKILLS'> Skills</a></li>
                    <li className="navItem"><a href='#CONTACTS'>Contact</a></li>
                    <li className="navItem" id="gitHub_menu_item"><a href='https://github.com/Mark159753' target='_blank'>GitHub</a>
                    </li>
                </ul>
                <a href="https://github.com/Mark159753" target='_blank'>
                    <img id="github_link" src={githubIcon} alt="GitHub Icon"/>
                </a>
            </div>
        </nav>
    </>
}

export default NavigationMenu