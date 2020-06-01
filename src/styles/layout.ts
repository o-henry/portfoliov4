import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootLg: {
      flexGrow: 1,
      padding: "0 150px 0 150px",
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
      paddingBottom: "5rem",
      // maxWidth: "1000px",
    },
    about: {
      display: "flex",
      // minHeight: "100vh",
      flexDirection: "row",
      padding: "270px 0 200px 0 !important",
    },
    aboutLg: {
      display: "flex",
      padding: "270px 150px 200px 150px !important;",
      flexDirection: "row",
    },
    work: {
      display: "flex",
      flexDirection: "column",
      padding: "230px 0",
      margin: "0px auto !important",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      // minHeight: "100vh",
    },
    gridList: {
      width: "100%",
      height: "auto",
      justifyContent: "center",
    },
    contact: {
      display: "flex",
      flexDirection: "column",
      padding: "150px 0",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    footer: {
      padding: "3rem",
    },
    tab: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: 175,
      padding: "3rem 0",
      // margin: "0px 128px",
      // width: "100%",
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      minWidth: "24%",
    },
  })
);

export default useStyles;
