import { Title, Container, FormContainer } from './Comments.styles';
import CommentCard from '../CommentCard/CommentCard';
import { ReactNode } from 'react';

interface CommentsProps {
  comments: [
    {
      author: string;
      content: string;
    }
  ];
}

const commentNodes: ReactNode[] = [];

function Comments({ comments }: CommentsProps) {
  comments.forEach((comment) => {
    commentNodes.push(<CommentCard author={comment.author} content={comment.content} />);
  });

  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      <CommentCard author={comments[0].author} content={comments[0].content} />
      {commentNodes}
      <FormContainer item sm={8}>
        Form
      </FormContainer>
    </Container>
  );
}

export default Comments;
