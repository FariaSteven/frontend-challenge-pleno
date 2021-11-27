const menuStylesConfig = (isMobile, windowWidth) => {
  return {
    menu: {
      position: "absolute", 
      top: windowWidth <=926 && windowWidth !== 428 && windowWidth !== 810 ? "60px" : "100px",
      left: "0px",
      width: windowWidth <=926 && windowWidth !== 428 && windowWidth !== 810 ? "500px" : "200px",
      height: isMobile ? "25vh" : "35vh",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(2rem) saturate(0%)",
      borderRadius: "0px 40px 40px 0px",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      transform: "translatex(200px)",
      transition: "0.4s ease-in-out",
    },
    menuContent: {
      position: "absolute",
      display: "flex",
      flexDirection: windowWidth <=926 && windowWidth !== 428 && windowWidth !== 810 ? "flex" : "column",
      gap: isMobile ? "10px" : "20px",
      marginLeft: "5px",
      backdropFilter: "blur(2rem) saturate(0%)",
      borderRadius: "0px 40px 40px 0px",
    },
    linkStyle: {
      textDecoration: "none",
      color: "#f6f6f6",
      transition: "0.4s ease-in-out",
      borderRadius: "50px",
      padding: "5px",
      fontSize: "18px",
      fontWeight: "400",
      "&:hover": {
        boxShadow: "0px 0px 30px 0px #f6f6f6",
      },
    }
  }
}

export {menuStylesConfig}
