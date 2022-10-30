import Button from '@mui/material/Button';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { List, Link } from 'components/MainNav/MainNav.styled';

export default function AuthNav() {
  return (
    <List>
      <Button
        sx={{
          color: 'rgba(255, 165, 52, 1)',
          marginRight: 3,
        }}
        variant="text"
        endIcon={<AssignmentIndOutlinedIcon />}
      >
        <Link  to="/register">Sign up</Link>
      </Button>
      <Button
        sx={{
          color: 'rgba(255, 165, 52, 1)',
        }}
        variant="text"
        endIcon={<LoginOutlinedIcon />}
      >
        <Link to="/login">Log In</Link>
      </Button>
    </List>
  );
}
