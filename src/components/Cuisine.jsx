import React,{useEffect,useState}from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import {Link ,useParams} from 'react-router-dom'
import { stringify } from 'query-string'
function Cuisine() {
    let params= useParams()
    const [cuisine,setCuisine]=useState([])
    const getCuisine =async (name)=>{
        const check=localStorage.getItem(`cuisine_${name}`)
        if(check){
            setCuisine(JSON.parse(check))
        }
        else{

            const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e61a43e9212a4bc5981c4dca47ea683a&cuisine=${name}`)
            const recipes= await data.json()
            localStorage.setItem(`cuisine_${name}`,JSON.stringify(recipes.results))
            setCuisine(recipes.results)
        }
    }
    useEffect(()=>{
       
        getCuisine(params.type)
    },[params.type])
  return (
    // <div>
    <Grid
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
    >
        {cuisine.map(item=>(
            <Card >
            <Link to={'/recipe/'+item.id}>
                <img src={item.image} alt=''/>
                <h4>{item.title}</h4>

            </Link>
            </Card>
        ))}
    </Grid>
    // </div>

  )
}
// styled
 const Grid =styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));
    grid-gap:3rem;
 
 `
const Card =styled.div`
    img {
        width:100%;
        border-radius:2rem
    }
    a{
        text-decoration:none
    }
    h4 {
        text-align:center;
        padding:1rem;
        color:black
    }

`


export default Cuisine