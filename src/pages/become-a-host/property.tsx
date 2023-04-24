import CardPropertyOption from '@/components/BecomeAHostPage/Property/CardPropertyOption'
import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'
import {FcPrevious} from 'react-icons/fc'
import useAboutHotelForm from '@/hooks/useAboutHotelForm'

type Props = {}
const PROPERTYOPTION = [{title:"Khách sạn",description:"Chỗ nghỉ cho khách du lịch, thường có nhà hàng, phòng họp và các dịch vụ khác dành cho khách"},
                        {title:"Nhà khách",description:"Nhà riêng với tiện nghi sống riêng cho chủ nhà và khách"},
                        {title:"Nhà nghỉ B&B",description:"Nhà riêng có chỗ nghỉ qua đêm và phục vụ bữa sáng"},
                        {title:"Chỗ nghỉ nhà dân",description:"Nhà chung là nơi khách có phòng riêng và host sẽ ở đó khi khách đến nghỉ. Một số tiện nghi sẽ được dùng chung giữa host và khách."},
                        {title:"Nhà trọ",description:"Chỗ nghỉ tiết kiệm với hầu hết các giường được kê theo kiểu ký túc xá và mang tính chất tập thể"},
                        {title:"Khách sạn căn hộ",description:"Căn hộ tự phục vụ với một số tiện nghi của khách sạn như quầy lễ tân"},
                        {title:"Khách sạn khoang ngủ (capsule)",description:"Các buồng hoặc khoang ngủ cực kỳ nhỏ cung cấp chỗ nghỉ qua đêm đơn giản giá rẻ cho khách"},
                        {title:"Nhà nghỉ nông thôn",description:"Nhà riêng với chỗ nghỉ đơn giản nằm ở vùng thôn quê"},
                        {title:"Nhà nghỉ trang trại",description:"Nông trại tư nhân với chỗ nghỉ đơn giản"},
                        {title:"Quán trọ",description:"Chỗ nghỉ nhỏ, đơn giản và mang phong cách mộc mạc"},
                        {title:"Khách sạn tình nhân",description:"Chỗ nghỉ chỉ dành riêng cho người lớn, cho thuê theo giờ hoặc theo đêm"},
                        {title:"Nhà nghỉ ven đường",description:"Khách sạn ven đường thường dành cho khách lái xe máy, có lối đi thẳng vào bãi đỗ xe và hầu như không được trang bị nhiều tiện nghi"},
                        {title:"Resort", description:"Chỗ nghỉ ngơi thư giãn với nhà hàng, các hoạt động trong khuôn viên và thường mang phong cách sang trọng"},
                        {title:"Riad", description:"Chỗ nghỉ truyền thống của người Ma Rốc với sân trong và mang không gian quý phái"},
                        {title:"Ryokan", description:"Chỗ nghỉ truyền thống theo phong cách Nhật Bản, cho phép khách lựa chọn bữa ăn"},
                        {title:"Nhà nghỉ giữa thiên nhiên", description:"Nhà riêng với chỗ nghỉ nằm bao bọc giữa thiên nhiên, như núi non hoặc rừng cây"}]
const property = (props: Props) => {
    const [select, setSelect] = useState("");
    const [limit, setLimit] = useState(9);
    const {setPropertyHotel} = useAboutHotelForm()
    useEffect(()=>{
        setPropertyHotel(select)
    },[select])
  return ( 
        <div className=" bg-[#F9F9FA]">
            <Container className="min-h-screen pt-12">
                <p className="text-lg">Chỗ nghỉ nào trong danh sách dưới đây giống với chỗ nghỉ của Quý vị nhất?</p>
                <div className="flex flex-col justify-center gap-4 p-4 m-4 bg-white md:flex-row md:flex-wrap">
                    {PROPERTYOPTION.map(({title, description}, index)=>{
                        if(index>=limit){
                            return
                        }
                        return (
                             <CardPropertyOption key={index} selection={select} className="w-[300px] h-[150px]"  onChange={setSelect} title={title} description={description} />     
                        )
                    })}
                    {(limit==9)?(
                         <div className="h-[150px] w-[300px] border-[0.5px] border-gray-300 flex justify-center items-center gap-2 text-[#1375C4] hover:bg-[#F2F7FB]" onClick={()=>{setLimit(16)}}>
                         <MdExpandMore className="w-6 h-6"/>
                         <p>Thêm lựa chọn</p>
                     </div>
                    ):(
                        <div className="h-[150px] w-[300px] border-[0.5px] border-gray-300 flex justify-center items-center gap-2 text-[#1375C4] hover:bg-[#F2F7FB]" onClick={()=>{setLimit(9)}}>
                        <MdExpandMore className="w-6 h-6 rotate-180"/>
                        <p>Thu gọn lựa chọn</p>
                    </div>
                    )}
                   
                </div>
                <div className="border-b-[0.3px] border-gray-300 py-4">
                    <button className="text-[#1375C4] flex gap-2 hover:bg-[#ECF1F6] items-center p-2">
                        <AiOutlineQuestionCircle className=""/>
                        <p>Tôi không thấy loại chỗ nghỉ của tôi trong danh sách</p>
                    </button>
                </div>
                <div className="flex gap-4 py-5">
                    <button className="flex justify-center items-center px-16 py-4 border-[1px] border-[#1375C4] rounded-sm">
                        <a href="">
                            <FcPrevious />
                        </a>
                    </button>
                    <button className="text-sm font-bold flex justify-center items-center text-white flex-1 bg-[#1375C4] rounded-sm">
                        <a href="/become-a-host/owner">
                            Tiếp tục
                        </a>
                    </button>
                </div>
            </Container>
        </div>
  )
}

export default property