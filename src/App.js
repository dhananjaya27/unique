import React, { useState } from 'react';
import menu from './data'


const unique=["all",...new Set(menu.map((cata)=>cata.category))]

function App() {
  const [item, setitem] = useState(menu);
  const[catagory,setCatagory]=useState(unique)
 function specific(category){
    if(category==="all"){
      return setitem(menu)
    }
    const updated=menu.filter((c)=>{
      return c.category===category
       })
       setitem(updated)
 }

  return (
    <>
    <div className='header'>
      <hi>our menu</hi>
      <div className='catagories'>
        {catagory.map((category)=>{
          return(
            <button onClick={()=>specific(category)}>{category}</button>
          )
        })}
         
        
      </div>
    </div>
    <div>
     {item.map((item)=>{
       console.log(item)
       const {category,title}=item
       return(
         <>
         <h1>{title}</h1>
         <h1>{category}</h1>
         </>
       )
     })}
    </div>
    </>
  )


}

export default App;
