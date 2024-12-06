import { useState } from 'react';
import { TextField, Table, TableBody, TableCell, TableHead, TableRow, Button, Menu, MenuItem, Select, InputLabel, FormControl, Pagination } from '@mui/material';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { facilitiesData } from '../data/facilitiesData'; // Importing the data
import "../components/Style/Facilities.css";
import FacilityDialog from './FacilityDialog';

const Facilities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [filters, setFilters] = useState({
    state: '',
    county: '',
    payam: '',
    type: '',
    owner: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [selectedFacility, setSelectedFacility] = useState(null); 
  const [openDialog, setOpenDialog] = useState(false);

  // Extract unique filter options from the facilities data
  const states = [...new Set(facilitiesData.map(facility => facility.state))];
  const counties = [...new Set(facilitiesData.map(facility => facility.county))];
  const payams = [...new Set(facilitiesData.map(facility => facility.payam))];
  const types = [...new Set(facilitiesData.map(facility => facility.type))];
  const owners = [...new Set(facilitiesData.map(facility => facility.owner))];

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Filter facilities based on selected filters and search term
  const filteredFacilities = facilitiesData.filter(facility => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return (
      (facility.name.toLowerCase().includes(lowerSearchTerm) ||
        facility.state.toLowerCase().includes(lowerSearchTerm) ||
        facility.county.toLowerCase().includes(lowerSearchTerm) ||
        facility.payam.toLowerCase().includes(lowerSearchTerm) ||
        facility.type.toLowerCase().includes(lowerSearchTerm) ||
        facility.owner.toLowerCase().includes(lowerSearchTerm) ||
        facility.location.toLowerCase().includes(lowerSearchTerm) ||
        facility.dateOfEstablishment.toLowerCase().includes(lowerSearchTerm) ||
        (facility.open24Hours === 24 ? 'Yes' : 'No').toLowerCase().includes(lowerSearchTerm)) &&
      (filters.state ? facility.state === filters.state : true) &&
      (filters.county ? facility.county === filters.county : true) &&
      (filters.payam ? facility.payam === filters.payam : true) &&
      (filters.type ? facility.type === filters.type : true) &&
      (filters.owner ? facility.owner === filters.owner : true)
    );
  });

  // Pagination logic: slice the filtered data based on the current page and rows per page
  const paginatedFacilities = filteredFacilities.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // CSV Export Function
  const exportCSV = () => {
    const header = ['Serial No', 'Name', 'Type', 'Ownership', 'Location', 'Date of Establishment', 'Operating 24 Hours'];
    const rows = filteredFacilities.map((facility, index) => [
      index + 1,
      facility.name,
      facility.type,
      facility.owner,
      facility.location,
      facility.dateOfEstablishment,
      facility.open24Hours === 24 ? 'Yes' : 'No',
    ]);

    const csvContent = [header, ...rows]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'facilities_data.csv');
  };

  // PDF Export Function
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [['Serial No', 'Name', 'Type', 'Ownership', 'Location', 'Date of Establishment', 'Operating 24 Hours']],
      body: filteredFacilities.map((facility, index) => [
        index + 1,
        facility.name,
        facility.type,
        facility.owner,
        facility.location,
        facility.dateOfEstablishment,
        facility.open24Hours === 24 ? 'Yes' : 'No',
      ]),
    });

    doc.save('facilities_data.pdf');
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

  // Open the dialog with the clicked facility details
  const handleRowClick = (facility) => {
    setSelectedFacility(facility);
    setOpenDialog(true); 
  };

  // Close the dialog
  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedFacility(null);
  };

  return (
    <div className="facilities-container">
      <div className="filters-container">
        <FormControl fullWidth margin="normal">
          <InputLabel>State</InputLabel>
          <Select
            name="state"
            value={filters.state}
            onChange={handleFilterChange}
            label="State"
          >
            <MenuItem value="">All</MenuItem>
            {states.map((state, index) => (
              <MenuItem key={index} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>County</InputLabel>
          <Select
            name="county"
            value={filters.county}
            onChange={handleFilterChange}
            label="County"
          >
            <MenuItem value="">All</MenuItem>
            {counties.map((county, index) => (
              <MenuItem key={index} value={county}>{county}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Payam</InputLabel>
          <Select
            name="payam"
            value={filters.payam}
            onChange={handleFilterChange}
            label="Payam"
          >
            <MenuItem value="">All</MenuItem>
            {payams.map((payam, index) => (
              <MenuItem key={index} value={payam}>{payam}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            label="Type"
          >
            <MenuItem value="">All</MenuItem>
            {types.map((type, index) => (
              <MenuItem key={index} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Ownership</InputLabel>
          <Select
            name="owner"
            value={filters.owner}
            onChange={handleFilterChange}
            label="Ownership"
          >
            <MenuItem value="">All</MenuItem>
            {owners.map((owner, index) => (
              <MenuItem key={index} value={owner}>{owner}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="table-container">
        <div className="search-download-container">
          <TextField
            type="text"
            placeholder="Search facilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            className="download-button"
          >
            Download
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
          >
            <MenuItem onClick={exportCSV}>Download as CSV</MenuItem>
            <MenuItem onClick={exportPDF}>Download as PDF</MenuItem>
          </Menu>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Serial No</TableCell>
              <TableCell>Facility Name</TableCell>
              <TableCell>State</TableCell>
              <TableCell>County</TableCell>
              <TableCell>Payam</TableCell>
           

              <TableCell>Type</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Date of Establishment</TableCell>
              <TableCell>Operating 24 Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedFacilities.map((facility, index) => (
              <TableRow
                key={index}
                hover
                onClick={() => handleRowClick(facility)} 
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{facility.name}</TableCell>
                <TableCell>{facility.state}</TableCell>
                <TableCell>{facility.county}</TableCell>
                <TableCell>{facility.payam}</TableCell>

                <TableCell>{facility.type}</TableCell>
                <TableCell>{facility.owner}</TableCell>
                <TableCell>{facility.location}</TableCell>
                <TableCell>{facility.dateOfEstablishment}</TableCell>
                <TableCell>{facility.open24Hours === 24 ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination
          count={Math.ceil(filteredFacilities.length / rowsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>

      <FacilityDialog open={openDialog} onClose={handleDialogClose} facility={selectedFacility} />
    </div>
  );
};

export default Facilities;
