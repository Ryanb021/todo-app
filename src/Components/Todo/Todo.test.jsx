import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from '.';

describe('ToDo Component Tests', ()  => {
  test('render a header element as expected', () => {
    render(<Todo />);

    let header = screen.getByTestId('todo-header');
    let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending');
  })
})

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import ToDo from '.';

// describe('ToDo component', () => {
//   test('renders the form and adds a new item', () => {
//     render(<ToDo />);
    
//     // Fill in the form inputs
//     fireEvent.change(screen.getByLabelText('To Do Item'), { target: { value: 'Buy groceries' } });
//     fireEvent.change(screen.getByLabelText('Assigned To'), { target: { value: 'John Doe' } });
    
//     // Submit the form
//     fireEvent.click(screen.getByText('Add Item'));
    
//     // Check if the new item is added to the list
//     expect(screen.getByText('Buy groceries')).toBeInTheDocument();
//     expect(screen.getByText('John Doe')).toBeInTheDocument();
//   });

//   test('toggles item completion', () => {
//     render(<ToDo />);
    
//     // Add a new item
//     fireEvent.change(screen.getByLabelText('To Do Item'), { target: { value: 'Buy groceries' } });
//     fireEvent.change(screen.getByLabelText('Assigned To'), { target: { value: 'John Doe' } });
//     fireEvent.click(screen.getByText('Add Item'));
    
//     // Toggle the completion status of the item
//     fireEvent.click(screen.getByTestId('complete-toggle'));
    
//     // Check if the completion status is toggled
//     expect(screen.getByTestId('complete-toggle')).toBeChecked();
//   });

//   test('deletes an item', () => {
//     render(<ToDo />);
    
//     // Add a new item
//     fireEvent.change(screen.getByLabelText('To Do Item'), { target: { value: 'Buy groceries' } });
//     fireEvent.change(screen.getByLabelText('Assigned To'), { target: { value: 'John Doe' } });
//     fireEvent.click(screen.getByText('Add Item'));
    
//     // Delete the item
//     fireEvent.click(screen.getByTestId('delete-button'));
    
//     // Check if the item is deleted
//     expect(screen.queryByText('Buy groceries')).not.toBeInTheDocument();
//     expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
//   });
// });
