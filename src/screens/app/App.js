import {BrowserRouter} from 'react-router-dom';
import {MainContext} from "../../helpers/contexts/MainContext";
import {useMemo} from "react";
import {Router} from "../../routers/Router";

const DisplayApp = () => {
    return (
        <>
            {
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            }
        </>
    );
};

const App = () => {
  const context = useMemo( () => {
         return ( {
         } );
      },
        []);

  return (
      <MainContext.Provider value={context}>
          <DisplayApp/>
      </MainContext.Provider>
  );
};

export default App;
