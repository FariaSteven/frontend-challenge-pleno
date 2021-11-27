const newsletterStylesConfig = () => {
  return {
    newsletterContainer: {
      // height: "300px",
      backgroundColor: "#00182c",
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      justifyContent: "center",
      padding: "100px 0px"
    },
    newsletterTitle: {
      fontSize: "30px",
      fontWeight: "600",
      color: "#f6f6f6",
      textAlign: "center"
    },
    newsletterText: {
      fontSize: "20px",
      fontWeight: "400",
      color: "#697781",
      margin: "none",
      textAlign: "center"
    },
    newsletterInputContainer: {
      display: "flex",
      gap: "30px",
      margin: "70px 0px"
    },
    newsletterInput: {
      width: "100%",
      "& .MuiInputBase-input": {
        width: "100%",
        borderRadius: "5px",
        color: "#f6f6f6",
        border: "1px solid #697781",
        padding: "15px",
        color: "#f6f6f6",
        transition: "0.4s ease-in-out",
      },
      "& .MuiInputBase-input:focus": {
        border: "1px solid #f6f6f655",
        boxShadow: "0px 0px 10px 0px #f6f6f655",
      },
    },
    newsletterButton: {
      width: "100%",
      border: "none",
      backgroundColor: "#0195f5",
      padding: "15px 0px",
      fontSize: "20px",
      color: "#f6f6f6",
      borderRadius: "4px",
    },
  };
};

export { newsletterStylesConfig };
