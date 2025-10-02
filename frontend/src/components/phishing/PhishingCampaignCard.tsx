import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Progress,
} from '@chakra-ui/react';

interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'scheduled';
  targetCount: number;
  clickRate: number;
  reportRate: number;
  startDate: string;
}

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Password Reset Campaign',
    status: 'active',
    targetCount: 150,
    clickRate: 15,
    reportRate: 85,
    startDate: '2025-10-01',
  },
  {
    id: '2',
    name: 'Invoice Scam Test',
    status: 'completed',
    targetCount: 200,
    clickRate: 8,
    reportRate: 92,
    startDate: '2025-09-15',
  },
];

const PhishingCampaignCard = () => {
  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={4}>Active Campaigns</Heading>
      
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Campaign</Th>
            <Th>Status</Th>
            <Th>Progress</Th>
            <Th>Success Rate</Th>
          </Tr>
        </Thead>
        <Tbody>
          {campaigns.map((campaign) => (
            <Tr key={campaign.id}>
              <Td>
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium">{campaign.name}</Text>
                  <Text fontSize="sm" color="gray.600">
                    Started {campaign.startDate}
                  </Text>
                </VStack>
              </Td>
              <Td>
                <Badge
                  colorScheme={
                    campaign.status === 'active'
                      ? 'green'
                      : campaign.status === 'completed'
                      ? 'blue'
                      : 'yellow'
                  }
                >
                  {campaign.status}
                </Badge>
              </Td>
              <Td>
                <Box w="150px">
                  <Progress
                    value={campaign.reportRate}
                    size="sm"
                    colorScheme="blue"
                    borderRadius="full"
                  />
                </Box>
              </Td>
              <Td>{campaign.reportRate}%</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PhishingCampaignCard;
