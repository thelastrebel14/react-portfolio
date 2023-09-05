import { FaRebel } from 'react-icons/fa';
import SocialLink from '../SocialLink/SocialLink.component';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-container">
            <SocialLink socialMediaIcon={<FaRebel />} href={'https://colorate.azurewebsites.net/es/Color/878787'} />
            <p>Andrea Garibaldi</p>
        </footer>
    )
}

export default Footer;