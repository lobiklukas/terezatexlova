import React from "react"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page"
import Projects from "../components/projects"

import "./global.scss"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <LandingPage />
    <Projects />
  </Layout>
)

export default IndexPage
