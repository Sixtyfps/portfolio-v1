import styled from "styled-components";
import {Button} from "../../../components/Button";
import {LinkButton} from "../../../components/LinkButton";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px;
  }
`

const Work = styled.div`
  background-color: ${theme.colors.primaryBg};

  Button + Button {
    margin-left: 20px;
  }
    
`

const ButtonContainer = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    
`

const ImageWrapper = styled.div`
  position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -30%);
    transition: ${theme.animations.transition};
  
    }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }
    
  &:hover::before {
      opacity: 1;
      transition: ${theme.animations.transition};
    }
   
  &:hover {
    ${ButtonContainer} {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}
    
  }


  @media ${theme.media.tablet} {

    ${Button} {
      opacity: 1;
    }
  }
  
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 0;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 10px;
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
    ButtonContainer
}