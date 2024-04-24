"use client"
import React from 'react'
import Image from 'next/image'

interface User {
  name?: string;
  image?: string;
}

function UserTag({ user  = {} as User}) {
  const { name = '', image = '' } = user;
  return (
    <div>
        {user?
            <div className='flex gap-3 items-center'>
                <Image src={ image } alt="user image" width={25} height={25} className='rounded-full ml-6 mb-4'/>

                <div>
                    <h2 className='text-[14px] font-medium mb-4'>{name}</h2>
                </div>
            </div>
        :null}
    </div>
  )
}

export default UserTag