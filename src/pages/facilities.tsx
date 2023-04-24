import FormA from '@/components/FacilitiesPage/FormA'
import FormB from '@/components/FacilitiesPage/FormB'
import FormC from '@/components/FacilitiesPage/FormC'
import FormD from '@/components/FacilitiesPage/FormD'
import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import useFacilitiesHotel from '@/hooks/useFacilities'
import { Alert, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {FacilitiesChecking, FacilitiesSucess} from '../slice/Navbar/stateNavbar'
import { useDispatch } from 'react-redux'


type Props = {}

const facilities = (props: Props) => {
    const [error, setError] = useState<string>();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const {FacilitiesSchema, facilitiesHotel} = useFacilitiesHotel()
    const route = useRouter()
     async function HandleContinue(){
      try {
          await FacilitiesSchema.validate(facilitiesHotel);
          dispatch(FacilitiesSucess())
            route.replace("/amenities")
        } catch (err:any) {
            setError(err.errors[0])
            setOpen(true)
            console.log(err.errors) // => 'ValidationError'
            
        }
      }
      const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
      useEffect(()=>{
        dispatch(FacilitiesChecking())
       },[])
  return (
    <MainNavbarForm>
        <div className="flex flex-col gap-6 py-6">
          <p className="text-xl font-bold">Tiện nghi và dịch vụ</p>
          <p className="text-sm font-light">Giờ Quý vị hãy cho chúng tôi biết một số thông tin về chỗ nghỉ như tiện nghi, internet, chỗ đậu xe và các ngôn ngữ mà chỗ nghỉ sử dụng.</p>
          {error&&(
                <div className="text-sm font-bold text-[#A30100] border-[1px] w-1/2 border-[#CC0100] p-3 rounded-md" >
                    <p>{error}</p>
                </div>
            )}
          <Snackbar open={open} autoHideDuration={4000}  onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
          </Snackbar>
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