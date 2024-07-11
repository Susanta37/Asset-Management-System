import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { brandData } from '../Data/Data.js';
import toast, { Toaster } from "react-hot-toast";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  FaEdit,
  FaTrash,
  FaCopy,
  FaFileCsv,
  FaFilePdf,
  FaPrint,
} from "react-icons/fa";
import NavBar from '../Components/NavBar';

const Brand = () => {
  const [data, setData] = useState(brandData);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo(() => [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Description', accessor: 'description' },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row.index)}
            className="bg-blue-500 text-white p-1 rounded"
            title="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row.index)}
            className="bg-red-500 text-white p-1 rounded"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      )
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, pageSize }
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0, pageSize: 10 }
  }, useGlobalFilter, usePagination);

  const handleCopy = () => {
    const textToCopy = data.map(row => 
      `${row.assetTag}, ${row.asset}, ${row.supplier}, ${row.type}, ${row.startDate}, ${row.endDate}`
    ).join('\n');
    navigator.clipboard.writeText(textToCopy)
      .then(() => toast.success('Copied to clipboard'))
      .catch(err => toast.error('Failed to copy'));
  };

  const handleExportCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      data.map(row => 
        `${row.assetTag},${row.asset},${row.supplier},${row.type},${row.startDate},${row.endDate}`
      ).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "brand.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleExportPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Asset tag', 'Asset', 'Supplier', 'Type', 'Start date', 'End date']],
      body: data.map(row => [row.assetTag, row.asset, row.supplier, row.type, row.startDate, row.endDate])
    });
    doc.save('brand.pdf');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDelete = (rowIndex) => {
    const newData = [...data];
    newData.splice(rowIndex, 1);
    setData(newData);
    toast.success('Row deleted');
  };

  const handleEdit = (rowIndex) => {
    // Implement edit functionality
    toast.info('Edit row: ' + rowIndex);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-center text-xl font-semibold mb-2">Brand list</h2>
        <div className="flex justify-between mb-2">
          <div className="flex gap-4">
            <button onClick={handleCopy} className="text-blue-500 hover:text-blue-700 mx-2" title="Copy">
              <FaCopy size={24} />
            </button>
            <button onClick={handleExportCsv} className="text-blue-500 hover:text-blue-700 mx-2" title="Export as CSV">
              <FaFileCsv size={24} />
            </button>
            <button onClick={handleExportPdf} className="text-blue-500 hover:text-blue-700 mx-2" title="Export as PDF">
              <FaFilePdf size={24} />
            </button>
            <button onClick={handlePrint} className="text-blue-500 hover:text-blue-700 mx-2" title="Print">
              <FaPrint size={24} />
            </button>
          </div>
          <input
            value={globalFilter || ''}
            onChange={e => setGlobalFilter(e.target.value || undefined)}
            placeholder="Search..."
            className="border p-2 rounded border-gray-500"
          />
          <button className="bg-blue-500 text-white p-2 rounded">+ Add data</button>
        </div>
        <table {...getTableProps()} className="min-w-full bg-white border border-gray-200">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100 border-b">
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="text-left p-2 font-medium text-gray-700">{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b`}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="p-2">{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between mt-2">
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="bg-blue-400 hover:bg-blue-600 p-2 rounded">Previous</button>
          <span>Page {pageIndex + 1}</span>
          <button onClick={() => nextPage()} disabled={!canNextPage} className="bg-blue-400 hover:bg-blue-600 p-2 rounded">Next</button>
        </div>
      </div>
    </>
  );
};

export default Brand;
