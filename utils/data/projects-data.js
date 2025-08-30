import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Voting App',
        description: "I have developed a voting app which is •	Implemented user authentication and authorization features, allowing users to sign up and sign in using their Adhar card number and password and •	Utilized MongoDB for efficient data storage and retrieval, ensuring scalabilty and reliability of the application.",
        tools: ['Express', 'MongoDB', 'Nodejs', 'Postman'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Real-Time Chat App',
        description: 'I have designed and developed a a real-time chat application , a travel agency in Armenia. I Implemented a responsive user interface using HTML and CSS for seamless interaction across devices.. The app Utilizes Socket.io library for enabling real-time bidirectional event-based communication between clients and server. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['HTML', 'Tailwind CSS', "JavaScript", "Nodejs", "Socket.io"],
        role: 'Web Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Portfolio Website',
        description: 'Software Developer Portfolio Website built with next.js and tailwind CSS that helps you showcase your work and skills as a software developer and My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.',
        tools: ['React', 'Bootstrap', 'SCSS','Express', 'TypeScript'],
        code: '',
        role: 'frontend  Developer',
        demo: 'https://rahul-mahto-portfolio.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'AI SaaS Chat Bot ',
        description: "I developed a Modern AI Project which will use Open-AI API to create an AI Real-Time chatbot similar to ChatGPT.Build custom authentication with JWT tokens, using express-validators for data validation,•	Ensure secure data transmission by implementing express-validators for validating inputs and storing user chats in MongoDB, guaranteeing data integrity and user privacy",
        tools: ['React', 'ExpressJS', 'NodeJS', 'MongoDB','Openai'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'BookStore Application ',
        description: "•	React.js is used to build a responsive and dynamic user interface. Users can browse books, view book details.•	Secure user authentication is implemented using JWT (JSON Web Tokens). Users can register, log in, and log out.The backend server is developed using Node.js and Express.js. It provides RESTful API endpoints for managing books, users.",
        tools: ['React', 'ExpressJS', 'NodeJS', 'MongoDB'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },