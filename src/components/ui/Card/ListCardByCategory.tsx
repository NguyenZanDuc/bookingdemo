import React from 'react'
import HotelCityCard from './HotelCityCard'
import NextButton from '../Button/NextButton'
import { type } from 'os'

type Props = {
    category: string,
    description: string,
    cards: HotelCity[]
}
type HotelCity ={
    image:string,
    title:string,
    details: string[]
}

const ListCardByCategory = ({category, description, cards}: Props) => {
  return (
    <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">{category}</p>
          <p className="text-base font-light text-gray-600">{description}</p>
          <div className="relative flex flex-col items-center justify-center gap-4 lg:flex-row">
            {cards&&cards.map((card, index)=>(
                    <HotelCityCard key={index} image={card.image} title={card.title} detail={card.details} />
            ))}
            <div className="absolute hidden -translate-x-4 left-full lg:block top-14">
              <NextButton/>
            </div>
          </div>
        </div>
  )
}

export default ListCardByCategory