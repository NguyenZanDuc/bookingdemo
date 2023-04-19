import { Avatar } from '@mui/material'
import React from 'react'

type Props = {}

const CardComment = (props: Props) => {
  return (
    <div className="w-[600px] border-[0.3px] border-gray-300 p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
            <Avatar  className="bg-[#F09960] w-10 h-10 text-white">T</Avatar>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Thi</p>
                <div className="flex items-center">
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAclBMVEX///8AAAAAAAAAAAAAAAD////++fn29vbv7+/85uj62dz50tX4zdD3ycz2wcX2u77yparxmJ7wj5buiIvsf4LqZWzoX2XoW2DmW1vmT1LmTVLkP0jiPz/jPUXiNT/iMDrhMDPdEh7dDxvbDw/cCw7bCwsmrPLtAAAABXRSTlMAESIzRJTdRHwAAACNSURBVHjardFtD4IgEMBx0fChMk0SpAwN8Pt/Rd3dxopdm239X93dj3ck/4yRbXdOxpKUhnQHVK0QbfUGOU4XOSg1yAa3PMBR3yF9ikCMD2i8BShgUvMEzRoeFgGe9gVZE0HvLOQU/4TaOoQmQMmhq1u8X3yHWwmAnXtjZM0jCO0Cqg1YdiDK2Ncf/L0VctoPl97VLi8AAAAASUVORK5CYII=' alt='' className="w-[14] h-[14]" />
                    <p className="text-xs text-gray-400">Nhật Bản</p>
                </div>
            </div>
        </div>
        <p className="text-sm">
            “nhân viên rất tốt, đặc biệt tôi rất thích bạn nhân viên ở trên quầy bar tầng 25, lúc nào cũng tươi cười thân thiện! ko để ý tên bạn ấy nhưng cho bạn ấy 10 điểm.
            khách sạn rất sạch sẽ, thơm, dọn phòng chu đáo cẩn thận.
            đồ ăn đa dạng, ngon.
            giường...”
        </p>
        <div>
            <button className="text-sm  text-[#0171C2] hover:underline">Tìm hiểu thêm</button>
        </div>
    </div>
  )
}

export default CardComment