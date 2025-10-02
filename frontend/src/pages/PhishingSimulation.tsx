import React from 'react';
import { Box, Heading, SimpleGrid, Text, VStack, Badge, Flex } from '@chakra-ui/react';
import PhishingCampaignCard from "../components/phishing/PhishingCampaignCard";
import PhishingStats from "../components/phishing/PhishingStats";
import NewCampaignForm from "../components/phishing/NewCampaignForm";

const PhishingSimulation = () => {
  const cardBg = "rgba(26, 28, 42, 0.7)";
  const borderColor = "rgba(255, 255, 255, 0.1)";
  const glowColor = "0 0 20px rgba(149, 128, 255, 0.2)";

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={8}>
        <VStack align="start" spacing={2}>
          <Heading size="lg" bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)" bgClip="text">
            Phishing Simulation
          </Heading>
          <Text color="whiteAlpha.700">
            Train your employees against phishing attacks
          </Text>
        </VStack>
        <Badge
          colorScheme="purple"
          p={2}
          borderRadius="xl"
          fontSize="sm"
          bgGradient="linear-gradient(45deg, #9580FF50, #80FFEA50)"
        >
          Active Campaigns: 3
        </Badge>
      </Flex>
      
      <Box
        bg={cardBg}
        p={6}
        borderRadius="2xl"
        borderWidth="1px"
        borderColor={borderColor}
        boxShadow={glowColor}
        backdropFilter="blur(10px)"
        mb={8}
      >
        <PhishingStats />
      </Box>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
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
          <PhishingCampaignCard />
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
          <NewCampaignForm />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PhishingSimulation;
