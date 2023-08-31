import React from 'react'
import { Dna } from 'react-loader-spinner'
import './Loader.css'

export const Loader = () => {
  return (

      <Dna
        visible={true}
        height="500"
        width="250"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    
    

    
  )
}
