import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { postPost } from 'utils/api';
import { useAsync } from 'hooks';
import { Status } from 'hooks/useAsync';

type NewPostFormValues = {
  author: string;
  title: string;
  body: string;
};

function PostForm(): React.ReactElement {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { status, run } = useAsync();

  const toast = useToast();

  React.useEffect(() => {
    if (status === Status.RESOLVED) {
      toast({
        status: 'success',
        title: 'Post sent',
        position: 'top',
        isClosable: true,
      });
      reset();
    }
  }, [reset, status, toast]);

  function onSubmit(postData: NewPostFormValues) {
    run(postPost(postData));
  }

  return (
    <form id="author" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired={true} isInvalid={errors.author}>
        <FormLabel htmlFor="author">Author</FormLabel>
        <Input
          placeholder="Author"
          {...register('author', {
            required: 'This is required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>
          {errors.author && errors.author.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl id="title" isRequired={true} isInvalid={errors.title}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          placeholder="Title"
          {...register('title', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl id="body" isRequired={true} isInvalid={errors.body}>
        <FormLabel htmlFor="body">Body</FormLabel>
        <Textarea
          placeholder="Body"
          {...register('body', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.body && errors.body.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default PostForm;
