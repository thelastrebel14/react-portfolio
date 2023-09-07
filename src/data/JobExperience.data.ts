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
    }
]