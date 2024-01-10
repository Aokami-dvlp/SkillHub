import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataGrid, GridEventListener, GridToolbar, itIT } from '@mui/x-data-grid';
import { Developer } from '../models/developer';
import { datamapper } from '../modules/datamapper';
import { COLUMNS } from '../modules/COLUMNS';

interface Props {
  developers: Developer[];
  setOpenModal: (open: boolean) => void;
  setSelectedDeveloper: (developer: Developer) => void;
}

const Table = ({ developers, setOpenModal, setSelectedDeveloper }: Props) => {

  const data = datamapper(developers);
  
  const handleClickRow: GridEventListener<'rowClick'> = (params) => {
    setOpenModal(true);
    console.log(params.row);
    setSelectedDeveloper(params.row as Developer);
  }

  return (
    <div className="table">
    <Grid container spacing={1}>
      <Grid item>
        <Box id="filter-panel" />
      </Grid>
      <Grid item style={{ height: 600, width: '90%' }}>
        <DataGrid
        onRowClick={handleClickRow}
        localeText={itIT.components.MuiDataGrid.defaultProps.localeText}
          columns={COLUMNS}
          rows={data}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          disableDensitySelector
          initialState={{
            filter: {
              filterModel: {
                items: [],
                quickFilterExcludeHiddenColumns: true,
              },
            },
          }}
        />
      </Grid>
    </Grid>
    </div>
  );
}

export default Table;