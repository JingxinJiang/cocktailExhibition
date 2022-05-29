import React from 'react'

import FollowerD from './Follower2'
import { useGlobalContext } from './context'
function App() {
    const {page,firstLetter, data,changeFirstLetter,handleClick,
  handlePrev,
  handleNext,
  itemdata}=useGlobalContext();
 
  return (<main>
    <section className="section-title">
      <h2>Cocktails exhibition</h2>
      {/* <div className="underline"></div> */}
    </section>
    <section className="followers ">
      <div className="container">                  
           {console.log(itemdata)}
           {itemdata.map((item,index)=>{               
            return(<FollowerD key={index} {...item}/>
            ) })}                        
      </div>
      <div className="btn-container">
        <button className='page-btn' onClick={()=>handlePrev()}>prev</button>
        {data.map((item,index)=>{
              return(
                <button key={index} className={page===index?'page-btn active-btn':'page-btn null'} onClick={()=>handleClick(index)}>{index+1}</button>              
                )
            })}
        <button className='page-btn' onClick={()=>handleNext()}>next</button>
        <button className='page-btn' onClick={()=>changeFirstLetter()}>
            {firstLetter}
           </button>
      </div>
    </section>
    </main>)
}

export default App
