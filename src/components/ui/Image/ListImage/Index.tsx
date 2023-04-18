import React from 'react'

type Props = {}
const urlImages = ["https://cf.bstatic.com/xdata/images/hotel/max1280x900/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1"]
const Index = (props: Props) => {
  return (

    <div className="grid w-full h-full grid-cols-12 grid-rows-3 gap-2">
        <img src={urlImages[0]} alt="" className="object-contain col-span-4 row-span-1"/>
        <img src={urlImages[1]} alt="" className="object-contain col-span-8 row-span-2"/>
        <img src={urlImages[2]} alt="" className="object-contain col-span-4 row-span-1"/>
        <img src={urlImages[3]} alt="" className="object-contain col-span-3 row-span-1"/>
        <img src={urlImages[4]} alt="" className="object-contain col-span-3 row-span-1"/>
        <img src={urlImages[5]} alt="" className="object-contain col-span-3 row-span-1"/>
        <img src={urlImages[6]} alt="" className="object-contain col-span-3 row-span-1"/>
    </div>
  )
}

export default Index