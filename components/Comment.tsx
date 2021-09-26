import { Flex, Text } from '@chakra-ui/react';

type CommentProps = {
  data: PostComment;
};

function Comment({
  data: { name, email, body },
}: CommentProps): React.ReactElement {
  return (
    <Flex
      flexDir="column"
      p={2}
      borderWidth={1}
      borderStyle="solid"
      borderColor="#808080"
      borderRadius={5}
    >
      <Flex
        flexDir="row"
        mb={1}
        fontSize="lg"
        fontWeight="bold"
        fontStyle="italic"
      >
        <Text>{name}</Text> - <Text>{email}</Text>
      </Flex>
      {body}
    </Flex>
  );
}

export default Comment;
