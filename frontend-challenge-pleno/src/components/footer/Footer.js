import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { footerStylesConfig } from "../../stylesConfig/footerStylesConfig";

const Footer = () => {
  const useStyles = makeStyles(footerStylesConfig());
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.footerContainer}>
      <Grid item xs={11} sm={11} md={3} lg={2} xl={2}>
        <div className={classes.logoContainer}>
          <a className={classes.logoFirstText}>Site</a>
          <a className={classes.logoSecondText}>Demo</a>
        </div>
      </Grid>
      <Grid item xs={11} sm={6} md={6} lg={7} xl={7}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={4} lg={1} xl={1}>
            <a className={classes.footerLinks}>Home</a>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={1} xl={1}>
            <a className={classes.footerLinks}>Sobre</a>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={1} xl={1}>
            <a className={classes.footerLinks}>Preços</a>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
            <a className={classes.footerLinks}>Desenvolvedores</a>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={1} xl={1}>
            <a className={classes.footerLinks}>Ajuda</a>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={1} xl={1}>
            <a className={classes.footerLinks}>Contato</a>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={11} sm={5} md={2} lg={2} xl={2}>
        <a className={classes.footerContact}>
          +80 1234 56789 | ola@sitedemo.com.br
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
