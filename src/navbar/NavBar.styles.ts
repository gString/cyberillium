import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Header = styled.header`
  position: relative;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  background-color: #61bafb;
  border: solid 2px #fff;
  border-radius: 5px 5px 30px 30px;
  filter: drop-shadow(2px 2px 5px #ccc);
  width: 80vw;
`;
export const PagesMenu = styled.nav`
  display: flex;
  justify-content: center;
`;
export const Page = styled.li`
  list-style: none;
  line-height: 30px;
  width: 120px;
  height: 30px;
  color: #282c34;
  margin: 5px 10px;
  border-top: 2px dotted transparent;
  cursor: pointer;

  &:hover {
    border-color: blue;
    color: blue;
  }
`;
export const Greeting = styled.h3`
  position: absolute;
  right: 30px;
  font-size: 15px;
  line-height: 30px;
  margin: 7px 0 5px 0;
  width: 120px;
  text-align: right;
  color: white;
`;