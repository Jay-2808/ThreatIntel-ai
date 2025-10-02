import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
  Container,
  VStack,
  HStack,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import { FiShield, FiTrendingUp, FiUsers, FiAlertTriangle, FiLock, FiActivity } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, accentColor }: { icon: any, title: string, description: string, accentColor: string }) => {
  return (
    <Box
      p={6}
      bg="rgba(26, 28, 42, 0.7)"
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="rgba(255, 255, 255, 0.1)"
      boxShadow="0 0 20px rgba(149, 128, 255, 0.2)"
      backdropFilter="blur(10px)"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-5px)", boxShadow: "0 0 30px rgba(149, 128, 255, 0.3)" }}
    >
      <Flex direction="column" align="flex-start">
        <Box
          p={3}
          borderRadius="xl"
          bgGradient={`linear-gradient(45deg, ${accentColor}, ${accentColor}50)`}
          mb={4}
        >
          <Icon as={icon} w={6} h={6} color="white" />
        </Box>
        <Heading size="md" mb={2} color="white">
          {title}
        </Heading>
        <Text color="whiteAlpha.700" fontSize="sm">
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

const StatCard = ({ label, value, change, icon, color }: { label: string, value: string, change: number, icon: any, color: string }) => {
  return (
    <Box
      p={6}
      bg="rgba(26, 28, 42, 0.7)"
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="rgba(255, 255, 255, 0.1)"
      boxShadow="0 0 20px rgba(149, 128, 255, 0.2)"
      backdropFilter="blur(10px)"
    >
      <Flex justify="space-between" align="center">
        <Stat>
          <StatLabel color="whiteAlpha.700">{label}</StatLabel>
          <StatNumber color="white" fontSize="2xl">{value}</StatNumber>
          <StatHelpText color={change >= 0 ? "green.400" : "red.400"}>
            <StatArrow type={change >= 0 ? "increase" : "decrease"} />
            {Math.abs(change)}%
          </StatHelpText>
        </Stat>
        <Box
          p={3}
          borderRadius="xl"
          bgGradient={`linear-gradient(45deg, ${color}, ${color}50)`}
        >
          <Icon as={icon} w={6} h={6} color="white" />
        </Box>
      </Flex>
    </Box>
  );
};

const Home = () => {
  const stats = [
    { label: "Protected Assets", value: "2,547", change: 12, icon: FiShield, color: "#9580FF" },
    { label: "Active Users", value: "847", change: 8.5, icon: FiUsers, color: "#80FFEA" },
    { label: "Threats Blocked", value: "149,823", change: 23.4, icon: FiAlertTriangle, color: "#FF80BF" },
    { label: "Security Score", value: "94%", change: 5.2, icon: FiLock, color: "#8AFF80" },
  ];

  const features = [
    {
      icon: FiShield,
      title: "Advanced Threat Detection",
      description: "AI-powered system that identifies and neutralizes threats in real-time",
      accentColor: "#9580FF"
    },
    {
      icon: FiTrendingUp,
      title: "Intelligent Analytics",
      description: "Comprehensive security analytics with predictive insights",
      accentColor: "#80FFEA"
    },
    {
      icon: FiAlertTriangle,
      title: "Real-time Alerts",
      description: "Instant notifications about potential security breaches",
      accentColor: "#FF80BF"
    },
    {
      icon: FiUsers,
      title: "User Management",
      description: "Centralized control over user access and permissions",
      accentColor: "#8AFF80"
    }
  ];

  return (
    <Box minH="100vh" color="white">
      {/* Hero Section */}
      <Box
        bgGradient="linear-gradient(to bottom right, #1a1c2a, #151725)"
        pt={20}
        pb={32}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="radial-gradient(circle at top right, rgba(149, 128, 255, 0.2), transparent 60%)"
        />
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Badge
              colorScheme="purple"
              px={3}
              py={1}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="wider"
              fontSize="xs"
            >
              Next-Gen Security Platform
            </Badge>
            <Heading
              size="2xl"
              bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)"
              bgClip="text"
              lineHeight="shorter"
            >
              Intelligent Security for the Modern Enterprise
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.800" maxW="2xl">
              Harness the power of AI to protect your assets with our advanced threat detection and response platform.
            </Text>
            <HStack spacing={4} pt={4}>
              <Button
                as={RouterLink}
                to="/dashboard"
                size="lg"
                bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)"
                color="white"
                _hover={{
                  bgGradient: "linear-gradient(45deg, #8070EF, #70EFDA)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 20px rgba(149, 128, 255, 0.4)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
              >
                Open Dashboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.300"
                color="white"
                _hover={{
                  bg: "whiteAlpha.100",
                  transform: "translateY(-2px)",
                }}
              >
                Learn More
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxW="container.xl" mt="-16">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="lg" bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)" bgClip="text">
              Comprehensive Security Features
            </Heading>
            <Text color="whiteAlpha.800" maxW="2xl">
              Our platform provides everything you need to secure your organization
            </Text>
          </VStack>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={6}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;
