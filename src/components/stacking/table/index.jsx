import { Grid } from "@mui/material";
import { Animate } from "components/global/animation";
import SearchBar from "./SearchBar";
import Table from "./Table";

export const FullTable = () => {
    return (
        <Grid container direction={"column"} justifyContent="center" alignItems={"center"} spacing={5}>
            <Grid item>
                <Animate.ScaleIn><SearchBar /></Animate.ScaleIn>
            </Grid>
            <Grid item>
                <Table />
            </Grid>
        </Grid>
    )
};

