import { useState } from "react";
import { Divider, Grid, Typography, Button, TextField, useTheme, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Animate } from "components/global/animation";
import React from "react";

const DayButton = () => {
    const theme = useTheme();
    const [alignment, setAlignment] = useState('60 Days');
    const handleChange = (_event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Animate.FadeUp>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                sx={{
                    padding: '10px',
                    borderRadius: '5px',
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    "& .MuiToggleButtonGroup-grouped": {
                        color: 'white'
                    },
                    "& .Mui-selected": {
                        backgroundColor: '#9810F9 !important',
                        color: 'white !important'
                    },
                    [theme.breakpoints.down('md')]: {
                        flexWrap: 'wrap',
                        gap: '20px',
                    }
                }}>
                {['7 Days', '14 Days', '21 Days', '60 Days'].map((day) => {
                    return (
                        <ToggleButton
                            sx={{
                                fontWeight: 500,
                                color: 'white',
                                border: '1px solid white !important',
                                borderRadius: '8px !important',
                                padding: '11px'
                            }}
                            value={day}
                        >
                            {day}
                        </ToggleButton>
                    )
                })}
            </ToggleButtonGroup>
        </Animate.FadeUp>
    );
};


export const Form = () => {
    const theme = useTheme();
    return (
        <Grid item container direction={"column"} lg={6} xl={6} px={5} py={4} gap={3} sx={{
            backgroundColor: '#320751',
            borderRadius: '8px',
        }}>

            <Grid item container direction={'column'} gap={1}>
                <Typography sx={{ color: 'white', fontSize: '21px', fontWeight: 600 }}><Animate.FadeUp>Participat IGO Stake</Animate.FadeUp></Typography>
                <Typography sx={{ color: 'white', fontSize: '21px', fontWeight: 600 }}><Animate.FadeUp>256.50 BUSD</Animate.FadeUp></Typography>
            </Grid>

            <Grid item container direction={'column'} gap={2}>
                <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 500 }}><Animate.FadeUp>Total Stake</Animate.FadeUp></Typography>
                <Divider sx={{ border: '1px solid #6A6161' }} variant={'fullWidth'} />
            </Grid>

            <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{
                [theme.breakpoints.down('sm')]: {
                    gap: 4
                }
            }}>
                <DayButton />
            </Grid>

            <Grid item container direction={"column"} alignItems={"flex-start"} justifyContent={"center"} gap={3}>
                <Typography sx={{
                    fontWeight: 500, color: 'white', fontSize: '20px', [theme.breakpoints.down('sm')]: {
                        fontSize: '18px'
                    }
                }}><Animate.FadeUp>Lock period : 60 days</Animate.FadeUp></Typography>
                <Typography sx={{
                    fontWeight: 500, color: 'white', fontSize: '20px', [theme.breakpoints.down('sm')]: {
                        fontSize: '16px'
                    }
                }}><Animate.FadeUp>Re - locks on registration :  Yes</Animate.FadeUp></Typography>
                <Typography sx={{
                    fontWeight: 500, color: 'white', fontSize: '20px', [theme.breakpoints.down('sm')]: {
                        fontSize: '18px'
                    }
                }}><Animate.FadeUp>Early unstake fee : 25%</Animate.FadeUp></Typography>
                <Typography sx={{
                    fontWeight: 500, color: 'white', fontSize: '20px', [theme.breakpoints.down('sm')]: {
                        fontSize: '18px'
                    }
                }}><Animate.FadeUp>Status : Unlocked</Animate.FadeUp></Typography>
            </Grid>

            <Grid item container direction={"column"} alignItems={'flex-start'} justifyContent={'center'} gap={2}>
                <Grid>
                    <Typography sx={{ fontWeight: 500, color: 'white', fontSize: '20px' }}><Animate.FadeUp>Balance: 2889.00 BUSD</Animate.FadeUp></Typography>
                </Grid>
                <Grid item container direction={"row"} alignItems={"center"} sx={{
                    [theme.breakpoints.down('sm')]: {
                        gap: 2,
                    }
                }}>
                    <TextField
                        sx={{
                            border: '1px solid white',
                            "& fieldset": { border: 'none' },
                            borderRadius: '5px'
                        }}
                        placeholder={'0.00'}
                        InputProps={{
                            type: 'number',
                            sx: {
                                fontSize: '18px',
                                color: 'white',
                            },
                            endAdornment: <Grid sx={{ paddingLeft: '10px' }}>
                                <Animate.FadeUp>MAX</Animate.FadeUp>
                            </Grid>
                        }}
                    />
                    <Button sx={{
                        marginLeft: '20px',
                        padding: '15px 25px',
                        fontSize: '18px',
                        backgroundColor: '#9D4DF3',
                        color: 'white',
                        [theme.breakpoints.down('sm')]: {
                            marginLeft: '0px',
                        }
                    }}><Animate.FadeUp>APPROVE</Animate.FadeUp></Button>
                </Grid>
            </Grid>

            <Grid item container direction={"column"} alignItems={'flex-start'} justifyContent={'center'} gap={2}>
                <Grid>
                    <Typography sx={{ fontWeight: 500, color: 'white', fontSize: '20px' }}><Animate.FadeUp>Staked : 256.50 BUSD</Animate.FadeUp></Typography>
                </Grid>
                <Grid item container direction={"row"} alignItems={"center"} sx={{
                    [theme.breakpoints.down('sm')]: {
                        gap: 2,
                    }
                }}>
                    <TextField
                        sx={{
                            border: '1px solid white',
                            "& fieldset": { border: 'none' },
                            borderRadius: '5px'
                        }}
                        placeholder={'0.00'}
                        InputProps={{
                            type: 'number',
                            sx: {
                                fontSize: '18px',
                                color: 'white',
                            },
                            endAdornment: <Grid sx={{ paddingLeft: '10px' }}><Animate.FadeUp>MAX</Animate.FadeUp></Grid>
                        }}
                    />
                    <Button sx={{
                        marginLeft: '20px',
                        padding: '15px 20px',
                        fontSize: '18px',
                        backgroundColor: '#6F2398',
                        color: 'white',
                        [theme.breakpoints.down('sm')]: {
                            marginLeft: '0px',
                        }
                    }}><Animate.FadeUp>WITHDRAW</Animate.FadeUp></Button>
                </Grid>
            </Grid>

        </Grid>
    )
}