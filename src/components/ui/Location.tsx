import React from 'react'

type Props = {
    name: string,
    detail: string
}

const Location = ({name, detail}: Props) => {
  return (
    <div className="flex flex-col items-start gap-2 text-xs">
        <p className="font-medium cursor-pointer hover:underline">{name}</p>
        <p className="font-light">{detail}</p>
    </div>
  )
}

export default Location