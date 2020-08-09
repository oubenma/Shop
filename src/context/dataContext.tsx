import React, { createContext } from 'react';

interface ContextOptions {
  example: string;
  cuteFunction: (name: string) => void;
}

export const DataContext = createContext<ContextOptions>({
  example: '',
  cuteFunction: (name: string) => {},
});

export const ApplicationProvider = (props: any) => {
  // TODO: remove cuteFunction and example
  const cuteFunction = (name: string) => {
    alert(name);
  };
  const example = 'hello from the other side';

  const values = { example, cuteFunction };

  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
};
