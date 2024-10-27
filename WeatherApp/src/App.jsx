import React from 'react'
import Header from './component/Header'
import CardR1 from './component/CardR1'
import CardR2 from './component/CardR2'
import CardL1 from './component/CardL1'


const App = () => {
  return (
    <div>
      <Header />

      <div className='flex'>
        <CardR1 />
        <div className='mx-[-70px]'>
          <CardL1 />
        </div>
      </div>

      <div className='mt-[-200px]'>
        <CardR2 />
      </div>

    </div>
  )
}
export default App