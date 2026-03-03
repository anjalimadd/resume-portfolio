"use client";

import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp, staggerContainer } from "./MotionBox";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

const EXPERIENCES = [
  {
    company: "SoftSync.ai",
    role: "Frontend Engineer",
    period: "Oct 2025 — Present",
    location: "Remote",
    color: "#6366f1",
    description:
      "Leading frontend development of multi-workspace CRM & Productivity PWA architecture",
    highlights: [
      "Architected a multi-workspace CRM and Productivity PWA with Next.js 15, React 19, and TypeScript, streamlining a GraphQL data layer that accelerated feature release cadence by 30% across all active workspaces.",
      "Built virtualized Kanban boards and data tables handling 10,000+ records using TanStack Table and TanStack Virtual, implemented batch  ed GraphQL with optimistic UI updates, cutting API calls by 35% and boosting perceived interaction speed by 40%.",
      "Replaced REST polling with GraphQL subscriptions (graphql-ws) across messaging, workspace events, and notification systems, eliminating redundant polling calls per session and reducing real-time event latency by 50%.",
      "Built WhatsApp messaging and Notes modules with Lexical editor, media handling, read receipts, and emoji reactions, increasing user engagement by 25%",
    ],
  },
  {
    company: "Accenture",
    role: "Frontend Developer",
    period: "Oct 2024 — Oct 2025",
    location: "Gurugram, India",
    color: "#2dd4bf",
    description:
      "Built high-traffic hotel management dashboard with SSR optimizations.",
    highlights: [
      "Led CSR-to-SSR migration of core hotel admin modules in Next.js, implementing server-side caching and next/image optimization that reduced initial page load time by 20% and improved Lighthouse performance scores",
      "Optimized Redux Toolkit state management for high-frequency data flows in booking and inventory modules, reducing data-fetch latency by 25% and improving dashboard responsiveness under concurrent user load",
      "Applied route-level code splitting, dynamic imports, and asset compression across the hotel management dashboard, shrinking JavaScript bundle size by 35% and sustaining 30% faster response times under peak traffic of concurrent users",
    ],
  },
  {
    company: "CS Mock",
    role: "Frontend Developer",
    period: "Sept 2023 — Oct 2024",
    location: "Noida, India",
    color: "#f59e0b",
    description:
      "Optimized ed-tech platform performance and scalable state architecture.",
    highlights: [
      "Architected centralized Redux state management integrating RESTful API endpoints, enabling real-time data-driven UI updates and cutting average data-fetch latency by 30%",
      "Diagnosed rendering bottlenecks using React Profiler and Chrome DevTools; restructured component tree with memoization, dynamic imports, and minification to reduce JavaScript bundle size by 40% and improve Time-to-Interactive by seconds",
      "Built an automated asset optimization pipeline with WebP image conversion and intersection-observer lazy loading, lifting mobile Lighthouse Performance scores by 25 points across key device profiles",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Box
      as="section"
      id="experience"
      py={{ base: "14", md: "20" }}
      px={{ base: "4", md: "8" }}
      position="relative"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        top="40%"
        right="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Box maxW="900px" mx="auto">
        {/* Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          textAlign="center"
          mb={{ base: "12", md: "16" }}
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#f59e0b"
            mb="3"
          >
            Experience
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            My Professional{" "}
            <Text as="span" className="gradient-text">
              Journey
            </Text>
          </Text>
        </MotionBox>

        {/* Timeline */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          position="relative"
        >
          {/* Vertical Line */}
          <Box
            position="absolute"
            left={{ base: "20px", md: "30px" }}
            top="0"
            bottom="0"
            w="2px"
            bg="linear-gradient(180deg, rgba(99,102,241,0.3), rgba(45,212,191,0.3), rgba(245,158,11,0.3))"
          />

          <Flex direction="column" gap="6">
            {EXPERIENCES.map((exp, i) => (
              <MotionBox key={exp.company} variants={fadeInUp}>
                <Box
                  position="relative"
                  pl={{ base: "14", md: "20" }}
                >
                  {/* Timeline dot */}
                  <Box
                    position="absolute"
                    left={{ base: "12px", md: "22px" }}
                    top="28px"
                    w="18px"
                    h="18px"
                    borderRadius="full"
                    bg={exp.color}
                    boxShadow={`0 0 20px ${exp.color}40`}
                    border="3px solid #0a0a0f"
                    zIndex="1"
                  />

                  {/* Card */}
                  <Box
                    p={{ base: "5", md: "6" }}
                    borderRadius="2xl"
                    className="glass"
                    transition="all 0.3s"
                    _hover={{
                      bg: "rgba(255,255,255,0.05)",
                    }}
                    cursor="pointer"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Top accent */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="3px"
                      h={expanded === i ? "100%" : "0%"}
                      bg={exp.color}
                      transition="height 0.4s cubic-bezier(0.22,1,0.36,1)"
                      borderRadius="full"
                    />

                    {/* Header */}
                    <Flex justify="space-between" align="start" mb="2">
                      <Box>
                        <Text fontWeight="700" fontSize="md" color="white" mb="1">
                          {exp.role}
                        </Text>
                        <Flex align="center" gap="4" flexWrap="wrap">
                          <Flex align="center" gap="1.5">
                            <Briefcase size={13} color={exp.color} />
                            <Text fontSize="sm" color={exp.color} fontWeight="600">
                              {exp.company}
                            </Text>
                          </Flex>
                          <Flex align="center" gap="1.5">
                            <Calendar size={13} color="rgba(255,255,255,0.35)" />
                            <Text fontSize="xs" color="rgba(255,255,255,0.35)">
                              {exp.period}
                            </Text>
                          </Flex>
                          <Flex align="center" gap="1.5">
                            <MapPin size={13} color="rgba(255,255,255,0.35)" />
                            <Text fontSize="xs" color="rgba(255,255,255,0.35)">
                              {exp.location}
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box
                        transition="transform 0.3s"
                        transform={expanded === i ? "rotate(180deg)" : "rotate(0deg)"}
                        color="rgba(255,255,255,0.3)"
                        mt="1"
                        flexShrink="0"
                      >
                        <ChevronDown size={18} />
                      </Box>
                    </Flex>

                    <Text fontSize="sm" color="rgba(255,255,255,0.4)" mt="2" lineHeight="1.7">
                      {exp.description}
                    </Text>

                    {/* Expanded Details */}
                    <Box
                      maxH={expanded === i ? "300px" : "0px"}
                      overflow="hidden"
                      transition="all 0.4s cubic-bezier(0.22,1,0.36,1)"
                      mt={expanded === i ? "4" : "0"}
                      opacity={expanded === i ? 1 : 0}
                    >
                      <Box
                        borderTop="1px solid rgba(255,255,255,0.06)"
                        pt="4"
                      >
                        <Flex direction="column" gap="2.5">
                          {exp.highlights.map((h, j) => (
                            <Flex key={j} align="start" gap="3">
                              <Box
                                w="5px"
                                h="5px"
                                borderRadius="full"
                                bg={exp.color}
                                mt="2"
                                flexShrink="0"
                                opacity="0.6"
                              />
                              <Text fontSize="sm" color="rgba(255,255,255,0.5)" lineHeight="1.7">
                                {h}
                              </Text>
                            </Flex>
                          ))}
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Flex>
        </MotionBox>
      </Box>
    </Box>
  );
}
