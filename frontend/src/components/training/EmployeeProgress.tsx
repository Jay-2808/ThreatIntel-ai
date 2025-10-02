import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Progress,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
} from '@chakra-ui/react';

interface EmployeeStats {
  id: string;
  name: string;
  role: string;
  completedModules: number;
  totalModules: number;
  lastActivity: string;
  score: number;
}

const employees: EmployeeStats[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'IT Manager',
    completedModules: 8,
    totalModules: 10,
    lastActivity: '2025-10-01',
    score: 92,
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'HR Specialist',
    completedModules: 6,
    totalModules: 10,
    lastActivity: '2025-09-30',
    score: 85,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Developer',
    completedModules: 9,
    totalModules: 10,
    lastActivity: '2025-10-02',
    score: 95,
  },
];

const EmployeeProgress = () => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'green';
    if (score >= 70) return 'yellow';
    return 'red';
  };

  const getProgressPercent = (completed: number, total: number) => 
    Math.round((completed / total) * 100);

  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={4}>Team Progress</Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Employee</Th>
            <Th>Progress</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee.id}>
              <Td>
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium">{employee.name}</Text>
                  <Text fontSize="sm" color="gray.600">{employee.role}</Text>
                </VStack>
              </Td>
              <Td>
                <VStack align="start" spacing={1} minW="150px">
                  <HStack justify="space-between" w="100%">
                    <Text fontSize="sm">
                      {employee.completedModules}/{employee.totalModules} modules
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">
                      {getProgressPercent(employee.completedModules, employee.totalModules)}%
                    </Text>
                  </HStack>
                  <Progress
                    value={getProgressPercent(employee.completedModules, employee.totalModules)}
                    size="sm"
                    width="100%"
                    colorScheme="blue"
                    borderRadius="full"
                  />
                </VStack>
              </Td>
              <Td>
                <Badge
                  colorScheme={getScoreColor(employee.score)}
                  fontSize="sm"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  {employee.score}%
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default EmployeeProgress;
