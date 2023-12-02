import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CAT_PROFILE = 'https://styles.redditmedia.com/t5_2veuf/styles/communityIcon_z98fuldvb6p61.jpg?width=256&format=pjpg&s=c5e5a6f768ae3b4846a57c10a6f417a17c637f66'

const ProfileBar = () => {
  return (
    <div className='flex w-48 justify-start items-center'>
      <Avatar className="w-16 h-16 border-4 border-white">
        <AvatarImage
          src={CAT_PROFILE}
          alt="cat-profile"
          h={'72px'}
          w={'72px'}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='title-wrapper pl-2'>
        <h1 className='text-base text-white'>Memes of cats</h1>
        <h2 className='text-sm text-gray-500'>r/Catmemes</h2>
      </div>
    </div>
  )
}

export default ProfileBar;
