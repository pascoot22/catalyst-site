import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  header,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <div className={header}>
        
        <Link to="/">
        <img src="clark.jpeg" width="150" height="180"/>
        </Link>
        <nav>
          
          <Link to="/about">About</Link>
          <Link to="/curr">Current Edition</Link>
          <Link to="/prev">Previous Editions</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
      
    </div>
  )
}

export default Layout