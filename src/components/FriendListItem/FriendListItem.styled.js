import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${isOnline => (isOnline.children ? 'green' : 'red')};
  margin-right: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 20px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  height: 100%;
  margin-right: 80px;
`;

export const Name = styled.p`
  display: inline-block;
  text-align: left;
`;
