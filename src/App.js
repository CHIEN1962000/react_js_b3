import logo from './logo.svg';
import './App.css';
import th from './th.png';
import React from 'react';
import Logo from './logo.svg';
import {base64Photo} from './Contain.js';
import DeleteIcon from './DeleteIcon';
import { useState } from 'react';
import styles from "./styles.module.css";
import Thuc_hanh_3 from './Thuc_hanh_3';
import Thuc_hanh_4 from './Thuc_hanh_4';


function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };
  const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;
  console.log('textStyle: ',textStyle)

  // const StyledText = styled.h2`
  //           color: ${(props) => {
  //             if (props.numClicked % 2 === 0) {
  //               return "blue";
  //             }
  //             return "red";
  //           }};
  //         `;

  return (
    <div className='App' style={{float:'left',margin:20}}>
      <div>
        <div>THỰC HÀNH 1</div>
          <div>Hướng dẫn dùng ảnh trong ReactJS</div>
            <img src={th} width={300} height={200}></img>
          <div>Đây là ảnh dùng require</div>
            <img src={require('./th.png')} width={300} height={200}></img>
            <div>Đây là ảnh dùng link online</div>
            <img src='https://msmobile.com.vn/upload_images/images/hinh-nen-phong-canh-dep-cho-may-tinh-2.jpg' width={300} height={200}></img>
            <div>Đây là ảnh dùng base64</div>
            <img src={base64Photo} width={300} height={200}></img>
            <div>Đây là ảnh dùng svg</div>
            <img src={Logo} width={300} height={200}/>
          <DeleteIcon/>
      </div>

        <div>
          <div>THỰC HÀNH 2</div>
          
          <div>CSS Modules</div>
          <button onClick={handleClick}>Click here</button>
          <h2 className={textStyle}>You clicked {numClicked} times</h2>

          <div>CSS Inline</div>
          <h2 
            style={{
            color:  (numClicked % 2 === 0) ? 'blue' : 'red'
          }}
            >You clicked {numClicked} times
          </h2>

          <div>Styled-Components</div>
          {/* <button onClick={handleClick}>Click here</button> */}
          {/* <StyledText numClicked={numClicked}>
              You clicked {numClicked} times
          </StyledText> */}
      </div>
      <div>
        <div>THỰC HÀNH 3</div>
          <Thuc_hanh_3></Thuc_hanh_3>

      </div>

      <div>
        <div>THỰC HÀNH 4 : Sử dụng Tailwind CSS cho form login</div>
          <Thuc_hanh_4></Thuc_hanh_4>
      </div>
      
    </div>
  );
}

export default App;