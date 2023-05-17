# LAB - Context API

**To Do List Manager Phase 1:** Incorporate configuration settings to the application.

Currently, a user can add todo tasks to the proof-of-life starter application. In this phase, we will add hard-wired, default context settings to the application so that the user can view three incomplete todo tasks.  In addition, the user will have the option of viewing any additional incomplete tasks by using pagination functionality.

## Phase 1 Requirements

In Phase 1, we're going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

- Create a Detailed UML.
- Properly modularize the application into separate components, note the **proposed** file structure below.
- Implement the Context API to make some basic application settings available to components.
  - Show three items by default.
  - Hide completed items by default.
  - Add the sort word 'difficulty' by default.
- Style the application using the [Mantine Component API](https://mantine.dev/pages/getting-started/){target:_blank}.
  - NOTE: The expectation to style this entire component in one day is likely unrealistic.  The recommendation is to implement the required functionality, then systematically begin styling with Mantine.  Match the comp image(s) as closely as possible. 80% of the design work will likely take 20% of your time. By the end of the week, being mostly there with style is the goal! 

![To Do with Pagination](todo.png)

## Technical Requirements / Notes

> Create a settings Context component that can define how our components should display elements to the User.

1. Implement the React `context` API for defining `settings` across the entire application.
   - Create React Context for managing application display settings and provide this at the application level.
   - Add the following defaults to the context provider's state, they will not be changeable in this lab.
     - Display three items. 
     - Hide completed items using a boolean. 
     - Define "difficulty" as a default sort word to *optionally* use in the stretch goal.

1. Consume and utilize `context` values throughout your components.
   - Show a maximum of three items per screen by default in the `<List />` component.
   - Use the Mantine `<Pagination />` component to allow users to navigate a list of items.
   - Hide completed items in the list by default (the ability to show will be added in a later lab).

### Pagination Notes:

- Only display the first `n` items in the list, where `n` is the default number three from your settings context.
  - If you have more than `n` items in the list, the `<Pagination />` component will add a button that, when clicked, will replace the list with the next `n`. items in the list.
  - the `<Pagination />` component will manage the "previous" and "next" buttons upon correct implementation.


## Stretch Goals

- Sort the items based on any of the keys (i.e. difficulty).
- In your Context component, read the settings in from an object in Local Storage and use that as the initial state.

## Testing

- Tests should assert all behavioral functionality.
- Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
  - Can they see context?

## Documentation

- Describe how global state is consumed by the components.
- Describe the operation of the hook: `useForm()`.

### Day 1
![Context Setting](https://github.com/Ryanb021/todo-app/assets/120413183/c860282b-10b8-4da5-bba2-c91b5d4574ee)
![Todo Day1](https://github.com/Ryanb021/todo-app/assets/120413183/f1a8558c-c232-4ad9-850b-43f8c3ffd290)

### Day 2
![ToDo Day2](https://github.com/Ryanb021/todo-app/assets/120413183/4bcbcebf-97d6-429a-adb1-290cd54e7d1e)
![Settings   Storage](https://github.com/Ryanb021/todo-app/assets/120413183/f5667748-4750-470d-ab41-ec61d7cbcb0c)



