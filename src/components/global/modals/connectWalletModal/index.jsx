import * as React from 'react';
import { Box, Grid, Backdrop, Modal, Typography, InputAdornment, Button } from '@mui/material';
import { useModalsContext } from 'context/modalsContext';
import Fox from '../../../../assets/svgs/fox.svg';
import Wallet from '../../../../assets/svgs/walletConect.svg';
import { colors } from 'constants/colors';
import { CloseOutlined } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
                    <Grid item container xs={12} gap={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item container direction={"row"} justifyContent={'space-between'}>
                            <Grid>
                                <CloseOutlined fontSize='large' sx={{ color: 'white', "&:hover": { cursor: 'pointer' } }} onClick={handleClose} />
                            </Grid>
                            <Grid>
                                <Typography
                                    fontSize={'30px'}
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    letterSpacing={'4px'}
                                    mr={3}
                                    sx={{
                                        color: 'white'
                                    }}>Connect</Typography>
                            </Grid>
                            <Grid />
                        </Grid>
                        <Grid width={"100%"}>
                            <Button
                                fullWidth
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '15px',
                                    color: 'white',
                                    border: '2px solid #FFD337',
                                    backgroundColor: '#F4B1022E',
                                    borderRadius: '14px',
                                    fontSize: '20px',
                                }}
                                endIcon={
                                    <InputAdornment>
                                        <img src={Fox} alt="Fox Icon" />
                                    </InputAdornment>
                                }
                            >
                                METAMASK
                            </Button>
                        </Grid>
                        <Grid width={"100%"}>
                            <Button
                                fullWidth
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '15px',
                                    color: 'white',
                                    border: '2px solid #8105DA',
                                    backgroundColor: colors.primaryBackgroundLight,
                                    borderRadius: '14px',
                                    fontSize: '20px'
                                }}
                                endIcon={
                                    <InputAdornment>
                                        <img src={Wallet} alt="Connect Wallet" />
                                    </InputAdornment>
                                }
                            >
                                WALLET CONNECT
                            </Button>
                        </Grid>
                        <Grid />
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default ConnectWalletModal;