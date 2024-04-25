import * as React from 'react'
import Layout from '../components/layout'
import Summer2023 from "../images/Summer2023.pdf"

const Current = () => {
  return (
    <Layout pageTitle="Spring 2023">
      <div>
        <iframe src={Summer2023} title="PDF veiwer" width="100%" height="600px"/>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Current</title>

export default Current