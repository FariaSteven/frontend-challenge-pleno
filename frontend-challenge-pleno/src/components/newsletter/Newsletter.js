import React from 'react'
import { Grid, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { newsletterStylesConfig } from '../../stylesConfig/newsletterStylesConfig'

const Newsletter = () => {
  const useStyles = makeStyles(newsletterStylesConfig())
  const classes = useStyles()
  return (
    <Grid container spacing={3} className={classes.newsletterContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <p className={classes.newsletterTitle}>Newsletter</p>
        <p className={classes.newsletterText}>Receba nossas informações por email e fique sabendo de todas as novidades</p>
      </Grid>
      <Grid item xs={11} sm={5} md={4} lg={4} xl={3}>
        <InputBase placeholder="Seu e-mail" className={classes.newsletterInput}/>
      </Grid>
      <Grid item xs={11} sm={3} md={2} lg={2} xl={1}>
        <button className={classes.newsletterButton}>Salvar</button>
      </Grid>
    </Grid>
  )
}

export default Newsletter
