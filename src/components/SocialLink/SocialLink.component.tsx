import { ISocialLink } from "./SocialLink.definitions";
import './SocialLink.scss'

const SocialLink = (props: ISocialLink) => {
    const {
        socialMediaIcon,
        href
    } = props;

    return (
        <a href={href} target="_blank" className="social-media-icon">
            {socialMediaIcon}
        </a>
    )
}

export default SocialLink;