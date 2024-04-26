import * as React from 'react'
import Layout from '../components/layout'
import PdfViewerWithButtons from '../components/pdfveiw'
import Issue8 from "../images/Issue 8.pdf"
import Issue9 from "../images/Issue 9.pdf"

const About = () => {
  const pdfs = [
    { url: Issue8 },
    { url: Issue9 },
    
  ];

  return (
    <Layout pageTitle="Previou Editions">
      
      <PdfViewerWithButtons pdfs={pdfs} />
    

    </Layout>
  )
}

export const Head = () => <title>Previous Editions</title>

export default About