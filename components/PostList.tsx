import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import Post from 'components/Post';
import { useAsync } from 'hooks';
import { fetchPosts } from 'utils/api';
import { Status } from 'hooks/useAsync';

function PostList(): React.ReactElement {
  const { data: posts, status, run } = useAsync();

  React.useEffect(() => {
    run(fetchPosts());
  }, [run]);

  if (status === Status.RESOLVED) {
    return (
      <Flex
        flexDir="column"
        w={'50%'}
        justifyContent="space-between"
        alignContent="space-between"
      >
        {(posts as Post[]).map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </Flex>
    );
  }

  return <Spinner />;
}

export default PostList;
