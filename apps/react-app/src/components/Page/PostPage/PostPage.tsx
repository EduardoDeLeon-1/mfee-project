import { useCallback, useEffect, useState } from 'react';
import Banner from '../../Banner';
import Comments from '../../Comments';
import { Comment } from '../../../types/index';
import { Container, BannerContainer, CommentsContainer, DescriptionContainer } from './PostPage.styles';

const post = {
  id: '1.23',
  title: 'A good place to camp',
  image:
    'https://th.bing.com/th/id/R.e0bad63364a867fea652212c254bf869?rik=avtecz5aXVdevA&riu=http%3a%2f%2fwww.viajejet.com%2fwp-content%2fviajes%2fLago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg&ehk=6qRhWDqqQAEkSFs%2bHP8p2Bl6XfPbjznSoORh%2bsEJ%2bQE%3d&risl=&pid=ImgRaw&r=0',
  description: 'Beautiful water, incredible landscapes and huge bears everywhere. Everything your soul needs.',
  category: 'Travel',
  comments: [
    {
      id: '2.1',
      author: 'Anonymus',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '2.2',
      author: 'Anonymus',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};

function PostPage() {
  const [comments, setComment] = useState<Comment[]>(post.comments);

  const handleCommentSubmition = useCallback(
    (comment: Comment) => {
      console.log(comments);
      setComment([...comments, comment]);
    },
    [comments]
  );

  useEffect(() => {}, [comments]);

  return (
    <Container container>
      Post page
      <BannerContainer item>
        <Banner postImage={post.image} postTitle={post.title} />
      </BannerContainer>
      <DescriptionContainer item>
        <p>{post.description}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        {/* <CommentCard author={post.comments[0].author} content={post.comments[0].content} /> */}
        <Comments comments={comments} handleCommentSubmition={handleCommentSubmition} />
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
