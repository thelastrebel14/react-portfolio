import ExperienceCard from '../ExperienceCard/ExperienceCard.component';
import { WorkExperience } from '../../data/JobExperience.data';
import { IExperience } from '../ExperienceCard/ExperienceCard.definitions';
import './Experience.scss';
import { BiLogoCss3, BiLogoFigma, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoPhp, BiLogoReact, BiLogoRedux, BiLogoSass, BiLogoTypescript } from 'react-icons/bi';
import { SiJenkins, SiLinux, SiMysql, SiRedhatopenshift, SiStorybook,  } from 'react-icons/si';

const Skills = [
    {
        frontIcon: <BiLogoReact />
    },
    {
        frontIcon: <BiLogoJavascript />
    },
    {
        frontIcon: <BiLogoTypescript />
    },
    {
        frontIcon: <BiLogoRedux />
    },
    {
        frontIcon: <BiLogoPhp />
    },
    {
        frontIcon: <SiStorybook />
    },
    {
        frontIcon: <SiMysql />
    },
    {
        frontIcon: <BiLogoFigma />
    },
    {
        frontIcon: <BiLogoCss3 />
    },
    {
        frontIcon: <BiLogoHtml5 />
    },
    {
        frontIcon: <SiRedhatopenshift />
    },
    {
        frontIcon: <SiJenkins />
    },
    {
        frontIcon: <BiLogoSass />
    },
    {
        frontIcon: <BiLogoGithub />
    },
    {
        frontIcon: <SiLinux />
    }

];

const Experience = () => {

    const getSkillsIcons = Skills.map((skill) =>
        <span className='skill-element'>{skill.frontIcon}</span>
    );

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
            <section className='skills-and-technologies-container'>
                <h2>Technologies I've worked with</h2>
                <div className='skills-container'>
                    {getSkillsIcons}
                </div> 
            </section>
            <section className='work-details-container'>
               {getExperienceCards} 
            </section>
            
        </div>
    )
}

export default Experience;
