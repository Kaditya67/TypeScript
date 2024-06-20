import { Toolbar, AppBar, Typography } from '@mui/material';
import logo from '../logo.jpeg';

export default function Header() {
  return (
    <div>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <img src={logo} alt="logo" style={{ width: 30, paddingRight:10}} />
          <Typography variant="h6">EverNote</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
