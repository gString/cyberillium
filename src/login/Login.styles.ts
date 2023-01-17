import styled from "styled-components";

interface LabelProps {
    readonly for: string
}

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label<LabelProps>`
    font-size: 14px;
  color: darkblue;
  font-weight: bold;
  margin: 20px 0 10px 0;
`;
export const Input = styled.input`
    width: 100%;
  line-height: 20px;
  border: dotted 1px blue;
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;
`;
export const Modal = styled.form`
    height: 260px;
  width: 200px;
  padding: 50px;
  background-color: #61dafb;
  border: solid 2px #fff;
  border-radius: 20px;
  filter: drop-shadow(5px 5px 10px #999);
  display: flex;
  flex-direction: column;
  align-items: baseline;
`
export const Button = styled.button`
  align-self: flex-end;
  margin-top: 20px;
  width: 80px;
  height: 30px;
  background-color: #282c34;
  color: white;
  border: solid 2px transparent;
    border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: gray;
    border-color: blue;
  }
`;