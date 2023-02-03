import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import Table from "./Table";

export const FullTable = () => {
    return (
        <Grid container direction={"column"} justifyContent="center" alignItems={"center"} spacing={5}>
            <Grid item>
                <SearchBar />
            </Grid>
            <Grid item>
                <Table />
            </Grid>
        </Grid>
    )
};

