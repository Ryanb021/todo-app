
import { createStyles, Header, Navbar } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.gray[8],
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
    color: theme.colors.white,
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }

}))

const AppHeader = ({ incomplete }) => {
  const { classes } = useStyles();

  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar}>
      
      </Navbar>
      <h1  data-testid="todo-h1">To Do List: {incomplete} item/s pending</h1>
    </Header>
  )
}

export default AppHeader
