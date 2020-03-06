import React, { useState } from 'react';
import './App.css';

// Grid
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { gridOptions, defaultSortModel } from './components/gridOptions';


function App() {
  const [rowData, setRowData] = useState();

  const onGridReady = params => {
    // const gridApi = params.api;
    // const gridColumnApi = params.columnApi;

    // console.log(gridApi);
    // console.log(gridColumnApi);

    fetch("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json")
      .then((res) => res.json())
      .then((response) => {
        setRowData(response)
      })
      .catch((error) => {
        console.log(error);
      })

    params.api.setSortModel(defaultSortModel); // when grid load, defaul sorting method


  };


  return (
    <div className="ag-theme-balham"
      style={{ height: '500px', width: "100%" }}
    >
      <AgGridReact
        gridOptions={gridOptions}
        rowSelection="multiple"
        onGridReady={onGridReady.bind(this)}
        rowData={rowData}
        animateRows={true}


      />
    </div>
  );
}

export default App;
