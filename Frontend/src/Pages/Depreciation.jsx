import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { depreciationData } from '../Data/Data.js';
import toast, { Toaster } from 'react-hot-toast';
import {
  FaEdit,
  FaTrash,
  FaCopy,
  FaFileCsv,
  FaFilePdf,
  FaPrint
} from 'react-icons/fa';
import NavBar from '../Components/NavBar.jsx';

const Depreciation = () => {
  const [data, setData] = useState(depreciationData);
  const columns = useMemo(() => [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Cost', accessor: 'cost' },
    { Header: 'Period (Month)', accessor: 'period' },
    { Header: 'Category', accessor: 'category' },
    { Header: 'Asset Value', accessor: 'assetValue' },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row.original)}
            className="text-blue-500 hover:text-blue-700"
            title="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row.original)}
            className="text-red-500 hover:text-red-700"
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
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0, pageSize: 10 }
  }, useGlobalFilter, usePagination);

  const handleEdit = (row) => {
    toast(`Edit row with name: ${row.name}`, { icon: '✏️' });
  };

  const handleDelete = (row) => {
    const newData = data.filter(item => item !== row);
    setData(newData);
    toast.success('Row deleted');
  };

  const handleCopy = () => {
    const tableText = data.map(row => Object.values(row).join(', ')).join('\n');
    navigator.clipboard.writeText(tableText).then(() => {
      toast.success('Table copied to clipboard');
    });
  };

  const handleExportCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," + data.map(row => Object.values(row).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "depreciation.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleExportPdf = () => {
    const doc = new jsPDF();
    let yPos = 10;
    data.forEach(row => {
      Object.keys(row).forEach((key, i) => {
        doc.text(`${key}: ${row[key]}`, 10, yPos + i * 10);
      });
      yPos += 50;
      if (yPos >= 280) {
        doc.addPage();
        yPos = 10;
      }
    });
    doc.save("depreciation.pdf");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
   <>
    <NavBar/>
    <div className="bg-white p-4 rounded shadow">
      <Toaster position="top-center" reverseOrder={false} />
   
      <div className='flex justify-between p-2'><h2 className="text-center text-xl font-semibold mb-2">Depreciation List</h2>
      <button className="bg-blue-500 text-white p-2 rounded">+ Add data</button></div>
      <div className="flex justify-between mb-2 border border-gray-300 p-2">
        <div className="flex gap-4">
          <button onClick={handleCopy} className="text-blue-500 hover:text-blue-700" title="Copy">
            <FaCopy />
          </button>
          <button onClick={handleExportCsv} className="text-blue-500 hover:text-blue-700" title="Export as CSV">
            <FaFileCsv />
          </button>
          <button onClick={handleExportPdf} className="text-blue-500 hover:text-blue-700" title="Export as PDF">
            <FaFilePdf />
          </button>
          <button onClick={handlePrint} className="text-blue-500 hover:text-blue-700" title="Print">
            <FaPrint />
          </button>
        </div>
        <input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value || undefined)}
          placeholder="Search..."
          className="border p-2 rounded border-gray-500"
        />
     
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

export default Depreciation;

