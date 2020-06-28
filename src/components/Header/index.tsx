import React from "react";
import appContext from "services/appContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "styles/components/Header.styles";
import { RoutingProps } from "types/app";
import Hidden from "@material-ui/core/Hidden";

const Header: React.FunctionComponent<RoutingProps> = ({ handleRoute }) => {
  const classes = useStyles();
  const { state } = React.useContext(appContext);
  const { title } = state;

  const toHome = () => {
    handleRoute("");
  };

  return (
    <>
      <AppBar className={classes.root} position="static" color="inherit">
        <Toolbar className={classes.toolBar}>
          <Hidden smUp>
          <Typography onClick={toHome} className={classes.title} align="center">
              {title}
            </Typography>
          </Hidden>
          <Hidden xsDown>
          <Typography onClick={toHome} className={classes.title} align="center">
              {title}
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
