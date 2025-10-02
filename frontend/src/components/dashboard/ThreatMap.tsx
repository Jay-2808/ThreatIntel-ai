import React from 'react';
import { Box, Heading, Flex, Text, Badge, Icon, useColorModeValue } from '@chakra-ui/react';
import { FiMapPin, FiAlertTriangle } from 'react-icons/fi';

const ThreatMap = () => {
  const regions = [
    { id: 1, name: 'North America', threats: 2, severity: 'medium' },
    { id: 2, name: 'Europe', threats: 1, severity: 'low' },
    { id: 3, name: 'Asia', threats: 3, severity: 'high' },
    { id: 4, name: 'South America', threats: 1, severity: 'low' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'red.400';
      case 'medium':
        return 'orange.400';
      case 'low':
        return 'green.400';
      default:
        return 'gray.400';
    }
  };

  const mapBgColor = useColorModeValue('gray.50', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md">Global Threat Map</Heading>
        <Badge colorScheme="purple" fontSize="sm" borderRadius="full" px={3}>
          Live
        </Badge>
      </Flex>

      <Box
        h="300px"
        bg={mapBgColor}
        borderRadius="xl"
        p={4}
        position="relative"
        mb={4}
      >
        {regions.map((region) => (
          <Flex
            key={region.id}
            position="absolute"
            top={`${Math.random() * 70 + 10}%`}
            left={`${Math.random() * 70 + 10}%`}
            align="center"
          >
            <Icon
              as={FiMapPin}
              w={6}
              h={6}
              color={getSeverityColor(region.severity)}
            />
          </Flex>
        ))}
      </Box>

      <Box>
        {regions.map((region) => (
          <Flex
            key={region.id}
            justify="space-between"
            align="center"
            mb={2}
            p={2}
            borderRadius="lg"
            _hover={{ bg: hoverBgColor }}
          >
            <Flex align="center">
              <Icon
                as={FiAlertTriangle}
                w={4}
                h={4}
                color={getSeverityColor(region.severity)}
                mr={2}
              />
              <Text fontSize="sm" fontWeight="medium">
                {region.name}
              </Text>
            </Flex>
            <Badge
              colorScheme={
                region.severity === 'high'
                  ? 'red'
                  : region.severity === 'medium'
                  ? 'orange'
                  : 'green'
              }
            >
              {region.threats} {region.threats === 1 ? 'threat' : 'threats'}
            </Badge>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default ThreatMap;
