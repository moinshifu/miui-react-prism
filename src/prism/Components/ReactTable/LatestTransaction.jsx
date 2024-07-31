import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Avatar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import ReactTypo from "../ReactTypo/ReactTypo";
import {
  alert,
  success,
  transactionData,
  lightText,
} from "../../Utilites/Const";
import AvatarImg from "../../assets/1.jpg";
import { AttachFileOutlined, MoreHorizOutlined } from "@mui/icons-material";

const StyledTableContainer = styled(TableContainer)({
  marginTop: "16px",
});

const StyledTableCell = styled(TableCell)({
  display: "flex",
  alignItems: "center",
  paddingLeft: 0,
  gridGap: "1rem",
});

const LatestTransaction = ({ data, colums }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableBody>
          {transactionData.map((client, index) => (
            <TableRow key={index}>
              <StyledTableCell>
                <Avatar alt="Remy Sharp" src={AvatarImg} />
                <ReactTypo SubTitle={client.name} />
              </StyledTableCell>
              <TableCell>{client.project}</TableCell>
              <TableCell>
                <span
                  style={{ color: Number(client.amount) < 0 ? alert : success }}
                >
                  {client.amount}
                </span>
              </TableCell>
              <TableCell>
                <ReactTypo SubTitle2={client.duration} />
              </TableCell>
              <TableCell>
                <AttachFileOutlined
                  sx={{
                    mr: 1.5,
                    cursor: "pointer",
                    transform: "rotate(45deg)",
                  }}
                />
                <MoreHorizOutlined sx={{ cursor: "pointer" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default LatestTransaction;
