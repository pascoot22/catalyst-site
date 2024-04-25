import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="background-image" />
      <StaticImage
        alt="Catalyst logo"
        src='../images/clark.jpeg'
        />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage