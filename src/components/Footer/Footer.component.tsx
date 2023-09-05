import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialLink from '../SocialLink/SocialLink.component';
import './Footer.scss';
import { ISocialLink } from '../SocialLink/SocialLink.definitions';

const SocialLinksData: Array<ISocialLink> = [
    {
        socialMediaIcon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/andrea-garibaldi/'
    },
    {
        socialMediaIcon: <FaGithub />,
        href: 'https://github.com/thelastrebel14?tab=repositories'
    }
];

const Footer = () => {
    const getSocialLinks = (): Array<JSX.Element> => {
        return SocialLinksData.map((socialElement: ISocialLink) => {
            return <SocialLink socialMediaIcon={socialElement.socialMediaIcon} href={socialElement.href} />
        });
    }

    return (
        <footer className="footer-container">
            {getSocialLinks()}
        </footer>
    )
}

export default Footer;