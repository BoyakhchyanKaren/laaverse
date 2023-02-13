import { useTheme, Grid } from "@mui/material"
import { DiagramFlex } from "./diagram";
import { Form } from "./form"

export const Diagrams = () => {
  const theme = useTheme();
  return (
    <Grid container direction={"row"} alignItems={"center"} gap={23}
      sx={{
        padding: '0px 180px',
        [theme.breakpoints.down('md')]: {
          padding: '0px 50px'
        }
      }}
    >
      <Form />
      <DiagramFlex />
    </Grid>
  )
}