import { useEffect } from 'react'
import { useState } from 'react'

import {Spinner,Alert} from 'react-bootstrap'

import AddComment from './AddComment'



const CommentArea = ({asin}) =>{
    // state={
    //     comment:[],
    //     isLoading: false,
    //     isError: false
    // }

  const [comment,setComment] = useState([])
  const [isLoading ,setIsLoading] = useState(false)
  const [isError,setIsError] = useState(false)

  useEffect(()=>{

   const getComments = async () =>{
  
    setIsLoading(true)
    try {
        const response = await fetch(" https://striveschool-api.herokuapp.com/api/comments/" + asin,{
            headers:{
                "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjVlZDJkNTI2MjAwMTViNmRjOTQiLCJpYXQiOjE2MzM0NDEwMjQsImV4cCI6MTYzNDY1MDYyNH0.NHhaETwbDlah5CyF2SUQrFazCeuSRcrVXyDu9Y1GRMM"

            }
        })
        if(response.ok){
            const data = await response.json()
            console.log(data)
            // this.setState({
            //     comment:data,
            //     isLoading: false,
            //     isError: false
            // })
            setComment(data)
            setIsLoading(false)
            setIsError(false)
        }
    } catch (err) {
        
        // this.setState({
        //     isLoading: false,
        //     isError: true
        //   })
        setIsError(true)
        setIsLoading(false)
        
    }
    }
    getComments()
  },[asin])
       
        return(
            <>
           
            <h2>Comments</h2>
            {isLoading && (
                    <div className="ml-2">
                        <Spinner animation="border" variant="success" />
                    </div>
                    )}
             {isError &&
                <Alert variant="warning">
                    Cannot load the data: {isError}
                </Alert>
                }
            {
                comment.map(c =>{
                   return <ul key={c._id} style={{border:'1px solid red'}}>
                        <li>{c.comment}</li>
                        <li>Rating : {c.rate}</li>
                    </ul>
                }
               

                )
            }
             
            {asin && <AddComment asin={asin}/>}
   </>
        )
        
    }

export default CommentArea

