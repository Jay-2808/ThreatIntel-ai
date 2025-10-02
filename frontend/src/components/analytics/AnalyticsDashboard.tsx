import React from 'react';
import {
  Box,
  Grid,
  Heading,
  Text,
  Flex,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  VStack,
  Badge,
} from '@chakra-ui/react';
import { FiTrendingUp, FiShield, FiAlertTriangle } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
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

const AnalyticsDashboard = () => {
  const cardBg = "rgba(26, 28, 42, 0.7)";
  const borderColor = "rgba(255, 255, 255, 0.1)";
  const glowColor = "0 0 20px rgba(149, 128, 255, 0.2)";

  const threatData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Threats Detected',
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        backgroundColor: 'rgba(149, 128, 255, 0.1)',
        borderColor: '#9580FF',
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
      tooltip: {
        backgroundColor: 'rgba(26, 28, 42, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={8}>
        <VStack align="start" spacing={2}>
          <Heading size="lg" bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)" bgClip="text">
            Security Analytics
          </Heading>
          <Text color="whiteAlpha.700">
            Comprehensive analysis of your security metrics
          </Text>
        </VStack>
        <Badge
          colorScheme="purple"
          p={2}
          borderRadius="xl"
          fontSize="sm"
          bgGradient="linear-gradient(45deg, #9580FF50, #80FFEA50)"
        >
          Last updated: 5m ago
        </Badge>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} mb={8}>
        <Box
          bg={cardBg}
          p={6}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow={glowColor}
          backdropFilter="blur(10px)"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-2px)", boxShadow: "0 0 25px rgba(149, 128, 255, 0.3)" }}
        >
          <Flex align="center" mb={4}>
            <CircularProgress 
              value={78} 
              size="100px" 
              thickness="8px" 
              color="#9580FF"
              trackColor="rgba(149, 128, 255, 0.1)"
            >
              <CircularProgressLabel color="white">78%</CircularProgressLabel>
            </CircularProgress>
            <Box ml={4}>
              <Text fontSize="lg" fontWeight="medium" mb={1} color="white">
                System Health
              </Text>
              <Text fontSize="sm" color="whiteAlpha.700">
                Overall security status
              </Text>
            </Box>
          </Flex>
          <Stat>
            <StatLabel color="whiteAlpha.700">Improvement</StatLabel>
            <StatHelpText color="green.400">
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>

        <Box
          bg={cardBg}
          p={6}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow={glowColor}
          backdropFilter="blur(10px)"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-2px)", boxShadow: "0 0 25px rgba(149, 128, 255, 0.3)" }}
        >
          <Flex align="center" mb={4}>
            <Box
              p={2}
              borderRadius="lg"
              bgGradient="linear-gradient(45deg, #9580FF50, #80FFEA50)"
            >
              <Icon as={FiTrendingUp} w={6} h={6} color="#9580FF" />
            </Box>
            <Text ml={3} fontSize="lg" fontWeight="medium" color="white">
              Threat Analysis
            </Text>
          </Flex>
          <Box position="relative">
            <Line data={threatData} options={options} height="100" />
          </Box>
        </Box>

        <Box
          bg={cardBg}
          p={6}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow={glowColor}
          backdropFilter="blur(10px)"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-2px)", boxShadow: "0 0 25px rgba(149, 128, 255, 0.3)" }}
        >
          <Text fontSize="lg" fontWeight="medium" mb={4} color="white">
            Quick Stats
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <Stat>
              <StatLabel color="whiteAlpha.700">Active Threats</StatLabel>
              <StatNumber color="white">3</StatNumber>
              <StatHelpText color="green.400">
                <StatArrow type="decrease" />
                14.3%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel color="whiteAlpha.700">Blocked Attacks</StatLabel>
              <StatNumber color="white">147</StatNumber>
              <StatHelpText color="green.400">
                <StatArrow type="increase" />
                28.5%
              </StatHelpText>
            </Stat>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default AnalyticsDashboard;
