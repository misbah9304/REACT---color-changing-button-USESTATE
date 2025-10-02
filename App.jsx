import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen  duration-200'
      style = {{backgroundColor: color}}
      >

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-cetner gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button 
          className='outline-none px-4 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'red'}}
          onClick={() => {(setColor('red'))}}>Red</button>
          <button 
          className='outline-none px-4 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'white'}}
          onClick={() => {(setColor('white'))}}>white</button>
          <button 
          className='outline-none px-4 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'green'}}
          onClick={() => {(setColor('green'))}}>green</button>
          <button 
          className='outline-none px-4 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'blue'}}
          onClick={() => {(setColor('blue'))}}>blue</button>
          <button 
          className='outline-none px-4 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'black'}}
          onClick={() => {(setColor('black'))}}>black</button>
          <button 
          className='outline-none px-4 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'violet'}}
          onClick={() => {(setColor('violet'))}}>violet</button>
          <button 
          className='outline-none px-4 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'beige'}}
          onClick={() => {(setColor('beige'))}}>beige</button>
          
          </div>
          

        </div>
      </div>
    </>
  )
}

export default App
