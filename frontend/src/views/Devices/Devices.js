import React from 'react'
import {
    Badge,
    Card,
    CardHeader,
    Table,
    Container,
    Row,
    Button
  } from "reactstrap";

const Devices = ({pagetitle, tabledata, page}) => {
    const checkOutdevice = () =>{

    }

    const editDevice = () =>{

    }

    const deleteDevice = () =>{

    }

    return (
        <Container fluid>
          <div className="header-bodyd">
            <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">{pagetitle}</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Device</th>
                    <th scope="col">Os</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Last checked out</th>
                    <th scope="col">Checked out by</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">DEVICE NAME</td>
                    <td>OS</td>
                    <td>MANUFACTURER</td>
                    <td>DATE</td>
                    <td>DAVID</td>
                    <td>
                        <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Available
                      </Badge></td>
                    <td className="text-right">
                        <Button className='btn btn-sm btn-warning' title='Check in device'><i className='fa fa-undo'></i></Button>
                        {page !== 'checkedout' && (
                            <>
                                <Button className='btn btn-sm btn-success' title='Checkout device' onClick={()=> checkOutdevice()}><i className='fa fa-check'></i></Button>
                                <Button className='btn btn-sm btn-info' title='Edit record' onClick={()=> editDevice()}><i className='fa fa-edit'></i></Button>
                                <Button className='btn btn-sm btn-danger' title='Remove device' onClick={()=> deleteDevice()}><i className='fa fa-trash'></i></Button>
                                
                            </>
                        )}

                    </td>
                  </tr>
                 
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
 
          </div>
        </Container>
    )
}

export default Devices;



