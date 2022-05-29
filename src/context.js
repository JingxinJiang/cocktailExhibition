import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import paginate from './utils'
const url1='https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading]=useState(true);
  const [firstLetter, setLetter]=useState('S');
  const [data, setData]=useState([]);
  const [page,setPage]=useState(0);
  const [itemdata, setItemData]=useState([]);
  function handleClick(index)
  {
    setPage(index);
  }
  function handlePrev()
  {
    var newPage=page-1;
    if(newPage<0){
        newPage=data.length-1;
    }
    setPage(newPage);
  }
  function handleNext()
  {var newPage=page+1;
    if(newPage>=data.length){
        newPage=0;
    }
    setPage(newPage);
  }
   useEffect(() => {
    if (loading) return    
    setItemData(data[page])
  }, [loading, page,data])
  const fetchDrink=useCallback(async()=>{
    try {
      setLoading(true);
      const response=await fetch(`${url1}${firstLetter}`);
      const data=await response.json();
      console.log(data);
      const {drinks}=data;
      if(drinks){
        const newCocktails=drinks.map((item)=>{
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
          return ({id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass});
        })
        //setData(newCocktails);
        setData(paginate(newCocktails));
        console.log(newCocktails);
      }else{
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[firstLetter])
  useEffect(()=>{fetchDrink();},[firstLetter,fetchDrink])
  function changeFirstLetter(){  
    var num=firstLetter.charCodeAt(0);
    console.log(num);  
    setPage(0);
    if(num+1>90){
      num=65;
    }
    else if(num+1===85){
      num=86;
    }else if((num+1)===88){
      num=89;
    }
    else {num++;}
    var out = String.fromCharCode(num);
    setLetter(out);
    console.log(out);
  }
  return <AppContext.Provider 
  value={{
    firstLetter,
    data,
    changeFirstLetter,
    handleClick,
    handlePrev,
    handleNext,
    itemdata,
    page
    }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
