import { useState } from 'react';
import { TextField, Table, TableBody, TableCell, TableHead, TableRow, Button, Menu, MenuItem, Select, FormControl, InputLabel, Pagination } from '@mui/material';
import { bomasData } from '../data/facilitiesData'; // Import bomasData (similar to facilitiesData)
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import '../components/Style/Bomas.css';

const Bomas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [filters, setFilters] = useState({
    state: '',
    county: '',
    payam: '',
    owner: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Set rows per page to 10

  // Extract unique filter options from the bomas data
  const states = [...new Set(bomasData.map(boma => boma.state))];
  const counties = [...new Set(bomasData.map(boma => boma.county))];
  const payams = [...new Set(bomasData.map(boma => boma.payam))];
  const owners = [...new Set(bomasData.map(boma => boma.owner))];

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Filter bomas based on selected filters and search term
  const filteredBomas = bomasData.filter(boma => {
    return (
      (boma.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      boma.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.state ? boma.state === filters.state : true) &&
      (filters.county ? boma.county === filters.county : true) &&
      (filters.payam ? boma.payam === filters.payam : true) &&
      (filters.owner ? boma.owner === filters.owner : true)
    );
  });

  // Pagination logic: slice the filtered data based on the current page and rows per page
  const paginatedBomas = filteredBomas.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // CSV Export Function
  const exportCSV = () => {
    const header = ['Serial No', 'Name', 'Ownership', 'Location'];
    const rows = filteredBomas.map((boma, index) => [
      index + 1, // Serial No starts from 1
      boma.name,
      boma.owner,
      boma.location
    ]);

    const csvContent = [header, ...rows]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'bomas_data.csv');
  };

  // PDF Export Function
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [['Serial No', 'Name', 'Ownership', 'Location']],
      body: filteredBomas.map((boma, index) => [
        index + 1, // Serial No starts from 1
        boma.name,
        boma.owner,
        boma.location
      ]),
    });

    doc.save('bomas_data.pdf');
  };

  // Handle menu open/close
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
    setAnchorEl(null);
  };

  return (
    <div className='facilities-container'>
      {/* Left side filters */}
      <div className='filters-container'>
        {/* Filter fields (State, County, Payam, Owner) */}
        <FormControl fullWidth variant='outlined' margin='normal'>
          <InputLabel>State</InputLabel>
          <Select
            name='state'
            value={filters.state}
            onChange={handleFilterChange}
            label='State'
          >
            <MenuItem value=''>All</MenuItem>
            {states.map(state => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant='outlined' margin='normal'>
          <InputLabel>County</InputLabel>
          <Select
            name='county'
            value={filters.county}
            onChange={handleFilterChange}
            label='County'
          >
            <MenuItem value=''>All</MenuItem>
            {counties.map(county => (
              <MenuItem key={county} value={county}>{county}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant='outlined' margin='normal'>
          <InputLabel>Payam</InputLabel>
          <Select
            name='payam'
            value={filters.payam}
            onChange={handleFilterChange}
            label='Payam'
          >
            <MenuItem value=''>All</MenuItem>
            {payams.map(payam => (
              <MenuItem key={payam} value={payam}>{payam}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant='outlined' margin='normal'>
          <InputLabel>Owner</InputLabel>
          <Select
            name='owner'
            value={filters.owner}
            onChange={handleFilterChange}
            label='Owner'
          >
            <MenuItem value=''>All</MenuItem>
            {owners.map(owner => (
              <MenuItem key={owner} value={owner}>{owner}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Right side: Search, Download, and Table */}
      <div className='table-container'>
        <div className='search-download-container'>
          <TextField
            type='text'
            placeholder='Search bomas...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search-input'
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <button
            variant='contained'
            color='primary'
            onClick={handleClick}
            className='download-button'
          >
            Download
          </button>

          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
          >
            <MenuItem onClick={exportCSV}>Download as CSV</MenuItem>
            <MenuItem onClick={exportPDF}>Download as PDF</MenuItem>
          </Menu>
        </div>

        {/* Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Serial No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>State</TableCell>
              <TableCell>County</TableCell>
              <TableCell>Payam</TableCell>
              <TableCell>Ownership</TableCell>
              <TableCell>GPS Coordinate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBomas.map((boma, index) => (
              <TableRow key={boma.id}>
                <TableCell>{(currentPage - 1) * rowsPerPage + index + 1}</TableCell>
                <TableCell>{boma.name}</TableCell>
                <TableCell>{boma.state}</TableCell>
                <TableCell>{boma.county}</TableCell>
                <TableCell>{boma.payam}</TableCell>
                <TableCell>{boma.owner}</TableCell>
                <TableCell>{boma.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination
          count={Math.ceil(filteredBomas.length / rowsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color='primary'
          sx={{ marginTop: 2 }}
        />
      </div>
    </div>
  );
};

export default Bomas;
