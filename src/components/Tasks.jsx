import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import Typography from '@mui/material/Typography';

function Tasks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error("Couldn't fetch data: " + error));
  }, []);

  return (
    <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' ,textAlign:'center'}}>
      <Typography variant="h6" gutterBottom>
        List of tasks
      </Typography>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={data.length}
        overscanCount={5}
      >
        {({ index, style }: ListChildComponentProps) => (
          <ListItem style={{ ...style, borderBottom: '1px solid #ddd' }} key={index} component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary={data[index].name} />
            </ListItemButton>
          </ListItem>
        )}
      </FixedSizeList>
    </Box>
  );
}

export default Tasks;
