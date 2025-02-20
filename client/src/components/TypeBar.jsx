import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { List, ListItem, ListItemText } from "@mui/material";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <List>
      {device.types.map((type) => (
        <ListItem
          key={type.id}
          button
          selected={type.id === device.selectedType?.id}
          onClick={() => device.setSelectedType(type)}
          sx={{
            cursor: "pointer",
            backgroundColor:
              type.id === device.selectedType?.id
                ? "primary.main"
                : "transparent",
            color: type.id === device.selectedType?.id ? "white" : "inherit",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          <ListItemText primary={type.name} />
        </ListItem>
      ))}
    </List>
  );
});

export default TypeBar;
