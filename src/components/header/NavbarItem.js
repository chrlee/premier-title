import { Box, Typography } from "@mui/material";
import Link from "../Link";

export default function NavbarItem({ children, href }){
  return(
    <Box>
      <Link href={href} noLinkStyle>
        <Typography color="black">
          { children }
        </Typography>
      </Link>
    </Box>
  )
}