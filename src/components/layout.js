import "../styles/reset.css"
import "../styles/global.css"
import React from "react"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/core"

const Header = ({ children }) => (
  <Box
    as="header"
    bg="blue.600"
    color="white"
    fontSize="4xl"
    fontWeight="bold"
    mb={12}
    px={20}
    py={4}
  >
    {children}
  </Box>
)

const PageWrapper = styled(Box)`
  margin: auto;
  max-width: 63rem;
  padding: 2rem;
`

const Footer = styled.div`
  background-color: var(--light-gray);
  padding: 1rem 5rem;
  > small {
    display: block;
    font-size: var(--text-sm);
  }
`

const Layout = ({ title, children }) => {
  return (
    <>
      <Header>{title}</Header>
      <PageWrapper color="gray.800">
        <main>{children}</main>
      </PageWrapper>
      <Footer>
        <small>
          © {new Date().getFullYear()} {title},
        </small>
        <small>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and based on{" "}
          <a href="https://blog.elementary.io">Elementary Blog</a>
        </small>
      </Footer>
    </>
  )
}

export default Layout
