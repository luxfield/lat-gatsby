import React from "react"
import { Layout, Layout2 }from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <>
    <Layout>
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people <s>like</s> hate me!
      </p>
    <hr style={{border: `1px solid black`}}/>
    </Layout>
    <Layout2>
    <h1>About {data.site.siteMetadata.title}</h1>
      <h1>About Pandas Eating Lots</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout2>
  </>)
}
export const query = graphql
` query {
    site {
      siteMetadata {
        title
      }
    }
  }
`