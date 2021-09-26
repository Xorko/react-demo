import { ChakraProvider } from '@chakra-ui/provider';

type AppProvidersProps = PropsWithChildren;

function AppProviders({ children }: AppProvidersProps): React.ReactElement {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default AppProviders;
