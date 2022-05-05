import React from 'react'
import Box from './Box'
import Box2 from './Box2'

const Faqs = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
<p className="heading">FAQs</p>
<div>
<Box/>
<Box long/>
<Box/>

</div>
<p className="heading">HAVE A READ</p>
<Box2 title="The right quality"/>
<Box2 title="The right time"/>
<Box2 title="The basis of a balanced diet"/>
   
    <p className="heading">TOPICS YOU CAN'T MISS</p>
    <Box2 title="TOPICS YOU CAN'T MISS" img/>
    <Box2 title="HOW TO CLEAN/CUT YOUR SEAFOOD" img/>
    </div>
  )
}

export default Faqs