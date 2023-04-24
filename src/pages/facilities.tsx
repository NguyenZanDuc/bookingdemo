import FormA from '@/components/FacilitiesPage/FormA'
import FormB from '@/components/FacilitiesPage/FormB'
import FormC from '@/components/FacilitiesPage/FormC'
import FormD from '@/components/FacilitiesPage/FormD'
import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

type Props = {}

const facilities = (props: Props) => {
  const route = useRouter()
    function HandleContinue(){
        route.replace("/amenities")
     }
  return (
    <MainNavbarForm>
        <div className="flex flex-col gap-6 py-6">
          <p className="text-xl font-bold">Tiện nghi và dịch vụ</p>
          <p className="text-sm font-light">Giờ Quý vị hãy cho chúng tôi biết một số thông tin về chỗ nghỉ như tiện nghi, internet, chỗ đậu xe và các ngôn ngữ mà chỗ nghỉ sử dụng.</p>
          <div className="flex w-full gap-4">
              <div className="w-[800px] flex flex-col gap-5">
                  <FormA />
                  <FormB />
                  <FormC />
                  <FormD />
                  <button onClick={HandleContinue} className="w-full text-white text-lg bg-[#3175B1] rounded-sm py-2">Tiếp tục</button>
              </div>
              <div className="w-[260px]">
                    <div className="p-3 text-xs bg-white ">
                        <p className='text-xs'>Sau khi hoàn tất đăng ký, Quý vị vẫn sẽ có thể thực hiện thay đổi cho đăng ký trước khi chỗ nghỉ online.</p>
                    </div>
                </div>
          </div>
        </div>
    </MainNavbarForm>
        
  )
}

export default facilities