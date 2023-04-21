
import FormA from '@/components/AboutPage/FormA'
import FormB from '@/components/AboutPage/FormB'
import FormC from '@/components/AboutPage/FormC'
import FormD from '@/components/AboutPage/FormD'
import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import { useRouter } from 'next/router'
import React from 'react'


type Props = {}

const about = (props: Props) => {
   const route = useRouter()
  
   function HandleContinue(){
      route.replace("/createroom")
   }
  return (
        <MainNavbarForm>
             <div className="flex flex-col gap-4 py-6">
            <p className="text-2xl font-bold">Xin chào duc nguyen!</p>
            <p className="text-sm">Hãy bắt đầu bằng cách cho chúng tôi biết tên, địa chỉ cùng chi tiết liên hệ của chỗ nghỉ.</p>
        </div>
        <div className='flex w-full gap-5 pb-8'>
            <div className="w-[800px] flex-1 flex flex-col gap-5">
              <FormA />
              <FormB />
              <FormC />
              <FormD />
              <button onClick={HandleContinue} className="text-white bg-[#3175B1] py-3 mt-10">Tiếp tục</button>
            </div>
            <div>
                <div className="w-auto p-3 text-xs bg-white">
                    <p>Sau khi hoàn tất đăng ký, Quý vị vẫn sẽ có thể thực hiện thay đổi cho đăng ký trước khi chỗ nghỉ online.</p>
                </div>
            </div>
        </div>
        </MainNavbarForm>
       

  )
}

export default about