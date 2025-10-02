import React from 'react';
import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  Badge,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiAlertTriangle, FiLock, FiUser, FiCpu } from 'react-icons/fi';

const RecentAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'high',
      message: 'Suspicious login attempt detected',
      time: '2 minutes ago',
      icon: FiUser,
      details: 'Multiple failed login attempts from IP: 192.168.1.100',
    },
    {
      id: 2,
      type: 'medium',
      message: 'Unusual file access pattern',
      time: '15 minutes ago',
      icon: FiLock,
      details: 'Abnormal access to sensitive documents detected',
    },
    {
      id: 3,
      type: 'low',
      message: 'System resource spike',
      time: '1 hour ago',
      icon: FiCpu,
      details: 'CPU usage exceeded 90% for 5 minutes',
    },
  ];

  const getBadgeProps = (type: string) => {
    switch (type) {
      case 'high':
        return {
          colorScheme: 'red',
          icon: FiAlertTriangle,
        };
      case 'medium':
        return {
          colorScheme: 'orange',
          icon: FiAlertTriangle,
        };
      case 'low':
        return {
          colorScheme: 'yellow',
          icon: FiAlertTriangle,
        };
      default:
        return {
          colorScheme: 'gray',
          icon: FiAlertTriangle,
        };
    }
  };

  const cardBg = "rgba(26, 28, 42, 0.5)";
  const borderColor = "rgba(255, 255, 255, 0.1)";

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md">Recent Alerts</Heading>
        <Badge colorScheme="purple" fontSize="sm" borderRadius="full" px={3}>
          {alerts.length} New
        </Badge>
      </Flex>

      <List spacing={4}>
        {alerts.map((alert) => {
          const badgeProps = getBadgeProps(alert.type);
          return (
            <ListItem
              key={alert.id}
              p={4}
              borderRadius="xl"
              border="1px"
              borderColor={borderColor}
              _hover={{ shadow: 'sm' }}
              transition="all 0.2s"
            >
              <Flex>
                <Icon
                  as={alert.icon}
                  boxSize={5}
                  mt={1}
                  mr={3}
                  color={`${badgeProps.colorScheme}.500`}
                />
                <Box flex="1">
                  <Flex justify="space-between" align="center" mb={2}>
                    <Badge
                      colorScheme={badgeProps.colorScheme}
                      borderRadius="full"
                      px={2}
                      py={0.5}
                      fontSize="xs"
                      textTransform="capitalize"
                    >
                      {alert.type}
                    </Badge>
                    <Text fontSize="sm" color="gray.500">
                      {alert.time}
                    </Text>
                  </Flex>
                  <Text fontWeight="medium" mb={1}>
                    {alert.message}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {alert.details}
                  </Text>
                </Box>
              </Flex>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default RecentAlerts;
