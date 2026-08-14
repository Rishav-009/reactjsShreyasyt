import React from 'react'
import Card from './components/card'

const App = () => {
  return (
  
    <div className="parent" >
      <Card user="Aman" age={18} gender="M" image="https://plus.unsplash.com/premium_photo-1680132275157-187181f726cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Rishav" age={21} gender="M" image="https://images.unsplash.com/photo-1785301973694-d95aebf5bdb8?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user ="piyush" age={21} gender="M" image="https://images.unsplash.com/photo-1661811319323-050333ada2c9?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user ="navi" age={22} gender="M" image="https://images.unsplash.com/photo-1712403246806-7dabb43c67f6?q=80&w=814&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "navroz" age={20} gender="M" image="https://images.unsplash.com/photo-1688747935188-135feac8880b?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "siya" age={19} gender="F" image="https://images.unsplash.com/photo-1611262081954-582e7072c805?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
