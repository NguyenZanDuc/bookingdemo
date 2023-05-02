import FormA from '@/components/AboutPage/FormA'
import FormB from '@/components/AboutPage/FormB'
import FormC from '@/components/AboutPage/FormC'
import FormD from '@/components/AboutPage/FormD'
import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import useAboutHotelForm from '@/hooks/useAboutHotelForm'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {} from '../slice/Hotel/about'
import { Alert, Snackbar } from '@mui/material'
import {AboutSucess, AboutChecking} from '../slice/Navbar/stateNavbar'
import { useDispatch } from 'react-redux'
import FormE from '@/components/AboutPage/FormE'
import FormF from '@/components/AboutPage/FormF'
type Props = {}

const about = (props: Props) => {
    const route = useRouter()
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const {aboutHotel, AboutHotelSchema} = useAboutHotelForm()
    const [error, setError] = useState<string>();

    async function HandleContinue(){
        try {
            await AboutHotelSchema.validate(aboutHotel);
            dispatch(AboutSucess())
            route.replace("/createroom")
        } catch (err:any) {
            setError(err.errors[0])
            setOpen(true)
            console.log(err.errors)     
        }
   }
   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
     if (reason === 'clickaway') {
       return;
     }
     setOpen(false);
   };
   useEffect(()=>{
    dispatch(AboutChecking())
   },[])
  return (
        <MainNavbarForm>
        <div className="flex flex-col gap-4 py-6">
            <p className="text-2xl font-bold">Xin chào duc nguyen!</p>
            <p className="text-sm">Hãy bắt đầu bằng cách cho chúng tôi biết tên, địa chỉ cùng chi tiết liên hệ của chỗ nghỉ.</p>
            {error&&(
                <div className="text-sm font-bold text-[#A30100] border-[1px] w-1/2 border-[#CC0100] p-3 rounded-md" >
                    <p>{error}</p>
                </div>
            )}
        </div>
        <Snackbar open={open} autoHideDuration={4000}  onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>
        <div className='flex w-full gap-5 pb-8'>
            <div className="w-[800px] flex-1 flex flex-col gap-5">
              <FormA />
              <FormB />
              <FormC />
              <FormD />
              <FormE />
              <FormF />
              <button onClick={HandleContinue} className="text-white bg-[#3175B1] py-3 mt-10">Tiếp tục</button>
            </div>
            <div className='max-w-[260px] hidden xl:block'>
                <div className="w-auto p-3 text-xs bg-white ">
                    <p>Sau khi hoàn tất đăng ký, Quý vị vẫn sẽ có thể thực hiện thay đổi cho đăng ký trước khi chỗ nghỉ online.</p>
                </div>
            </div>
        </div>
        </MainNavbarForm>
       

  )
}

export default about