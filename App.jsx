import { useState } from 'react'
import MovieReview from './components/MovieReview';
import {FaStar} from "react-icons/fa";
import './App.css'
import axios from 'axios';

const colors ={
  orange: "#FFBASA",
  grey: "#a9a9a9"
}


function App() {

  const stars= Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue]= useState(undefined);


  const handleClick= value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseOverLeave = ()=> {
    setHoverValue(undefined)
  }



  return (
    
      <div style={styles.container}>
        <h2>Does it show</h2>
        <MovieReview/>
        <div style={styles.stars}>
          {stars.map((_, index)=>{
            return(
              <FaStar
              key={index}
              size={24}
              style={{
                marginRight:10,
                cursor: "pointer"

              }}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              onClick={()=> handleClick(index + 1)}
              onMouseOver ={()=> handleMouseOver(index + 1)}
              onMouseLeave = {handleMouseOverLeave}
              />
            )
          })}
        </div>
      </div>
    
  );
};

const styles ={
  container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}

export default App
