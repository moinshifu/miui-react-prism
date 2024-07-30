import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Avatar,
  Alert
} from "@mui/material";
import { styled } from "@mui/system";
import ReactTypo from "../ReactTypo/ReactTypo";
import { clientData } from "../../Utilites/Const";
import ReactButton from "../ReactButton/ReactButton";
import AvatarImg from "../../assets/1.jpg"

const StyledTableContainer = styled(TableContainer)({
  marginTop: "16px",
});

const StyledTableCell = styled(TableCell)({
  display: "flex",
  alignItems: "center",
  paddingLeft: 0,
  gridGap: '1rem'
});


const LatestClient = ({ data, colums }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableBody>
          {clientData.map((client, index) => (
            <TableRow key={index}>
              <StyledTableCell>
                <Avatar alt="Remy Sharp" src={AvatarImg} />
                <ReactTypo SubTitle={client.name} />
              </StyledTableCell>
              <TableCell>
                {client.project}
              </TableCell>
              <TableCell>
              <Alert sx={{lineHeight: '1', fontSize: '.8em', padding: '0 10px', display: 'inline-block'}} icon={false} severity={client.status === 'Done' ? "success" : "warning"}>{client.status}</Alert>
                
              </TableCell>
              <TableCell>
                <ReactButton text='Chat' outline size={'small'} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default LatestClient;
