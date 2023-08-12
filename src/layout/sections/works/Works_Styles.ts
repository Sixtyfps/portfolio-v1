import styled from "styled-components";
import {Button} from "../../../components/Button";
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
  
  width: 330px;
  flex-grow: 1;

  Button + Button {
    margin-left: 20px;
  }
  
  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    backdrop-filter: blur(10px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

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
  padding: 25px 20px;
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
    Text
}