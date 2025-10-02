import React from 'react';
import {
  Box,
  VStack,
  Icon,
  Text,
  Link,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiShield,
  FiBook,
  FiSettings,
  FiBarChart2,
  FiFileText,
} from 'react-icons/fi';

const MenuItems = [
  { name: 'Dashboard', icon: FiHome, path: '/' },
  { name: 'Phishing Simulation', icon: FiShield, path: '/phishing' },
  { name: 'Security Training', icon: FiBook, path: '/training' },
  { name: 'Analytics', icon: FiBarChart2, path: '/analytics' },
  { name: 'Documentation', icon: FiFileText, path: '/docs' },
  { name: 'Settings', icon: FiSettings, path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      h="100vh"
      w="64"
      bg="gray.800"
      color="white"
    >
      <VStack spacing={1} align="stretch" py={8}>
        {MenuItems.map((item) => (
          <Link
            as={RouterLink}
            to={item.path}
            key={item.name}
            _hover={{ textDecoration: 'none' }}
          >
            <Flex
              align="center"
              px={8}
              py={3}
              cursor="pointer"
              bg={location.pathname === item.path ? 'gray.700' : 'transparent'}
              _hover={{ bg: 'gray.700' }}
            >
              <Icon as={item.icon} mr={4} />
              <Text>{item.name}</Text>
            </Flex>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
