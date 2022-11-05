import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div >
        <p className='p-5'>I am Home Page</p>
        <ol className='space-y-5 p-5'>
            <li><Link href={`/todos`} >Go to : Todo Page</Link></li>
            <li><Link href={`/search`}>Go to : Search Page</Link></li>
        </ol>
    </div>

    
  )
}

export default Home