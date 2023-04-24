import FormA from '@/components/CreateRoomPage/FormA'
import FormB from '@/components/CreateRoomPage/FormB'
import FormC from '@/components/CreateRoomPage/FormC'
import FormD from '@/components/CreateRoomPage/FormD'
import MainNavbarForm from '@/components/MainNavbarForm/MainNavbarForm'
import useRoomHotel from '@/hooks/useRoomHotel'
import { Alert, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {}

const createroom = (props: Props) => {
    const route = useRouter()
    const {roomHotel, RoomHotelSchema} = useRoomHotel()
    // function HandleContinue(){
    //     route.replace("/facilities")
    //  }
    const [error, setError] = useState<string>();
   const [open, setOpen] = useState(false);

     async function HandleContinue(){
        try {
            await RoomHotelSchema.validate(roomHotel);
            route.replace("/facilities")
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
  return (
        <MainNavbarForm>
            <div className="flex flex-col gap-6 py-6">
                <p className="text-xl font-bold">Bố cục và giá</p>
                <p className="text-sm">Hãy cho chúng tôi biết về phòng đầu tiên của Quý vị. Sau khi nhập tất cả các thông tin cần thiết, Quý vị sẽ có thể nhập chi tiết cho các phòng khác.</p>
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