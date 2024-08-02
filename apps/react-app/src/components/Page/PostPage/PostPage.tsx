import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

// const post = {
//   image: "",
//   title: "",
//   postID: "",
//   comments: [
//     {
//       _id: "",
//       author: "",
//       content: "",
//       createdAt: "",
//       updatedAt: "",
//       __v: "",
//     },
//   ],
//   description: "",
// }; // ACT 1 - Fill all this properties with random data

function PostPage() {
  return (
    <Container container>
      Post page
      <BannerContainer item>
        {/* ACT 1 - Render Banner component */}
        {/* ACT 3 - Send postImage and postTitle as props to Banner component */}
      </BannerContainer>
      <DescriptionContainer item>
        <p>{/* ACT 1 - Render post description */}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        {/* ACT 1 - Render Comments component */}
        {/* ACT 3 - Send comments as prop to Comments component */}
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
