import React, { useContext } from 'react';
import { When } from 'react-if';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import SettingsForm from './Components/SettingsForm';
import ToDo from './Components/Todo';
import { AuthContext } from './Context/Auth';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
    <Header />
    <When condition={ isLoggedIn }>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/settings" element={<SettingsForm/>} />
      </Routes>
    </When>
    </BrowserRouter>
  );
}

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//       <BrowserRouter>
       
//         <Routes>
//           <Route path="/settings" element={<SettingsForm />} />
//           <Route path="/" element={<ToDo />}  />
        
//         </Routes>

//         </BrowserRouter>
   
//    </>
     
//     );
//   }
// }
