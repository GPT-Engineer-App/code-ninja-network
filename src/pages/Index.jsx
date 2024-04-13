import React, { useState } from "react";
import { Box, Container, Heading, Input, InputGroup, InputLeftElement, Stack, Tag, Text, VStack, SimpleGrid, AspectRatio, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaEnvelope, FaMapMarkerAlt, FaCode } from "react-icons/fa";

// Mock data for developers
const developersData = [
  {
    id: 1,
    name: "Alice Johnson",
    location: "San Francisco, CA",
    technologies: ["React", "Node.js", ".NET"],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwwfHx8fDE3MTMwNDY0MDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "Bob Smith",
    location: "Berlin, Germany",
    technologies: ["Go", "JavaScript"],
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwwfHx8fDE3MTMwNDY0MDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "Charlie Lee",
    location: "Toronto, Canada",
    technologies: ["React", "Node.js"],
    avatar: 'https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwwfHx8fDE3MTMwNDY0MDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  // ... more developers
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevelopers, setFilteredDevelopers] = useState(developersData);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term === "") {
      setFilteredDevelopers(developersData);
    } else {
      const filtered = developersData.filter((dev) => dev.technologies.join(" ").toLowerCase().includes(term.toLowerCase()));
      setFilteredDevelopers(filtered);
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Particles
        </Heading>
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
          The premier marketplace for software talent specialized in web technologies.
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input value={searchTerm} onChange={handleSearch} placeholder="Search technologies..." />
        </InputGroup>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredDevelopers.map((developer) => (
            <Box key={developer.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <AspectRatio ratio={1} mb={4}>
                <Image src={developer.avatar} alt={`${developer.name} avatar`} objectFit="cover" borderRadius="full" />
              </AspectRatio>
              <VStack align="start">
                <Heading as="h3" size="lg">
                  {developer.name}
                </Heading>
                <Stack isInline align="center">
                  <FaMapMarkerAlt />
                  <Text>{developer.location}</Text>
                </Stack>
                <Stack isInline align="center" wrap="wrap" spacing={1}>
                  <FaCode />
                  {developer.technologies.map((tech) => (
                    <Tag key={tech} size="sm" variant="subtle" colorScheme="cyan">
                      {tech}
                    </Tag>
                  ))}
                </Stack>
                <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="solid">
                  Send Message
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
