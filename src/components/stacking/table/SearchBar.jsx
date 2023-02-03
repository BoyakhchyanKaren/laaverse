import { Grid, Typography, styled, OutlinedInput, InputAdornment } from "@mui/material"
import { shouldForwardProp } from '@mui/system';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { colors } from "constants/colors";

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
    width: 434,
    marginLeft: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: 'white',
    borderRadius: '40px',
    '& input': {
        paddingLeft: '4px'
    },
    [theme.breakpoints.down('lg')]: {
        width: 250
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: '4px',
    }
}));

const SearchBar = () => {
    return (
        <Grid container justifyContent={"center"} alignItems="center" direction={"column"} spacing={2}>
            <Grid item>
                <Typography sx={{ color: 'white', fontSize: '50px' }}>Leaderboard</Typography>
            </Grid>
            <Grid item>
                <OutlineInputStyle
                    id="input-search-header"
                    placeholder="Search"
                    endAdornment={
                        <InputAdornment position="start">
                            <SearchSharpIcon stroke={1.5} size="1rem" sx={{ color: colors.primaryBackgroundLight }} />
                        </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{ 'aria-label': 'weight' }}
                />
            </Grid>
        </Grid>
    )
};

export default SearchBar;