import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <Typography variant="h2">{children}</Typography>;
};

// ----------------------------------------------------------------------
// re-export
export { Header };
export default Header;
