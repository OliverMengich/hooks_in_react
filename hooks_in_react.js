import "./styles.css";
import React,{useRef, useReducer, useEffect } from 'react';
import axios from 'axios';
const StateTutorial = () =>{
  const [name, setName] = React.useState('Oliver');
  return( <div>
        <input type='text' placeholder='enter something' onChange={e=> setName(e.target.value)} />
        <h2>{name}</h2>
        </div>
  )
   
}
const reducer = (state, action) =>{
   switch (action.type) {
     case 'INCREMENT':
       return{ count: state.count+1, showText: state.showText }
     case 'TOOGLE':
      return{ count: state.count, showText: !state.showText}
     default:
       return state;
   }
}
const ReducerTutorial = () =>{
  const [state, dispatch] = useReducer(reducer,{
    count: 0,
    showText: true
  });
  return(
    <div>
       <input type='text' placeholder='type something' onChange={()=>{ dispatch({type: 'INCREMENT'}); dispatch({type: 'TOOGLE'})} } />
       <h1>{state.count} words typed</h1>
       {state.showText && <h1>Toggle text</h1>}
    </div>
  )
}
const EffectTutorial = () =>{
  const [data, setData] = React.useState('');
  useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/comments')
     .then(res=>{
       setData(res.data[0].email)
     })
  },[])
  return(
  <div>
     <h1>Hello from {data}</h1>
  </div>)
}
const RefTutorial = () =>{
  const inputRef = useRef(null);
   return(
     <div>
       <h1>Hello from Oliver</h1>
       <input type='text' placeholder='Ex...' ref={inputRef} />
       <button onClick={()=>{ inputRef.current.focus(); inputRef.current.value=''; console.log(inputRef.current.value) }}>Change name</button>
     </div>
   )
}
export default function App() {
   
  return (
    <div className="App">
       <RefTutorial />
    </div>
  );
}
