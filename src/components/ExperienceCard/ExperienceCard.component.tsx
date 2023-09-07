import Chip from '../Chip/Chip.component';
import { IExperience } from './ExperienceCard.definitions';
import './ExperienceCard.scss';

const ExperienceCard = (props: IExperience) => {
  const {
    period,
    title,
    company,
    jobDescription,
    skills
  } = props;


  const getSkillTags = skills.map((skill) => <Chip label={skill.name}/>);


  return (
    <section className='experience-card-container'>
        <div className='start-and-date'>
            <h3>{period}</h3>
        </div>
        <div className='experience-synopsis'>
            <h3>{`${title} @${company}`}</h3>
            <p>{jobDescription}</p>
            <div className='skill-tags'>
              {getSkillTags}
            </div>
        </div>
    </section>
  )
}

export default ExperienceCard;
