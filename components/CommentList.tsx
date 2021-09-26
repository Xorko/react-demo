import { Flex } from '@chakra-ui/react';
import Comment from 'components/Comment';

type CommentListProps = {
  comments: PostComment[];
};

function CommentList({ comments }: CommentListProps): React.ReactElement {
  return (
    <Flex flexDir="column" my={2}>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </Flex>
  );
}

export default CommentList;
