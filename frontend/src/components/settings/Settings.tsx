import React from 'react';
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  Select,
  Text,
  SimpleGrid,
  Button,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FiMail, FiBell, FiShield, FiLock } from 'react-icons/fi';

const SettingsCard = ({ icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => {
  const cardBg = "rgba(26, 28, 42, 0.7)";
  const borderColor = "rgba(255, 255, 255, 0.1)";
  const glowColor = "0 0 20px rgba(149, 128, 255, 0.2)";

  return (
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
      <Flex align="center" mb={6}>
        <Box
          p={2}
          borderRadius="lg"
          bgGradient="linear-gradient(45deg, #9580FF50, #80FFEA50)"
          mr={3}
        >
          <Icon as={icon} w={5} h={5} color="#9580FF" />
        </Box>
        <Text fontSize="lg" fontWeight="medium" color="white">
          {title}
        </Text>
      </Flex>
      <VStack spacing={4} align="stretch">
        {children}
      </VStack>
    </Box>
  );
};

const Settings = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center" mb={8}>
        <VStack align="start" spacing={2}>
          <Heading size="lg" bgGradient="linear-gradient(45deg, #9580FF, #80FFEA)" bgClip="text">
            Security Settings
          </Heading>
          <Text color="whiteAlpha.700">
            Configure your security preferences and notifications
          </Text>
        </VStack>
        <Button
          variant="outline"
          borderColor="whiteAlpha.200"
          color="white"
          _hover={{
            bg: "whiteAlpha.100",
            borderColor: "#9580FF",
          }}
        >
          Reset to Defaults
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <SettingsCard icon={FiBell} title="Notifications">
          <FormControl display="flex" alignItems="center">
            <Switch id="email-alerts" colorScheme="purple" />
            <FormLabel htmlFor="email-alerts" mb="0" ml={3} color="white">
              Email Alerts
            </FormLabel>
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <Switch id="push-notifications" colorScheme="purple" defaultChecked />
            <FormLabel htmlFor="push-notifications" mb="0" ml={3} color="white">
              Push Notifications
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel color="whiteAlpha.900">Alert Frequency</FormLabel>
            <Select size="sm" bg="whiteAlpha.100" borderColor="whiteAlpha.200" color="white">
              <option style={{ color: "black" }}>Real-time</option>
              <option style={{ color: "black" }}>Hourly Summary</option>
              <option style={{ color: "black" }}>Daily Digest</option>
            </Select>
          </FormControl>
        </SettingsCard>

        <SettingsCard icon={FiShield} title="Security">
          <FormControl display="flex" alignItems="center">
            <Switch id="two-factor" colorScheme="purple" defaultChecked />
            <FormLabel htmlFor="two-factor" mb="0" ml={3} color="white">
              Two-Factor Authentication
            </FormLabel>
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <Switch id="auto-lock" colorScheme="purple" defaultChecked />
            <FormLabel htmlFor="auto-lock" mb="0" ml={3} color="white">
              Auto-lock after 10 minutes
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel color="whiteAlpha.900">Security Level</FormLabel>
            <Select size="sm" bg="whiteAlpha.100" borderColor="whiteAlpha.200" color="white">
              <option style={{ color: "black" }}>High</option>
              <option style={{ color: "black" }}>Medium</option>
              <option style={{ color: "black" }}>Low</option>
            </Select>
          </FormControl>
        </SettingsCard>

        <SettingsCard icon={FiMail} title="Email Preferences">
          <FormControl display="flex" alignItems="center">
            <Switch id="weekly-report" colorScheme="purple" defaultChecked />
            <FormLabel htmlFor="weekly-report" mb="0" ml={3} color="white">
              Weekly Security Report
            </FormLabel>
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <Switch id="breach-alerts" colorScheme="purple" defaultChecked />
            <FormLabel htmlFor="breach-alerts" mb="0" ml={3} color="white">
              Data Breach Alerts
            </FormLabel>
          </FormControl>
        </SettingsCard>

        <SettingsCard icon={FiLock} title="Access Control">
          <FormControl display="flex" alignItems="center">
            <Switch id="ip-filtering" colorScheme="purple" />
            <FormLabel htmlFor="ip-filtering" mb="0" ml={3} color="white">
              IP Filtering
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel color="whiteAlpha.900">Session Timeout</FormLabel>
            <Select size="sm" bg="whiteAlpha.100" borderColor="whiteAlpha.200" color="white">
              <option style={{ color: "black" }}>30 minutes</option>
              <option style={{ color: "black" }}>1 hour</option>
              <option style={{ color: "black" }}>4 hours</option>
            </Select>
          </FormControl>
        </SettingsCard>
      </SimpleGrid>

      <Flex justify="flex-end" mt={8} gap={4}>
        <Button
          variant="outline"
          borderColor="whiteAlpha.200"
          color="white"
          _hover={{
            bg: "whiteAlpha.100",
            borderColor: "#9580FF",
          }}
        >
          Cancel
        </Button>
        <Button
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
          Save Changes
        </Button>
      </Flex>
    </Box>
  );
};

export default Settings;
