import Image from 'next/image'
import React from 'react'

type Props = {}

const feedback = (props: Props) => {
  return (
    <div className="min-h-screen px-32 py-10 bg-[#F9F9FA]">
        <div className="w-[500px] bg-white p-6 flex flex-col justify-start items-center gap-4 shadow-lg  group">
                <p>Quý vị đang đăng:</p>
                <Image className="py-3" src={'/host/nha.png'} alt={''} width={50} height={50} />
                <p className="py-8 text-2xl font-bold text-center ">Một khách sạn nơi khách có thể đặt phòng</p>
                <div className="text-sm text-center ">Quý vị thấy có đúng như chỗ nghỉ của mình không?</div>
                <button className="bg-[#00487A] w-full py-3 text-white font-medium rounded-sm"><a href="/about">Tiếp tục</a> </button>
                <button className="text-[#00487A] font-medium py-3 w-full border-[0.5px] border-[#00487A] rounded-sm">Không, tôi cần sự thay đổi</button>
        </div>
    </div>
  )
}

export default feedback