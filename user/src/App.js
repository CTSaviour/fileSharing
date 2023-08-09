// import {useRef, useState, useEffect} from 'react';

// import logo from './logo1.jpg';
// import './App.css';
// import { uploadFile } from './services/api';

// function App() {
  
//   const fileInputRef = useRef();
  
//   const onUploadClick = () => {
//     fileInputRef.current.click();
//   }

//   const [file, setFile] = useState('');

//   console.log(file);

//   // routing the images 
//   useEffect ( () => {
    
//     const getImage = async () => {
//     if(file) {
//       const data = new FormData();
//       data.append("name", file.name);
//       data.append("file", file);

//       let response = await uploadFile(data);
//      }
//     }
//     getImage();
//   },[file])

//   return (
//     <div className="container">
//       <img src={logo} alt="left banner" />

//         <div className="wrapper">
//           <h1>Simple File Sharing</h1>
//           <p>Upload and share your files</p>

//           <button onClick={() => onUploadClick()}>upload</button>
//           <input type="File" 
//             ref={fileInputRef}
//             style = {{display:'none'}}

//             // for selecting the multiple files
//             onChange = {(e) => setFile(e.target.files[0])}
//           />
//         </div>
//       </div>
//   );
// }

// export default App;

// jshintesversion:6

import React from 'react';

import { useState, useEffect, useRef } from 'react';
import './App.css';
import logo from './logo1.jpg';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');

  // to show the path in the frontend
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>

      <img src={logo} alt="left banner" />
      
        <div className='wrapper'>
          <h1>Simple file sharing!</h1>
          <p>Upload and share the download link.</p>
        
          <button onClick={() => onUploadClick()}>Upload</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result} target='__blank'>{result}</a>

      </div>
    </div>
  );
}

export default App;