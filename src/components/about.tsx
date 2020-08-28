import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import ImageWaves from "./image-waves"
import SEO from "./seo"

const About = () => {
  const data = useStaticQuery(
    graphql`
      query LandingPage {
        allContentfulLandingPage {
          edges {
            node {
              tittle
              redTittle
              description {
                content {
                  content {
                    value
                  }
                }
              }
              image {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(JSON.stringify(data, null, 2))
  return (
    <div id="About" className="banner-hero items-center flex">
      <SEO title="Home" />
      <div className="pattern">
        <ImageWaves />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row items-center align-middle">
          {data.allContentfulLandingPage.edges.map(edge => (
            <>
              <div className="w-1/2">
                <h1 className="title inversed-color">
                  {edge.node.tittle}
                  <br />
                  <span>{edge.node.redTittle}</span>
                </h1>
                <p className="descr inversed-color">
                  {edge.node.description.content[0].content[0].value}
                </p>
              </div>
              {edge.node.image && (
                <div className="w-1/2">
                  <Img
                    className="featured"
                    fluid={edge.node.image.fluid}
                    alt={edge.node.title}
                  />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
