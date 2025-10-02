import React, { useState } from 'react';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  HStack,
  useToast,
  Heading,
  SimpleGrid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

interface CampaignForm {
  name: string;
  description: string;
  template: string;
  targetGroups: string;
  scheduledDate: string;
  employeeCount: number;
}

const initialFormState: CampaignForm = {
  name: '',
  description: '',
  template: '',
  targetGroups: '',
  scheduledDate: '',
  employeeCount: 0,
};

const NewCampaignForm = () => {
  const [formData, setFormData] = useState<CampaignForm>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: 'Campaign Created',
        description: 'Your phishing simulation campaign has been scheduled.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      setFormData(initialFormState);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create campaign. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={6}>Create New Campaign</Heading>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl isRequired>
              <FormLabel>Campaign Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Q4 Security Awareness"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Template</FormLabel>
              <Select
                name="template"
                value={formData.template}
                onChange={handleChange}
                placeholder="Select template"
              >
                <option value="password-reset">Password Reset</option>
                <option value="invoice">Invoice Payment</option>
                <option value="office365">Office 365 Login</option>
                <option value="gdrive">Google Drive Share</option>
              </Select>
            </FormControl>
          </SimpleGrid>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Campaign description and goals"
              rows={3}
            />
          </FormControl>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl isRequired>
              <FormLabel>Target Groups</FormLabel>
              <Select
                name="targetGroups"
                value={formData.targetGroups}
                onChange={handleChange}
                placeholder="Select department"
              >
                <option value="all">All Employees</option>
                <option value="it">IT Department</option>
                <option value="hr">HR Department</option>
                <option value="finance">Finance Department</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Employee Count</FormLabel>
              <NumberInput
                min={1}
                value={formData.employeeCount}
                onChange={(_, value) => setFormData(prev => ({ ...prev, employeeCount: value }))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </SimpleGrid>

          <FormControl isRequired>
            <FormLabel>Scheduled Date</FormLabel>
            <Input
              name="scheduledDate"
              type="datetime-local"
              value={formData.scheduledDate}
              onChange={handleChange}
            />
          </FormControl>

          <HStack justify="flex-end" pt={4}>
            <Button variant="ghost">Cancel</Button>
            <Button
              colorScheme="blue"
              type="submit"
              isLoading={isLoading}
            >
              Create Campaign
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
};

export default NewCampaignForm;
