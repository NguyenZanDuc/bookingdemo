import FormA from '@/components/CreateRoomPage/FormA'
import FormB from '@/components/CreateRoomPage/FormB'
import FormC from '@/components/CreateRoomPage/FormC'
import FormD from '@/components/CreateRoomPage/FormD'
import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const createroom = (props: Props) => {
    const route = useRouter()
    function HandleContinue(){
        route.replace("/facilities")
     }
  return (
        <MainNavbarForm>
            <div className="flex flex-col gap-6 py-6">
                <p className="text-xl font-bold">Bố cục và giá</p>
                <p className="text-sm">Hãy cho chúng tôi biết về phòng đầu tiên của Quý vị. Sau khi nhập tất cả các thông tin cần thiết, Quý vị sẽ có thể nhập chi tiết cho các phòng khác.</p>
                <div className='flex flex-1 gap-5 '>
                    {/* option form */}
                    {/* <div className="flex w-[800px] flex-col items-center justify-center gap-4 p-4 bg-white ">
                        <div className="w-[100px] h-[100px]">
                            <img src="https://q.bstatic.com/static/img/join/segmentation/empty-state-createroom@2x.png" alt="" className="object-contain w-full h-full"/>
                        </div>
                        <p className="text-sm w-[60%] text-center">Chưa có phòng nào được thêm vào chỗ nghỉ Quý vị. Hãy bắt đầu thêm phòng để bắt đầu diễn tả các lựa chọn giường, bố cục và giá cho khách.</p>
                        <button className="px-4 py-2 font-light rounded-sm bg-[#3175B1] text-white">Thêm phòng</button>
                    </div> */}
                    <div className='flex flex-col gap-4 p-4'>
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

export default createroom