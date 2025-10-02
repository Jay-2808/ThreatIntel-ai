import React from 'react';
import {
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  Container,
  Icon,
  Flex,
  Badge,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { 
  FiShield, 
  FiArrowRight, 
  FiActivity, 
  FiPieChart, 
  FiUsers, 
  FiAlertTriangle,
  FiTrendingUp,
  FiDatabase,
  FiServer,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface StatCardProps {
  icon: IconType;
  label: string;
  value: string;
  change?: number;
  color: string;
}

const StatCard = ({ icon, label, value, change, color }: StatCardProps) => (
  <Box
    p={6}
    borderRadius="2xl"
    bg="rgba(26, 28, 42, 0.5)"
    borderWidth="1px"
    borderColor="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(10px)"
    transition="all 0.3s"
    _hover={{
      transform: "translateY(-2px)",
      boxShadow: `0 8px 32px ${color}30`,
    }}
  >
    <Flex align="center" justify="space-between">
      <Stat>
        <StatLabel color="whiteAlpha.600" fontSize="sm">{label}</StatLabel>
        <StatNumber color="white" fontSize="2xl">{value}</StatNumber>
        {change && (
          <StatHelpText color={change >= 0 ? "green.400" : "red.400"} mb={0}>
            <StatArrow type={change >= 0 ? "increase" : "decrease"} />
            {Math.abs(change)}%
          </StatHelpText>
        )}
      </Stat>
      <Box
        p={3}
        borderRadius="xl"
        bgGradient={`linear-gradient(135deg, ${color}30, ${color}10)`}
      >
        <Icon as={icon} w={6} h={6} color={color} />
      </Box>
    </Flex>
  </Box>
);

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      bgGradient="linear-gradient(135deg, #13151F 0%, #1E2137 100%)"
      position="relative"
      overflow="hidden"
      py={8}
    >
      {/* Gradient Orbs */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        width="600px"
        height="600px"
        background="radial-gradient(circle, rgba(149, 128, 255, 0.2) 0%, transparent 70%)"
        filter="blur(60px)"
        animation="pulse 8s infinite"
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="-15%"
        width="800px"
        height="800px"
        background="radial-gradient(circle, rgba(128, 255, 234, 0.15) 0%, transparent 70%)"
        filter="blur(60px)"
        animation="pulse 10s infinite"
      />
      
      <Container maxW="container.xl" position="relative">
        <VStack spacing={12} align="stretch">
          {/* Header Section */}
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <Box
                p={2}
                borderRadius="xl"
                bgGradient="linear-gradient(135deg, rgba(149, 128, 255, 0.2), rgba(128, 255, 234, 0.2))"
              >
                <Icon as={FiShield} w={8} h={8} color="#9580FF" />
              </Box>
              <VStack align="start" spacing={1}>
                <Heading 
                  size="lg" 
                  bgGradient="linear-gradient(135deg, #9580FF, #80FFEA)"
                  bgClip="text"
                >
                  ThreatIntel AI
                </Heading>
                <Text color="whiteAlpha.600">Enterprise Security Platform</Text>
              </VStack>
            </HStack>
            <Button
              variant="ghost"
              color="white"
              size="lg"
              onClick={() => navigate('/')}
              rightIcon={<Icon as={FiArrowRight} />}
              _hover={{
                bg: "whiteAlpha.100",
              }}
            >
              Enter Dashboard
            </Button>
          </Flex>

          {/* Main Content */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }} gap={8}>
            {/* Left Side - Platform Description */}
            <VStack spacing={6} align="stretch">
              <Box
                p={8}
                borderRadius="2xl"
                bg="rgba(26, 28, 42, 0.5)"
                borderWidth="1px"
                borderColor="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
              >
                <VStack spacing={6} align="stretch">
                  <VStack align="start" spacing={4}>
                    <Heading 
                      size="xl" 
                      bgGradient="linear-gradient(135deg, #9580FF, #80FFEA)"
                      bgClip="text"
                    >
                      Welcome to ThreatIntel AI
                    </Heading>
                    <Text color="whiteAlpha.800" fontSize="lg" lineHeight="tall">
                      Your comprehensive cybersecurity threat intelligence platform powered by advanced AI technology.
                    </Text>
                  </VStack>

                  <Button
                    size="lg"
                    width="full"
                    height="60px"
                    bgGradient="linear-gradient(135deg, #9580FF, #80FFEA)"
                    color="white"
                    fontSize="lg"
                    onClick={() => navigate('/')}
                    _hover={{
                      bgGradient: "linear-gradient(135deg, #8070EF, #70EFDA)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 32px rgba(149, 128, 255, 0.4)",
                    }}
                    rightIcon={<Icon as={FiArrowRight} w={5} h={5} />}
                  >
                    Access Dashboard
                  </Button>
                </VStack>
              </Box>

              {/* Security Stats */}
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <StatCard
                  icon={FiAlertTriangle}
                  label="Active Threats"
                  value="3"
                  change={-14.5}
                  color="#9580FF"
                />
                <StatCard
                  icon={FiUsers}
                  label="Users Protected"
                  value="1,247"
                  change={8.3}
                  color="#80FFEA"
                />
              </Grid>
            </VStack>

            {/* Right Side - Platform Preview */}
            <Box
              borderRadius="2xl"
              bg="rgba(26, 28, 42, 0.5)"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              p={8}
              position="relative"
              overflow="hidden"
            >
              <VStack spacing={8} align="stretch">
                <Flex justify="space-between" align="center">
                  <Heading size="md" color="white">Platform Overview</Heading>
                  <Badge
                    colorScheme="purple"
                    px={3}
                    py={1}
                    borderRadius="full"
                    bgGradient="linear-gradient(135deg, rgba(149, 128, 255, 0.2), rgba(128, 255, 234, 0.2))"
                  >
                    Live Data
                  </Badge>
                </Flex>

                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  <StatCard
                    icon={FiPieChart}
                    label="Security Score"
                    value="94%"
                    change={5.2}
                    color="#FF80BF"
                  />
                  <StatCard
                    icon={FiServer}
                    label="Systems Monitored"
                    value="1,834"
                    color="#8AFF80"
                  />
                  <StatCard
                    icon={FiDatabase}
                    label="Data Protected"
                    value="12.4 TB"
                    color="#FF9580"
                  />
                </Grid>

                <Box
                  p={6}
                  borderRadius="xl"
                  bg="rgba(26, 28, 42, 0.7)"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.1)"
                >
                  <VStack align="start" spacing={4}>
                    <Text color="white" fontWeight="medium">Recent Activities</Text>
                    {/*
                      Activity log items can be mapped here
                    */}
                    {/*
                      Example static items:
                      { icon: FiShield, text: "Threat detection updated", time: "2m ago" },
                      { icon: FiActivity, text: "System scan completed", time: "15m ago" },
                      { icon: FiTrendingUp, text: "Security score improved", time: "1h ago" },
                    */}
                    {/*
                      Example static items:
                      { icon: FiShield, text: "Threat detection updated", time: "2m ago" },
                      { icon: FiActivity, text: "System scan completed", time: "15m ago" },
                      { icon: FiTrendingUp, text: "Security score improved", time: "1h ago" },
                    */}
                    {/*
                      Example static items:
                      { icon: FiShield, text: "Threat detection updated", time: "2m ago" },
                      { icon: FiActivity, text: "System scan completed", time: "15m ago" },
                      { icon: FiTrendingUp, text: "Security score improved", time: "1h ago" },
                    */}
                    {/*
                      Example static items:
                      { icon: FiShield, text: "Threat detection updated", time: "2m ago" },
                      { icon: FiActivity, text: "System scan completed", time: "15m ago" },
                      { icon: FiTrendingUp, text: "Security score improved", time: "1h ago" },
                    */}
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;