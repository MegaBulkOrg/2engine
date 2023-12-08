import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FooterDesktop } from "../../components/FooterDesktop/FooterDesktop";
import { FooterMobile } from '../FooterMobile/FooterMobile';
import { Header } from '../Header/Header';

interface IContentProps {
  children?: React.ReactNode
}

export function Content({children}: IContentProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  
  return (
    <>
      <Header/>
      {children}
      {!isMobile ? <FooterDesktop/> : <FooterMobile/>}
    </>
  );
}