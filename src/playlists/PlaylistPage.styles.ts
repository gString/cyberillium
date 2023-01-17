import styled from "styled-components";

export const IMAGE_SIZE = 50;
export const MainList = styled.dl`
  text-align: left;
`;
export const ListName = styled.dt`
  font-size: 15px;
  font-weight: bold;
  color: darkcyan;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & span {
    padding-left: 10px;
    font-weight: normal;
    color: darkslategrey;
  }
`;
export const ListImage = styled.img`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  margin: 10px ${IMAGE_SIZE}px;
  box-shadow: 0 0 15px rgba(45, 255, 196, 0.67);
  border: solid 5px white;
`;
export const Playlist = styled.dd`
  margin-bottom: 45px;
`;
export const SongList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Song = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  background-color: rgba(100, 149, 237, 0.49);
  margin-bottom: 7px;
  padding: 5px 10px;
  border: solid 1px #6495ED;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 83, 180, 0.49);
  }
`;
export const SongImage = styled.img`
  width: ${IMAGE_SIZE / 2}px;
  height: ${IMAGE_SIZE / 2}px;
  margin: 10px ${IMAGE_SIZE / 2}px;
  border: solid 5px white;
  outline: dotted 1px coral;
`;
export const SongHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
export const SongTitle = styled.h4`
  font-size: 14px;
  color: #282c34;
  margin: 0;
`;
export const SongArtist = styled.span`
  font-size: 11px;
  color: darkslategrey;
`;
export const SongLength = styled.span`
  flex: 1 1 auto;
  text-align: right;
  color: darkslategrey;
  font-size: 13px;
  padding-right: 15px;
`;
export const SongAlbum = styled.span`
  font-size: 13px;
  color: darkslategrey;
`;