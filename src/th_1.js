import React from 'react'
import th from './th.png';

export default function th_1() {
  return (
    <div className='container'>
        <div>Đây là hướng dẫn dùng ảnh trong React js</div>
        <img src={th} width="280" height="200" className='img'></img>
            
        <div className='require-title'>Đây là dùng require</div>
        <img src={require('./th.png')} className='img2'></img>
    </div>
  );
}
