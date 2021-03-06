import React from "react";
import {HashLink as Link} from 'react-router-hash-link'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";
import "../Mystyle.scss"
const Footer = () => {
  return (
    <FooterWrapper className="FooterWrapper" id="inv">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem className="LinkItem" href="tel:+251-928-531-589">+251-928-531-589</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <Link style={{color:"white"}} className="LinkItem" to="mailto:amsalugetasew12@gmail.com">
            amsalugetasew12@gmail.com
          </Link>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer className="SocialIconsContainer">
        <CompanyContainer>
          <Slogan >Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons className="SocialIcons" href="https://github.com/amsalugetasew">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons className="SocialIcons" href="https://twitter.com/amsalugetasew16">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons className="SocialIcons" href="https://www.linkedin.com/in/getasew-amsalu">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
