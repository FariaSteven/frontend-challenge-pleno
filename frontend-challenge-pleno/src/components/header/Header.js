import React, { useEffect, useState } from "react";
import { Fade, Grid, InputBase, Slide, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { homeStylesConfig } from "../../stylesConfig/homeStylesConfig";
import SearchIcon from "@mui/icons-material/Search";
import wave from "../../assets/wave.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Menu } from "@mui/icons-material";
import MenuDrawer from "../menu/Menu";

SwiperCore.use([Autoplay, EffectFade]);

const Header = () => {
  const [isMobile, setIsMobile] = useState();
  const [searchFieldOpen, setSearchFieldOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  const useStyles = makeStyles(homeStylesConfig(wave, window.innerWidth));
  const classes = useStyles();

  useEffect(() => {
    if (window.innerWidth < 1366) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      className={classes.container}
    >
      <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
        <Grid container spacing={3} alignItems="center" style={{}}>
          <Grid item xs={3} sm={3} md={3} lg={4} xl={3}>
            <div className={classes.headerItems}>
              <div className={classes.logoContainer}>
                <a className={classes.logoFirstText}>Site</a>
                <a className={classes.logoSecondText}>Demo</a>
                {isMobile && (
                  <div
                    style={{
                      marginLeft: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    <Menu style={{ fontSize: "30px", color: "#f6f6f6" }} />
                  </div>
                )}
              </div>
            </div>
          </Grid>

          {!isMobile ? (
            <>
              <Grid item xs={1} sm={1} md={1} lg={2} xl={1}>
                <div className={classes.headerItems}>
                  <a href="/" className={classes.linkStyle}>
                    Sobre
                  </a>
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={2} xl={1}>
                <div className={classes.headerItems}>
                  <a href="/" className={classes.linkStyle}>
                    Preços
                  </a>
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={2} xl={1}>
                <div className={classes.headerItems}>
                  <a href="/" className={classes.linkStyle}>
                    Desenvolvedores
                  </a>
                </div>
              </Grid>
            </>
          ) : (
            
              <MenuDrawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
            
          )}
        </Grid>
      </Grid>
      {/* {isMobile && <Grid item xs={5} sm={1} md={5} lg={5} xl={5}><div className={classes.headerItems}><Menu/></div></Grid>} */}
      <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6} sm={6} md={6} lg={5} xl={6}>
            {searchFieldOpen && (
              <Slide in={searchFieldOpen} mountOnEnter unmountOnExit>
                <div className={classes.headerItems}>
                  <InputBase
                    onMouseLeave={() => setSearchFieldOpen(false)}
                    className={classes.searchField}
                    placeholder="Pesquise aqui"
                    fullWidth
                  />
                </div>
              </Slide>
            )}
          </Grid>
          <Grid item xs={1} sm={2} md={1} lg={1} xl={1}>
            <div className={classes.headerItems}>
              <div
                onMouseEnter={() => setSearchFieldOpen(true)}
                className={classes.searchFieldIcon}
              >
                <SearchIcon
                  style={{
                    fontSize: "30px",
                    color: "#f6f6f6",
                    marginTop: "4px",
                  }}
                />
              </div>
            </div>
          </Grid>
          {!isMobile && (
            <>
              {" "}
              <Grid item xs={1} sm={1} md={1} lg={2} xl={1}>
                <div className={classes.headerItems}>
                  <a href="/" className={classes.linkStyle}>
                    Ajuda
                  </a>
                </div>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <div className={classes.headerItems}>
                  <a href="/" className={classes.linkStyle}>
                    Contato
                  </a>
                </div>
              </Grid>
            </>
          )}
          <Grid item xs={1} sm={1} md={1} lg={2} xl={1}>
            <div className={classes.headerItems}>
              <button className={classes.headerButton}>Começar</button>
            </div>
          </Grid>
        </Grid>
        {/* {openMenu && 
        
      } */}
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Swiper
          centeredSlides={true}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          speed={1000}
          className={classes.sliderCarousel}
        >
          <SwiperSlide>
            <div>
              <p className={classes.title}>Recrie este Banner</p>
              <p className={classes.text}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                semper ex felis. Maecenas porttitor aliquet leo, sit amet
                commodo ligula imperdiet non. Curabitur maximus sollicitudin
                lorem, dictum suscipit ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className={classes.title}>Recrie este Banner</p>
              <p className={classes.text}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                semper ex felis. Maecenas porttitor aliquet leo, sit amet
                commodo ligula imperdiet non. Curabitur maximus sollicitudin
                lorem, dictum suscipit ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className={classes.title}>Recrie este Banner</p>
              <p className={classes.text}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                semper ex felis. Maecenas porttitor aliquet leo, sit amet
                commodo ligula imperdiet non. Curabitur maximus sollicitudin
                lorem, dictum suscipit ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className={classes.title}>Recrie este Banner</p>
              <p className={classes.text}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                semper ex felis. Maecenas porttitor aliquet leo, sit amet
                commodo ligula imperdiet non. Curabitur maximus sollicitudin
                lorem, dictum suscipit ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Grid>
      {!isMobile && (
        <>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
        </>
      )}
    </Grid>
  );
};

export default Header;
