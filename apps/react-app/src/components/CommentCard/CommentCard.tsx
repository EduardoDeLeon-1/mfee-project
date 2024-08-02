import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Container, Content, Author } from './CommentCard.styles';

// ACT 3 - Receive comment prop

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{/* ACT 1 - Render comment author */}</Author>
        <Typography>{/* ACT 1 - Render comment content */}</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;
