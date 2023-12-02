import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ButtonIcon = ({ title, img, ...props }) => {
  return (
    <div className='button-icon-wrapper flex center items-center text-gray-500'
      {...props}
    >
      <Avatar className="mr-2 w-max h-6">
        <AvatarImage
          src={img}
          alt={`icon-${title}`}
          h={'72px'}
          w={'72px'}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1>{title}</h1>
    </div>
  )
}

export default ButtonIcon;
