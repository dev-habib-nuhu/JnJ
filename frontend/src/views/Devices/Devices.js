import React,{useEffect} from 'react'
import {
    Badge,
    Card,
    CardHeader,
    Table,
    Container,
    Row,
    Button,
    CardBody
  } from "reactstrap";

  import DataGrid,
  {
      Column,
      Editing,
      Pager,
      Paging,
      FilterRow,
      Button as Butndx
      // RequiredRule,
      // PatternRule,
      // Lookup,
  } from 'devextreme-react/data-grid';

import {useDispatch,useSelector} from 'react-redux';
import {alldevices} from '../../redux/actions/deviceActions.js';
import {updatedevice} from '../../services/deviceservices.js';

const Devices = ({pagetitle, tabledata, page}) => {
    const dispatch = useDispatch();
    const devices = useSelector(state => state.Devices)
    const loggedIn = useSelector(state => state.isLoggedin)
    const {data} = devices?.data

    let date = new Date().toJSON().slice(0, 10).replace(/-/g, '-') + ' ' + new Date().toTimeString().split(" ")[0]
    useEffect(()=>{
      dispatch(alldevices())
    },[dispatch])

    const updateDevice = async(data)=> {
      const updateResponse = await updatedevice(data._id,data)
      console.log('Response =>',updateResponse)
    }

    const checkOutDevice = async(data) =>{
      let modified_data = {...data,isCheckedOut:true,lastCheckedOutDate:date}
      console.log('New data ==>',modified_data)
      const checkoutResp = await updatedevice(modified_data._id,modified_data)
      console.log(checkoutResp)
    }

    const deleteDevice = () =>{

    }

    const _RenderCheckout = (cell) =>{
        return(
          <div>
            <Button className='btn btn-warning btn-sm' title='Check-in device'><i className='fa fa-undo'></i></Button>
            <Button className='btn btn-success btn-sm' title='Check-out device'
             onClick={()=>checkOutDevice(cell.data)} disabled={cell.data.isCheckedOut}><i className='fa fa-check'></i>
             </Button>
          </div>
        )
    }

    const _statusRender = (cell) =>{
      return(
        <>
        {cell.data.isCheckedOut ? (<span className='btn btn-danger btn-sm'><small>Checked out</small></span>):
        (<span className='btn btn-success btn-sm'><small>Available</small></span>)}
        </>
      )
    }
    return (
        <Container fluid>
          <div className="header-bodyd">
            <Row className="mt-5">
          <div className="col">
            <Card className='mb-4'>
              <CardBody>
              <DataGrid id="grid-container"
                rowAlternationEnabled={true}
                dataSource={data}
                allowColumnReordering={true}
                onSaving={(cell)=>{updateDevice(cell)}}>
                <Editing
                      mode='row'
                      useIcons={true}
                      allowUpdating={true}
                      allowDeleting={true}
                      confirmDelete={false}
                  >
                  </Editing>
                  <Paging defaultPageSize={10} />
                  <Pager
                      showPageSizeSelector={true}
                      allowedPageSizes={[10, 15, 20]}
                      showInfo={true} />
                  <FilterRow visible={true} />
                <Column dataField="device" cssClass='text-center'></Column>
                <Column dataField="manufacturer" cssClass='text-center'></Column>
                <Column dataField="os" caption="Operating system" cssClass="text-center"></Column>
                <Column caption="Status" cellRender={_statusRender} cssClass="text-center"></Column>
                <Column type="buttons" width={110}>
                <Butndx name="edit" />
                <Butndx name="delete" />
                </Column>
                <Column caption='Action' allowEditing={false} cellRender={_RenderCheckout}></Column>
              </DataGrid>
              </CardBody>
            </Card>
          </div>
        </Row>
 
          </div>
        </Container>
    )
}

export default Devices;



