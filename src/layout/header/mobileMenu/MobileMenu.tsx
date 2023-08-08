import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";

export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <div>
                    <Logo />
                </div>

                <ul>
                    {props.menuItems.map( (item, index)=>{
                        return <ListItem key={index}>
                            <Link href="">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  div {
    margin: 60px 0;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${theme.colors.primaryBg};
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  `}
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.accentSecondary};
    position: absolute;
    left: 40px;
    bottom: 65px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accentSecondary};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.accentSecondary};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
    
    
  }




`

const Link = styled.a`
  font-size: 40px;
  font-weight: 500;
  color: transparent;
  &::before {
    content: "#";
    color: ${theme.colors.accent};
    
  }
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 24px;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.font};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top:50%;
    left: 15px;
    right: -5px;
    z-index: 1;
    transform: scale(0);
  }
  
  &:hover {
    &::before{
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(15deg);
      color: ${theme.colors.font};
      
      & + ${Mask} {
        transform: skewX(15deg);
      }
    }
    
  }
`