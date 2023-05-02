import React, { useState } from 'react'
import Helper from '../svg/Helper'
import { MdExpandMore } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {}

const Covid19Help = (props: Props) => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <div className=" p-2 border-[0.5px] border-gray-300 duration-500 w-full cursor-pointer" onClick={handleToggle}>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  <Helper />
                  <p>Trợ giúp về virus corona (COVID-19)</p>
                </div>
                <MdExpandMore className="w-6 h-6" rotate={"180"}/>
            </div>
            <AnimatePresence>
              {open&&(
                <motion.div initial={{translateY:-20}} whileInView={{translateY:0, transition:{duration:0.3, ease: "easeInOut"}}}  className="flex-col items-start gap-2 ">
                    <p className="text-sm">Nhận lời khuyên mà bạn cần. Xem các hạn chế liên quan đến COVID-19 mới nhất trước khi du lịch.</p>
                    <a className="text-sm text-blue-500 cursor-pointer"  href="#">Tìm hiểu thêm</a>
                  </motion.div>)
                }
            </AnimatePresence>
          </div>
  )
}

export default Covid19Help