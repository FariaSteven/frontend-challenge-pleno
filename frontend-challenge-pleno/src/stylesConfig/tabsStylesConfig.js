const tabsStylesConfig = (isMobile) => {
  return {
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px",
      margin: "50px 0px",
      "&.MuiPaper-root": {
        backgroundColor: "#0195f5",
        color: "#f6f6f6",
      },
    },
    secondCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px",
      margin: "50px 0px",
      "&.MuiPaper-root": {
        backgroundColor: "transparent",
        color: "#000000",
        border: "none",
        boxShadow: "none"
      },
    },
    sliderCarousel: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      // width: "100%"
      textAlign: "center",
    },
  };
};

export { tabsStylesConfig };
