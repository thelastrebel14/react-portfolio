import { IExperience } from "../components/ExperienceCard/ExperienceCard.definitions"

export const WorkExperience: Array<IExperience> = [
    {
        period: 'August 2021 - July 2023', 
        title: 'Software Developer',
        company: 'Amdocs',
        jobDescription: `Developed and managed a React.js and TypeScript Single Page Application (SPA), continuously improving its features.
                        Implemented Redux and React Context for efficient state management. Handled internal libraries with Storybook for component isolation.
                        Monitored production applications using OpenShift and Jenkins to automate the creation, testing, and deployment of new application versions.`,
        skills: [
            {
                name: 'React'
            },
            {
                name: 'TypeScript'
            },
            {
                name: 'Redux'
            },
            {
                name: 'RESTful API'
            },
            {
                name: 'Storybook'
            },
        ]
    },
    {
        period: 'December 2020 - July 2021', 
        title: 'Web Developer',
        company: 'Grupo Pueblo Bonito',
        jobDescription: `Optimized SQL stored procedures to enhance data management, expanded system functionalities through the creation of PHP screens and modules to improve user interfaces and usability.
                Employed PDO for secure and efficient database access from PHP, and designed interactive, functional user interfaces using Figma, ensuring accurate implementation during development.`,
        skills: [
            {
                name: 'JavaScript'
            },
            {
                name: 'SQL'
            },
            {
                name: 'PHP'
            },
            {
                name: 'PDO'
            },
            {
                name: 'Figma'
            },
        ]
    },
    {
        period: 'January 2020 - May 2020', 
        title: 'Software Developer',
        company: 'Universidad Politécnica De Sinaloa',
        jobDescription: `Product creation by collaborating closely with clients, addressing user challenges through visual and functional solutions.
            Used Figma to design interactive mockups and user flow prototypes for interface delivery.
            Additionally, initiated a PHP and CodeIgniter-based administrative system, including database design and front-end design.`,
        skills: [
            {
                name: 'JavaScript'
            },
            {
                name: 'HTML'
            },
            {
                name: 'SCSS'
            },
            {
                name: 'PHP'
            },
            {
                name: 'Figma'
            },
            {
                name: 'SQL'
            }
        ]
    }
]