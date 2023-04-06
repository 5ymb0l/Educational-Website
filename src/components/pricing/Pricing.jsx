import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <div>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </div>
  )
}

export default Pricing
