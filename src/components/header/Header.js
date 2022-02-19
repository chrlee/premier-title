import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Navbar from "./Navbar";

export default function Header({ children }){
  return(
    <AppBar position="relative" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <Navbar /> 
      </Toolbar>
    </AppBar>
  )
}