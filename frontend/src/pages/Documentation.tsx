import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
  Code,
  Divider,
  useColorModeValue,
  Link,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Documentation: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const Section: React.FC<{ title: string; id: string; children: React.ReactNode }> = ({ title, id, children }) => (
    <Box as="section" mb={8} id={id}>
      <Heading as="h2" size="lg" mb={4} color={useColorModeValue('blue.600', 'blue.300')}>
        {title}
      </Heading>
      {children}
    </Box>
  );

  const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <Box mb={6}>
      <Heading as="h3" size="md" mb={3} color={useColorModeValue('gray.700', 'gray.300')}>
        {title}
      </Heading>
      {children}
    </Box>
  );

  const CodeBlock: React.FC<{ children: string }> = ({ children }) => (
    <Box
      as="pre"
      p={4}
      mb={4}
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="md"
      overflow="auto"
      whiteSpace="pre"
      fontSize="sm"
    >
      <Code>{children}</Code>
    </Box>
  );

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh" py={8}>
      <Container maxW="container.xl">
        {/* Navigation Bar */}
        <Flex justify="space-between" mb={8}>
          <Button as={RouterLink} to="/" colorScheme="blue" variant="outline">
            Back to Dashboard
          </Button>
        </Flex>

        {/* Documentation Title */}
        <Heading as="h1" size="2xl" mb={8} textAlign="center" color={useColorModeValue('blue.700', 'blue.300')}>
          ThreatIntel AI Platform Documentation
        </Heading>

        {/* Table of Contents */}
        <Box mb={12} p={6} bg={bgColor} borderRadius="lg" boxShadow="base" border="1px" borderColor={borderColor}>
          <Heading as="h2" size="lg" mb={4}>
            Table of Contents
          </Heading>
          <UnorderedList spacing={2}>
            <ListItem><Link href="#project-overview">Project Overview</Link></ListItem>
            <ListItem><Link href="#system-architecture">System Architecture</Link></ListItem>
            <ListItem><Link href="#features">Features</Link></ListItem>
            <ListItem><Link href="#technical-stack">Technical Stack</Link></ListItem>
            <ListItem><Link href="#setup-guide">Setup Guide</Link></ListItem>
            <ListItem><Link href="#component-documentation">Component Documentation</Link></ListItem>
            <ListItem><Link href="#api-documentation">API Documentation</Link></ListItem>
            <ListItem><Link href="#security-features">Security Features</Link></ListItem>
          </UnorderedList>
        </Box>

        {/* Main Content */}
        <VStack spacing={8} align="stretch">
          <Section title="Project Overview" id="project-overview">
            <Text>
              ThreatIntel AI is a comprehensive cybersecurity threat intelligence platform that combines 
              advanced AI capabilities with real-time monitoring and threat detection. The platform provides 
              security professionals with actionable insights and automated responses to potential security threats.
            </Text>

            <SubSection title="Key Objectives">
              <UnorderedList spacing={2}>
                <ListItem>Real-time threat detection and monitoring</ListItem>
                <ListItem>AI-powered security analysis</ListItem>
                <ListItem>Automated incident response</ListItem>
                <ListItem>User-friendly security dashboard</ListItem>
                <ListItem>Comprehensive reporting and analytics</ListItem>
              </UnorderedList>
            </SubSection>
          </Section>

          <Section title="System Architecture" id="system-architecture">
            <SubSection title="1. Frontend (React + TypeScript)">
              <UnorderedList spacing={2}>
                <ListItem>Modern UI with Chakra UI components</ListItem>
                <ListItem>Real-time data visualization</ListItem>
                <ListItem>Responsive dashboard</ListItem>
                <ListItem>Secure authentication system</ListItem>
              </UnorderedList>
            </SubSection>

            <SubSection title="2. Backend (FastAPI + Python)">
              <UnorderedList spacing={2}>
                <ListItem>RESTful API services</ListItem>
                <ListItem>MongoDB database integration</ListItem>
                <ListItem>Real-time data processing</ListItem>
                <ListItem>Authentication and authorization</ListItem>
              </UnorderedList>
            </SubSection>

            <SubSection title="3. ML Component">
              <UnorderedList spacing={2}>
                <ListItem>Threat detection models</ListItem>
                <ListItem>Pattern recognition</ListItem>
                <ListItem>Anomaly detection</ListItem>
                <ListItem>Predictive analytics</ListItem>
              </UnorderedList>
            </SubSection>
          </Section>

          <Section title="Features" id="features">
            <SubSection title="1. Security Dashboard">
              <UnorderedList spacing={2}>
                <ListItem>Real-time threat monitoring</ListItem>
                <ListItem>Security score tracking</ListItem>
                <ListItem>System health metrics</ListItem>
                <ListItem>Activity logs</ListItem>
                <ListItem>Resource usage statistics</ListItem>
              </UnorderedList>
            </SubSection>

            <SubSection title="2. Threat Detection">
              <UnorderedList spacing={2}>
                <ListItem>Real-time threat identification</ListItem>
                <ListItem>Vulnerability assessment</ListItem>
                <ListItem>Risk scoring</ListItem>
                <ListItem>Automated alerts</ListItem>
                <ListItem>Threat categorization</ListItem>
              </UnorderedList>
            </SubSection>
          </Section>

          <Section title="Technical Stack" id="technical-stack">
            <SubSection title="Frontend">
              <UnorderedList spacing={2}>
                <ListItem><strong>Framework:</strong> React 18 with TypeScript</ListItem>
                <ListItem><strong>UI Library:</strong> Chakra UI</ListItem>
                <ListItem><strong>State Management:</strong> Context API</ListItem>
                <ListItem><strong>Data Visualization:</strong> Chart.js</ListItem>
                <ListItem><strong>HTTP Client:</strong> Axios</ListItem>
              </UnorderedList>
            </SubSection>

            <SubSection title="Backend">
              <UnorderedList spacing={2}>
                <ListItem><strong>Framework:</strong> FastAPI</ListItem>
                <ListItem><strong>Database:</strong> MongoDB</ListItem>
                <ListItem><strong>Authentication:</strong> JWT</ListItem>
                <ListItem><strong>Password Hashing:</strong> Bcrypt</ListItem>
                <ListItem><strong>Async Support:</strong> Motor</ListItem>
              </UnorderedList>
            </SubSection>
          </Section>

          <Section title="Setup Guide" id="setup-guide">
            <SubSection title="Prerequisites">
              <UnorderedList spacing={2}>
                <ListItem>Node.js 16+</ListItem>
                <ListItem>Python 3.9+</ListItem>
                <ListItem>MongoDB 5.0+</ListItem>
                <ListItem>Docker (optional)</ListItem>
              </UnorderedList>
            </SubSection>

            <SubSection title="Frontend Setup">
              <CodeBlock>{`# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev`}</CodeBlock>
            </SubSection>

            <SubSection title="Backend Setup">
              <CodeBlock>{`# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/Mac
.\\venv\\Scripts\\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Start backend server
uvicorn app.main:app --reload`}</CodeBlock>
            </SubSection>
          </Section>

          <Section title="API Documentation" id="api-documentation">
            <SubSection title="Authentication Endpoints">
              <Text mb={2}>POST /api/auth/login</Text>
              <CodeBlock>{`Request:
{
    "email": "string",
    "password": "string"
}

Response:
{
    "access_token": "string",
    "token_type": "bearer"
}`}</CodeBlock>
            </SubSection>
          </Section>

          <Section title="Security Features" id="security-features">
            <SubSection title="Authentication Security">
              <UnorderedList spacing={2}>
                <ListItem>JWT-based authentication</ListItem>
                <ListItem>Bcrypt password hashing</ListItem>
                <ListItem>Secure session management</ListItem>
                <ListItem>RBAC implementation</ListItem>
              </UnorderedList>
            </SubSection>

            <SubSection title="Data Security">
              <UnorderedList spacing={2}>
                <ListItem>HTTPS/TLS encryption</ListItem>
                <ListItem>Database encryption</ListItem>
                <ListItem>Input validation</ListItem>
                <ListItem>XSS protection</ListItem>
                <ListItem>CSRF protection</ListItem>
              </UnorderedList>
            </SubSection>
          </Section>
        </VStack>
      </Container>
    </Box>
  );
};

export default Documentation;
