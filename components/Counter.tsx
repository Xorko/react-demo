import { Center, Flex, Heading, Button } from '@chakra-ui/react';
import { useCounter } from 'hooks';
import { ActionTypes } from 'hooks/useCounter';

function Counter(): React.ReactElement {
  const { state, dispatch } = useCounter();

  return (
    <Center>
      <Flex flexDir="column" justifyContent="space-between" w={100} h={100}>
        <Center>
          <Heading>
            <div data-testid="counter">{state.count}</div>
          </Heading>
        </Center>
        <Flex justifyContent="space-between">
          <Button onClick={() => dispatch({ type: ActionTypes.DECREMENT })}>
            -
          </Button>
          <Button onClick={() => dispatch({ type: ActionTypes.INCREMENT })}>
            +
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
}

export default Counter;
