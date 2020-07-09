import React from "react"
import { Flex, Box, Image, Text, Stack, Link } from "@chakra-ui/core"
import { LinkProps } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"

const SimpleCard = ({ cover, title, description, date }) => (
  <Flex align={{ md: "center" }} flexDir={"column"}>
    <Box flex="3 1" mb="1rem" shadow="md">
      <Image
        h="200px"
        rounded="md"
        src={cover}
        alt="imagem da postagem"
        objectFit="cover"
      />
    </Box>
    <Stack flex="1 0">
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="lg" color="gray.600">
        {description}
      </Text>
      <Text float="right" fontSize="sm">
        {date}
      </Text>
    </Stack>
  </Flex>
)

const FeaturedCard = ({ cover, title, description, date }) => (
  <Flex align={{ md: "center" }} flexDir={{ base: "column", md: "row" }}>
    <Box flex="3 1" m={{ base: "0 0 1rem 0", md: "0 1rem 0 0" }} shadow="md">
      <Image
        h="300px"
        rounded="md"
        src={cover}
        alt="imagem da postagem"
        objectFit="cover"
      />
    </Box>
    <Stack flex="1 0">
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
        {description}
      </Text>
      <Text float="right" fontSize="sm">
        {date}
      </Text>
    </Stack>
  </Flex>
)

/** @param {LinkProps} linkProps */
const PostCard = ({ slug, frontmatter, isFeaturedPost, ...linkProps }) => {
  frontmatter.cover = frontmatter.cover ?? "/assets/default_cover.png"

  return (
    <Link
      as={GatsbyLink}
      to={slug}
      p={4}
      rounded="lg"
      _hover={{
        textDecoration: "none",
        backgroundColor: "gray.100",
      }}
      {...linkProps}
    >
      {isFeaturedPost && <FeaturedCard {...frontmatter} />}
      {!isFeaturedPost && <SimpleCard {...frontmatter} />}
    </Link>
  )
}

export default PostCard
