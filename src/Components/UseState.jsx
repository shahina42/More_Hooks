import React,{useState} from 'react'


function UseState() {
    const[state,useState]=useState([]);
    const handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            setState((prevState)=>[...prevState,{
                val:e.target.value,id:prevState.length,toggle:false
            },]);
        }
    } ;
    const toggleItem=(index)=>{
        setState((prevState)=>prevState.map((item)=>item.id==index?{
            ...item,toggle:!item.toggle
        }:item));
    };
  return (
    <>
    <input type="text" onKeyPress={(e)=>handleKeyPress(e)} />
    {state.map((item)=>(<div key={item.id} className='textAndButton'>{item.toggle? <h1>Hidden Content</h1>:<h1>{item.val}</h1>}
    <button onClick={()=>toggleItem(item.id)}>Toggle</button>
    </div>))}
    </>
  );
}

export default UseState