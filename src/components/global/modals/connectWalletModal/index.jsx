import * as React from 'react';
import { Box, Grid, Backdrop, Modal, Typography, TextField, InputAdornment } from '@mui/material';
import { useModalsContext } from 'context/modalsContext';
import Fox from '../../../../assets/svgs/fox.svg';
import Wallet from '../../../../assets/svgs/walletConect.svg';
import { colors } from 'constants/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#06021A',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConnectWalletModal = () => {
    const { showModal, setShowModal } = useModalsContext();
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Box sx={{
                    ...style,
                    borderRadius: '15px',
                    borderTopRightRadius: '80px',
                }}>
                    <Grid item container xs={12} gap={5} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Grid>
                            <Typography
                                fontSize={'30px'}
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                sx={{
                                    color: 'white'
                                }}>Connect</Typography>
                        </Grid>
                        <Grid width={"100%"}>
                            <TextField
                                fullWidth
                                placeholder='METAMASK'
                                InputProps={{
                                    style: {
                                        color: 'white',
                                        border: '2px solid #FFD337',
                                        backgroundColor: '#F4B1022E',
                                        borderRadius: '14px'
                                    },
                                    endAdornment: (
                                        <InputAdornment>
                                            <img src={Fox} alt="Fox Icon" />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid width={"100%"}>
                            <TextField
                                fullWidth
                                placeholder='WALLET CONNECT'
                                InputProps={{
                                    style: {
                                        color: 'white',
                                        border: '2px solid #8105DA',
                                        backgroundColor: colors.primaryBackgroundLight,
                                        borderRadius: '14px'
                                    },
                                    endAdornment: (
                                        <InputAdornment>
                                            <img src={Wallet} alt="Connect Wallet" />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid />
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default ConnectWalletModal;