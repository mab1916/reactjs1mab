import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SimpleTooltips from './list.js'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


function createData(name, rollno, batch, phone, address, actions) {
  return { name, rollno, batch, phone, address, actions };
}

const rows = [
  createData('Ahmad', 159, 'A', '03001231231', "Peoples Colony No.1"),
  createData('Anwar', 237, 'B', '03001235675', "Peoples Colony No.2"),
  createData('Ehsan', 262, 'A', '03001231235', "Razabad"),
  createData('Sajid', 305, 'C', '03001237869', "Peoples Colony No.1"),
  createData('hamad', 356, 'C', '03001231234', "Gurajah"),
];

const useStyles1 = makeStyles({
  table: {
    minWidth: 700,
  },
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useStyles3 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const useStyles4 = makeStyles((theme) => ({
root: {
    '& > *': {
    margin: theme.spacing(1),
    },
},
}));
  
export default function CustomizedTables() {
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const classes4 = useStyles4();
    const [students, setStudents] = useState(rows);
    const [updatedIndex, setIndex] = useState(0);
    const [name, setName] = useState("");
    const [rollno, setRollNo] = useState("");
    const [batch, setBatch] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isFlag, setFlag] = useState(false);

// Adding Data
    const GetData = () => {
            let student = {
                name,
                rollno,
                batch,
                phone,
                address
            }
            setStudents([...students, student]);
            setName('');
            setRollNo('');
            setBatch('');
            setPhone('');
            setAddress('');
    }

// Deleting Data
    const deteleStudent = (stuindex) => {
        let delstudent = students.filter((student, index)=>{
            if (index !== stuindex) {
                return student;
            }
        });
        setStudents([...delstudent]);
    }

// Update Data
    const updateStudent = (student, index) => {
        setIndex(index);
        setName(student.name);
        setRollNo(student.rollno);
        setBatch(student.batch);
        setPhone(student.phone);
        setAddress(student.address);
        setFlag(true);
    }

// Upding Data
    const updateData = () => {
        let student = {
            name,
            rollno,
            batch,
            phone,
            address
        }
        let updataData = students.map((stupdate, index)=>{
            if (updatedIndex === index) {
                return student;
            } else {
                return stupdate;
            }
        })
        setStudents([...updataData]);
        setName('');
        setRollNo('');
        setBatch('');
        setPhone('');
        setAddress('');
        setFlag(false);
    }
  return (
  <React.Fragment>
    <TableContainer component={Paper}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <form className={classes2.root} noValidate autoComplete="off">
                <TextField value={name} required id="standard-required" 
                label="Enter Student Name" 
                onChange={(n)=> setName(n.target.value)} />
                <TextField value={rollno} required id="standard-required" 
                label="Enter Student Roll No" type='number' 
                onChange={(r)=> setRollNo(r.target.value)} />
                <FormControl className={classes3.formControl}>
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={batch}
                    onChange={(b)=> setBatch(b.target.value)}
                    >
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                    <MenuItem value={'C'}>C</MenuItem>
                    </Select>
                </FormControl>
                <TextField value={phone} required id="standard-number" 
                label="Enter Student Phone" type="number" 
                onChange={(p)=> setPhone(p.target.value)} />
                <TextField value={address} required id="standard-required" 
                label="Enter Student Address" 
                onChange={(a)=> setAddress(a.target.value)} />
                <div className={classes4.root}>
                    {
                        isFlag ?
                        <Button variant="contained" color="secondary" onClick={updateData}> Save Edit </Button>
                        :
                        <Button variant="contained" color="secondary" onClick={GetData}> Sumbit </Button>
                    }
                </div>
        </form>
      <Table className={classes1.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">No.</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Roll No</StyledTableCell>
            <StyledTableCell align="left">Batch</StyledTableCell>
            <StyledTableCell align="left">Phone No</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align='left'>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        {
            students.map((item, index) => {
                return <SimpleTooltips
                 index={index} 
                 student={item}
                 deteleStudent={deteleStudent}
                 updateStudent={updateStudent}
                 />
            })
        }
      </Table>
    </TableContainer>
  </React.Fragment>
  );
}
