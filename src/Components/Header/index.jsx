
import { createStyles, Header, Group, Navbar } from '@mantine/core';
import { Link } from 'react-router-dom';
import Login from '../Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.green[8],
    color: theme.colors.gray[0],
    width: '100%',
    height: '100%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,

  },
  // h1: {
  //   // color: theme.colors.white,
  //   backgroundColor: theme.colors.gray[8],
  //   width: '80%',
  //   margin: 'auto',
  //   fontSize: theme.fontSizes.lg,
  //   padding: theme.spacing.md,
  //   marginBottom: theme.spacing.md,
  //   marginTop: theme.spacing.md,
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  }

}))

const AppHeader = ({ incomplete }) => {
  const { classes } = useStyles();
  // const navigate = useNavigate();

  // const handleSettingsClick = () => {
  //   navigate('/settings');
  // }

  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar}>
        <Group position="apart">
          <Group>
            <Link className={classes.link} to="/" default>Home</Link>
            <Link className={classes.link} to="/settings">Settings</Link>
          </Group>
          <Login />
        </Group>
      </Navbar>
    </Header>
  )
}

export default AppHeader;

//  <Navbar className={classes.navbar}>
      
//       </Navbar>
//       <h1  data-testid="todo-h1">To Do List: {incomplete} item/s pending</h1>
