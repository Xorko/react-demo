import NextLink from 'next/link';
import {
  Box,
  Flex,
  HStack,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Links = ['Counter'];

type NavLinkProps = PropsWithChildren & {
  href: string;
};

const NavLink = ({ href, children }: NavLinkProps): React.ReactElement => (
  <NextLink href={href}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

function Navbar(): React.ReactElement {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <NextLink href="/">
              <a>React Demo</a>
            </NextLink>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link} href={`/${link.toLowerCase()}`}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <NextLink href="/new-post" passHref>
            <Button
              as="a"
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              leftIcon={<AddIcon />}
            >
              New post
            </Button>
          </NextLink>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
