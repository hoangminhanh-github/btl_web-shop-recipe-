import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Admin = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'price',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'banh mi',
        date: '2011/04/25',
        salary: '$320'
      },
      {
        name: 'pho',
        date: '2011/07/25',
        salary: '$170'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'piazza',
        date: '2009/01/12',
        salary: '$86'
      },
      
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default Admin;