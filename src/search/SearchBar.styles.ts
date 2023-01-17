import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  flex: 0 0 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const Bar = styled.div`
  background-color: #6c81b8;
  width: 50vw;
  padding: 20px;
  border-radius: 50px;
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;
export const SearchInput = styled.input`
  font-size: 14px;
  flex: 1 1 auto;
  margin: 0 30px;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  
  ::placeholder {
    color: white;
    opacity: .8;
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  top: 4px;
  left: 20px;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;