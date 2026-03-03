"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox, fadeInUp, fadeInLeft, staggerContainer } from "./MotionBox";
import { User, Briefcase, Coffee, Award } from "lucide-react";

const STATS = [
  { icon: <Briefcase size={20} />, value: 10, suffix: "+", label: "Projects Delivered" },
  { icon: <Coffee size={20} />, value: 2, suffix: ".5+", label: "Years Experience" },
  { icon: <Award size={20} />, value: 20, suffix: "+", label: "Technologies" },
  { icon: <User size={20} />, value: 100, suffix: "K+", label: "Users Impacted" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            start = Math.floor(eased * value);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <Box
      ref={ref}
      fontSize={{ base: "3xl", md: "4xl" }}
      fontWeight="800"
      className="gradient-text"
      fontFamily="'Space Grotesk', sans-serif"
    >
      {count}{suffix}
    </Box>
  );
}

export default function About() {
  return (
    <Box
      as="section"
      id="about"
      py={{ base: "14", md: "20" }}
      px={{ base: "4", md: "8" }}
      position="relative"
    >
      {/* Subtle bg glow */}
      <Box
        position="absolute"
        top="20%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Box maxW="1100px" mx="auto">
        {/* Section Header */}
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
            color="#6366f1"
            mb="3"
          >
            About Me
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            color="white"
            fontFamily="'Space Grotesk', sans-serif"
          >
            Turning ideas into{" "}
            <Text as="span" className="gradient-text-teal">
              digital reality
            </Text>
          </Text>
        </MotionBox>

        {/* Content */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "10", lg: "16" }}
          align="start"
        >
          {/* Left – Bio */}
          <MotionBox
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            flex="1"
          >
            <Box
              p={{ base: "6", md: "8" }}
              borderRadius="2xl"
              className="glass"
              position="relative"
            >
              <Box
                position="absolute"
                top="-1px"
                left="20%"
                right="20%"
                h="1px"
                bg="linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)"
              />
              <Flex direction="column" gap="4">
                <Flex align="center" gap="3">
                  <Flex
                    align="center"
                    justify="center"
                    w="10"
                    h="10"
                    borderRadius="xl"
                    bg="rgba(99,102,241,0.1)"
                    color="#818cf8"
                  >
                    <User size={20} />
                  </Flex>
                  <Text fontWeight="700" fontSize="lg" color="white">
                    Who I Am
                  </Text>
                </Flex>
                <Text
                  color="rgba(255,255,255,0.5)"
                  lineHeight="1.9"
                  fontSize="sm"
                >
                  Frontend Engineer with 3+ years architecting
                  high-scale React.js, Next.js, and TypeScript applications for
                  CRM and Hospitality Tech domains. Proven track record of
                  delivering measurable outcomes: 40% faster page loads, 35% SEO
                  improvement, and 25% boost in user retention. 
                </Text>
                <Text
                  color="rgba(255,255,255,0.5)"
                  lineHeight="1.9"
                  fontSize="sm"
                >
                  Expert in browser rendering optimization, Core Web Vitals,
                  CI/CD pipelines, and cross-functional Agile delivery.
                  Passionate about building performant, accessible, and
                  beautiful web applications that scale.
                </Text>
              </Flex>
            </Box>
          </MotionBox>

          {/* Right – Stats */}
          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            flex="1"
          >
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap="4">
              {STATS.map((stat, i) => (
                <MotionBox key={stat.label} variants={fadeInUp}>
                  <Box
                    p={{ base: "5", md: "6" }}
                    borderRadius="2xl"
                    className="glass"
                    textAlign="center"
                    transition="all 0.3s"
                    _hover={{
                      bg: "rgba(255,255,255,0.06)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 40px rgba(99,102,241,0.1)",
                    }}
                    cursor="default"
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      top="-1px"
                      left="30%"
                      right="30%"
                      h="1px"
                      bg="linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)"
                    />
                    <Flex direction="column" align="center" gap="2">
                      <Flex
                        align="center"
                        justify="center"
                        w="10"
                        h="10"
                        borderRadius="xl"
                        bg="rgba(99,102,241,0.1)"
                        color="#818cf8"
                        mb="1"
                      >
                        {stat.icon}
                      </Flex>
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                      <Text
                        fontSize="xs"
                        color="rgba(255,255,255,0.4)"
                        fontWeight="500"
                      >
                        {stat.label}
                      </Text>
                    </Flex>
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  );
}
