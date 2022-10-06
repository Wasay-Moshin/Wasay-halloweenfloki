import React from 'react'
// import Hero from '../Component/Elements/Hero'
import About from '../Component/Elements/About'
import Tokenomics from '../Component/Elements/Tokenomics'
import Document from '../Component/Elements/Document'
import FAQ from '../Component/Utils/FAQ'
function Home() {
  return (
    <div>
      {/* <Hero/> */}
      <About/>
      <Tokenomics/>
      <Document/>
      <FAQ/>
    </div>
  )
}

export default Home
