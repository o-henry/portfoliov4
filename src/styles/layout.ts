import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootLg: {
      flexGrow: 1,
      padding: "0 150px 200px 150px",
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
    intro: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      minHeight: "100vh",
      paddingBottom: "6rem",
      // maxWidth: "1000px",
    },
    about: {
      display: "flex",
      // minHeight: "100vh",
      flexDirection: "row",
      padding: "0 0 150px 0 !important",
    },
    work: {
      display: "flex",
      flexDirection: "column",
      padding: "150px 0",
      // minHeight: "100vh",
    },
    gridList: {
      width: "100%",
      height: "100vh",
      justifyContent: "center",
    },
  })
);

export default useStyles;
