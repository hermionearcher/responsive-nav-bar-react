import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data/projectsData";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Project = () => {
  return (
    <div className="project grid">
      <h2>Project</h2>
      {projects.map((project, index) => {
        
        return (
          <p key={index}>{project.title}</p>
          
        )}
      )}
<Grid container spacing={3}>
  <Grid item xs>
    <Item>xs</Item>
  </Grid>
  <Grid item xs>
    <Item>xs=6</Item>
  </Grid>
  <Grid item xs>
    <Item>xs</Item>
  </Grid>
</Grid>

    </div>
  );
};

export default Project;
