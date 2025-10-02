import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  HStack,
  Badge,
  Button,
} from '@chakra-ui/react';
import { FiAward, FiCalendar, FiClock } from 'react-icons/fi';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  earnedDate: string;
  expiryDate: string;
  status: 'active' | 'expiring-soon' | 'expired';
  level: 'basic' | 'intermediate' | 'advanced';
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'Security Awareness Professional',
    issuer: 'CyberSec Institute',
    earnedDate: '2025-05-15',
    expiryDate: '2026-05-15',
    status: 'active',
    level: 'advanced',
  },
  {
    id: '2',
    name: 'Phishing Defense Specialist',
    issuer: 'ThreatIntel Academy',
    earnedDate: '2025-08-01',
    expiryDate: '2025-11-01',
    status: 'expiring-soon',
    level: 'intermediate',
  },
  {
    id: '3',
    name: 'Information Security Fundamentals',
    issuer: 'Security+ Board',
    earnedDate: '2024-10-01',
    expiryDate: '2025-09-30',
    status: 'expired',
    level: 'basic',
  },
];

const Certifications = () => {
  const getStatusColor = (status: Certification['status']) => {
    switch (status) {
      case 'active':
        return 'green';
      case 'expiring-soon':
        return 'yellow';
      case 'expired':
        return 'red';
      default:
        return 'gray';
    }
  };

  const getLevelColor = (level: Certification['level']) => {
    switch (level) {
      case 'advanced':
        return 'purple';
      case 'intermediate':
        return 'blue';
      case 'basic':
        return 'gray';
      default:
        return 'gray';
    }
  };

  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <HStack justify="space-between" mb={4}>
        <Heading size="md">Certifications</Heading>
        <Button size="sm" colorScheme="blue" variant="outline">
          View All
        </Button>
      </HStack>

      <VStack spacing={4} align="stretch">
        {certifications.map((cert) => (
          <Box
            key={cert.id}
            p={4}
            borderRadius="md"
            borderWidth="1px"
            position="relative"
          >
            <VStack align="stretch" spacing={3}>
              <HStack justify="space-between">
                <Text fontWeight="medium">{cert.name}</Text>
                <Badge colorScheme={getStatusColor(cert.status)}>
                  {cert.status}
                </Badge>
              </HStack>

              <Text fontSize="sm" color="gray.600">
                {cert.issuer}
              </Text>

              <SimpleGrid columns={3} spacing={4}>
                <HStack>
                  <Icon as={FiAward} color={getLevelColor(cert.level)} />
                  <Text fontSize="sm">{cert.level}</Text>
                </HStack>
                <HStack>
                  <Icon as={FiCalendar} />
                  <Text fontSize="sm">Earned: {cert.earnedDate}</Text>
                </HStack>
                <HStack>
                  <Icon as={FiClock} />
                  <Text fontSize="sm">Expires: {cert.expiryDate}</Text>
                </HStack>
              </SimpleGrid>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Certifications;
