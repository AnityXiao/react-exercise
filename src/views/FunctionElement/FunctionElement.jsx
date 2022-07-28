import './FunctionElement.scss'
import pic from '../../assets/images/pic1.jpg'
import React, { useState } from 'react'
import { HeartTwoTone } from '@ant-design/icons'
import { Button } from 'antd'
export default function FunctionElement() {
    let [motto, setMotto] = useState('山上不仅有花开，还有我那浪漫的21岁')
    function changeMotto(){
        setMotto("在这万物荒芜的阵痛世界，你是我心尖上一尘不染的白色玫瑰")
    }
    return (
        <div className='function-element'>
            <img src={pic} className='img_pic' alt="" />
            <p>{motto}<HeartTwoTone twoToneColor="#eb2f96" /></p>
            <Button type="primary" ghost onClick={changeMotto}>
                CHANGE
            </Button>
        </div>
    )
}
