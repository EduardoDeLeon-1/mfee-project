import { Title, Container, FormContainer } from './Comments.styles';
import CommentCard from '../CommentCard/CommentCard';

interface CommentsProps {
  comments: [
    {
      author: string;
      content: string;
    }
  ];
}

function Comments({ comments }: CommentsProps) {
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      <CommentCard author={comments[0].author} content={comments[0].content} />
      {/* ACT 5 - Iterate comments to render CommentCard component for each comment */}
      <FormContainer item sm={8}>
        Form
      </FormContainer>
    </Container>
  );
}

export default Comments;
