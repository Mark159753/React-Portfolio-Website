import gubadooImg from "../../assets/gubadoo_img.png"
import pick2meCustomer from "../../assets/pick2me_customer.png"
import gubadoo1 from "../../assets/gubadoo/gubadoo-1.png"
import gubadoo2 from "../../assets/gubadoo/gubadoo-2.png"
import gubadoo3 from "../../assets/gubadoo/gubadoo-3.png"
import gubadoo4 from "../../assets/gubadoo/gubadoo-4.png"
import gubadoo5 from "../../assets/gubadoo/gubadoo-5.png"
import gubadoo6 from "../../assets/gubadoo/gubadoo-6.png"
import gubadoo7 from "../../assets/gubadoo/gubadoo-7.png"
import gubadoo8 from "../../assets/gubadoo/gubadoo-8.png"
import p2mCustomer1 from "../../assets/p2m/p2m_customer_1.jpeg"
import p2mCustomer2 from "../../assets/p2m/p2m_customer_2.jpeg"
import p2mCustomer3 from "../../assets/p2m/p2m_customer_3.jpeg"
import p2mCustomer4 from "../../assets/p2m/p2m_customer_4.jpeg"
import p2mCustomer5 from "../../assets/p2m/p2m_customer_5.jpeg"
import p2mCustomer6 from "../../assets/p2m/p2m_customer_6.jpeg"
import p2mTaxi1 from "../../assets/p2m-taxi/p2m-taxi-1.jpeg"
import p2mTaxi2 from "../../assets/p2m-taxi/p2m-taxi-2.jpeg"
import p2mTaxi3 from "../../assets/p2m-taxi/p2m-taxi-3.jpeg"
import p2mTaxi4 from "../../assets/p2m-taxi/p2m-taxi-4.jpeg"
import p2mTaxi5 from "../../assets/p2m-taxi/p2m-taxi-5.jpeg"
import p2mTaxi6 from "../../assets/p2m-taxi/p2m-taxi-6.jpeg"
import mn1 from "../../assets/material_news/mn-1.jpg"
import mn2 from "../../assets/material_news/mn-2.jpg"
import mn3 from "../../assets/material_news/mn-3.jpg"
import mn4 from "../../assets/material_news/mn-4.jpg"

interface ProjectInfo {
    name: string;
    type: string;
    description: string;
    image: string;
    isCommercial: boolean;
    images:string[];
    techStack:string[];
    source:string;
    video:string | null;
}

 export const projectsList: ProjectInfo[] = [
    {
        name: "Gubadoo Accounting and Finance Repair",
        type: "commercial",
        description: "Gubadoo is a mobile application designed to help manage finances during renovation and construction projects. I worked on this project from <b>01.10.2023 to 07.06.2024</b>. The app was developed entirely from scratch by me. At the start, a React Native version of the app already existed, and my task was to rewrite it in Kotlin. This was the first version of the app, followed by three major updates. <br /> For the project, I chose a multi-module architecture and used Jetpack Compose for the UI. The app's features are limited based on the user's subscription level, ranging from basic functions in the Premium tier to more advanced features in the Business tier. The subscription system is integrated with PlayMarket, with all subscription management handled via RevenueCat, allowing for seamless data synchronization between the iOS AppStore and PlayMarket.",
        image: gubadooImg,
        isCommercial: true,
        images: [ gubadoo1, gubadoo2, gubadoo3, gubadoo4, gubadoo5, gubadoo6, gubadoo7, gubadoo8],
        techStack: [ "Compose", "Multi-Module", "RevenueCat", "OneSignal", "Amplitude", "PlayMarket Subscriptions", "AppsFlyer", "GitHub Actions CI", "Work Manager" ],
        source: "https://play.google.com/store/apps/details?id=com.gubadoo",
        video: "https://www.youtube.com/embed/r1F38DR1cRk",
    },
    {
        name: "Pick2me Taxy",
        type: "commercial",
        description: "Pick2Me is a client application tailored for the Arabic market, offering services like taxi booking, delivery, and water orders. I contributed to its development from <b>09.2021 to 04.2023</b>. The project initially started in Java, and when I joined, my role involved not only adding new features but also rewriting the codebase in Kotlin. My contributions made up around 40% of the app’s development. I built the cashback system, integrated socket communication, designed the entire water delivery order flow, refreshed the UI of other screens, and managed the app’s publication on PlayMarket.",
        image: pick2meCustomer,
        isCommercial: true,
        images: [p2mCustomer1, p2mCustomer2, p2mCustomer3, p2mCustomer4, p2mCustomer5, p2mCustomer6],
        techStack: [ "XML", "Firebase", "GoogleMaps", "Binding Service", "Work Manager", "View Binding", "Sockets" ],
        source: "https://play.google.com/store/apps/details?id=com.alababic.app",
        video: null,
    },
     {
         name: "Pick2me Driver",
         type: "commercial",
         description: "Pick2Me Driver is a version of the Pick2Me app designed for taxi drivers and couriers, catering to the Arabic market. I contributed to its development from <b>09.2021 to 04.2023</b>. Unlike the client version, this app was developed entirely in Kotlin from the beginning. My primary role involved maintaining the app and developing new features. My contributions represented around 50% of the overall development. I created a binding service for tracking driver GPS positions, implemented a promo code system, built the chat and support screens, developed the main map screen with city sectors, and managed the app’s publication on PlayMarket.",
         image: p2mTaxi1,
         isCommercial: true,
         images: [p2mTaxi1, p2mTaxi2, p2mTaxi3, p2mTaxi4, p2mTaxi5, p2mTaxi6],
         techStack: [ "XML", "Firebase", "GoogleMaps", "Binding Service", "Work Manager", "View Binding", "Sockets" ],
         source: "https://play.google.com/store/apps/details?id=com.alababic.driver",
         video: null,
     },
     {
         name: "Material News",
         type: "pet",
         description: "Material News is a small pet project designed in the Material 3 style, which fetch a list of news articles from NewsAPI and displays them. The app allows users to filter news by source and sort the articles. I developed this project to gain practical experience, implementing a multi-module architecture and setting up GitHub Actions for automation.",
         image: mn1,
         isCommercial: false,
         images: [mn1, mn2, mn3, mn4],
         techStack: ["Compose","Multi-Module", "Github Actions", "Material 3", "Room", "Retrofit", "Hilt"],
         source: "https://github.com/Mark159753/Material-News",
         video: "https://www.youtube.com/embed/OtwDunNgAAw",
     }
]

export default ProjectInfo