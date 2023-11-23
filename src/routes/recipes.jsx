import React from 'react';
import Card from '../components/Card';
import Input from '../components/Input';

function Recipes({ searchHandler, recipes, search }) {
  return (
    <>
      <div className="container">
      <Input />
        <input type="text" placeholder="Search" onChange={searchHandler} />
        <div className="cards">
          {recipes
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .map((item) => (
              <Card key={item.id} {...item} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Recipes;
