import './App.css';
import { useState,useEffect } from 'react';
import PageViewCounter from './Components/PageViewCounter';
function App() {
  const [counto,setCounto] = useState(0)
  function getOrSet(){
    if(localStorage.getItem("counto")){
      setCounto(localStorage.getItem("counto"))
      console.log(counto)
    }else{
      localStorage.setItem("counto",0)
      setCounto(localStorage.getItem("counto"))
    }
  }
  useEffect(()=>{
    getOrSet()
    localStorage.setItem("counto",Number(localStorage.getItem("counto"))+1)
    setCounto(localStorage.getItem("counto"))
  },[])
    
  return (
    <div className="App">
      <PageViewCounter counto={counto}/>
    </div>
  );
}

export default App;
