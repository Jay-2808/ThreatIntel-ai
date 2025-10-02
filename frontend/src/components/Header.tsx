import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      py={4}
      px={8}
      bg="white"
      borderBottomWidth={1}
    >
      <Text fontSize="xl" fontWeight="bold">
        ThreatIntel AI
      </Text>

      <Flex align="center">
        <IconButton
          aria-label="Notifications"
          icon={<FiBell />}
          variant="ghost"
          mr={4}
        />
        
        <Menu>
          <MenuButton>
            <Avatar size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
