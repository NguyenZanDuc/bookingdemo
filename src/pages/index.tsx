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
import Covid19Help from '@/components/General/Covid19Help'
const cards1:HotelCity[] =[{
  image:"https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=",
  title:"Nha Trang",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=",
  title:"Vũng Tàu",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://r-xx.bstatic.com/xdata/images/city/170x136/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=",
  title:"Đà Lạt",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
  title:"Đà Nẵng",
  details:["2.508 chỗ nghỉ"]
},
{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=",
  title:"TP. Hồ Chí Minh",
  details:["2.508 chỗ nghỉ"]
},{
  image:"https://q-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
  title:"Hà Nội",
  details:["2.508 chỗ nghỉ"]
}]
const cards2:HotelCity[] =[{
  image:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
  title:"Khách sạn",
  details:["963.281 khách sạn"] 
},
{
  image:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=",
  title:"Căn hộ",
  details:["1.072.558 căn hộ"] 
},
{
  image:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
  title:"Resort",
  details:["19.279 resort"] 
},
{
  image:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=",
  title:"Biệt thự",
  details:["579.868 biệt thự"] 
}]
const cards3:HotelCity[] =[{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
  title:"La Roulotte de Ciney",
  details:["Bỉ, Ciney","8.4 Rất tốt · 90 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1",
  title:"Ranczo w Dolinie",
  details:["Ba Lan, Kiszkowo","9.4 Xuất sắc · 233 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1",
  title:"Đức, Trier",
  details:["Bỉ, Ciney"," 9.5 Xuất sắc · 140 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=262301cdcbef1d33942bb02607906eafdee8dde3106ac5732966a206baeebb04&o=&s=1",
  title:"Đức, Simonsberg",
  details:["Bỉ, Ciney","9.3 Tuyệt hảo · 48 đánh giá"]
}]
const cards4:HotelCity[] =[{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  title:"Old Town, Ba Lan",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 78", "8.6 Tuyệt vời · 2.137 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1",
  title:"Aparthotel Stare Miasto",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 124", "8.6 Tuyệt vời · 2.137 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
  title:"Oriente Palace Apartments",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 70", "8.6 Tuyệt vời · 2.137 đánh giá"]
},{
  image:"https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1",
  title:"numa I Vita Apartments",
  details:["Old Town, Ba Lan, Kraków","Bắt đầu từ € 286", "8.6 Tuyệt vời · 2.137 đánh giá"]
}]
const location:Location[] =[{name:"Phú Yên",detail:"213 chỗ nghỉ"},
{name:"Vịnh Hạ Long",detail:"1,370 chỗ nghỉ"},
{name:"Hà Nội",detail:"3,891 chỗ nghỉ"},
{name:"Đắc Lắc",detail:"123 chỗ nghỉ"},
{name:"Ninh Thuận",detail:"145 chỗ nghỉ"},
{name:"Hà Tĩnh",detail:"37 chỗ nghỉ"},
{name:"Bạc Liêu",detail:"23 chỗ nghỉ"},
{name:"Thành phố Đà Nẵng",detail:"2,512 chỗ nghỉ"},
{name:"Thừa Thiên - Huế",detail:"519 chỗ nghỉ"},
{name:"Quảng Bình",detail:"267 chỗ nghỉ"},
{name:"Bình Dương",detail:"78 chỗ nghỉ"},
{name:"Trà Vinh",detail:"17 chỗ nghỉ"},
{name:"Bình Thuận",detail:"600 chỗ nghỉ"},
{name:"Gia Lai",detail:"86 chỗ nghỉ"},
{name:"Cần Thơ",detail:"352 chỗ nghỉ"},
{name:"Vĩnh Long",detail:"42 chỗ nghỉ"},
{name:"Khu vực TP. Hồ Chí Minh",detail:"5,641 chỗ nghỉ"},
{name:"Cà Mau",detail:"48 chỗ nghỉ"},
{name:"Thanh Hóa",detail:"253 chỗ nghỉ"}]

const cardsPlan:HotelCity[] =[{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009656.jpg?k=350b38ee5a5f178f225d363eab93c7c14fbfee30168745e7db3a5fa38cd5be0e&o=",
  title:"Hải Phòng",
  details:["Cách đây 88km"]
},
{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009651.jpg?k=ab2b6aec98e6b079f180fbd339c4f5fc361e0c91079b92be6a48b2d5ed2d2c7f&o=",
  title:"Hạ Long",
  details:["Cách đây 128km"]
},
{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009670.jpg?k=09ac76969af5a6c85132994a1f95586c0a75235e8363572f4dc8e39aab86e828&o=",
  title:"Đảo Cát Bà",
  details:["Cách đây 129km"]
},
{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009628.jpg?k=585e0e51b1105b4663fca1d75c1471c1340620eac1d08cb6067581a75f950309&o=",
  title:"Thanh Hóa",
  details:["Cách đây 136km"]
},
{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009631.jpg?k=0a7b0e5ecefbdb4fbff9e76b49b9d28c3bcc8f816909b962d2e85d19e708b761&o=",
  title:"Sầm Sơn",
  details:["Cách đây 144km"]
},
{
  image:"https://cf.bstatic.com/xdata/images/xphoto/300x240/140009635.jpg?k=f2c73612dff8a1e2d4dd0ef0db3c206bf699b4d95a16f9e272a373892df422d7&o=",
  title:"Quảng Ninh",
  details:["Cách đây 177km"]
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
    <main >
      <section >
        <Hero />
      </section>
      <section className="flex flex-col gap-8 p-2 lg:px-32 md:w-full">
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
        <Covid19Help />
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Tìm kiếm gần đây của bạn</p>
          <div className="flex flex-col flex-wrap items-center justify-start gap-5 lg:flex-row">
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
              <AddressHotelCard url={'https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o='} name={'Đà Nẵng'}/>
              <AddressHotelCard url={'https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o='} name={'Tp. Hồ Chí Minh'}/>
            </div>
            <div className="flex justify-between gap-5">
              <AddressHotelCard url={'https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o='} name={'Hà Nội'}/>
              <AddressHotelCard url={'https://cf.bstatic.com/xdata/images/city/600x600/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o='} name={'Vũng Tàu'}/>
              <AddressHotelCard url={'https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o='} name={'Đà Lạt'}/>
            </div>
        </div>
        <ListCardByCategory  category={'Khám phá Việt Nam'} description={'Các điểm đến phổ biến này có nhiều điều chờ đón bạn'} cards={cards1} />
        <ListCardByCategory category={'Tìm theo loại chỗ nghỉ'} description={''} cards={cards2} />
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
            <SaleCard title={'Genius'} content={'duc ơi, bạn đang là Genius Cấp 1 trong chương trình khách hàng thân thiết của chúng tôi'} tooltip="chi phi phu" className="text-white bg-[#013B94]"/>
            <SaleCard title={'Giảm giá 10%'} content={'Tận hưởng giảm giá tại các chỗ nghỉ tham gia trên toàn cầu'}/>
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
            {location.map((loca, index)=><Location key={index} name={loca.name} detail={loca.detail} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
