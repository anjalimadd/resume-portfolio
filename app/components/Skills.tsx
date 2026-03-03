"use client";

import { useRef, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp, staggerContainer } from "./MotionBox";
import {
  Code2, Database, Globe, Palette, Server,
  Terminal, GitBranch, Cloud, Layers, Cpu,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Globe size={20} />,
    color: "#6366f1",
    skills: [
      { name: "React.js / Next.js", level: 95, icon: <Code2 size={16} /> },
      { name: "TypeScript / JavaScript", level: 92, icon: <Terminal size={16} /> },
      { name: "Tailwind CSS / Chakra UI", level: 90, icon: <Palette size={16} /> },
      { name: "HTML5 / CSS3 / WCAG", level: 93, icon: <Layers size={16} /> },
    ],
  },
  {
    title: "State & Data",
    icon: <Server size={20} />,
    color: "#2dd4bf",
    skills: [
      { name: "Redux Toolkit / Hooks", level: 90, icon: <Server size={16} /> },
      { name: "React Query / REST APIs", level: 88, icon: <Database size={16} /> },
      { name: "GraphQL / Apollo", level: 80, icon: <Layers size={16} /> },
      { name: "OAuth2 / Auth", level: 82, icon: <Terminal size={16} /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Cloud size={20} />,
    color: "#f59e0b",
    skills: [
      { name: "Jest / Cypress / RTL", level: 85, icon: <Cpu size={16} /> },
      { name: "Docker / Jenkins / GH Actions", level: 82, icon: <GitBranch size={16} /> },
      { name: "AWS Lambda / S3 / EC2", level: 80, icon: <Cloud size={16} /> },
      { name: "Webpack / Vite / Lighthouse", level: 88, icon: <Terminal size={16} /> },
    ],
  },
];

function AnimatedBar({ level, color }: { level: number; color: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <Box
      ref={barRef}
      w="full"
      h="4px"
      bg="rgba(255,255,255,0.06)"
      borderRadius="full"
      overflow="hidden"
    >
      <Box
        h="full"
        borderRadius="full"
        bg={`linear-gradient(90deg, ${color}, ${color}88)`}
        w={`${width}%`}
        transition="width 1.2s cubic-bezier(0.22,1,0.36,1)"
        position="relative"
      >
        <Box
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          w="8px"
          h="8px"
          borderRadius="full"
          bg={color}
          boxShadow={`0 0 10px ${color}80`}
          opacity={width > 0 ? 1 : 0}
          transition="opacity 0.3s 1s"
        />
      </Box>
    </Box>
  );
}

export default function Skills() {
  return (
    <Box
      as="section"
      id="skills"
      py={{ base: "14", md: "20" }}
      px={{ base: "4", md: "8" }}
      position="relative"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        bottom="10%"
        right="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Box maxW="1100px" mx="auto">
        {/* Header */}
        <MotionBox
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          textAlign="center"
          mb={{ base: "8", md: "12" }}
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#2dd4bf"
            mb="3"
          >
            My Skills
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Technologies I{" "}
            <Text as="span" className="gradient-text">
              work with
            </Text>
          </Text>
        </MotionBox>

        {/* Category Cards */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="6"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <MotionBox key={cat.title} variants={fadeInUp}>
              <Box
                p={{ base: "6", md: "7" }}
                borderRadius="2xl"
                className="glass"
                h="full"
                transition="all 0.4s cubic-bezier(0.22,1,0.36,1)"
                _hover={{
                  bg: "rgba(255,255,255,0.06)",
                  transform: "translateY(-6px)",
                  boxShadow: `0 20px 60px ${cat.color}15`,
                }}
                cursor="default"
                position="relative"
                overflow="hidden"
              >
                {/* Top gradient bar */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  h="2px"
                  bg={`linear-gradient(90deg, transparent, ${cat.color}, transparent)`}
                  opacity="0.5"
                />

                {/* Category header */}
                <Flex align="center" gap="3" mb="6">
                  <Flex
                    align="center"
                    justify="center"
                    w="10"
                    h="10"
                    borderRadius="xl"
                    bg={`${cat.color}18`}
                    color={cat.color}
                  >
                    {cat.icon}
                  </Flex>
                  <Text fontWeight="700" fontSize="lg" color="white">
                    {cat.title}
                  </Text>
                </Flex>

                {/* Skills list */}
                <Flex direction="column" gap="5">
                  {cat.skills.map((skill) => (
                    <Box key={skill.name}>
                      <Flex justify="space-between" align="center" mb="2">
                        <Flex align="center" gap="2">
                          <Box color={`${cat.color}99`}>{skill.icon}</Box>
                          <Text fontSize="sm" fontWeight="500" color="rgba(255,255,255,0.7)">
                            {skill.name}
                          </Text>
                        </Flex>
                        <Text fontSize="xs" fontWeight="600" color={cat.color}>
                          {skill.level}%
                        </Text>
                      </Flex>
                      <AnimatedBar level={skill.level} color={cat.color} />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}
