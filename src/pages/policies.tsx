import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import FormA from '@/components/PoliciesPage/FormA'
import FormB from '@/components/PoliciesPage/FormB'
import FormC from '@/components/PoliciesPage/FormC'
import FormD from '@/components/PoliciesPage/FormD'
import FormE from '@/components/PoliciesPage/FormE'
import React from 'react'

type Props = {}

const policies = (props: Props) => {
  return (
   <MainNavbarForm>
        <div className="flex flex-col gap-6 py-6">
            <p className="text-xl font-bold">Chính sách</p>
            <p className="text-sm font-light">Hãy liệt kê chi tiết các chính sách cơ bản. Quý vị có cho phép trẻ em hay thú cưng đến nghỉ không? Quý vị có thể linh hoạt với việc hủy đặt phòng đến mức nào?</p>
            <div className="flex w-full gap-4">
                <div className="w-[800px] flex flex-col gap-5">
                        <FormA />
                        <FormB />
                        <div className='flex justify-between w-full'>
                            <FormC />
                            <FormC />
                        </div>
                        <FormD />
                        <FormE />
                        <button className="w-full text-white text-lg bg-[#3175B1] rounded-sm py-2">Tiếp tục</button>
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

export default policies