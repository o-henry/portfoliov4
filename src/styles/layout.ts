import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootLg: {
      flexGrow: 1,
      height: "100%",
      padding: "0px 150px",
      minHeight: "100vh",
      maxWidth: "1600px",
      margin: "0 auto",
    },
    rootXs: {
      flexGrow: 1,
      height: "100%",
      padding: "0 25px",
      minHeight: "100vh",
      maxWidth: "1600px",
      margin: "0 auto",
    },
    rootSm: {
      flexGrow: 1,
      height: "100%",
      padding: "0 50px",
      minHeight: "100vh",
      maxWidth: "1600px",
      margin: "0 auto",
    },
    menu: {
      width: "100%",
      height: "6rem",
      display: "flex",
      alignItems: "center",
      fontSize: "0.8rem",
    },
    mainIntro: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "0rem 0 10rem 0",
      textAlign: "center",
      minHeight: "100vh",
      maxWidth: "1000px",
    },
    mainAbout: {
      display: "flex",
      // minHeight: "100vh",
      maxWidth: "1000px",
      // padding: "0 5rem 10rem 5rem",
      flexDirection: "row",
    },
  })
);

export default useStyles;
