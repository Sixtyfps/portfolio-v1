import styled from "styled-components";

const Slider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`

`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #2fff95;
  }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}