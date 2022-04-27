import React from 'react'
import {useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import styled from 'styled-components'
function Searched() {
  let params=useParams()
  const [searchedRecipes,setSearchedRecipes]=useState([])
  const getSearched =async (name)=>{
      const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e61a43e9212a4bc5981c4dca47ea683a&query=${name}`)
      const recipes= await data.json()
      setSearchedRecipes(recipes.results)
}
  useEffect(()=>{
      getSearched(params.search)

  },[params.search])
  return (
    

    <Grid>
    
        {searchedRecipes.map(item=>(
          <Card key={item.id} >
          <Link to={'/recipe/'+item.id}>

              <img src={item.image} alt=''/>
              <h4> {item.title}</h4>
          </Link>
          </Card>
        ))}


    </Grid>
  
  )


    
}
// styled
const Grid =styled.div`
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
    padding:1rem
}
`

export default Searched