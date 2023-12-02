'use client'
import { useEffect, useState } from 'react';
import ProfileBar from '../components/profile-bar'
import dynamic from 'next/dynamic'

const ButtonIcon = dynamic(() => import('../components/button-icon'), { ssr: false });

export default function Home() {
  const [subreddit, setSubReddit] = useState('webdev')

  useEffect(() => {
    fetch('https://www.reddit.com/r/Catmemes.json?limit=8').then(res => {
      if (res.status !== 200) {
        return console.error('ERROR')
      }
      res.json().then((data) => {
        console.log('response', data.data.children)
      })
    })
  }, [subreddit])

  const iconFilterData = [
    { title: 'Hot', img: '/icon/icon-fire.svg', onClick: () => console.log('Hot') },
    { title: 'New', img: '/icon/icon-new.svg', onClick: () => console.log('New') },
    { title: 'Top', img: '/icon/icon-top.svg', onClick: () => console.log('Top') },
  ];

  return (
    <main className="md:container md:mx-auto flex min-h-screen items-center flex-col content-center">
      <div className='header-wrapper container justify-start flex bg-sky-300'>
        <div className="header-container container mt-10 bg-cardBackground">
          <ProfileBar />
        </div>
      </div>

      <div className='threads-wrapper container flex items-center justify-start'>
        <div className="
        filter container flex bg-cardBackground mt-4
        rounded-md border-gray-500 h-18
        border-solid border">
          {
            iconFilterData.map((data, index) => (
              <div key={index}
                className="
                filter__button rounded-lg 
                mr-4 p-2 h-auto w-20 
                flex hover:bg-gray-700
              ">
                <ButtonIcon
                  title={data.title}
                  img={data.img}
                  onClick={data.onClick}
                />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
