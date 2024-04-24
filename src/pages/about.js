import * as React from 'react'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout pageTitle="About">
      <p><i>The Catalyst</i> is published once each semester, and is open for the submission of abstracts from any student conducting research related to bioengineering and biotechnology. Sources of student research articles can come from a research experience at faculty-run lab on campus, honors program or thesis, and/or internship. 
 
        The journal’s main goals are the following:
  
      <li>Galvanize interest and spur involvement in undergraduate research for students whom are not currently involved in research. </li>
      <li> Create a medium for current undergraduate researchers to publish their findings.</li>
      <li>Develop a more connected community of researchers and students on campus.</li>
      <li>Allow undergraduate researchers to expand their research experience and influence with The Catalyst’s social impact section and interview sections.</li>
      </p>
      <p><i>The Catalyst</i> team is also looking for pictures/imaging and videos taken by students during their research work. Pictures and videos will be included as highlights throughout future editions. Every photo and video included will have text with quick information about the research being done and credit to the student, PI, and lab. Please contact us if interested!</p>

    </Layout>
  )
}

export const Head = () => <title>About</title>

export default About