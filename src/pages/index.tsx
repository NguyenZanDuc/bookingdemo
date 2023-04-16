import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import { Button, Checkbox } from '@mui/material'
import { MdExpandMore } from 'react-icons/md'
import Helper from '@/components/svg/Helper'
import HistorySearchCard from '@/components/ui/Card/HistorySearchCard'
import AddressHotelCard from '@/components/ui/Card/AddressHotelCard'
import HotelCityCard from '@/components/ui/Card/HotelCityCard'
import NextButton from '@/components/ui/Button/NextButton'
import ListCardByCategory from '@/components/ui/Card/ListCardByCategory'
import Beach from '@/components/svg/Beach'
import SaleCard from '@/components/ui/Card/SaleCard'
import Location from '@/components/ui/Location'
const cards1:HotelCity[] =[{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
  title:"Đà Nẵng",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
  title:"Đà Nẵng",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
  title:"Đà Nẵng",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
  title:"Đà Nẵng",
  details:["2.508 chỗ nghỉ"]
},
{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
  title:"Đà Nẵng",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
  title:"Đà Nẵng",
  details:["2.508 chỗ nghỉ"]
}]
const cards2:HotelCity[] =[{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/203695763.webp?k=ce852647f7278aad9dde0ced98ca65866a52ebf268ae0bdc5f96dfb9898e1b48&o=&s=1",
  title:"Sala Đà Nẵng Beach Hotel",
  details:["Da Nang, Viet Nam","Bắt đầu từ € 64"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/203695763.webp?k=ce852647f7278aad9dde0ced98ca65866a52ebf268ae0bdc5f96dfb9898e1b48&o=&s=1",
  title:"Sala Đà Nẵng Beach Hotel",
  details:["Da Nang, Viet Nam","Bắt đầu từ € 64"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/203695763.webp?k=ce852647f7278aad9dde0ced98ca65866a52ebf268ae0bdc5f96dfb9898e1b48&o=&s=1",
  title:"Sala Đà Nẵng Beach Hotel",
  details:["Da Nang, Viet Nam","Bắt đầu từ € 64"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/203695763.webp?k=ce852647f7278aad9dde0ced98ca65866a52ebf268ae0bdc5f96dfb9898e1b48&o=&s=1",
  title:"Sala Đà Nẵng Beach Hotel",
  details:["Da Nang, Viet Nam","Bắt đầu từ € 64"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/203695763.webp?k=ce852647f7278aad9dde0ced98ca65866a52ebf268ae0bdc5f96dfb9898e1b48&o=&s=1",
  title:"Sala Đà Nẵng Beach Hotel",
  details:["Da Nang, Viet Nam","Bắt đầu từ € 64"]
}]
const cards3:HotelCity[] =[{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
  title:"La Roulotte de Ciney",
  details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
  title:"La Roulotte de Ciney",
  details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
  title:"La Roulotte de Ciney",
  details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
  title:"La Roulotte de Ciney",
  details:["Bỉ, Ciney","Bắt đầu từ € 121","8.4 Rất tốt · 90 đánh giá"]
}]
const cards4:HotelCity[] =[{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  title:"Aparthotel Stare Miasto",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 78", "8.6 Tuyệt vời · 2.137 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  title:"Aparthotel Stare Miasto",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 78", "8.6 Tuyệt vời · 2.137 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  title:"Aparthotel Stare Miasto",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 78", "8.6 Tuyệt vời · 2.137 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  title:"Aparthotel Stare Miasto",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 78", "8.6 Tuyệt vời · 2.137 đánh giá"]
}]

const location:Location[] =[{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"},{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"},{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"},{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"},{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"},{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"},{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"},{name:"Ninh thuan", detail:"145 chỗ nghỉ"},{name:"Quảng Bình", detail:"268 chỗ nghỉ"}]

const cardsPlan:HotelCity[] =[{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140051785.jpg?k=3405c60b82998daeeba1bc3cc635906d4a9fcf0c1ef87d92e886acc9e7466cb5&o=",
  title:"Lang co",
  details:["cach Hue 150km"]
},{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140051785.jpg?k=3405c60b82998daeeba1bc3cc635906d4a9fcf0c1ef87d92e886acc9e7466cb5&o=",
  title:"Lang co",
  details:["cach Hue 150km"]
},{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140051785.jpg?k=3405c60b82998daeeba1bc3cc635906d4a9fcf0c1ef87d92e886acc9e7466cb5&o=",
  title:"Lang co",
  details:["cach Hue 150km"]
},{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140051785.jpg?k=3405c60b82998daeeba1bc3cc635906d4a9fcf0c1ef87d92e886acc9e7466cb5&o=",
  title:"Lang co",
  details:["cach Hue 150km"]
},{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140051785.jpg?k=3405c60b82998daeeba1bc3cc635906d4a9fcf0c1ef87d92e886acc9e7466cb5&o=",
  title:"Lang co",
  details:["cach Hue 150km"]
},{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140051785.jpg?k=3405c60b82998daeeba1bc3cc635906d4a9fcf0c1ef87d92e886acc9e7466cb5&o=",
  title:"Lang co",
  details:["cach Hue 150km"]
}]
type HotelCity ={
  image:string,
  title:string,
  details: string[]
}
type Location = {
  name: string,
  detail: string
}
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="absolute top-0 ">
      <section >
        <Hero />
      </section>
      <section className="flex flex-col gap-8 p-2 lg:px-32 w-[1000px] md:w-full">
        <div className="flex items-center justify-start gap-5 mt-14">
            <div className="flex items-center gap-2 ">
              <Checkbox />
              <p>Tôi đang tìm nhà nguyên căn hoặc căn hộ</p>
            </div>
            <div  className="flex items-center gap-2 ">
              <Checkbox />
              <p>Tôi đi công tác</p>
            </div>
          </div>
        <div className="group p-2 border-[0.5px] border-gray-300 duration-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  <Helper />
                  <p>Trợ giúp về virus corona (COVID-19)</p>
                </div>
                <MdExpandMore className="w-6 h-6"/>
            </div>
            <div className="flex-col items-start hidden gap-2 group-hover:flex">
              <p className="text-sm">Nhận lời khuyên mà bạn cần. Xem các hạn chế liên quan đến COVID-19 mới nhất trước khi du lịch.</p>
              <a className="text-sm text-blue-500 cursor-pointer"  href="#">Tìm hiểu thêm</a>
            </div>
          </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Tìm kiếm gần đây của bạn</p>
          <div className="flex flex-wrap justify-between">
            {/* list history search card */}
              <HistorySearchCard />
              <HistorySearchCard />
              <HistorySearchCard />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Ưu đãi</p>
          <p  className="text-base font-light text-gray-600">Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn</p>
          <div className="relative w-full h-[184px]">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/184699273.jpeg?k=503e088a7d417c30217b5109dda404d2c2050001588cf7a45fca63e3363573de&o=" alt="" className="object-cover w-full h-full"/>
            <div className="absolute flex flex-col justify-center gap-2 text-white top-10 left-10">
                <p className="font-bold">Đổi gió một thời gian</p>
                <p>Tận hưởng sự tự do với kỳ nghỉ theo tháng trên Booking.com</p>
                <div><Button variant="contained" color="primary" className="text-sm font-medium text-white bg-[#00487A]">Khám phá kỳ nghỉ theo tháng</Button></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-5">
            <div className="w-2 h-2 rounded-full bg-[#0171C2]"></div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-5">
              <AddressHotelCard/>
              <AddressHotelCard/>
            </div>
            <div className="flex justify-between gap-5">
              <AddressHotelCard/>
              <AddressHotelCard/>
              <AddressHotelCard/>
            </div>
        </div>
        <ListCardByCategory  category={'Khám phá Việt Nam'} description={'Các điểm đến phổ biến này có nhiều điều chờ đón bạn'} cards={cards1} />
        <ListCardByCategory category={'Bạn đang tìm chỗ nghỉ lý tưởng?'} description={'Khách có tiêu chí tìm kiếm như bạn đã đặt những chỗ này'} cards={cards2} />
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Lên kế hoạch dễ dàng và nhanh chóng</p>
          <p className="text-base font-light text-gray-600">Khám phá các điểm đến hàng đầu theo cách bạn thích ở Việt Nam</p>
          <div className="flex items-center justify-start gap-4">
              <button className="flex items-center justify-center gap-2 p-2 text-sm font-normal rounded-xl hover:bg-[#F2F7FB] border-[0.5px] border-transparent hover:border-[#0171C2]">
                <Beach />
                Bãi biển
              </button>
              <button className="flex items-center justify-center gap-2 p-2 text-sm font-normal rounded-xl hover:bg-[#F2F7FB] border-[0.5px] border-transparent hover:border-[#0171C2]">
                <Beach />
                Bãi biển
              </button>
              <button className="flex items-center justify-center gap-2 p-2 text-sm font-normal rounded-xl hover:bg-[#F2F7FB] border-[0.5px] border-transparent hover:border-[#0171C2]">
                <Beach />
                Bãi biển
              </button>
              <button className="flex items-center justify-center gap-2 p-2 text-sm font-normal rounded-xl hover:bg-[#F2F7FB] border-[0.5px] border-transparent hover:border-[#0171C2]">
                <Beach />
                Bãi biển
              </button>
          </div>
          <div className="relative flex items-center justify-between gap-4 ">
            {cardsPlan&&cardsPlan.map((card, index)=>(
                    <HotelCityCard key={index} image={card.image} title={card.title} detail={card.details} />
            ))}
            <div className="absolute -translate-x-4 left-full top-14">
              <NextButton/>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p  className="text-xl font-semibold">Đi nhiều hơn, trả ít hơn</p>
            <a href="#" className="text-sm font-normal text-[#1C79C6]">Tìm hiểu thêm về tặng thưởng</a>
          </div>
          <div className="flex justify-start gap-4 ">
            <SaleCard title={'Giam gia 10%'} content={'Tan huong giam gia cho nghi tham gia tren toan cau'} tooltip="chi phi phu"/>
            <SaleCard title={'Giam gia 10%'} content={'Tan huong giam gia cho nghi tham gia tren toan cau'} tooltip="chi phi phu"/>
            <SaleCard title={'Giam gia 10%'} content={'Tan huong giam gia cho nghi tham gia tren toan cau'} tooltip="chi phi phu"/>
          </div>
        </div>
        <ListCardByCategory category={'Lưu trú tại các chỗ nghỉ độc đáo hàng đầu'} description={'Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chúng tôi đều có hết'} cards={cards3} />
        <ListCardByCategory category={'Nhà ở mà khách yêu thích'} description={''} cards={cards4} />
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Các điểm đến được chúng tôi ưa thích</p>
          <div className="flex justify-start gap-4">
              <button className="flex items-center justify-center gap-2 p-2 text-sm font-normal rounded-3xl hover:bg-[#F2F7FB] border-[0.5px] border-transparent hover:border-[#0171C2]">
                Khu vực
              </button>
              <button className="flex items-center justify-center gap-2 p-2 text-sm font-normal rounded-3xl hover:bg-[#F2F7FB] border-[0.5px] border-transparent hover:border-[#0171C2]">
                Thành phố
              </button>
              <button className="flex items-center justify-center gap-2 p-2 text-sm font-normal rounded-3xl hover:bg-[#F2F7FB] border-[0.5px] border-transparent hover:border-[#0171C2]">
                Địa điểm được quan tâm
              </button>
          </div>
          <div className="grid grid-cols-5 gap-6">
            {location.map((loca, index)=><Location name={loca.name} detail={loca.detail} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
