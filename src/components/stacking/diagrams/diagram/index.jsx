import React from "react";
import { Grid, Typography } from "@mui/material";
import DiagramImage from 'assets/images/stacking/diagram.png';
import { Animate } from "components/global/animation";

export const DiagramFlex = () => {
  return (
    <Grid item container direction={"column"} xl={4} lg={4} py={4} gap={7.5} justifyContent={"space-between"}>

      {
        [1, 2, 3].map((key, index) => {
          return (
            <Grid key={`${key}-${index}`} item container direction={"row"} justifyContent={'space-between'} sx={{
              backgroundColor: '#320751',
              borderRadius: '8px',
              position: 'relative',
              height: '220px',
              padding: '5px 30px'
            }}>
              <Grid item container direction={"column"} gap={3}>
                <Typography sx={{ fontWeight: 600, fontSize: '21px', color: 'white' }}><Animate.FadeUp>$7,868,163.54</Animate.FadeUp></Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '16px', color: 'white' }}><Animate.FadeUp>Total Value Locked</Animate.FadeUp></Typography>
              </Grid>
              <img src={DiagramImage} alt={"diagram-1"} style={{
                width: '280px',
                height: '100px',
                position: 'absolute',
                right: 20,
                bottom: 10,
              }} />
            </Grid>
          )
        })
      }

    </Grid>
  )
};  