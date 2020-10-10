import React from "react";
import appContext from "services/appContext";
// import { logout, loginTimeout as login } from "services/userActions";
import { login, logout } from "services/userActions";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useStyles from "styles/components/Sidebar.styles";
import { RoutingProps } from "types/app";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AvatarMenu from "components/AvatarMenu";
import CreateIcon from "@material-ui/icons/Create";
import LockIcon from "@material-ui/icons/Lock";
import LaunchIcon from "@material-ui/icons/Launch";
import CustomIcon from "components/CustomIcon";

const Sidebar: React.FunctionComponent<RoutingProps> = ({ handleRoute }) => {
  const classes = useStyles();
  const handleWebsite = () => handleSocials("website");
  const handleFacebook = () => handleSocials("facebook");
  const handleInstagram = () => handleSocials("instagram");
  const handleTwitter = () => handleSocials("twitter");
  const handleTelegram = () => handleSocials("telegram");
  const handleLinkedIn = () => handleSocials("linkedIn");
  const handleMedium = () => handleSocials("medium");
  const handleYouTube = () => handleSocials("youTube");
  const { state, dispatch } = React.useContext(appContext);
  
  const {
    user: { loggedIn, profileImg, isAdmin, loading },
    theme: { palette },
    socials,
  } = state;

  const handleSocials = (id: string) => {
    const social = (socials as any)[id];
    const url = /^(http|https|ftp):/.test(social) ? social : `//${social}`;
    window.open(url, "_blank");
  };

  const handleBookmarks = () => {
    handleRoute("bookmarks");
  };

  const handleLogin = async () => {
    try {
      await login({ state, dispatch })();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout({ state, dispatch })();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddPost = () => {
    handleRoute("write");
  };

  return (
    <>
      <Hidden smUp>
        <></>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
        >
          <div className={classes.drawerPaper}>
            <List>
              <Divider />
              <ListItem >
                <ListItemText primary={
                  loading ? (
                    <CircularProgress color="secondary" />
                  ) : loggedIn ? (
                    <AvatarMenu
                      onLogout={handleLogout}
                      profileImg={profileImg as string}
                      isAdmin={isAdmin || false}
                      handleRoute={handleRoute}
                    />
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleLogin}
                      color="secondary"
                      startIcon={<LockIcon />}
                    >
                      Sign In
                    </Button>
                  )}
                />
              </ListItem>
              {loggedIn && (
                <ListItem>
                  <ListItemText primary={
                    <Button
                      variant="text"
                      startIcon={
                        <CustomIcon
                          color={palette.primary.dark}
                          type="bookmarks"
                        />
                      }
                      onClick={handleBookmarks}
                    >
                      Bookmarks
                    </Button>
                  } />
                </ListItem>
              )}
              {isAdmin && (
                <ListItem>
                  <Button
                    variant="contained"
                    onClick={handleAddPost}
                    startIcon={<CreateIcon />}
                  >
                    Add Post
                  </Button>
                </ListItem>
              )}
              <Divider />
              {socials.hasWebsite && (
                <ListItem button onClick={handleWebsite}>
                  <ListItemIcon>
                    <CustomIcon type="website" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="Website" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              {socials.hasFacebook && (
                <ListItem button onClick={handleFacebook}>
                  <ListItemIcon>
                    <CustomIcon type="facebook" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="Facebook" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              {socials.hasInstagram && (
                <ListItem button onClick={handleInstagram}>
                  <ListItemIcon>
                    <CustomIcon type="instagram" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="Instagram" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              {socials.hasTwitter && (
                <ListItem button onClick={handleTwitter}>
                  <ListItemIcon>
                    <CustomIcon type="twitter" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="Twitter" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              {socials.hasTelegram && (
                <ListItem button onClick={handleTelegram}>
                  <ListItemIcon>
                    <CustomIcon type="telegram" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="Telegram" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              {socials.hasLinkedIn && (
                <ListItem button onClick={handleLinkedIn}>
                  <ListItemIcon>
                    <CustomIcon type="linkedIn" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="LinkedIn" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              {socials.hasMedium && (
                <ListItem button onClick={handleMedium}>
                  <ListItemIcon>
                    <CustomIcon type="medium" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="Medium" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              {socials.hasYouTube && (
                <ListItem button onClick={handleYouTube}>
                  <ListItemIcon>
                    <CustomIcon type="youTube" color={palette.primary.dark} />
                  </ListItemIcon>
                  <ListItemText primary="Youtube" />
                  <ListItemSecondaryAction>
                    <LaunchIcon color="secondary" fontSize="small" />
                  </ListItemSecondaryAction>
                </ListItem>

              )}
            </List>
          </div>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;