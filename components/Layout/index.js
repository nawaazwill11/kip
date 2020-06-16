import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import Header from './header';
import Footer from './footer';



const titles = {
    home: 'KIP - Become An Autodidact Programmer',
    exercise: 'KIP - Exercises'
}


function Layout({ children, page }) {
    return (
        <div>
            <Head>
                <title>{titles[page]}</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />

            </Head>
            <Grid container direction="column">
               <Grid item container>
                   <Header />
               </Grid>
               <Grid item container>
                   {children}
               </Grid>
               <Grid item container>
                   Footer
               </Grid>
            </Grid>
        </div>
    )

}

export { Layout }; 