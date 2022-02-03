import React, { useState, useEffect } from "react";
import base_url from "./../api/service";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Input, Row, Table } from "reactstrap";
import './stock.css'


const AllCompanies = () => {
    useEffect(() => {
        document.title = "Stock Market";
    }, [])

   
    // function to call server

    const getAllCompanyFromServer = () => {
        axios.get(`${base_url}/api/v1.0/market/company/getall`).then(
            (Response) => {
                toast.success("loaded");
                setcompany(Response.data);

            },
            (error) => {
                toast.error("not Loaded");

            }

        );
    };

    const getstockFromServer = () => {
        axios.post(`${base_url}/api/v1.0/market/stock/get/${currentcompany}/${fromdate}/${todate}`,
        {
 "companycode":currentcompany,
    "startdate":fromdate,
    "enddate":todate  
     }
        ).then(
            (Response) => {
                toast.success("loaded");
                setstockdata(Response.data);

            },
            (error) => {
                toast.error("not Loaded");

            }

        );
    };
    //calling server loading course function

    useEffect(() => {
        getAllCompanyFromServer();
    }, [])

    const [Company, setcompany] = useState([])

    const [currentcompany,setcurrentcompany] = useState("")

    const [fromdate,setfromdate] = useState("")

    const [todate,settodate] = useState("")

    const [stockdata,setstockdata] = useState([])
    

console.log(fromdate);
    return (
       <div>  
           <div style={{display: 'flex', justifyContent: 'center'}}>
           <Row className="mb-3">
           <select className="text-center outline-success my-3" id="center"  value={currentcompany} onChange={e=>setcurrentcompany(e.target.value)}>
               <option disabled value={""} >Companies List</option>
               {Company&&Company.map((comp)=>{
                   return<option value={comp.companycode}>{comp.companyname}</option>
               })}
           </select>{'  '}
           <Input className="my-3 mb-2" 
      name="date"
      type="date"
      value={fromdate}
      onChange={e=>setfromdate(e.target.value)}
    />
       <Input className="my-3 mb-2"
      name="date"
      type="date"
      value={todate}
      onChange={e=>settodate(e.target.value)}
    />

 </Row> 
</div>
<div className="button">
<Button variant="primary" className="outline-danger bg-success"  type="submit" onClick={getstockFromServer}>submit</Button>          
</div>
<br/>
<br/>
<div className="table">
{ stockdata.length != 0 ?<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Stock Price</th>
      <th>Date</th>
      <th>min</th>
      <th>max</th>
      <th>avg</th>
    </tr>
  </thead>
  <tbody>
  {stockdata&&stockdata.map((stock,index)=>{ 
                    return <tr >
                   <td>{index+1}</td>
                   <td>{stock.stockprice}</td>
                   <td>{stock.stockdate}</td>
                   <td>{stock.min}</td>
                   <td>{stock.max}</td>
                   <td>{((stock.max)+(stock.min))/2}</td>
                 </tr>
               })} 
   
  </tbody>
</Table> : "" }  
</div>         
       </div>      

    )




}
export default AllCompanies;
