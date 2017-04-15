import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import SocialLinks from './components/socialLinks'
import styles from './styles/App.css'

const App = () =>
  <div className={styles.app}>
    <Header />
    <SocialLinks />
    <Footer />
  </div>

export default App
