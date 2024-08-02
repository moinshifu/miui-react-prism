import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { styled } from "@mui/system";
import ReactTypo from "../ReactTypo/ReactTypo";
import { TeamExpenseSSData } from "../../Utilites/Const";

const StyledTableContainer = styled(TableContainer)({
  marginTop: "16px",
});

const StyledTableCell = styled(TableCell)({
  display: "flex",
  alignItems: "center",
  paddingLeft: 0,
});

const StyledAvatar = styled(Avatar)(({ color }) => ({
  backgroundColor: color,
  marginRight: "16px",
  fontSize: "14px",
  borderRadius: "8px",
}));

const TeamExpenseSS = ({ data, colums }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableBody>
          {TeamExpenseSSData.map((project, index) => (
            <TableRow key={index}>
              <StyledTableCell>
                <StyledAvatar color={project.color} variant="rounded">
                  {project.icon}
                </StyledAvatar>
                <ReactTypo SubTitle={project.name} SubTitle2={project.info} />
              </StyledTableCell>
              <TableCell align="right">
                <ReactTypo
                  SubTitle2={
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <TimerOutlinedIcon
                        fontSize="small"
                        style={{ marginRight: "8px" }}
                      />
                      {project.days} Days
                    </Grid>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TeamExpenseSS;
