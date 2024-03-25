import Link from 'next/link';
const DeliveryAddress= () => {
    return (
        <>
            <div className='h-[100%]'>
                <h1 className="text-2xl ml-[17%] mt-[1%]"><b>Select your address</b></h1>
                <div className='bg-white w-[46%] flex text-center ml-[17%] mt-[1%] gap-[1%] rounded-lg h-[40%] justify-evenly'>
                <Link href="/" className='border-dashed border-2 border-red-500 rounded-md h-[80%] w-[45%] mt-[4%]'>
                        <div className='w-9 ml-[45%] mt-[20%]'><img class="w-[80%]" src='https://png.pngtree.com/png-vector/20230106/ourmid/pngtree-flat-red-location-sign-png-image_6553065.png'></img></div>
                        <div className='text-red-600 items-center mt-[5%] text-sm'><b>+ Add New Address</b></div>
                    </Link>
                     <Link href='/' className=' bg-neutral-900 w-[45%] h-[80%] rounded-md text-white mt-[4%]'>
                        <div className='flex h-[20%]'>
                            <div className='text-left p-3 h-[30%]'>Home</div>
                            <div className='h-[100%] w-[20%] ml-[60%]'><img class="w-[80%] rounded-full h-[80%] mt-[20%]" src='https://static.vecteezy.com/system/resources/previews/023/465/792/non_2x/check-mark-dark-mode-glyph-ui-icon-accept-action-task-management-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg'></img></div>
                        </div>
                        <div className='h-[1.5%] w-[15%] bg-yellow-600 rounded-md ml-[4.5%] mt-[1%]'></div>
                        <div className='text-left p-3  h-[60%] w-[50%] text-xs'>
                            <p className='text-left'>
                                Shaistha Samreen 54652 1255 Siddiq Nagar, HITEC City Hyderabad, 500081 Ph: 8639453160
                            </p>
                            <button className='mt-[10%] h-[25%] w-[70%] bg-neutral-600 rounded-full'>DEFAULT</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DeliveryAddress;