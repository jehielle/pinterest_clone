import React from 'react';
import Image  from 'next/image';
import { useRouter } from 'next/navigation';
import UserTag from './UserTag';

function PinItem({ pin }) {
    const router = useRouter();
    const user = {
        name: pin?.userName,
        image: pin?.userImage
    }

  return (
    <div>
        <div className=" w-fit relative before:absolute cursor-pointer m-5 hover:rounded-2x1"
        onClick={()=>router.push("/pin/"+pin.id)}>
            <Image src={pin.image} alt={pin.title} width={500} height={500}
            className='rounded-2xl cursor-pointer relative hover:opacity-50' />
       </div>

        <h2 className='font-bold text-[18px] mb-1 mt-2 ml-6 line-clamp-2'>{ pin.title }</h2>
        <UserTag user={{ name: pin.userName, image: pin.userImage }} />
    </div>
  )
}

export default PinItem