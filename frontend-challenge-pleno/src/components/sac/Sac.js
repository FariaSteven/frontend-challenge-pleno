import React, {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { sacStylesConfig } from "../../stylesConfig/sacStylesConfig";
import desktopImg from "../../assets/desktop.png";

const Sac = () => {
  const [isMobile, setIsMobile] = useState();

  const useStyles = makeStyles(sacStylesConfig());
  const classes = useStyles();

  useEffect(() => {
    if (window.screen.width < 1366) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <Grid container spacing={3} style={{ marginLeft: !isMobile && "218px", margin: "40px" }}>
      <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
        <Grid container spacing={3} style={{ margin: "0px 4px" }}>
          <Grid item xs={11} sm={12} md={12} lg={12} xl={12}>
            <p className={classes.sacTitle}>Atendimento ao Cliente</p>
            <p className={classes.sacText}>
              Precisando entrar em contato, utilize nossos canais de atendimento
              ou consulte a documentação para mais informações.
            </p>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={6} xl={4}>
            <button className={classes.sacTicketButton}>Envie um Ticket</button>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={6} xl={4}>
            <button className={classes.sacDocButton}>Documentação</button>
          </Grid>
        </Grid>
      </Grid>
      {!isMobile && 
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          <img src={desktopImg} style={{width: "100%"}}/>
        </Grid>
      }
      
    </Grid>
  );
};

export default Sac;
