import { createContext, useContext,  useState, ReactNode} from "react"

interface countContextProps{
  count: number;
  increment: ()=> void;
  decrement: ()=> void;
}

export const CountContext = createContext<countContextProps |undefined>(undefined)

export const CountProvider = ({children}: {children : ReactNode})=>{
  
  const[count, setCount]= useState(0)

  const increment =()=> setCount((count)=>count+1);
  const decrement =()=> setCount ((count)=> count >0? count-1:0)

  return(
    <CountContext.Provider value ={{count, increment, decrement}}>
      {children}
    </CountContext.Provider>

  )
}

export const useCount =()=>{
  const context = useContext(CountContext)

  if(!context){
    throw new Error ("usecount must be within count provider")
  }
  return context;
}