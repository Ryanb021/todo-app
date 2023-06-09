import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.jsx';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';

import { v4 as uuid } from 'uuid';
import List from '../List/index.jsx';
import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.gray[9],
    marginBottom: theme.spacing.md,
  },
}));

const ToDo = () => {
  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
    
      <Header incomplete={incomplete} />
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card withBorder p="xs">
            <Text className={classes.formHeading}>Add To Do Item</Text>

            <form onSubmit={handleSubmit}>

              <TextInput
                placeholder="Item Details"
                name="text"
                onChange={handleChange}
                label="To Do Item"
              />

              <TextInput
                placeholder="Name"
                name="Name"
                onChange={handleChange}
                label="Assigned To"
              />

              <Text>Difficulty</Text>
              <Slider
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                min={0}
                max={5}
                step={1}
                name="difficulty"
                type="range"
                mb="lg"
              />

              <Button type="submit" variant="gradient" gradient={{ from: 'yellow', to: 'green', deg: 60 }}>Add Item</Button>


            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <List list={list} toggleComplete={toggleComplete} />
        </Grid.Col>
      </Grid>
      <Footer />
    </>
  );
};

export default ToDo;
