import './product.scss'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../userData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Product() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 650,
            renderCell: (params) => {
                return (
                    <div className="productListProduct">
                        <img className="productListImg" src={params.row.avatar} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <div className="tab">
                <span className="box">Products</span>
                <Link to={"/product/add"} className="box">
                    <button className="addProduct">Add Product</button>
                </Link>
            </div>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}