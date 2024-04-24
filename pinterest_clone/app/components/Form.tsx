"use client"

import React, { useState } from 'react';
import UploadImage from './UploadImage';
import { useSession } from 'next-auth/react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { FaChevronDown } from 'react-icons/fa';
import app from '../firebaseConfig';

function Form() {
  const { data:session } = useSession();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const router = useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const postId = Date.now().toString();
  const onSave=()=>{ uploadFile(); }

  const uploadFile=()=>{
    if (!file) return;

    const storageRef = ref(storage, 'pinterest/' + file.name);

    uploadBytes(storageRef, file).then(resp=>{
      getDownloadURL(storageRef).then(async(url)=>{
        const postData = { 
          title: title,
          desc: desc,
          link: link,
          image: url,
          userName: session.user.name,
          email: session.user.email,
          userImage: session.user.image,
          id: postId
        }

        await setDoc(doc(db, 'pinterest-post', postId), postData).then(resp=>{
          router.push("/" + session.user.email)
        })
      })
    })
  }
    

  return (
    <div className=' bg-white p-2'>
      <div className='font-semibold text-[20px] p-5 flex'>
        Create Pin
      </div>

      <div className='flex justify-end mb-6'>
          <button onClick={()=>onSave()}
            className='bg-red-500 p-2
            text-white font-semibold px-3 
            rounded-lg'>
            <span>Save</span>
          </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-4 gap-5'>

        <div className='col-span-1'>
          <UploadImage setFile={(file)=>setFile(file)} />        
        </div>
        
        
        <div className="col-span-2">
          <div className='w-[100%]'>
            
            <h2 className='text-[12px] mt-4 mb-2 w-full'>Title</h2>
            <input type='text' placeholder='Add a title' onChange={(e)=>setTitle(e.target.value)}
            className='text-[15px] w-full rounded-[15px] p-3 border-solid border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-sky-300'/>

            <h2 className='text-[12px] mt-4 mb-2 w-full'>Description</h2>
            <input type='text' placeholder='Add a detailed description' onChange={(e)=>setDesc(e.target.value)}
            className='text-[15px] w-full rounded-[15px] p-3 border-solid border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-sky-300'/>

            <h2 className='text-[12px] mt-4 mb-2 w-full'>Link</h2>
            <input type='text' placeholder='Add a link' onChange={(e)=>setLink(e.target.value)}
            className='text-[15px] w-full rounded-[15px] p-3 border-solid border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-sky-300'/>

            <h2 className='text-[12px] mt-4 mb-2 w-full'>Board</h2>
            <input type='text' placeholder='Choose a board'
            className='text-[15px] w-full rounded-[15px] p-3 border-solid border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-sky-300'/>

            <h2 className='text-[12px] mt-4 mb-2 w-full'>Tagged topics</h2>
            <input type='text' placeholder='Search for a tag'
            className='text-[15px] w-full rounded-[15px] p-3 border-solid border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-sky-300'/>

            <h2 className='text-[12px] mb-8 w-full text-gray-400'>Don't worry, people won't see your tags</h2>

            <h2 className='font-semibold text-[20px] p-5 flex'>More options <FaChevronDown className='text-[35px] hover:bg-gray-300 p-2 rounded-full cursor-pointer mx-2' /></h2>
            

            {/* <UserTag user={session?.user} /> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Form