import { Status, Item, Image, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id} className="list-item">
      <Status className="status">{isOnline}</Status>
      <Image className="avatar" src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
