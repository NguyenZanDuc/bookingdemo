import React, {  } from 'react'



const FormInput = ({children}) => {
  return (
    <div className="relative w-[800px] border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white border-transparent focus-within:border-[#0171C2]" >
        <input type="" className="absolute top-0 left-0 w-full h-full opacity-0" />
        {children}
    </div>
  )
}

export default FormInput