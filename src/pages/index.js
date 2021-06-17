import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stock from "../components/Stock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
    <Stock heading='Pets'/>
  </Layout>
)

export default IndexPage
