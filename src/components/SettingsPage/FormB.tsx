import React, { useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import { Radio } from '@mui/material';
import Select from 'react-select';
import useSettings from '@/hooks/useSettings';


type Props = {}

const FormB = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {settingsHotel, setInvoiceRecipient, setIsGenericAddress} = useSettings()
 
    const options = [
        { value: 0, label: 'name' },
        { value: 1, label: 'name hotel' },
        { value: 2, label: 'Tên pháp lý của công ty (vui lòng nêu rõ)' },
      ];
    function  HandleSelect(e: any){
        if(e.value==0||e.value==1){
                setIsOpen(false)
                setInvoiceRecipient(e.label)
            return 
        }
        setIsOpen(true)
    }
    function HandleInputChange(e:any){
        setInvoiceRecipient(e.target.value)
    }
  return (
    <FormInput >
        <p className="py-2 text-lg">Thanh toán hoa hồng</p>
        <div className="flex justify-between">
            <p className='text-sm w-[60%]'>Vào đầu mỗi tháng, chúng tôi sẽ gửi cho Quý vị hóa đơn của tất cả các đặt phòng đã hoàn tất trong tháng trước.</p>
            <div className="flex flex-col items-end gap-2">
                <p className="text-sm font-bold">Phần trăm hoa hồng:</p>
                <p className="text-2xl text-[#00800A] font-light">15 %</p>
            </div>
        </div>
        <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-col w-1/2 gap-2 ">
                <p className="text-sm">Chúng tôi nên viết tên nào trên hóa đơn (ví dụ: tên công ty/pháp lý)?</p>
                <Select className="w-full text-sm" value={{label: settingsHotel.invoiceRecipient, value: settingsHotel.invoiceRecipient=="name"?0:1}} onChange={HandleSelect}
                                    options={options}/>
            </div>
            {isOpen&&(
            <div className="z-0 flex flex-col w-1/2 gap-2">
                <p className="text-sm">Tên pháp lý của công ty</p>
                <input type="text" value={settingsHotel.invoiceRecipient} onChange={HandleInputChange}  className="border-[0.4px] border-gray-400 rounded-sm focus:border-blue-500 w-full p-2"/>
            </div>)}
        </div>
        <p className="w-1/2 text-sm">Người nhận này có cùng địa chỉ với chỗ nghỉ của Quý vị không?</p>
        <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 px-4  text-sm border-[0.6px] rounded-md border-gray-400">
                <Radio name="1" checked={settingsHotel.isGenericAddress} onClick={()=>setIsGenericAddress(true)}/>
                <p>Có</p>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 text-sm border-[0.6px] rounded-md border-gray-400">
                <Radio name="1" checked={!settingsHotel.isGenericAddress} onClick={()=>setIsGenericAddress(false)}/>
                <p>Không</p>
            </button>
        </div>
    </FormInput>
  )
}

export default FormB