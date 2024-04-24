import React, { useState } from 'react'
import { PiArrowCircleUpFill } from "react-icons/pi";
function UploadImage({ setFile }) {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <div className='h-[450px] bg-[#e9e9e9]
    rounded-[35px] border-[2px] border-gray-300 border-dashed'>
        
        <label className='m-5 flex flex-col justify-center items-center
        cursor-pointer h-[90%]'>           
          {!selectedFile?
          <div className='flex items-center flex-col'>
            <PiArrowCircleUpFill className='text-[40px]'/>   
            <h2 className=' p-[35px]'>Choose a file or drag and drop it here. We recommend using high quality .jpg files less than 20MB or .mp4 files less than 200MB.</h2>
            </div>
          :null}

          {selectedFile?
            <img src={window.URL.createObjectURL(selectedFile)}
            alt='selected-image'
            width={500}
            height={800}
            className='object-contain h-[90%]'
          />:null}

            <input id="dropzone-file" type="file" className="hidden"  
             onChange={(e)=>{setFile(e.target.files[0]);
             setSelectedFile(e.target.files[0])}} />
        </label>
    </div> 
  )
}

export default UploadImage