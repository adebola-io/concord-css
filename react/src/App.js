import React from 'react'
import SidebarBtn from './components/SidebarBtn'
import './App.css'

const App = () => {
  return (
    <div id='app' className='flex cx cy'>
      <SidebarBtn type='hamburger'/>
    </div>
  )
}
export default App