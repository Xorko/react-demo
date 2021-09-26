import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

// Fixes issues related to SSR (IDs doesn't match between client and server page)
const PostForm = dynamic(import('components/PostForm'), { ssr: false });

function NewPostTemplate() {
  return (
    <Box mx="2">
      <PostForm />
    </Box>
  );
}

export default NewPostTemplate;
