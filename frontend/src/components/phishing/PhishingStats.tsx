import React from 'react';
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Text,
} from '@chakra-ui/react';

const PhishingStats = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
      <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Stat>
          <StatLabel>Average Response Time</StatLabel>
          <StatNumber>2.5m</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            23% vs last month
          </StatHelpText>
        </Stat>
      </Box>

      <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Stat>
          <StatLabel>Click Rate</StatLabel>
          <StatNumber>12%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5% vs last month
          </StatHelpText>
        </Stat>
      </Box>

      <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Stat>
          <StatLabel>Report Rate</StatLabel>
          <StatNumber>88%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            12% vs last month
          </StatHelpText>
        </Stat>
      </Box>

      <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Stat>
          <StatLabel>Active Campaigns</StatLabel>
          <StatNumber>3</StatNumber>
          <Text fontSize="sm" color="gray.600">
            2 scheduled
          </Text>
        </Stat>
      </Box>
    </SimpleGrid>
  );
};

export default PhishingStats;
