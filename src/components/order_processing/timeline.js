"use client"
import React, { useState } from 'react';
import { Steps } from 'antd';
import { EnvironmentOutlined, TruckOutlined, WalletOutlined } from '@ant-design/icons';
import { ColorFactory } from 'antd/es/color-picker/color';



const Timeline = () => {
    const [current, setCurrent] = useState(0);
    
    const onChange = (current) => {
        console.log('onChange:', current);
        setCurrent(current);
    };

    return (
        <Steps
            
            className="bg-[#71a31b] p-10"
            direction="horizontal"
            current={current}
            onChange={onChange}
            items={[
                {
                  title: 'Delivery Address---------------------',
                  description:'Home - jhg134ggv ghc Siddiq Nagar, HITEC City',
                  icon:<EnvironmentOutlined />
              },
              {
                  title: 'Delivery Options---------------------',
                  description:'Choose your convenient date and time for delivery',
                  icon:<TruckOutlined />
              },
              {
                  title: 'Payment Options',
                  description:'Pay Order amount by selecting any payment mode',
                  icon:<WalletOutlined />
                },
          
              ]}
            />
    );
};

export default Timeline;
