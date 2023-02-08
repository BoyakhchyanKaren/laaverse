import { Grid } from "@mui/material";
import Map from "../Map";
import SideBar from "../Sidebar";

const MainLandingMap = () => {
    return (
        <Grid container spacing={1}>
            <SideBar />
            <Map />
        </Grid>
    )
};

export default MainLandingMap;