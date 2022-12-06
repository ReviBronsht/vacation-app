import './App.css';
import { MantineProvider} from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/layout';
import Home from './components/pages/homepage/home';
import Vacation from './components/pages/vacation/vacation';

function App() {
  return ( // setting style with mantine provider and router with react-router-dom
    <>
    <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS
    theme={{
      colorScheme: 'light',

      shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
      },

      headings: {
        fontFamily: 'Lucida Handwriting, cursive',
        sizes: {
          h1: { fontSize: 30 },
        },
      },
    }}
    >
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="addVacation" element={<Vacation />} />
            <Route path="vacation/:id" element={<Vacation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
    </>
  );
}

export default App;
