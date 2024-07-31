import { Padding } from "@mui/icons-material";

const primary = "#1f58d4";
export const navStyle = {
  drawer: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      paddingTop: "64px",
      // background: "#f6f7f9",
      // background: "#f1f5fe",
      borderRight: "1px solid rgba(0, 0, 0, 0.08)",
    },

    "& .Mui-selected": {
      backgroundColor: "#edf4fe !important",
      borderRadius: 1,
      boxShadow:
        "0px 1px 1px -1px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      "& svg": {
        color: primary,
      },
      "& span": {
        fontWeight: "700",
      },
    },
    "& .MuiListItem-root": {
      padding: 0,
    },
    "& span": {
      fontSize: "14px",
    },
  },
};
