import { Grid, Typography, useTheme } from "@mui/material";
import { colors } from "constants/colors";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { questions } from "constants/questions";
import { Animate } from "components/global/animation";

const Questions = () => {
    const theme = useTheme();
    return (
        <Grid item container direction={"column"} alignItems="center" justifyContent={'space-between'}
            sx={{
                backgroundColor: colors.primaryBackground,
                padding: '20px 200px 30px',
                [theme.breakpoints.down('md')]: {
                    padding: 0
                }
            }}>
            {questions.map((question) => {
                return (
                    <Grid
                        key={question.id}
                        item
                        container
                        justifyContent={"space-between"}
                        padding={5}
                        sx={{
                            borderBottom: '1px solid white',
                            [theme.breakpoints.down('md')]: {
                                gap: '10px'
                            }
                        }}
                    >
                        <Grid>
                            <Typography sx={{
                                color: 'white',
                                fontSize: '20px',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '16px'
                                }
                            }}
                            >
                                <Animate.ScaleIn>{question.title}</Animate.ScaleIn>
                            </Typography>
                        </Grid>
                        <Grid>
                            <Animate.ScaleIn>
                                <AddCircleSharpIcon sx={{ color: 'white', '&:hover': { cursor: 'pointer', color: colors.secondaryBackgroundLight } }} fontSize="large" />
                            </Animate.ScaleIn>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
};

export default Questions;