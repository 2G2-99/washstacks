import { Heading, Text, useBreakpointValue } from "@chakra-ui/react";

export default function HeroHeading() {
  return (
    <Heading
      as={"h1"}
      mb={"1rem"}
      color={"white"}
      lineHeight={1}
      letterSpacing={"wider"}
      fontSize={useBreakpointValue({
        base: "2.625rem",
        sm: "3.5rem",
        md: "3.25rem",
        lg: "3.75rem",
      })}
    >
      Laundry & dry cleaning with 24h delivery in
      <Text h={"2em"} color={"yellow.100"}>
        London
      </Text>
    </Heading>
  );
}
