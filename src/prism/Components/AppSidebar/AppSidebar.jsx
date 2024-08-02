import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  HomeOutlined,
  TableViewOutlined,
  CalculateOutlined,
  BarChartOutlined,
  DonutLargeOutlined,
  AssessmentOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

import { navStyle } from "./AppSidebarStyle";

const navLinks = [
  { text: "Home", icon: <HomeOutlined /> },
  { text: "Charts", icon: <BarChartOutlined /> },
  { text: "Tables", icon: <TableViewOutlined /> },
  { text: "Payroll", icon: <CalculateOutlined /> },
  { text: "Reports", icon: <AssessmentOutlined /> },
  { text: "Status", icon: <DonutLargeOutlined /> },
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
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderLeft: "6px solid transparent",
                py: 1.2,
                minWidth: 10,
              }}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
              {selectedIndex === index && <KeyboardArrowRightOutlined />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppSidebar;
