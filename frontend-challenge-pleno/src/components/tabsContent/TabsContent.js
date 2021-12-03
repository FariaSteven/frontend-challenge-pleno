import React, { useEffect, useState } from "react";
import SpeedmeterIcon from "../../assets/speedmeter.svg";
import WebsiteIcon from "../../assets/website.svg";
import SafeIcon from "../../assets/safe.svg";
import { Grid, Paper } from "@material-ui/core";
import { tabsStylesConfig } from "../../stylesConfig/tabsStylesConfig";
import { makeStyles } from "@material-ui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import axios from "axios";

SwiperCore.use([Autoplay, EffectFade]);

const TabsContent = () => {
  const [isMobile, setIsMobile] = useState();
  const [servicesData, setServicesData] = useState();
  const cardsContent = [
    {
      icon: SpeedmeterIcon, 
    },
    {
      icon: WebsiteIcon,
    },
    {
      icon: SafeIcon,
    }
  ];

  const getServicesData = () => {
    axios.get("http://localhost:3333/services").then((res) => {
      console.log(res.data);
      setServicesData(res.data);
    });
  };

  useEffect(() => {
    if (window.screen.width < 1366) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    getServicesData();
  }, []);

  const useStyles = makeStyles(tabsStylesConfig(isMobile))
  const classes = useStyles()
  return (
    <Grid container spacing={3} justifyContent="center" style={{borderBottom: "1px solid #00000033",}}>
      {!isMobile ? servicesData && servicesData.map((item, idx) => (
        <Grid item xs={11} sm={11} md={11} lg={3} xl={3}>
          <Paper className={idx !== 1 ? classes.card : classes.secondCard}>
            <img src={cardsContent[idx].icon} width="50px" height="50px" />
            <p style={{ fontSize: "30px" }}>{item.title}</p>
            <p style={{ textAlign: "center" }}>{item.description}</p>
          </Paper>
        </Grid>
      )) : 
      <Swiper
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      speed={1000}
      className={classes.sliderCarousel}
    >
      {servicesData && servicesData.map((item, idx) => (
        <SwiperSlide>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Paper className={idx !== 1 ? classes.card : classes.secondCard}>
            <img src={cardsContent[idx].icon} width="50px" height="50px" />
            <p style={{ fontSize: "30px" }}>{item.title}</p>
            <p style={{ textAlign: "center" }}>{item.description}</p>
          </Paper>
        </Grid>
        </SwiperSlide>
      ))}
      
        
      
    </Swiper>
      }
    </Grid>
  );
};

export default TabsContent;
