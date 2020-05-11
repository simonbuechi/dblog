import React, { useEffect } from "react";
import Context from "services/appContext";
import appReducer from "services/appReducer";
import { initApp } from "services/blogActions";
import { initialState } from "types/app";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "styles/App.styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import useAsyncEffect from "use-async-effect";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Write from "pages/Write";
import Read from "pages/Read";
import Bookmarks from "pages/Bookmarks";
import Drafts from "pages/Drafts";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { defaultTheme } from "utils/createTheme";

const App: React.FunctionComponent = () => {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [loading, setLoading] = React.useState<boolean>(true);

  useAsyncEffect(async () => {
    await initApp({ state, dispatch })();
    setLoading(false);
  }, []);

  useEffect(() => {
    setTheme(state.theme);
  }, [state.theme]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress />
          </div>
        ) : (
          <Router>
            <Header />
            <div className={classes.root}>
              <Switch>
                <Route path="/write">
                  <Write />
                </Route>
                <Route path="/drafts/:id">
                  <Drafts />
                </Route>
                <Route path="/bookmarks">
                  <Bookmarks />
                </Route>
                <Route path="/read/:id">
                  <Read />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Router>
        )}
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
