import { Grid, Typography } from "@mui/material";
import { colors } from "constants/colors";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { questions } from "constants/questions";

const Questions = () => {
    return (
        <Grid item container direction={"column"} alignItems="center" justifyContent={'space-between'} sx={{ backgroundColor: colors.primaryBackground }}>
            {questions.map((question) => {
                return (
                    <Grid item container justifyContent={"space-between"} padding={5}
                        sx={{
                            borderBottom: '1px solid white',
                            '@media (max-width: 600px)': {
                                gap: '10px'
                            }
                        }}>
                        <Grid>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '25px',
                                '@media (max-width: 600px)': {
                                    fontSize: '18px',
                                }
                            }}
                            >{question.title}</Typography>
                        </Grid>
                        <Grid>
                            <AddCircleSharpIcon sx={{ color: 'white', '&:hover': { cursor: 'pointer' } }} fontSize="large" />
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
};

export default Questions;