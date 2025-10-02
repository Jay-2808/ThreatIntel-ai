import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Progress,
  Text,
  Button,
  Badge,
  Divider,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiBook, FiClock, FiAward } from 'react-icons/fi';

interface TrainingModule {
  id: string;
  title: string;
  duration: string;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed';
  dueDate: string;
}

const modules: TrainingModule[] = [
  {
    id: '1',
    title: 'Phishing Awareness Basics',
    duration: '45 min',
    progress: 100,
    status: 'completed',
    dueDate: '2025-10-15',
  },
  {
    id: '2',
    title: 'Social Engineering Defense',
    duration: '60 min',
    progress: 45,
    status: 'in-progress',
    dueDate: '2025-10-20',
  },
  {
    id: '3',
    title: 'Password Security Best Practices',
    duration: '30 min',
    progress: 0,
    status: 'not-started',
    dueDate: '2025-10-25',
  },
];

const TrainingModules = () => {
  const bgHover = useColorModeValue('gray.50', 'gray.700');

  const getStatusColor = (status: TrainingModule['status']) => {
    switch (status) {
      case 'completed':
        return 'green';
      case 'in-progress':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <HStack justify="space-between" mb={4}>
        <Heading size="md">Training Modules</Heading>
        <Button size="sm" colorScheme="blue" variant="outline">
          View All
        </Button>
      </HStack>

      <VStack spacing={4} align="stretch">
        {modules.map((module) => (
          <Box
            key={module.id}
            p={4}
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: bgHover }}
            transition="background 0.2s"
          >
            <HStack justify="space-between" mb={2}>
              <Text fontWeight="medium">{module.title}</Text>
              <Badge colorScheme={getStatusColor(module.status)}>
                {module.status}
              </Badge>
            </HStack>

            <Progress
              value={module.progress}
              size="sm"
              colorScheme={getStatusColor(module.status)}
              mb={3}
              borderRadius="full"
            />

            <HStack spacing={4} fontSize="sm" color="gray.600">
              <HStack>
                <Icon as={FiClock} />
                <Text>{module.duration}</Text>
              </HStack>
              <HStack>
                <Icon as={FiBook} />
                <Text>Due {module.dueDate}</Text>
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default TrainingModules;
