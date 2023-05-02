import React from 'react'
import FormInput from '../ui/FormInput/FormInput'
import AroundHotelInput from './AroundHotelInput/AroundHotelInput'
import useAroundHotel from '@/hooks/useAroundHotel'

type Props = {}

const FormF = (props: Props) => {
  const {aroundHotel, setAirportHotel, setAroundHotel, setBeachesInTheAreaHotel, setCoffeeAndRestaurentHotel, setNaturalBeautyHotel, setPublicTranportHotel, setVisitLocationHotel} = useAroundHotel();
  return (
    <FormInput >
        <p className="text-xl font-semibold">Xung quanh khách sạn </p>
        <AroundHotelInput title={'Xung quanh có gì?'} aroundInit={aroundHotel.around} onChange={setAroundHotel}/>
        <AroundHotelInput title={'Nhà hàng & quán cà phê'} aroundInit={aroundHotel.coffeeAndRestaurent}onChange={setCoffeeAndRestaurentHotel} />
        <AroundHotelInput title={'Địa điểm tham quan hàng đầu'} aroundInit={aroundHotel.visitLocation} onChange={setVisitLocationHotel} />
        <AroundHotelInput title={'Cảnh đẹp thiên nhiên'} aroundInit={aroundHotel.naturalBeauty} onChange={setNaturalBeautyHotel} />
        <AroundHotelInput title={'Các bãi biển trong khu vực'} aroundInit={aroundHotel.beachesInTheArea} onChange={setBeachesInTheAreaHotel}/>
        <AroundHotelInput title={'Phương tiện công cộng'} aroundInit={aroundHotel.publicTranport} onChange={setPublicTranportHotel} />
        <AroundHotelInput title={'Các sân bay gần nhất'} aroundInit={aroundHotel.airport} onChange={setAirportHotel} />
    </FormInput>
  )
}

export default FormF