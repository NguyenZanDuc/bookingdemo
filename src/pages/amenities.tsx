import FormA from '@/components/Amenities/FormA'
import FormB from '@/components/Amenities/FormB'
import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {AmentiesChecking, AmentiesSucess} from '../slice/Navbar/stateNavbar'
import { useDispatch } from 'react-redux'
type Props = {}

const amenities = (props: Props) => {
  const route = useRouter()
  const dispatch = useDispatch()

    function HandleContinue(){
        route.replace("/photos")
        dispatch(AmentiesSucess())
     }
     useEffect(()=>{
      dispatch(AmentiesChecking())
     },[])
  return (
    <MainNavbarForm>
        <div className="flex flex-col gap-6 py-6">
                <p className="text-xl font-bold">Tiện nghi</p>
                <p className="text-sm">You are nearly done! We just need a few more details about the extra bed options you provide, plus any amenities or specific features and services available.</p>
                <div className="flex justify-between">
                  <div className='flex flex-col gap-5'>
                      <FormA />
                      <FormB />
                      <button onClick={HandleContinue} className="w-full text-white text-lg bg-[#3175B1] rounded-sm py-2">Tiếp tục</button>
                  </div>
                  <div className="max-w-[260px] hidden xl:block">
                          <div className="p-3 text-xs bg-white ">
                              <p className='text-xs'>Sau khi hoàn tất đăng ký, Quý vị vẫn sẽ có thể thực hiện thay đổi cho đăng ký trước khi chỗ nghỉ online.</p>
                      </div>
                  </div>
                </div>
        </div>
    </MainNavbarForm>
  )
}

export default amenities