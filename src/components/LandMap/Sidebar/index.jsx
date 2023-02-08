import { Grid, styled, Typography } from "@mui/material";
import { colors } from "constants/colors";
import { Link } from "react-router-dom";

const ItemGrid = styled(Grid)(() => ({
    backgroundColor: colors.primaryBackgroundLight,
    color: 'white',
    height: '100%',
    padding: '15px'
}));

const SideBar = () => {
    return (
        <Grid item xs={3} sx={{ height: '650px' }}>
            <ItemGrid item direction={"column"}>
                <Grid sx={{
                    borderBottom: '1px solid white',
                    lineHeight: '50px',
                    fontSize: '25px',
                    fontWeight: 700,
                }}>MAP MODE</Grid>
                <Grid item container direction={"column"} gap={2} paddingTop={5}>
                    {['Explore', "Buy Land"].map((textColumn) => {
                        return (
                            <Link
                                to={`#`}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                <Typography sx={{ letterSpacing: '1.5px' }}>{textColumn}</Typography>
                            </Link>
                        )
                    })}
                </Grid>
            </ItemGrid>
        </Grid>
    )
};


export default SideBar;