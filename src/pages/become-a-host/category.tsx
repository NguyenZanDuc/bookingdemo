
import CardHostCreateCategory from '@/components/BecomeAHostPage/CardHostCreateCategory'
import StartSvg from '@/components/svg/StartSvg'
import React from 'react'


const category = () => {
  return (
    <div className="bg-[#F9F9FA] w-screen h-screen justify-start items-center flex flex-col px-40 py-10 ">
        <div className="flex flex-col w-full gap-5">
            <p className="text-2xl">Đăng chỗ nghỉ của Quý vị trên Booking.com và bắt đầu đón tiếp khách thật nhanh chóng!</p>
            <p className="text-base ">Để bắt đầu, chọn loại chỗ nghỉ Quý vị muốn đăng trên Booking.com</p>
            <div className="h-[270px] flex gap-5">
                <div className=" relative p-4 border-[0.4px] w-[250px] h-full bg-white border-gray-300">
                    <CardHostCreateCategory title={'Căn hộ'} description={'Chỗ nghỉ tự nấu nướng, đầy đủ nội thất mà khách thuê nguyên căn.'} image={'/host/canho.png'} />
                    <div className='absolute top-0 flex gap-1 px-2 py-1 items-center -translate-x-1/2 -translate-y-1/2 rounded-sm left-1/2 bg-[#00800A]'>
                        <StartSvg color='#fff' className="w-4 h-4"/>
                        <p className="text-xs font-medium text-white">Bắt đầu nhanh</p>
                    </div>
                </div>
                <div className="border-[0.4px]  border-gray-300 gap-4 p-4 flex w-[750px] bg-white">
                    <CardHostCreateCategory title={'Nhà'} description={'Các chỗ nghỉ như căn hộ, nhà nghỉ dưỡng, biệt thự, v.v.'} image={'/host/nha.png'} />
                    <CardHostCreateCategory href='/become-a-host/property' className="border-x-[0.4px] px-4  border-gray-300" title={'Khách sạn, nhà nghỉ B&B hay tương tự'} description={'Các chỗ nghỉ như khách sạn, nhà nghỉ B&B, nhà khách, hostel, khách sạn căn hộ, v.v.'} image={'/host/khachsannhanghi.png'} />
                    <CardHostCreateCategory title={'Các loại chỗ nghỉ khác'} description={'Các chỗ nghỉ như tàu thuyền, khu cắm trại, lều trại sang trọng, v.v.'} image={'/host/cacloaichonghikhac.png'} />
                </div>
            </div>
        </div>
    </div>  
  )
}

export default category