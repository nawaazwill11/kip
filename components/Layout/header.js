import { AppBar, Toolbar, Grid, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import styles from './header_styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';


const useStyles = makeStyles(() => ({
    logoCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    navLinks: {

        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '7px'
    },
    logoWidth: {
        width: '40px'
    }
}
));

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Grid item container xs={3} >
                    <Box display={{ xs: 'flex', sm: 'flex', md: 'none' }}>
                        <Button color="primary">
                            <MenuIcon />
                        </Button>
                    </Box>
                </Grid>
                <Grid item container xs={6} >
                    <Box style={{ width: '100%' }} className={clsx(classes.logoCenter)}>
                        <img className={clsx(classes.logoWidth)} src="/images/kip_logo_white.svg" alt="Logo" />
                    </Box>
                </Grid>
                <Grid item xs={3} justify="space-evenly">
                    <Box display={{ xs: 'none', md: 'flex' }}>
                        <Grid item xs={6}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/exercise">
                                <a>Exercise</a>
                            </Link>
                        </Grid>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;