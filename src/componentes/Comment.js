import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaThumbsUp, FaThumbsDown, FaUser } from 'react-icons/fa';
import { Box, Stack, IconButton, Badge, Card, CardContent, CardActions, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';

const Comment = ({ ReduxComment }) => {

  // const API_URL = 'https://jsonplaceholder.typicode.com/comments'

  // const [mockupComments, setMockupComments] = useState(() => []);

  // useEffect(() => {

  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((json) => setMockupComments(() => json));

  //   console.log(mockupComments);
    
  // }, []);

  const [like, setLike] = useState(() => JSON.parse(localStorage.getItem('like')) || 0);
  const [dislike, setDislike] = useState(() => JSON.parse(localStorage.getItem('dislike')) || 0);

  // like management
  const notificationsLabel = (count) => {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${like} notifications`;
  }

  const giveLike = () => {
    const newLike = like + 1;
    localStorage.setItem('like', JSON.stringify(newLike));
    setLike(like + 1);
  }

  const giveDislike = () => {
    const newDislike = dislike - 1;
    localStorage.setItem('dislike', JSON.stringify(newDislike));
    setDislike(dislike - 1);
  }

  return(
    <ul>

      {ReduxComment.map(comment => 
        <li key={comment.id}>

          <Card sx={{ margin: '10px 0px' }}>
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h3" 
                component="div"
                margin='10px 30px'
              >
                {comment.title}
              </Typography>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                margin='10px 30px'
                color='#444'
              >
                {comment.content}
              </Typography>
              <Typography 
                gutterBottom 
                variant="h6" 
                component="div"
                margin='10px 30px'
              >
                <FaUser role='icon' style={{ color: '#ccc', margin: '0px 10px 0px 0px'}} />
                {comment.autor}
              </Typography>

              <CardActions>
                <IconButton >
                  <Badge>
                    <FaTrash role='button' style={{ color: 'firebrick', fontSize: '30px', margin: '10px', cursor: 'pointer' }} />
                  </Badge>
                </IconButton>
                
                <IconButton>
                  <Badge>
                    <FaEdit role='button' style={{ color: 'lime', fontSize: '30px', margin: '10px', cursor: 'pointer' }} />
                  </Badge>
                </IconButton>

                <IconButton 
                  aria-label={notificationsLabel(like)}
                >
                  <Badge 
                    badgeContent={like} 
                    color="secondary"
                  >
                    <FaThumbsUp 
                      role='button' 
                      style={{ 
                        color: 'skyblue', 
                        fontSize: '30px', 
                        margin: '10px', 
                        cursor: 'pointer' 
                      }} 
                      onClick={() => giveLike()}
                    />
                  </Badge>
                </IconButton>
                
                <IconButton 
                  aria-label={notificationsLabel(dislike)}
                >
                  <Badge 
                    badgeContent={dislike} 
                    color="secondary"
                  >
                    <FaThumbsDown 
                      role='button' 
                      style={{ 
                        color: 'orange', 
                        fontSize: '30px', 
                        margin: '10px', 
                        cursor: 'pointer' 
                      }} 
                      onClick={() => giveDislike()}
                    />
                  </Badge>
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>

        </li>

      )}
    </ul>

  )
}

export default Comment
