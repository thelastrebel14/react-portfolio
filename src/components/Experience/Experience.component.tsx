import ExperienceCard from '../ExperienceCard/ExperienceCard.component';
import { WorkExperience } from '../../data/JobExperience.data';
import { IExperience } from '../ExperienceCard/ExperienceCard.definitions';
import './Experience.scss';

const Experience = () => {

    const getExperienceCards = WorkExperience.map((workElement: IExperience) =>
        <ExperienceCard
            period={workElement.period}
            title={workElement.title}
            company={workElement.company}
            jobDescription={workElement.jobDescription}
            skills={workElement.skills}
        />
    );
    return (
        <div className='experience-container'>
            {getExperienceCards}
        </div>
    )
}

export default Experience;
