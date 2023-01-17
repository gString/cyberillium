import styled from "styled-components";

const POD_WIDTH = 160;
export const PodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const PodName = styled.figcaption`
  position: absolute;
  left: 50%;
  bottom: 30px;
  width: ${POD_WIDTH}px;
  padding: 0 15px;
  box-sizing: border-box;
  margin-left: -${POD_WIDTH / 2}px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #61dafb;
  text-shadow: 0 0 8px black;
`;
export const PodImage = styled.img`
  width: 130px;
  height: 130px;
  margin: 10px;
  opacity: .8;
  border: solid 1px transparent;
`;
export const Pod = styled.figure`
  height: 180px;
  width: ${POD_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px dotted #9381af;
  margin: 8px;
  background-color: #b7cbd7;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  cursor: pointer;

  &:hover {
    border-style: solid;
    background-color: #8ba6d9;

    ${PodName} {
      color: white;
    }

    ${PodImage} {
      opacity: 1;
      border-color: #7084ad;
    }
  }
`;
export const BlockingLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffffdb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.article`
  width: 540px;
  height: 230px;
  background-color: antiquewhite;
  border-radius: 30px;
  border: solid 2px #f0dabd;
  padding: 30px;
`;
export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  color: coral;
  margin-bottom: 20px;
`;
export const ModalImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 20px;
`;
export const Heading = styled.div`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;
export const ModalName = styled.h1`
  margin: 70px 0 0 0;
`;
export const Followers = styled.h4`
  text-align: left;
  margin: 10px 0 0 0;
  font-weight: normal;
  font-style: italic;
`;
export const Genres = styled.p`
    text-align: left;
  margin: 0;
  font-weight: normal;
`;
export const Scroller = styled.div`
  height: 36px;
    overflow-x: scroll;
  margin-left: 10px;
  
  div {
    white-space: nowrap;
  }
  
`;
export const Albums = styled.div`
  margin-top: 20px;
    display: flex;
`;