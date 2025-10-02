import React from 'react';
import { Box, Heading, Text, Flex, Progress, Icon, Grid, Badge, VStack } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { FiTrendingUp, FiShield, FiCheck } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SecurityScore = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Security Score',
        data: [65, 70, 75, 72, 80, 85],
        fill: true,
        backgroundColor: 'rgba(149, 128, 255, 0.1)',
        borderColor: '#9580FF',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const securityMetrics = [
    {
      name: 'Endpoint Security',
      score: 90,
      color: 'green',
      icon: FiShield,
    },
    {
      name: 'Network Security',
      score: 85,
      color: 'blue',
      icon: FiTrendingUp,
    },
    {
      name: 'Access Control',
      score: 95,
      color: 'purple',
      icon: FiCheck,
    },
  ];

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md">Security Score Analysis</Heading>
        <Badge colorScheme="green" fontSize="sm" borderRadius="full" px={3}>
          Healthy
        </Badge>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
        <Box>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Overall Security Trend
          </Text>
          <Box height="200px">
            <Line key="security-score-chart" data={data} options={options} />
          </Box>
        </Box>

        <Box>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Security Metrics
          </Text>
          <VStack spacing={4} align="stretch">
            {securityMetrics.map((metric) => (
              <Box key={metric.name}>
                <Flex justify="space-between" align="center" mb={2}>
                  <Flex align="center">
                    <Icon as={metric.icon} color={`${metric.color}.500`} mr={2} />
                    <Text fontSize="sm" fontWeight="medium">
                      {metric.name}
                    </Text>
                  </Flex>
                  <Text fontSize="sm" fontWeight="bold">
                    {metric.score}%
                  </Text>
                </Flex>
                <Progress
                  value={metric.score}
                  size="sm"
                  colorScheme={metric.color}
                  borderRadius="full"
                />
              </Box>
            ))}
          </VStack>
        </Box>
      </Grid>

      <Flex mt={6} justify="flex-end">
        <Text fontSize="sm" color="gray.600">
          Last updated: 5 minutes ago
        </Text>
      </Flex>
    </Box>
  );
};

export default SecurityScore;
