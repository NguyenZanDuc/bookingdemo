import React, { useState } from 'react'
import FormInput from '../ui/FormInput/FormInput'
import { Checkbox, Radio } from '@mui/material';
import Select from 'react-select';
import useSettings from '@/hooks/useSettings';


type Props = {}

const FormC = (props: Props) => {
  const {setIsAvailability} = useSettings()
  const [isAgreeOne, setIsAgreeOne] = useState(true)
  const [isAgreeTwo, setIsAgreeTwo] = useState(true)
  function HandleChangeOne(e:any){
    setIsAgreeOne(e.target.checked)
    setIsAvailability(isAgreeTwo&&e.target.checked)
  }
  function HandleChangeTwo(e:any){
    setIsAgreeTwo(e.target.checked)
    setIsAvailability(isAgreeOne&&e.target.checked)
  }
  return (
    <FormInput>
        <p className="py-2 text-lg">Quý vị sắp hoàn tất rồi – chỉ còn vài điều lưu ý cuối cùng</p>
        <p className="text-xl font-light">Tình trạng phòng trống của Quý vị</p>
        <p className="text-sm font-light">Để giúp Quý vị bắt đầu kiếm doanh thu, chúng tôi sẽ tự động mở chỗ nghỉ của Quý vị cho khách đặt trong 18 tháng tới. Nếu muốn thay đổi tình trạng phòng trống trước khi mở, Quý vị có thể chọn "hoàn tất đăng ký và mở sau". Tình trạng phòng trống cũng có thể được điều chỉnh sau khi Quý vị mở phòng cho khách đặt.</p>
        <p>Để hoàn tất đăng ký, vui lòng đánh dấu vào những ô dưới đây:</p>
        <div className="flex items-start justify-start gap-2">
            <Checkbox size='small' checked={isAgreeOne} onChange={HandleChangeOne}/>
            <p className='text-sm font-light'>Tôi chứng nhận đây là hoạt động kinh doanh lưu trú hợp pháp được cấp đầy đủ bằng và giấy phép cần thiết, có sẵn để trình khi có yêu cầu. Booking.com B.V. có quyền kiểm chứng và điều tra bất kỳ thông tin bên Quý vị cung cấp khi đăng ký.</p>
        </div>
        <div className="flex items-start justify-start gap-2">
            <Checkbox size='small' checked={isAgreeTwo} onChange={HandleChangeTwo}/>
            <p className='text-sm font-light'>Tôi đã đọc, chấp nhận và đồng ý với Điều khoản chung và Chính sách An toàn và Bảo mật.
            Booking.com cho phép chỗ nghỉ và khách trao đổi qua Booking.com, nơi tiếp nhận và xử lý thông tin liên lạc tuân thủ theo Chính sách An toàn và Bảo mật và Điều khoản chung của Booking.com.</p>
        </div>
    </FormInput>
  )
}

export default FormC