import { ISocialLink } from "./SocialLink.definitions";

const SocialLink = (props: ISocialLink) => {
    const {
        socialMediaIcon,
        href
    } = props;

    return (
        <a href={href} target="_blank">
            {socialMediaIcon}
        </a>
    )
}

export default SocialLink;