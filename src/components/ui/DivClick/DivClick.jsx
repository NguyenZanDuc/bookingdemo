import useClickValue from '@/hooks/useClickValue';
import styled from '@emotion/styled';
import { Guid } from 'guid-typescript';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';



const DivClick = ({className="",children, id}) => {
    const CLICKVALUE =id;

    const {setClickValueChange}= useClickValue();
    const [isClick, setIsClick] = useState(false);
    const clickValue = useSelector((state)=>state.click.value)
    useEffect(()=>{
        if(clickValue==CLICKVALUE){
            setIsClick(true);
            return
        }
        setIsClick(false)
    },[clickValue])
    const DivClick = styled('div')(()=>{
        let borderColor = "transparent"
        if(isClick){
            borderColor = "#0171C2"
        }
        return {
            borderColor: borderColor
        }
    })
  return (
    <DivClick className={className??""} onClick={()=>{setClickValueChange(CLICKVALUE)}}>
        {children}
    </DivClick>
  )
}

export default DivClick