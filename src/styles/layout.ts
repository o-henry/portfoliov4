import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootLg: {
      height: "100vh",
      margin: "0 5rem 0 5rem",
    },
    menu: {
      width: "100%",
      height: "6rem",
      display: "flex",
      alignItems: "center",
      background: "white !important",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    btn: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default useStyles;
