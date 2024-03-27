import Link from 'next/link';
const DeliveryAddress= () => {
    return (
        <div className=' h-screen bg-slate-200'>
                <div className=''>

                <h1 className="text-2xl"><b>Select your address</b></h1>
                <div className='bg-white shadow-lg flex rounded-lg h-[30%] w-[40%] p-4 mt-[1%]'>
                <Link href="/" className='border-dashed border-2 border-red-500 rounded-md items-center justify-center'>
                        <div><img class="h-[10%] w-[16%]" src='https://png.pngtree.com/png-vector/20230106/ourmid/pngtree-flat-red-location-sign-png-image_6553065.png'></img></div>
                        <div className='text-red-600 text-sm'><b>+ Add New Address</b></div>
                    </Link>
                     <Link href='/' className=' bg-neutral-900 rounded-md text-white'>
                        <div className='flex h-[20%]'>
                            <div className='text-left p-3 h-[30%]'>Home</div>
                            <div className='h-[100%] w-[20%] ml-[60%]'><img class="w-[80%] rounded-full h-[80%] mt-[20%]" src='https://static.vecteezy.com/system/resources/previews/023/465/792/non_2x/check-mark-dark-mode-glyph-ui-icon-accept-action-task-management-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg'></img></div>
                        </div>
                        <div className='h-[1.5%] w-[15%] bg-yellow-600 rounded-md ml-[4.5%] mt-[1%]'></div>
                        <div className='text-left p-3  h-[60%] w-[50%] text-xs'>
                            <p className='text-left'>
                                Shaistha Samreen 54652 1255 Siddiq Nagar, HITEC City Hyderabad, 500081 Ph: 8639453160
                            </p>
                            <button className='mt-[10%] h-[25%] w-[70%] bg-neutral-600 rounded-full text-xs'>DEFAULT</button>
                        </div>
                    </Link>
                </div>
                </div>
            </div>
        
    )
}

export default DeliveryAddress;