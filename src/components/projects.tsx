import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "./projects.scss"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query Projects {
        allContentfulProjects {
          edges {
            node {
              title
              description {
                content {
                  content {
                    value
                  }
                }
              }
              image {
                resize(height: 100) {
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <section id="Projects" className="container mx-auto ">
      <h2 className="title text-white">Projects</h2>
      <h4>
        Labore quia molestiae incidunt id omnis. Quia officia modi officia
        eaque. Similique nemo ipsa quia est. Molestias molestiae quas commodi
        nulla et unde qui sit. Omnis ipsum ullam est et autem ea dicta excepturi
        inventore. Enim est sunt. Soluta voluptas iusto nihil temporibus aliquid
        recusandae quia sunt doloribus. Enim et aliquam beatae ut earum. Quis
        voluptatibus vel consequatur. Quisquam assumenda laborum vero
        praesentium hic ratione tenetur id aut. Quidem occaecati labore
        voluptatum officiis aperiam ea. Quis pariatur sed numquam maxime
        officiis sint. Qui et animi necessitatibus sint voluptate officiis.
        Soluta quis ut ut sed. Quis delectus dolor numquam. Aut in explicabo
        cupiditate.
      </h4>
      <div className="flex items-baseline justify-between">
        {data.allContentfulProjects.edges.map(item => (
          <div className="col-4 mt-10 min-w-1/4 p-4">
            <img
              src={item.node.image.resize.src}
              className="overlay-red"
              alt=""
            />
            <p>{item.node.description.content[0].content[0].value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
