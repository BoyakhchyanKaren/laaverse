import { Button, Grid, Typography, useTheme } from "@mui/material"
import { Animate } from "components/global/animation";
import { useStackingContext } from "context/stackingContext";


export const StackButton = () => {
  const theme = useTheme();
  const { isLeaderBoardButtonClicked, setLeaderBoardButtonActive } = useStackingContext();

  const onLeaderBoardClick = () => {
    setLeaderBoardButtonActive(!isLeaderBoardButtonClicked);
  };

  return (
    <Grid item container alignItems={"center"} justifyContent={'center'}>
      <Grid
        item
        px={4}
        py={5}
        container
        lg={9.1}
        xl={9.1}
        sx={{
          backgroundColor: '#320751',
          marginRight: 1,
          marginTop: 5,
          borderRadius: '10px',
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
          },
          [theme.breakpoints.down('md')]: {
            marginBottom: '20px'
          }
        }}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid>
          <Typography sx={{
            fontWeight: 600,
            fontSize: '30px',
            color: 'white',
            letterSpacing: '3px'
          }}>
            <Animate.FadeUp>Stacking</Animate.FadeUp>
          </Typography>
        </Grid>
        <Grid>
          <Button
            onClick={onLeaderBoardClick}
            sx={{
              color: 'white',
              backgroundColor: '#9A18D7',
              padding: '15px 30px',
              textTransform: 'none',
              fontSize: '21px',
              borderRadius: '12px',
              letterSpacing: '3px',
            }}>
            <Animate.FadeUp>LeaderBoard</Animate.FadeUp>
          </Button>
        </Grid>
      </Grid>
    </Grid >
  )
}