import React, { createContext, useState, useEffect } from 'react';

type Product = {
  title: string;
  oldPrice: number;
  salePrice: number;
  value: number;
  imageUrl: string;
};

interface ContextOptions {

  popularThisWeekProducts: Product[];
  requestPopularThisWeekProducts: () => void;
}

export const DataContext = createContext<ContextOptions>({

  popularThisWeekProducts: [],
  requestPopularThisWeekProducts: () => {},
});

export const ApplicationProvider = (props: any) => {
  const [popularThisWeekProducts, setPopularThisWeekProducts] = useState<
    Product[]
  >([]);

  const requestPopularThisWeekProducts = () => {
    // TODO : call backend with axios and set data to setPopularThisWeekProducts
    //temp solution
    setPopularThisWeekProducts([
      {
        title: 'Hamilton Beach Flexbrew',
        oldPrice: 149.99,
        salePrice: 149.99,
        value: 3,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg',
      },
      {
        title: 'Hamilton Beach Flexbrew',
        oldPrice: 149.99,
        salePrice: 149.99,
        value: 3,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg',
      },
      {
        title: 'Hamilton Beach Flexbrew',
        oldPrice: 149.99,
        salePrice: 149.99,
        value: 3,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg',
      },
      {
        title: 'Hamilton Beach Flexbrew',
        oldPrice: 149.99,
        salePrice: 149.99,
        value: 3,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg',
      },
      {
        title: 'Hamilton Beach Flexbrew',
        oldPrice: 149.99,
        salePrice: 149.99,
        value: 3,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg',
      },
      {
        title: 'Hamilton Beach Flexbrew',
        oldPrice: 149.99,
        salePrice: 149.99,
        value: 3,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg',
      },
    ]);
  };

  useEffect(() => {
    requestPopularThisWeekProducts();
  }, []);

  // TODO: remove cuteFunction and example
 
  

  const values = {
    popularThisWeekProducts,
    requestPopularThisWeekProducts,
  };
  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
};
