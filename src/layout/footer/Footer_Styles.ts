import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = styled.footer`
  padding: 30px 0;
  border-top: 1px solid ${theme.colors.accentSecondary};
  background-color: ${theme.colors.primaryBg};
  text-align: center;

  ${FlexWrapper} {
  gap: 10px;
  }
`

const MainInfo = styled.div`
  text-align: left;
`

const Description = styled.div`

`

const Name = styled.span`
  margin-bottom: 16px;
  margin-left: 10px;
  display: inline-block;
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 500;
`

const SocialList = styled.ul`
  text-align: left;
  white-space: nowrap;
  
  h3 {
    margin-left: 10px;
    margin-bottom: 5px;
    color: ${theme.colors.font};
    font-size: 24px;
    font-weight: 500;
  }
`

const SocialItem = styled.li`
  display: inline-block;
  margin: 0 7px;
`

const SocialLink = styled.a`
  color: ${theme.colors.accentSecondary};
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: translateY(-4px);
    color: ${theme.colors.accent};
  }
`

const Copyright = styled.small`
  color: ${theme.colors.accentSecondary};
  font-size: 16px;
  display: inline-block;
  margin-top: 50px;
`

export const S = {
    Footer,
    MainInfo,
    Description,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}