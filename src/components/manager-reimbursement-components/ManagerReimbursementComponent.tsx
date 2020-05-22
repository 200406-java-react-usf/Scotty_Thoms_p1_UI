import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Reimbursement } from '../../models/reimbursement';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import { User } from '../../models/user';
import { getAllReimbursements, updateReimb } from '../../remote/reimbursement-service';

export interface IManagerReimbursementProps {
    authUser: User;
    errorMessage: string;
}

const useStyles = makeStyles({
    reimbTable: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
});

const ManagerReimbursementComponent = (props: IManagerReimbursementProps) => {
    const classes = useStyles();
    const [reimbs, setTableData] = useState([new Reimbursement(0,0,new Date,new Date,'',0,0,0,0)]);
    const [errorMessage, setErrorMessage] = useState('');

    let getTableData = async () => {
        let result = await getAllReimbursements();
        setTableData(result);
    }

    const updateRow = async (updatedReimb: Reimbursement) => {
        try {
            await updateReimb(updatedReimb);
            getTableData();
        } catch (e) {
            setErrorMessage(e.response.data.reason);
        }
    }

    useEffect(() => {
        getTableData();
    }, []);

    return (
    <>
        <div className={classes.reimbTable}>
            < MaterialTable
            columns = {[
                { title: 'Reimb ID', field: 'reimb_id', editable: 'never'},
                { title: 'Amount', field: 'amount'},
                { title: 'Time Submitted', field: 'submitted'},
                { title: 'Time Resolved', field: 'resolved'},
                { title: 'Description', field: 'description'},
                { title: 'Author', field: 'author_id'},
                { title: 'Resolver', field: 'resolver_id'},
                { title: 'Status', field: 'reimb_status_id'},
                { title: 'Type', field: 'reimb_type_id'},
            ]}
            data = {reimbs}
            title = "All Reimbursements"
            editable = {{
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                    resolve();
                    updateRow(newData);
                })
            }}
            />
            {
                props.errorMessage
                ?
                < Alert severity="error">{props.errorMessage}</Alert>
                :
                <></>
            }
        </div>
    </>
    );
}

export default ManagerReimbursementComponent;