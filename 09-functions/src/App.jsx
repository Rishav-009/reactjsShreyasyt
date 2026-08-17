// import React from 'react'

// const App = () => {
  
  // }
  // const MouseEnter = ()=>{
  //   console.log("Mouse Enter")
  // }
  /* <h2> Hello , Rishav </h2>
      <button onClick={bntClicked} onMouseEnter={MouseEnter}> Click here </button> */

//       function bntClicked(val){
//         console.log(val)
//       }
//   return (
//     <div>
//       <input 
//         onChange={(elem)=>{
//           bntClicked(elem.target.value)
//         }}
//         type='text' placeholder='Enter the input'
//       />
//     </div>
//   )
// }

// export default App
//2.....
import React from 'react'
// console.log("page Scrolling at the speed",elem.deltaY)
const App = () => {
  function pageScrolling(elem){
    if(elem>0){
      console.log("downScrolling....")
    }
    else{
      console.log("upScrolling......")
    }
    
  }
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App


