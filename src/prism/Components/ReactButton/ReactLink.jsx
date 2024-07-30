import { primary } from "../../Utilites/Const";
import { Link } from "@mui/material";

const ReactLink = ({ text, onClick, sx }) => {
  return (
    <Link sx={sx} href="#" underline="hover" onClick={onClick} color={primary}>
      {text}
    </Link>
  );
};

export default ReactLink;
