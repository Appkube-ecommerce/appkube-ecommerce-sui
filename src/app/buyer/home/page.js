import Footer from '@/components/buyer/home/Footer'
import Header from '@/components/buyer/home/Header'
import MyBasket from '@/components/buyer/home/MyBasket'
import React from 'react'

const page = () => {
  return (
    <div className='container-fluid flex flex-col w-[100%] min-h-[100vh]'>
    <RootLayout includeHeader={false}>
  {/* Content goes here */}
  <MyBasket/>
</RootLayout>

   

    </div>
  )
}

export default page
