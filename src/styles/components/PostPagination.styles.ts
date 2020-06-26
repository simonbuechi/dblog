import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5, 0, 10),
      padding: theme.spacing(0, 4),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72,
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0, 1),
      },
    },
    arrowButton: {
      fontFamily: "Roboto Slab",
      fontWeight: 600,
    },
  })
);
