import React from 'react';
import { AttachedFileDelete } from '../AppIcons/AttachedFileDelete';
import { CommunicationMethodCallIcon } from '../AppIcons/CommunicationMethodCallIcon';
import { CommunicationMethodEmailIcon } from '../AppIcons/CommunicationMethodEmailIcon';
import { CommunicationMethodTelegramIcon } from '../AppIcons/CommunicationMethodTelegramIcon';
import { CommunicationMethodWhatsappIcon } from '../AppIcons/CommunicationMethodWhatsappIcon';
import { FeedbackAttachFileIcon } from '../AppIcons/FeedbackAttachFileIcon';
import { FeedbackSubmitBtnIcon } from '../AppIcons/FeedbackSubmitBtnIcon';
import { FooterChatIcon } from '../AppIcons/FooterChatIcon';
import { FooterEmailIcon } from '../AppIcons/FooterEmailIcon';
import { FooterMobileCartIcon } from '../AppIcons/FooterMobileCartIcon';
import { FooterMobileCatalogIcon } from '../AppIcons/FooterMobileCatalogIcon';
import { FooterMobileChatsIcon } from '../AppIcons/FooterMobileChatsIcon';
import { FooterMobileLkIcon } from '../AppIcons/FooterMobileLkIcon';
import { FooterMobileRequestsIcon } from '../AppIcons/FooterMobileRequestsIcon';
import { FooterPhoneIcon } from '../AppIcons/FooterPhoneIcon';
import { HeaderCartIcon } from '../AppIcons/HeaderCartIcon';
import { HeaderCatalogBtnLeftIcon } from '../AppIcons/HeaderCatalogBtnLeftIcon';
import { HeaderCatalogBtnRightIcon } from '../AppIcons/HeaderCatalogBtnRightIcon';
import { HeaderChatsIcon } from '../AppIcons/HeaderChatsIcon';
import { HeaderFavoritesIcon } from '../AppIcons/HeaderFavoritesIcon';
import { HeaderLkIcon } from '../AppIcons/HeaderLkIcon';
import { HeaderMapIcon } from '../AppIcons/HeaderMapIcon';
import { HeaderOpenIcon } from '../AppIcons/HeaderOpenIcon';
import { HeaderTelegramIcon } from '../AppIcons/HeaderTelegramIcon';
import { OpenTechReqIcon } from '../AppIcons/OpenTechReqIcon';

interface IIcons {
    [K: string]: JSX.Element
}

const icons:IIcons = {
    headerCartIcon: <HeaderCartIcon />,
    headerCatalogBtnLeftIcon: <HeaderCatalogBtnLeftIcon />,
    headerCatalogBtnRightIcon: <HeaderCatalogBtnRightIcon />,
    headerChatsIcon: <HeaderChatsIcon />,
    headerFavoritesIcon: <HeaderFavoritesIcon />,
    headerLkIcon: <HeaderLkIcon />,
    headerMapIcon: <HeaderMapIcon />,
    headerOpenIcon: <HeaderOpenIcon />,
    headerTelegramIcon: <HeaderTelegramIcon />,
    openTechReqIcon: <OpenTechReqIcon />,
    feedbackAttachFileIcon: <FeedbackAttachFileIcon/>,
    communicationMethodCallIcon: <CommunicationMethodCallIcon />,
    communicationMethodEmailIcon: <CommunicationMethodEmailIcon />,
    communicationMethodTelegramIcon: <CommunicationMethodTelegramIcon />,
    communicationMethodWhatsappIcon: <CommunicationMethodWhatsappIcon />,
    feedbackSubmitBtnIcon: <FeedbackSubmitBtnIcon />,
    attachedFileDelete: <AttachedFileDelete />,
    footerPhoneIcon: <FooterPhoneIcon />,
    footerEmailIcon: <FooterEmailIcon />,
    footerChatIcon: <FooterChatIcon />,
    footerMobileCatalogIcon : <FooterMobileCatalogIcon/>,
    footerMobileCartIcon : <FooterMobileCartIcon/>,
    footerMobileRequestsIcon : <FooterMobileRequestsIcon/>,
    footerMobileChatsIcon : <FooterMobileChatsIcon/>,
    footerMobileLkIcon : <FooterMobileLkIcon/>
}

interface IIconProps {
    name: keyof typeof icons
    width?: number
    height?: number
}

export function Icon({name, width=15, height=15}: IIconProps) {
    return icons[name]
    
}