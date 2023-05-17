import { Button, createStyles, Grid, Card, NumberInput, Text, TextInput } from '@mantine/core';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SettingsContext } from '../../Context/Settings';
import { When } from 'react-if';
import './SettingsForm.scss';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.red[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }
}));

const SettingsForm = () => {

  const [show, setShow] = useState(false);
  
  const { showComplete,
   
    pageItems,
    setPageItems,
    sort,
    setSort,
    saveLocally,
  } = useContext(SettingsContext);

  const { classes } = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocally({ showComplete, pageItems, sort});
  }

  return (
    <>
      {/* <h2 className={classes.h2}><Link className={classes.link} to="/">HOME</Link></h2> */}
      <h1 className={classes.h1}><Link className="home" to="/">HOME</Link></h1>
      <h1 className={classes.h1}>MANAGE SETTINGS</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p="sm">
            <form onSubmit={handleSubmit}>
              <Text>UPDATED SETTINGS</Text>
              <NumberInput
                mb="sm"
                value={pageItems}
                label="Items Per Page"
                onChange={(value) => setPageItems(value)}
              />
              <TextInput
                mb="sm"
                placeholder={sort}
                onChange={(e) => setSort(e.target.value)}
                label="Sort Keyword"
              />
              <Button type="submit">Show New Settings</Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <When condition={show}>
            <Card withBorder p="xs">
              <Card.Section>
              </Card.Section>
              <Text m="sm">ITEMS PER PAGE: {pageItems}</Text>
              <Text m="sm">SORT KEYWORD: {sort}</Text>
            </Card>
          </When>
        </Grid.Col>
      </Grid>
    </>
  )
};

export default SettingsForm;
