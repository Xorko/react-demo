import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';

type PostProps = {
  data: Post;
};

function Post({ data: { id, title, body } }: PostProps): React.ReactElement {
  return (
    <Flex
      flexDir="column"
      p="2"
      my="2"
      borderWidth={1}
      borderStyle="solid"
      borderColor="#808080"
      borderRadius={5}
    >
      <NextLink href={`/posts/${id}`} passHref>
        <Heading
          as={Link}
          size="md"
          alignSelf="flex-start"
          _hover={{ color: 'teal' }}
        >
          {title}
        </Heading>
      </NextLink>
      <Box>{body}</Box>
    </Flex>
  );
}

export default Post;
