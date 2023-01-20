import React from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import QuestionItem from "../questionItem/QuestionItem";

function MainGame(): JSX.Element {
  const Item = styled(Paper)();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={4}>
          <Item>Тема1</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
            {cards.map((card): JSX.Element => (
                <QuestionItem key={card.id} card={card}/>
            ))}
          <Item>Тема2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Item>Тема3</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainGame;
