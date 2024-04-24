"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { getFirestore, doc, setDoc } from "firebase/firestore"
import app from "./../firebaseConfig"

const navigation = [
    { name: 'Home', href: '#', current:true },
    { name: 'Explore', href: '#', current:false },
    { name: 'Create', href: '#', current:false }
];

function Header() {
    const { data: session } = useSession();
    const db = getFirestore(app);
    const router = useRouter();

    useEffect(()=>{
        saveUserInfo();
    },[session]);

    const saveUserInfo=async()=>{
        if(session?.user){
            await setDoc(doc(db, "user", session.user.email), {
                email: session.user.email,
                userImage: session.user.image,
                userName: session.user.name
            });
        }   
    }

    const onCreateClick=()=>{
        if(session){
            router.push('/pin-creation-tool')
        }
        else{ signIn(); }
    }

    return (
    <div className='flex justify-between gap-3 md:gap-2 items-center p-3'>
        <Image src='/logo.png' alt='logo' width={45} height={45} onClick={()=>router.push('/')}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>

        <button className='font-semibold p-3 px-4 rounded-full focus:bg-black focus:text-white' 
        onClick={()=>router.push('/')}>Home</button>
        <button className='font-semibold p-3 px-4 rounded-full focus:bg-black focus:text-white'>Explore</button>
        <button className='font-semibold p-3 px-4 rounded-full focus:bg-black focus:text-white'
        onClick={()=>onCreateClick()}>Create</button>

        <div className='bg-[#f1f1f1] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex hover:bg-[#e1e1e1]'>
            <FaSearch className='text-[15px] text-gray-500'/>
            <input type='text' placeholder='Search' className='font-semibold bg-transparent outline-none w-full placeholder:text-[#6b7280]'/>
        </div>

        <FaBell className='text-[50px] text-gray-500 hover:bg-gray-300 px-2 rounded-full cursor-pointer'/>
        <IoChatbubbleEllipses className='text-[55px] text-gray-500 hover:bg-gray-300 px-2 rounded-full cursor-pointer'/>

        {session?.user?
            <Image src={ session.user.image } 
            onClick={ ()=>router.push('/' + session.user.email) } 
            alt='user-image' width={45} height={45}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>:
            <button onClick={() => signIn()} className='font-semibold p-3 px-4 rounded-full'>Login</button>
            // <FaChevronDown className='text-[35px] hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
        }
    </div>
    )
}

export default Header