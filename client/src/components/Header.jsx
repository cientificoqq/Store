import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Context } from "..";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import { SHOP_ROUTE, ADMIN_ROUTE } from "../utils/consts"; // Добавляем ADMIN_ROUTE
import { Button, ButtonGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import Auth from "../pages/Auth";
import { NavLink } from "react-router-dom"; // Добавляем NavLink, если он нужен

const Header = observer(() => {
  const { user } = React.useContext(Context);
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const navigate = useNavigate(); // Хук для навигации

  const handleCloseModal = () => setOpenAuthModal(false);

  const handleAdminClick = () => {
    navigate(ADMIN_ROUTE); // Переход на страницу админ панели
  };

  return (
    <div>
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
                <Button
                  variant="text"
                  color="default"
                  onClick={handleAdminClick} // Переход на админ страницу
                >
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
                  onClick={() => user.setIsAuth(true)}
                >
                  Registration
                </Button>
              </ButtonGroup>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Auth open={openAuthModal} onClose={handleCloseModal} />
    </div>
  );
});

export default Header;
