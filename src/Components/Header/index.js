
import { createStyles, Header, Group, Navbar } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

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
  h1: {
    // color: theme.colors.white,
    backgroundColor: theme.colors.gray[8],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }

}))

const AppHeader = ({ incomplete, showHomeTab }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  }

  return (
    <Header data-testid="todo-header">
      <Group>
        {/* <Link className={classes.link} to="/">HOME</Link> */}
        
      </Group>
      <Navbar className={classes.navbar}><Link className={classes.link} to="/settings" onClick={handleSettingsClick}>SETTINGS</Link></Navbar>
<h1  data-testid="todo-h1">To Do List: {incomplete} item/s pending</h1> 
    </Header>
  )
}

export default AppHeader;

//  <Navbar className={classes.navbar}>
      
//       </Navbar>
//       <h1  data-testid="todo-h1">To Do List: {incomplete} item/s pending</h1>
