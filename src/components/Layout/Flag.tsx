import Image from 'next/image'
import React from 'react'

type Props = {}

function Flag({}: Props) {
  return (
    <div >
        <Image src={'https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/Vn@3x.png'} alt={''} height={25} width={25} className="rounded-full" />
    </div>
  )
}

export default Flag