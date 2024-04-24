import * as React from 'react'
import Layout from '../components/layout'
import PdfViewerWithButtons from '../components/pdfveiw'

const About = () => {
  const pdfs = [
    { url: '../../../public/summer18.png' },
    { url: '../../../public/winter18.png' },
    
  ];

  return (
    <Layout pageTitle="Previou Editions">
      
      <PdfViewerWithButtons pdfs={pdfs} />
    

    </Layout>
  )
}

export const Head = () => <title>Previous Editions</title>

export default About