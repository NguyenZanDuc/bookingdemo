import React from 'react'
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
type Props = {}

const Auth = (props: Props) => {
    const user = useUser();
    const supabase = useSupabaseClient();
    async function HandleSignOut(){
       await supabase.auth.signOut();
    }
  return (
    <>
      {user?(
           <div className="flex items-center justify-center gap-2 p-2 hover:bg-white hover:bg-opacity-10 rounded-xl" onClick={HandleSignOut}>
                <Image src={'/avatar.png'} alt={''} height={25} width={25} className="rounded-full"/>
                <div className="flex flex-col items-start justify-center gap-1">
                    <p className="text-xs font-bold">duc nguyen</p>
                    <p className="text-xs font-medium text-[#FEC11C]">Genius Cap 1</p>
                </div>
            </div>
        ):(
        <div className="flex items-center justify-center gap-2">
             <Button variant="outlined"><a href="#" className="text-[#57B9FF]">Đăng ký</a></Button>
             <Button variant="outlined"><a href="/Login" className="text-[#57B9FF]">Đăng nhập</a></Button>
         </div>
        )}
    </>
  )
}

export default Auth