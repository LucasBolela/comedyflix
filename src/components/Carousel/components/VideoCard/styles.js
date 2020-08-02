import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  /* border: 2px solid; */
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 170px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center center;
  /* border-radius: 10px; */
  position: relative;
  display: flex;
  align-items: flex-end;
  /* padding: 16px; */

  /* transition: width .3s, height .3s; */
  &:hover,
  &:focus {
    /* opacity: .5; */
    transform: scale(1.2);
    transition: all 500ms ease 0s;
    margin: 0px 30px;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
