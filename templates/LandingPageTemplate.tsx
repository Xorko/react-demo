import { Center, Heading } from '@chakra-ui/react';
import PostList from 'components/PostList';

function LandingPageTemplate() {
  return (
    <Center mx="2">
      <Heading>Posts</Heading>
      <PostList />
    </Center>
  );
}

export default LandingPageTemplate;
