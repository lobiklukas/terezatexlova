import React from "react"
import About from "../components/about"
import Layout from "../components/layout"
import Projects from "../components/projects"
import "./global.scss"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
