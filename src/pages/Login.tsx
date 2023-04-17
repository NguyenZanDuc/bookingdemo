import Phone from '@/components/svg/Phone'
import { Button, Divider, TextField } from '@mui/material'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

type Props = {}

  
  

const Login = (props: Props) => {
    const supabase = useSupabaseClient();
    const route = useRouter();
    async function HandleSingInFaceBook(){
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'facebook',
          })
          route.replace("/");
    }
    async function HandleSingInGoogle(){
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
          })
          route.replace("/");
    }
  return (
    <div className="w-screen h-screen bg-[rgb(1,47,119)] flex flex-col">
        <div className= "flex flex-col items-center justify-center flex-1 gap-5 text-white bg-black">
            <p className="text-2xl font-semibold">Đăng nhập hoặc tạo tài khoản</p>
            <input type="text" placeholder='email' className="outline-none bg-black w-[360px] border-[1px] rounded-md border-gray-500 hover:border-[#0158BA] py-2 px-2"/>
            <a href="" className="py-3 rounded-md bg-[#012F77] text-white w-[360px] text-center" >Tiếp tục với email</a>
            <p className="text-xs text-gray-500">hoặc sử dụng một trong các lựa chọn này</p>
            <div className="flex justify-center gap-6">
                <div className="p-4 border-[0.3px] border-gray-700 rounded-md" onClick={HandleSingInFaceBook}>
                    <FaFacebookSquare color='#6E9BCA' className="w-8 h-8"/>
                </div>
                <div className="p-4 border-[0.3px] border-gray-700 rounded-md" onClick={HandleSingInGoogle}>
                    <FcGoogle color='#6E9BCA' className="w-8 h-8"/>
                </div>
                <div className="p-4 border-[0.3px] border-gray-700 rounded-md flex justify-center items-center">
                    <Phone/> 
                </div>
            </div>
            <a href="#" className="text-sm font-medium text-[#0158BA]">Nhiều cách đăng nhập khác</a>
            <div className="flex flex-col items-center justify-center gap-3 text-xs w-[340px]">
                <p>Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các</p>
                <p className="text-center">Điều khoản và Điều kiện cũng như Chính sách An toàn và Bảo mật của chúng tôi</p>
            </div>
        </div>
    </div>
  )
}

export default Login