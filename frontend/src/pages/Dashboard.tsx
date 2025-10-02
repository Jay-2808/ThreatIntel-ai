import React, { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  VStack,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FiActivity, FiSettings, FiPieChart, FiMap } from 'react-icons/fi';
import ThreatMap from "../components/dashboard/ThreatMap";
import SecurityScore from "../components/dashboard/SecurityScore";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import AnalyticsDashboard from "../components/analytics/AnalyticsDashboard";
import Settings from "../components/settings/Settings";

const Dashboard = () => {
  const bgGradient = "linear-gradient(to bottom right, #1a1c2a, #151725)";
  const cardBg = "rgba(26, 28, 42, 0.7)";
  const borderColor = "rgba(255, 255, 255, 0.1)";
  const glowColor = "0 0 20px rgba(149, 128, 255, 0.2)";

  return (
    <Box bgGradient={bgGradient} minH="100vh" p={6} color="white">
      <Flex direction="column" h="full">
        <HStack spacing={4} mb={8}>
          <Box
            p={2}
            bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)"
            borderRadius="xl"
            boxShadow={glowColor}
          >
            <Icon as={FiActivity} w={8} h={8} color="white" />
          </Box>
          <Heading size="lg" bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)" bgClip="text">
            Security Command Center
          </Heading>
        </HStack>

        <Tabs variant="unstyled" isLazy>
          <TabList mb={6} p={1} bg="rgba(255, 255, 255, 0.03)" borderRadius="2xl" borderWidth="1px" borderColor={borderColor}>
            <Tab
              _selected={{
                bg: "rgba(149, 128, 255, 0.2)",
                color: "#9580FF",
                boxShadow: glowColor,
              }}
              borderRadius="xl"
              px={6}
              py={3}
              _hover={{ bg: "rgba(255, 255, 255, 0.05)" }}
            >
              <HStack spacing={2}>
                <Icon as={FiMap} />
                <Text>Overview</Text>
              </HStack>
            </Tab>
            <Tab
              _selected={{
                bg: "rgba(149, 128, 255, 0.2)",
                color: "#9580FF",
                boxShadow: glowColor,
              }}
              borderRadius="xl"
              px={6}
              py={3}
              _hover={{ bg: "rgba(255, 255, 255, 0.05)" }}
            >
              <HStack spacing={2}>
                <Icon as={FiPieChart} />
                <Text>Analytics</Text>
              </HStack>
            </Tab>
            <Tab
              _selected={{
                bg: "rgba(149, 128, 255, 0.2)",
                color: "#9580FF",
                boxShadow: glowColor,
              }}
              borderRadius="xl"
              px={6}
              py={3}
              _hover={{ bg: "rgba(255, 255, 255, 0.05)" }}
            >
              <HStack spacing={2}>
                <Icon as={FiSettings} />
                <Text>Settings</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel px={0}>
              <VStack spacing={6} align="stretch">
                <Grid
                  templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
                  gap={6}
                >
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
                    <ThreatMap />
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
                    <RecentAlerts />
                  </Box>
                </Grid>
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
                  <SecurityScore />
                </Box>
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <AnalyticsDashboard />
            </TabPanel>

            <TabPanel px={0}>
              <Settings />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default Dashboard;
