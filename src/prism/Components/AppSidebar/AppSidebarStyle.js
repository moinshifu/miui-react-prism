import { primaryLight, primary } from "../../Utilites/Const";

export const navStyle = {
  drawer: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      paddingTop: "64px",
      borderRight: "1px solid rgba(0, 0, 0, 0.08)",
    },

    "& .Mui-selected": {
      backgroundColor: `${primaryLight} !important`,
      borderLeftColor: `${primary}`,
      "& svg": {
        color: primary,
      },
    },

    "& svg": {
      fontSize: "26px",
    },
  },
};
