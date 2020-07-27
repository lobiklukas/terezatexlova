import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageWaves from "./image-waves"
import ImageCuriosity from "./image-curiosity"
import SEO from "./seo"

const LandingPage = () => (
  <div className="banner-hero items-center flex">
    <SEO title="Home" />
    <div className="pattern">
      <ImageWaves />
    </div>
    <div className="container mx-auto">
      <div className="flex flex-row items-center align-middle">
        <div className="w-1/2">
          <h1 className="title inversed-color">
            Lover of technology,
            <br />
            <span>startups & marketing</span>
          </h1>
          <p className="descr inversed-color">
            Marketer with international experience from Denmark to Prague & with
            a passion for SaaS startups. <br /> Most of my experience is tight
            to top funnel marketing primarily in B2B design/development
            industry.
            <br /> You can find me finding balance on a yoga mat or practising
            martial arts.
          </p>
        </div>
        <div className="w-1/2">
          <ImageCuriosity />
        </div>
      </div>
    </div>
  </div>
)

LandingPage.propTypes = {
  siteTitle: PropTypes.string,
}

LandingPage.defaultProps = {
  siteTitle: ``,
}

export default LandingPage
