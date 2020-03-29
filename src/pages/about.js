import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
    <Layout>
        <h1>About: {data.site.siteMetadata.title} Cheese Exploration</h1>
        <p1>Cheese News is the only dedicated blog site on the internet that solely delivers cheesetastic updates on {data.site.siteMetadata.title} cheese eating adventures!</p1> 
    </Layout>
)

export const query = graphql`
  query {
    site {
        siteMetadata {
          title
        }
      }
    }
`