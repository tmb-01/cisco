import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllShops,
  deleteShop,
  editShops,
  getCurrentShop,
} from "../../actions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  btn: {
    margin: "0 0px 5px 5px",
    marginTop: theme.spacing(1),
    padding: "0px",
    fontSize: "10px",
  },
  btnbox: {
    display: "flex",
    flexDirection: "row",
  },
  AddBtn: {
    marginTop: theme.spacing(2),
    "&:hover": {
      color: "white",
    },
  },
  AddBtnBox: {
    marginLeft: "auto",
  },
}));

const TableUsers = (props) => {
  useEffect(() => {
    props.getAllShops();
  }, []);
  const classes = useStyles();
  const handleDelete = (id) => {
    props.deleteShop(id);
  };
  const handleEdit = (id) => {
    props.getCurrentShop(id);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="right">Название</TableCell>
              <TableCell align="right">Url</TableCell>
              <TableCell align="right">Телефон</TableCell>
              <TableCell align="right">Дислокация</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.allData.allShops.map((row, key) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {++key}
                </TableCell>
                <TableCell align="right">{row.shopName}</TableCell>
                <TableCell align="right">{row.url}</TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <div className={classes.btnbox}>
                  <Button
                    component={Link}
                    to={`/edit-point-of-sales-shops/${row._id}`}
                    className={classes.btn}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(row._id)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    className={classes.btn}
                    onClick={() => handleDelete(row._id)}
                    variant="outlined"
                    color="secondary"
                  >
                    Удалить
                  </Button>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.AddBtnBox}>
        <Link
          className={classes.AddBtn}
          to="/admin-add-shops"
          component={Button}
          variant="contained"
          color="primary"
        >
          Добавить новую точку
        </Link>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { allData: state.shops };
};
export default connect(mapStateToProps, {
  getAllShops,
  deleteShop,
  editShops,
  getCurrentShop,
})(TableUsers);
