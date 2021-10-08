import React from "react";


export default function App() {

  const dados = { searchValue: 'teste' }



  return (
    <div>
      <input
        type="search"
        value={dados.searchValue}

      />

      
     
    </div>
  );
}

