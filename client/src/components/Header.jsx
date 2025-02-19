import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Context } from "..";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button, ButtonGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import Auth from "../pages/Auth";

const Header = observer(() => {
  const { user } = React.useContext(Context);
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const handleOpenModal = () => setOpenAuthModal(true);
  const handleCloseModal = () => setOpenAuthModal(false);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <h1>
                <NavLink
                  style={{ color: "white", textDecoration: "none" }}
                  to={SHOP_ROUTE}
                >
                  Store
                </NavLink>
              </h1>
            </div>
            {user.isAuth ? (
              <ButtonGroup>
                <Button variant="text" color="default">
                  Admin
                </Button>
                <Button
                  variant="text"
                  color="default"
                  onClick={() => user.setIsAuth(false)}
                >
                  Log out
                </Button>
              </ButtonGroup>
            ) : (
              <ButtonGroup>
                <Button
                  variant="text"
                  color="default"
                  onClick={handleOpenModal}
                >
                  Registration
                </Button>
              </ButtonGroup>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Auth open={openAuthModal} onClose={handleCloseModal} />
    </>
  );
});

export default Header;
