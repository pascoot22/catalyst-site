import * as React from 'react'
import Layout from '../components/layout'
import EmailForm from '../components/emailform'

const About = () => {
  return (
    <Layout pageTitle="Contact Us">
      <EmailForm />
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default About