import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Page from 'components/Page';
import { useAsync } from 'hooks';
import { getPost, getPostAuthor, getPostComments } from 'utils/api';
import Post from 'components/Post';
import { Status } from 'hooks/useAsync';
import { Spinner } from '@chakra-ui/spinner';
import PostTemplate from 'templates/PostTemplate';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { id: postId } = router.query;

  const { data: post, status: statusPost, run: runPost } = useAsync();
  const { data: author, status: statusAuthor, run: runAuthor } = useAsync();
  const {
    data: comments,
    status: statusComments,
    run: runComments,
  } = useAsync();

  React.useEffect(() => {
    if (typeof postId === 'string') {
      runPost(getPost(postId as unknown as number));
      runComments(getPostComments(postId as unknown as number));
    }
  }, [postId, runAuthor, runComments, runPost]);

  React.useEffect(() => {
    if (statusPost === Status.RESOLVED) {
      runAuthor(getPostAuthor(post.userId));
    }
  }, [post, runAuthor, statusPost]);

  if (statusComments === Status.RESOLVED && statusAuthor === Status.RESOLVED) {
    return (
      <Page title="React demo - New post" description="New post">
        <PostTemplate
          post={post as Post}
          author={(author as User).name}
          comments={comments as PostComment[]}
        />
      </Page>
    );
  }

  return <Spinner />;
};

export default PostPage;
