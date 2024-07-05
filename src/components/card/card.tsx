import { FC, ReactNode } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material";

// ----------------------------------------------------------------------

type Cardprops = {
  children: ReactNode;
  onClick?: () => void;
};

const Card: FC<Cardprops> = ({ children, onClick = () => {} }) => {
  return (
    <Container component={Paper} onClick={onClick}>
      {children}
    </Container>
  );
};

// ----------------------------------------------------------------------

const Container = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
}));

// ----------------------------------------------------------------------

export { Card };
export default Card;
