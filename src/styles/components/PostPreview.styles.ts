import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(1),
      padding: theme.spacing(4),
      maxWidth: 960,
    },
    topRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1),
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      wordWrap: "break-word",
    },
    dateAuthorRow: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(3),
    },
    caption: {
      fontFamily: "Roboto Slab",
      fontSize: 14,
      wordBreak: "break-word",
    },
    description: {},
    buttonRow: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        width: "100%",
      },
    },
    containedButton: {
      display: "flex",
      alignItems: "center",
      width: 158,
      borderRadius: 25,
      fontSize: 16,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    destroyButton: {
      fontFamily: "Roboto Slab",
      fontWeight: 600,
      color: theme.palette.error.main,
      borderRadius: 25,
      fontSize: 16,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginTop: theme.spacing(2),
      },
    },
  })
);
