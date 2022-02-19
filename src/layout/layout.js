import Header from "src/components/header/Header";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "src/theme";

export default function Layout({ children }){
  return(
    <ThemeProvider theme={theme}>
      <Stack>
        <Header />
        <main>{children}</main>
      </Stack>
    </ThemeProvider>
  )
}