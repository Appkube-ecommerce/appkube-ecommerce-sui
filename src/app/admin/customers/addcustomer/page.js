import React from 'react'
import Addproduct from '@/components/admin/customers/addcustomer/addcustomer'
import {store} from '../../../../components/redux/store'
import {Provider}  from 'react-redux'
const Page = () => {
  return (
    <Provider store={store}>

        <Addproduct />
    </Provider>
  )
}

export default Page