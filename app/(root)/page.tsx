import MostDelicious from '@/components/MostDelicious'

import sampleData from '@/lib/constants'
import React from 'react'

const Home = () => {
  return (
    <div className='space-y-8 h-screen  p-10' >
      <h2 className='text-primary font-bold text-2xl'>Most Delicious</h2>
      <MostDelicious data={sampleData.products} />
    </div>
  )
}

export default Home