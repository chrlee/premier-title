import { Box, Stack, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItem from "./NavbarItem";

const navItem = (text, href) => {
  return {
    text: text,
    href: href
  }
}

const navItems = [
  navItem('About Us', '/about'),
  navItem('Order Title', '/order-title'),
  navItem('Services', '/services'),
  navItem('Specialties', '/specialties'),
  navItem('E-Notary', '/e-notary'),
  navItem('Contact', '/contact')
]

export default function Navbar(){
  return(
    <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
      <Box display={{ xs: 'block', md: 'none' }}>
        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Box display={{ xs: 'none', md: 'inline-flex' }}>
        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
          {navItems.map(item => <NavbarItem key={item.href} href={item.href}>{item.text}</NavbarItem>)}
        </Stack>
      </Box>
    </Stack>
  )
}