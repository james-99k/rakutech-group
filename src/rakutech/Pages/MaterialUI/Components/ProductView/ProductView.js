import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { green, grey } from '@material-ui/core/colors';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />



// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData('0', '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData('1', '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData('2', '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData('3', '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData('4', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  container:{
  marginTop: '10px',
  padding: '20px',
  background:"white",
    },

    tableHeader:{
        backgroundColor:'#E3E9EF',
        borderRadius:"50px"
    },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Container className={classes.container}>
            <Grid container direction="row">
                <Grid item>
                    <h2>Products</h2>
                </Grid>
                <Grid item >
                <Button variant="contained" color="secondary">
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
                Add Product
                </Button>
                </Grid>
            </Grid>
            <hr></hr>
            <Table style={{backgroundColor: "white"}}>
                <TableHead className={classes.tableHeader}>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Weight</TableCell>
                    <TableCell>Date Created</TableCell>
                    <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.shipTo}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    </TableRow>
                )) }
                </TableBody>
            </Table>
      </Container>
    </React.Fragment>
  );
}