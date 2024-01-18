import React from 'react';
import facebookSvg from '../assets/Media_Links Svgs/facebookSvg.svg';
import instagramSvg from '../assets/Media_Links Svgs/instagramSvg.svg';
import twitterSvg from '../assets/Media_Links Svgs/twitterSvg.svg';
import messangerSvg from '../assets/Media_Links Svgs/messangerSvg.svg';
import linkedinSvg from '../assets/Media_Links Svgs/linkedinSvg.svg';

const MediaLinks = (props) => {
    const { mediaNames } = props;

    const mediaLinks = mediaNames.map((mediaName) => {
        return {
            linkHref: `https://www.${mediaName}.com/`,
            linkTarget: '_blank',
            linkSvg: eval(`${mediaName}Svg`),
            linkAlt: mediaName
        }
    })
    return (
        mediaLinks.map((mediaLink, index) => {
            return (
                <a key={index} href={mediaLink.linkHref} target={mediaLink.linkTarget} className="text-gray-500 mx-1" >
                    <img src={mediaLink.linkSvg} alt={mediaLink.linkAlt} />,
                </a>
            )
        })
    )
}

export default MediaLinks