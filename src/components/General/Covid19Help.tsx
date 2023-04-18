import React from 'react'
import Helper from '../svg/Helper'
import { MdExpandMore } from 'react-icons/md'

type Props = {}

const Covid19Help = (props: Props) => {
  return (
    <div className="group p-2 border-[0.5px] border-gray-300 duration-500 w-full">
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
  )
}

export default Covid19Help