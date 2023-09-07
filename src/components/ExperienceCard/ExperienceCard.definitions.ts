export interface IExperience {
    period: string;
    title: string;
    company: string;
    jobDescription: string;
    skills: Array<ISkills>
}

export interface ISkills {
    name: string;
}