import React from "react";
import { createContext, useContextSelector } from "use-context-selector";

/////////////
// INTERFACES
/////////////

interface IStateContext {
  beer: number;
  honey: number;
  addBeer: () => void;
  addHoney: () => void;
}
//////////
// CONTEXT
//////////

const StateContext = createContext<IStateContext>({
  beer: 0,
  honey: 0,
  addBeer: () => {},
  addHoney: () => {}
});

////////
// COMPS
////////

const Beer: React.FC = React.memo(() => {
  console.log("render: Beer");

  const beer = useContextSelector(StateContext, (context) => context.beer);
  const addBeer = useContextSelector(
    StateContext,
    (context) => context.addBeer
  );
  return <button onClick={addBeer}>Beer: {beer}</button>;
});

const Honey: React.FC = React.memo(() => {
  console.log("render: Honey");

  const honey = useContextSelector(StateContext, (context) => context.honey);
  const addHoney = useContextSelector(
    StateContext,
    (context) => context.addHoney
  );

  return <button onClick={addHoney}>Honey: {honey}</button>;
});

//////
// APP
//////

const App: React.FC = React.memo(() => {
  const [beer, setBeer] = React.useState(0);
  const [honey, setHoney] = React.useState(0);

  const addBeer = React.useCallback(() => setBeer((pv) => pv + 1), []);
  const addHoney = React.useCallback(() => setHoney((pv) => pv + 1), []);

  const stateContext = React.useMemo<IStateContext>(
    () => ({
      beer,
      honey,
      addBeer,
      addHoney
    }),
    [honey, beer, addBeer, addHoney]
  );

  return (
    <StateContext.Provider value={stateContext}>
      <Honey />
      <Beer />
    </StateContext.Provider>
  );
});
export default App;
