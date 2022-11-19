import PropTypes from 'prop-types';
import { Status, List, Item, Image, Name } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id} className="list-item">
            <Status className="status">{isOnline}</Status>
            <Image className="avatar" src={avatar} alt={name} width="48" />
            <Name className="name">{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
