import { Breadcrumbs, Link } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import { GrNext } from 'react-icons/gr';
import "react-datepicker/dist/react-datepicker.css";
import Content from '@/components/SearchPage/Content';
import SearchTab from '@/components/SearchPage/SearchTab/SearchTab';



type Props = {}

const search = (props: Props) => {
    const route = useRouter();
    const {category} = route.query
    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Trang chủ
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Việt Nam
        </Link>,<Link
            underline="hover"
            key="2"
            color="inherit"
            href="/search?category=Thành%20Phố%20Đà%20Nẵng"
            onClick={handleClick}
        >
            Thành phố Đà Nẵng
        </Link>,<Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Đà Nẵng
        </Link>
    ]

  return (
    <div className="flex flex-col items-center justify-start px-4 py-4 lg:px-20">
        <div className="self-start">
                <Breadcrumbs
                separator={<GrNext />}
                aria-label="breadcrumb"
                className="text-xs"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </div>
        <div className="w-[90%] flex gap-2 py-6">
            <SearchTab />
            <Content />
        </div>
    </div>
  )
}

export default search