const homeStylesConfig = (wave, isMobile) => {
  return {
    container: {
      height: "105vh",
      animation: "$changeBackground 8s infinite ease-in-out",
      // position: "absolute"
    },
    sliderCarousel: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      // width: "100%"
      textAlign: "center",
    },
    logoContainer: {
      display: "flex",
      fontSize: "35px",
      alignItems: "center",
      // marginLeft: "80px",
    },
    logoFirstText: {
      color: "#edeadc",
      fontWeight: "600",
    },
    logoSecondText: {
      color: "#edeadc",
      fontWeight: "100",
      alignItems: "center",
    },
    headerItems: {
      // display: "flex",
      // gap: "30px",
      fontSize: "20px",
      marginTop: "25px",
      // justifyContent: "center",
      // alignItems: "center",
      // padding: "0px 100px"
    },
    searchFieldIcon: {
      color: "#edeadc",
      textAlign: "end",
    },
    searchField: {
      borderBottom: "2px solid #edeadc",
      "& .MuiInputBase-input": {
        color: "#edeadc",
      },
    },
    linkStyle: {
      textDecoration: "none",
      color: "#edeadc",
      transition: "0.4s ease-in-out",
      borderRadius: "50px",
      padding: "5px",
      "&:hover": {
        boxShadow: "0px 0px 30px 0px #f6f6f6",
      },
    },
    wave: {
      background: `url(${wave}) repeat-x`,
      position: "absolute",
      top: isMobile === 1366 ? "480px" : "784px",
      width: "6400px",
      height: isMobile === 1366 ? "150px" : "198px",
      animation: "$wave 10s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite",
      transform: "translate3d(0, 0, 0)",
      "&:last-child": {
        position: "absolute",
        top: isMobile === 1366 ? "480px" : "784px",
        width: "6400px",
        height: isMobile === 1366 ? "150px" : "198px",
        animation:
          "$wave 10s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, $swell 10s ease -1.25s infinite",
        transform: "translate3d(0, 0, 0)",
      },
    },
    headerButton: {
      backgroundColor: "transparent",
      border: "none",
      border: "1px solid #f6f6f6",
      borderRadius: "30px",
      fontSize: "20px",
      color: "#f6f6f6",
      padding: "5px",
      transition: "0.5s ease-in-out",
      "&:hover": {
        backgroundColor: "#f6f6f655",
        boxShadow: "0px 0px 30px 0px #f6f6f655",
        cursor: "pointer",
      },
    },
    title: {
      textAlign: "center",
      fontSize: "40px",
      fontWeight: "600",
      color: "#f6f6f6",
    },
    text: {
      textAlign: "center",
      fontSize: "25px",
      color: "#f6f6f6",
    },
    "@keyframes changeBackground": {
      "0%": {
        opacity: "1",
        background:
          "linear-gradient(121deg, rgba(29,216,207,1) 0%, rgba(90,140,228,1) 50%, rgba(145,56,242,1) 100%)",
      },
      "25%": {
        opacity: "0.7",
        background:
          "linear-gradient(121deg, rgba(29,216,207,1) 0%, rgba(90,140,228,1) 50%, rgba(145,56,242,1) 100%)",
      },
      "50%": {
        opacity: "0.9",
        background:
          "linear-gradient(121deg, rgba(29,216,207,1) 0%, rgba(90,140,228,1) 50%, rgba(145,56,242,1) 100%)",
      },
      "75%": {
        opacity: "0.7",
        background:
          "linear-gradient(121deg, rgba(29,216,207,1) 0%, rgba(90,140,228,1) 50%, rgba(145,56,242,1) 100%)",
      },
      "100%": {
        opacity: "1",
        background:
          "linear-gradient(121deg, rgba(29,216,207,1) 0%, rgba(90,140,228,1) 50%, rgba(145,56,242,1) 100%)",
      },
    },
    "@keyframes wave": {
      "0%": {
        marginLeft: "0",
      },
      "100%": {
        marginLeft: "-1600px",
      },
    },
    "@keyframes swell": {
      "0%, 100%": {
        transform: "translate3d(0,-25px,0)",
      },
      "50%": {
        transform: "translate3d(0,5px,0)",
      },
    },
  };
};

export { homeStylesConfig };
