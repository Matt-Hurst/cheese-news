import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ( {data}) => {
    console.log(data)
    return (
    <Layout>
        <h1>{data.site.siteMetadata.title} Brietiful Cheese Blog</h1>
        <img 
            src="https://www.pongcheese.co.uk/wp-content/uploads/2010/03/Classic-Tasting-Box_1280x800.jpg"
            alt="Collection of cheese"
        />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} css={css` margin-bottom: 1.5rem;` }>
                <Link 
                    to={node.fields.slug}
                    css={css` text-decoration: none;`}
                >
                    <h3>{node.frontmatter.title}{""}
                        <span css={css` color: #d9cece`}> - <i>{node.frontmatter.date}</i></span>
                    </h3>
                    <p>{node.excerpt}</p>
                </Link>
            </div>
        ))}
    </Layout>
)
}

export const query = graphql`
    query {
        allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
            totalCount
            edges {
              node {
                frontmatter {
                  date(formatString: "DD MMMM, YYYY")
                  title
                }
                fields {
                    slug
                  }
                excerpt
                id
              }
            }
          }
          site {
            siteMetadata {
              title
            }
          }
        }
`
