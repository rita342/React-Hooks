
import { Button, Form } from 'react-bootstrap'
import { useState } from "react"
import { useEffect } from "react"

const AddComment = ({asin}) => {
    const [comments, setComments] = useState({
        comment: '',
        rate: 1,
        elementId: null

    })



   useEffect(()=>{
       setComments({
           ...comments,
           elementId:asin
       
   })
}, [asin,comments])

  

    const handleInput = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comments),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjVlZDJkNTI2MjAwMTViNmRjOTQiLCJpYXQiOjE2MzM0NDEwMjQsImV4cCI6MTYzNDY1MDYyNH0.NHhaETwbDlah5CyF2SUQrFazCeuSRcrVXyDu9Y1GRMM'
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }

   
        return (
            <div>
                <Form onSubmit={handleInput}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={comments.comment}
                            onChange={e => setComments({
                                comment: {
                                    ...comments,
                                    comment: e.target.value
                                }
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={comments.rate}
                            onChange={e => this.setComments({
                                comment: {
                                    ...comments,
                                    rate: e.target.value
                                }
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }


export default AddComment