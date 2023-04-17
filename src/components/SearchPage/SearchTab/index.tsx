import Schedule from '@/components/svg/Schedule'
import SearchSvg from '@/components/svg/SearchSvg'
import { Checkbox, Divider, List, ListItem, ListItemText, Select, Switch, ToggleButton, getFormControlLabelUtilityClasses, styled } from '@mui/material'
import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import DatePicker from "react-datepicker";
import { MdExpandMore } from 'react-icons/md'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import FilterOption from '@/components/ui/Option/FilterOption'
import SelectNumber from '@/components/ui/Input/SelectNumber'

type Props = {}

const index = (props: Props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [slec, setSlec] = useState(false)

  return (
    <div className="w-[265px] ">
        <div className="p-4 bg-[#FEBB00] flex flex-col gap-2 items-start justify-start rounded-sm">
            <p className="text-xl font-medium">Tìm</p>
            <div className="flex flex-col items-start gap-[2px] w-full">
                <p className="text-xs">Tên chỗ nghỉ / điểm đến:</p>
                <div className="flex items-center gap-2 bg-white w-[220px]">
                    <BsSearch className="ml-2"/>
                    <input type="text" className="w-full py-2 outline-none placeholder"   placeholder="Bạn muốn đến đâu "/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
                <p className="text-xs">Ngày nhận phòng</p>
                <div className="flex items-center gap-2 px-2 bg-white w-[220px]">
                    <Schedule />
                    <DatePicker selected={startDate} onChange={(date:any) => setStartDate(date)} className="py-2 outline-none"/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
                <p className="text-xs">Ngày trả phòng</p>
                <div className="flex items-center gap-2 px-2 bg-white w-[220px]">
                    <Schedule />
                    <DatePicker selected={endDate} onChange={(date:any) => setEndDate(date)} className="py-2 outline-none"/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
                <p className="text-xs">Nghỉ 1 đêm</p>
                <div className="flex items-center gap-2 px-2 py-3 bg-white w-[220px]">
                   <p className="text-xs">1 người lớn · 0 trẻ em · 1 phòng</p>
                   <MdExpandMore/>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-start w-[220px]">
                    <Checkbox />
                    <p className="text-xs text-start">Căn hộ và nhà nguyên căn</p>
                    <AiOutlineQuestionCircle className="ml-auto"/>
                </div>
                <div className="flex items-center justify-start w-[220px]">
                    <Checkbox />
                    <p className="text-xs text-start">Tôi đi công tác</p>
                    <AiOutlineQuestionCircle className="ml-auto"/>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="text-xl bg-[#00487A] text-white w-[220px] py-3 rounded-sm">
                    Tìm
                </button>
            </div>
        </div>
        <div className="py-6">
            <List className="border-[0.4px] border-gray-300">
                <ListItemText>
                    <p  className="px-2 text-xs font-bold">Chọn lọc theo:</p>
                </ListItemText>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Ngân sách của bạn (mỗi đêm)</p>
                     <div className="flex items-center justify-center gap-2">
                        <Switch />
                        <p>Tự cài danh sách</p>
                     </div>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'€ 0 - € 50'} quanlity={625} setValue={setSlec}/>
                        <FilterOption isChecked={false} value={'€ 50 - € 100'} quanlity={322} />
                        <FilterOption isChecked={false} value={'€ 100 - € 150'} quanlity={151} />
                        <FilterOption isChecked={false} value={'€ 150 - € 200'} quanlity={95} />
                        <FilterOption isChecked={false} value={'€ 200 +'} quanlity={95} />
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Các bộ lọc phổ biến</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Khách sạn'} quanlity={625}/>
                        <FilterOption isChecked={false} value={'5 sao'} quanlity={322} />
                        <FilterOption isChecked={false} value={'Resort'} quanlity={151} />
                        <FilterOption isChecked={false} value={'Bao gồm bữa sáng'} quanlity={95} />
                        <FilterOption isChecked={false} value={'Tuyệt hảo: 9 điểm trở lên'} quanlity={95} />
                        <FilterOption isChecked={false} value={'Giáp biển'} quanlity={95} />
                        <FilterOption isChecked={false} value={'Trung tâm Thành phố Đà Nẵng'} quanlity={95} />
                        <FilterOption isChecked={false} value={'Cầu Rồng'} quanlity={95} />
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Du lịch bền vững</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Chỗ nghỉ Du lịch Bền vững'} quanlity={625}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Xếp hạng chỗ nghỉ</p>
                     <p className="text-xs font-light text-gray-500">Bao gồm xếp hạng sao và các hình thức xếp hạng khác</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'1 sao'} quanlity={19}/>
                        <FilterOption isChecked={slec} value={'2 sao'} quanlity={85}/>
                        <FilterOption isChecked={slec} value={'3 sao'} quanlity={25}/>
                        <FilterOption isChecked={slec} value={'4 sao'} quanlity={65}/>
                        <FilterOption isChecked={slec} value={'5 sao'} quanlity={62}/>
                        <FilterOption isChecked={slec} value={'không xếp hạng'} quanlity={129}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Khoảng cách từ trung tâm Đà Nẵng</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Dưới 1 km'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Dưới 3 km'} quanlity={423}/>
                        <FilterOption isChecked={slec} value={'Dưới 5 km'} quanlity={711}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Các hoạt động thú vị</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Bãi biển'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Cho thuê xe đạp'} quanlity={423}/>
                        <FilterOption isChecked={slec} value={'Massage'} quanlity={711}/>
                        <FilterOption isChecked={slec} value={'Trung tâm Spa & chăm sóc sức khoẻ'} quanlity={711}/>
                        <FilterOption isChecked={slec} value={'Trung tâm thể dục'} quanlity={711}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Chính sách hủy đặt phòng</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Miễn phí hủy'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Đặt phòng không cần thẻ tín dụng'} quanlity={423}/>
                        <FilterOption isChecked={slec} value={'Không cần thanh toán trước'} quanlity={711}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Lối ra biển</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Giáp biển'} quanlity={66}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Bữa ăn</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Tự nấu'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bao gồm bữa sáng'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bao gồm tất cả các bữa ăn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Tất cả các bữa'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bao bữa sáng & bữa trưa'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bao bữa sáng & bữa tối'} quanlity={66}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Loại chỗ ở</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Khách sạn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Khách sạn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Khách sạn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Khách sạn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Khách sạn'} quanlity={66}/>
                     </div>
                     <button className="cursor-pointer text-sm text-[#00487A] flex gap-1 items-center">Hiển thị tất cả 14 loại <MdExpandMore /></button>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                    <p  className="text-xs font-bold ">Số phòng ngủ</p>
                    <div className="flex items-center justify-between w-full ">
                        <p className="text-xs text-gray-800 ">Phòng ngủ</p>
                        <SelectNumber />
                    </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                    <p  className="text-xs font-bold ">Phòng tắm riêng</p>
                    <div className="flex items-center justify-between w-full ">
                        <p className="text-xs text-gray-800 ">Phòng tắm</p>
                        <SelectNumber />
                    </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Địa danh</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Ngũ Hành Sơn'} quanlity={66}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Tùy chọn giường</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Hai giường đơn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Giường đôi'} quanlity={66}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Điểm đánh giá của khách</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Tuyệt hảo: 9 điểm trở lên'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Rất tốt: 8 điểm trở lên'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Tốt: 7 điểm trở lên'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Dễ chịu: 6 điểm trở lên'} quanlity={66}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Tiện nghi</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Xe đưa đón sân bay'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Chỗ đỗ xe'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Wi-Fi miễn phí'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Phòng gia đình'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Hồ bơi'} quanlity={66}/>
                        <button className="cursor-pointer text-sm text-[#00487A] flex gap-1 items-center">Hiển thị tất cả 14 loại <MdExpandMore /></button>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Tiện nghi phòng</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Phòng tắm riêng'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Nhìn ra biển'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Ban công'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bồn tắm'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Khu vực bếp'} quanlity={66}/>
                        <button className="cursor-pointer text-sm text-[#00487A] flex gap-1 items-center">Hiển thị tất cả 14 loại <MdExpandMore /></button>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Khu vực</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Bãi biển Mỹ Khê'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bãi biển Bắc Mỹ An'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bãi biển Non Nước'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Cẩm Châu'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Cam Ha'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Cẩm An'} quanlity={66}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Tiện nghi người khuyết tật (chỗ nghỉ)</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Lối vào cho người đi xe lăn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Toilet dành cho người khuyết tật'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Toilet có sàn cao hơn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bồn rửa mặt thấp hơn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Dây khẩn cấp trong phòng tắm'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Hỗ trợ khiếm thị: Braille'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Hỗ trợ khiếm thị: Dấu hiệu nổi'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Hướng dẫn bằng âm thanh'} quanlity={66}/>
                     </div>
                </ListItem>
                <Divider />
                <ListItem className="flex flex-col items-start gap-2">
                     <p  className="text-xs font-bold ">Tiện nghi người khuyết tật (phòng)</p>
                     <div className="w-full">
                        <FilterOption isChecked={slec} value={'Hoàn toàn nằm ở tầng trệt'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Các tầng trên đi lên bằng thang máy'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Xe lăn có thể đi đến mọi nơi trong toàn bộ khuôn viên'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Toilet dành cho người khuyết tật'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bồn tắm tiếp cận người khuyết tật'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Phòng tắm tiếp cận người khuyết tận'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Phòng tắm đứng'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Toilet cao'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Bồn rửa mặt thấp hơn'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Dây khẩn cấp trong phòng tắm'} quanlity={66}/>
                        <FilterOption isChecked={slec} value={'Ghế tắm'} quanlity={66}/>
                     </div>
                </ListItem>
                
                
            </List>
        </div>
    </div>
  )
}

export default index