import React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box minH="100vh" bg={bgColor}>
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Header />
        <Box as="main" p={4}>
          <Box
            borderRadius="lg"
            p={4}
            minH="calc(100vh - 90px)"
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
