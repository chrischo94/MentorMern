import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/Login/Login">How it works</FooterLink>
                            <FooterLink to="/Login/Login">Testimonials</FooterLink>
                            <FooterLink to="/Login/Login">Careers</FooterLink>
                            <FooterLink to="/Login/Login">Investors</FooterLink>
                            <FooterLink to="/Login/Login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/Login/Login">How it works</FooterLink>
                            <FooterLink to="/Login/Login">Testimonials</FooterLink>
                            <FooterLink to="/Login/Login">Careers</FooterLink>
                            <FooterLink to="/Login/Login">Investors</FooterLink>
                            <FooterLink to="/Login/Login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/Login/Login">How it works</FooterLink>
                            <FooterLink to="/Login/Login">Testimonials</FooterLink>
                            <FooterLink to="/Login/Login">Careers</FooterLink>
                            <FooterLink to="/Login/Login">Investors</FooterLink>
                            <FooterLink to="/Login/Login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/Login/Login">How it works</FooterLink>
                            <FooterLink to="/Login/Login">Testimonials</FooterLink>
                            <FooterLink to="/Login/Login">Careers</FooterLink>
                            <FooterLink to="/Login/Login">Investors</FooterLink>
                            <FooterLink to="/Login/Login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>Signi-Coach</SocialLogo>
                    <WebsiteRights>Signi-Coach Ⓒ {new Date().getFullYear()} </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="//www.twitter.com/<address>" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    
  )
}

export default Footer