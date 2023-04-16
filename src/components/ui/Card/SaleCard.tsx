import React, { ReactNode } from 'react'
import Tooltip from '@mui/material/Tooltip'

type Props = {
    title:string,
    content: string,
    icon?: ReactNode
    tooltip?: string 
}

const SaleCard = ({title, content, icon, tooltip}: Props) => {
  const card =( <div className="flex flex-col gap-3 p-3 border-[0.5px] border-[#004CB7] w-[360px] rounded-lg">
        <p className="flex items-center justify-between text-2xl font-medium">{title} {icon}</p>
        <p className="text-sm font-light">{content}</p>
        </div>)
    return (
        <>
            {tooltip&&(
                <Tooltip title={tooltip}>
                    {card}  
                </Tooltip>
            )}
        </>
  )
}

export default SaleCard