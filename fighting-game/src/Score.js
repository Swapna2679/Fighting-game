
import React,{useEffect,useState} from 'react'

function Score() {

const initial1 =100
const initial2 =100

const [count1,setCount1]=useState(initial1)
const [count2,setCount2]=useState(initial2)

const [disable1,setDisable1]=useState(false)
const [disable2,setDisable2]=useState(false)
const [disable3,setDisable3]=useState(false)
const [disable4,setDisable4]=useState(false)
const [disable5,setDisable5]=useState(false)
const [disable6,setDisable6]=useState(false)

  useEffect(() => {
    setTimeout(() => {
        <h1>Game Over</h1>
    }, 10);
  });

return (
    <div>
        <br />

        Hero - {count1}
        <br />
        <button disabled={disable1} onClick = {()=> {setCount2(count2 - 5);setDisable1(true)}}>weapon-1</button>
        <button disabled={disable2} onClick = {()=> {setCount2(count2 - 10);setDisable2(true)}}>weapon-2</button>
        <button disabled={disable3} onClick = {()=> {setCount2(count2 - 20);setDisable3(true)}}>weapon-3</button>
        <br />
        <br />

        Villian - {count2}
        <br />
        <button disabled={disable4} onClick = {()=> {setCount1(count1 - 5);setDisable4(true)}} >weapon-1</button>
        <button disabled={disable5} onClick = {()=> {setCount1(count1 - 10);setDisable5(true)}}>weapon-2</button>
        <button disabled={disable6} onClick = {()=> {setCount1(count1 - 20);setDisable6(true)}}>weapon-3</button>
        <br />
    </div>
  )
}

export default Score
