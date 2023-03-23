import React from 'react';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);



export const links = [
  {
    title: 'Pages',
    links: [
      {
        name: 'Home'
      },
      {
        name: 'Recommendation'
      },
            
    ],
  }
];

export const recentTransactions = [
  {
    id: 1,
    desc: 'From',
  },
  {
    id: 2,
    desc: 'To',
  },
  {
    id: 3,
    desc: 'Start date'
  },
  {
    id: 4,
    desc: 'End date'
}

];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];