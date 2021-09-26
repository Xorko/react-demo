import { Box, Text, Heading } from '@chakra-ui/react';
import Post from 'components/Post';
import CommentList from 'components/CommentList';

type PostTemplateProps = {
  post: Post;
  comments: PostComment[];
  author: string;
};

function PostTemplate({ post, comments, author }: PostTemplateProps) {
  return (
    <Box m={2}>
      <Text fontStyle="italic">Written by {author}</Text>
      <Post data={post} />

      <Box>
        <Heading size="md">Comments</Heading>
        <CommentList comments={comments} />
      </Box>
    </Box>
  );
}

export default PostTemplate;
