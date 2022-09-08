import React, {useState} from 'react';
import './ShareButton.scss'
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton, TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton, WhatsappIcon, WhatsappShareButton
} from "react-share";

const ShareButton = () => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <button
                className="btn_share"
                onClick={() => setVisible(!visible)}
            >
                Поделиться
            </button>
            {
               visible && <SocialButtons/>
            }

        </>
    );
};

export default ShareButton;

const SocialButtons = () => {
    return (
        <div className="btn_group swing-in-top-fwd">
            <FacebookShareButton
                url={window.location.href}
            >
                <FacebookIcon
                    size={32}
                    round={true}
                />
            </FacebookShareButton>
            <TelegramShareButton
                url={window.location.href}>
                <TelegramIcon
                    size={32}
                    round={true}/>
            </TelegramShareButton>
            <VKShareButton
                url={window.location.href}>
                <VKIcon
                    size={32}
                    round={true}/>
            </VKShareButton>
            <TwitterShareButton
                url={window.location.href}>
                <TwitterIcon
                    size={32}
                    round={true}/>
            </TwitterShareButton >
            <WhatsappShareButton
                url={window.location.href}
            >
                <WhatsappIcon
                    size={32}
                    round={true}/>
            </WhatsappShareButton>
        </div>
    )
}