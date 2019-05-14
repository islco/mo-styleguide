import React from "react"

import Layout from "../utils/components/Layout"
import SEO from "../utils/components/Seo"
import { SectionLinkContainer, SectionLink } from "../components/SectionLink"

const IndexPage = () => (
  <Layout isIndex>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionLinkContainer>
      <SectionLink pageUrl="/" imgsrc="gatsby-astronaut.png">
        Test
      </SectionLink>
      <SectionLink pageUrl="/">Test</SectionLink>
      <SectionLink pageUrl="/">Test</SectionLink>
      <SectionLink pageUrl="/">Test</SectionLink>
      <SectionLink pageUrl="/">Test</SectionLink>
      <SectionLink pageUrl="/">Test</SectionLink>
    </SectionLinkContainer>
  </Layout>
)

export default IndexPage
