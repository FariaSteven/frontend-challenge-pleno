import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { menuStylesConfig } from "../../stylesConfig/menuStylesConfig";
import MenuIcon from "@mui/icons-material/Menu";
import { Slide } from "@material-ui/core";

const Menu = (props) => {
  const [isMobile, setIsMobile] = useState();
  const { openMenu, setOpenMenu } = props;

  useEffect(() => {
    if (window.innerWidth < 1080) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const useStyles = makeStyles(menuStylesConfig(isMobile, window.innerWidth));
  const classes = useStyles();
  return (
    <div>
      {openMenu && (
        <Slide in={openMenu} direction="up">
          <div className={classes.menu}>
            <div className={classes.menuContent}>
              <a href="/" className={classes.linkStyle}>
                Sobre
              </a>
              <a href="/" className={classes.linkStyle}>
                Preços
              </a>
              <a href="/" className={classes.linkStyle}>
                Desenvolvedores
              </a>
              <a href="/" className={classes.linkStyle}>
                Ajuda
              </a>
              <a href="/" className={classes.linkStyle}>
                Contato
              </a>
            </div>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default Menu;
