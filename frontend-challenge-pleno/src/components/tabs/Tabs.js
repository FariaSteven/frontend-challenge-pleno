import React, { useEffect, useState } from "react";
import { Grid, tabClasses } from "@material-ui/core";
import axios from "axios";
import firstItem from "../../assets/graphicriver.png";
import secondItem from "../../assets/themeforest.png";
import thirdItem from "../../assets/audiojungle.png";
import fourthItem from "../../assets/codecanyon.png";

const Tabs = () => {
  const [isMobile, setIsMobile] = useState();
  const [clientsData, setClientsData] = useState();
  const [tabCLicked, setTabClicked] = useState(0);
  const images = [firstItem, secondItem, thirdItem, fourthItem];

  const getClientsData = () => {
    axios.get("http://localhost:3333/clients").then((res) => {
      console.log(res.data);
      setClientsData(res.data);
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
    getClientsData();
  }, []);
  return (
    <Grid
      container
      spacing={3}
      style={{
        backgroundColor: "rgba(10000,10000,1000,1)",
        borderBottom: "1px solid #00000033",
      }}
    >
      {clientsData &&
        clientsData.map((items, idx) => (
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => setTabClicked(idx)}
            >
              <img
                src={images[idx]}
                width={isMobile ? "40px" : "100px"}
                height={isMobile ? "40px" : "100px"}
                style={{ filter: tabCLicked !== idx && "grayscale(100%)" }}
              />
              <p
                style={{
                  fontSize: isMobile ? "20px" : "30px",
                  fontWeight: "700",
                  // fontFamily: "Raleaway",
                  color: tabCLicked !== idx && "#767676",
                }}
              >
                {clientsData && clientsData[idx].title}
              </p>
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default Tabs;
