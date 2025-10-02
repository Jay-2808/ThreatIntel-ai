import React from 'react';
import { Box, Heading, SimpleGrid, Text, VStack, Badge, Flex } from '@chakra-ui/react';
import TrainingModules from "../components/training/TrainingModules";
import EmployeeProgress from "../components/training/EmployeeProgress";
import Certifications from "../components/training/Certifications";

const SecurityTraining = () => {
  const cardBg = "rgba(26, 28, 42, 0.7)";
  const borderColor = "rgba(255, 255, 255, 0.1)";
  const glowColor = "0 0 20px rgba(149, 128, 255, 0.2)";

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={8}>
        <VStack align="start" spacing={2}>
          <Heading size="lg" bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)" bgClip="text">
            Security Training
          </Heading>
          <Text color="whiteAlpha.700">
            Enhance your team's security awareness
          </Text>
        </VStack>
        <Badge
          colorScheme="purple"
          p={2}
          borderRadius="xl"
          fontSize="sm"
          bgGradient="linear-gradient(45deg, #9580FF50, #80FFEA50)"
        >
          12 Active Courses
        </Badge>
      </Flex>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
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
          <TrainingModules />
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
          <EmployeeProgress />
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
          <Certifications />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SecurityTraining;
