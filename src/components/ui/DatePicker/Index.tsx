import React, { useState } from 'react'
import { DatePicker, message } from 'antd';


type Props = {}

const Index = (props: Props) => {
    const [date, setDate] = useState<any>(null);
    const handleChange = (value:any) => {
      message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
      setDate(value);
    };
  return (
      <DatePicker onChange={handleChange} className="outline-none"/>
  )
}

export default Index