import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { navStyle } from "./AppSidebarStyle";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import IconButton from "@mui/material/IconButton";
const drawerWidth = 240;

const navLinks = [
  { text: "Home", icon: <HomeOutlinedIcon /> },
  { text: "Charts", icon: <BarChartOutlinedIcon /> },
  { text: "Tables", icon: <TableViewOutlinedIcon /> },
  { text: "Payroll", icon: <CalculateOutlinedIcon /> },
  { text: "Reports", icon: <AssessmentOutlinedIcon /> },
  { text: "Status", icon: <DonutLargeOutlinedIcon /> },
  // { text: "Financial Trends", icon: <HomeOutlinedIcon /> },
  // { text: "Financial Summary", icon: <BarChartOutlinedIcon /> },
  // { text: "Package & Investor", icon: <TableViewOutlinedIcon /> },
  // { text: "HR & Payroll", icon: <CalculateOutlinedIcon /> },
  // { text: "Custom", icon: <AssessmentOutlinedIcon /> },
  // { text: "Status", icon: <DonutLargeOutlinedIcon /> },
];

const AppSidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer sx={navStyle.drawer} variant="permanent" anchor="left">
      <List sx={navStyle.list}>
        {navLinks.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              sx={{ minWidth: 10 }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
              {selectedIndex === index && <KeyboardArrowRightOutlinedIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppSidebar;
