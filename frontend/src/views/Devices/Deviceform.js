import React,{useEffect} from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container,
  } from "reactstrap";
  import {useHistory} from 'react-router-dom';
  import {useSelector,useDispatch} from 'react-redux';
  import { Formik } from 'formik';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import {adddevice, adddeviceclean} from '../../redux/actions/deviceActions';

const Deviceform = () => {
    toast.configure()
    const history = useHistory();
    const dispatch = useDispatch();
    const Adddevice = useSelector(state => state.Adddevice)

    const saveDevice = (details) =>{
      dispatch(adddevice(details))
    }
    
    useEffect(() => {
        dispatch(adddeviceclean())
    }, [dispatch])

    useEffect(()=>{
        if(Adddevice.success){
            toast.success(Adddevice?.data?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true
                });
        }
        else if (Adddevice.error){
            toast.error(Adddevice?.data?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true
                });
        }
    },[dispatch,Adddevice])


    return (
        <div>
        <Container>
        <Row>
        <Col lg="3"></Col>
        <Col lg="6" md="7" sm="12">
            <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent">
                <h2 className='text-center'>ADD NEW DEVICE</h2>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
                <Formik
                    initialValues={{ device: '',os:'',manufacturer:'', password: '' }}
                    validate={values => {
                    const errors = {};
                    if (!values.device) {
                        errors.device = 'Device name is required';
                    }
                    if(!values.os){
                        errors.os = 'Device Os is required'
                    }
                    if(!values.manufacturer){
                        errors.manufacturer = 'Device Manufacturer is required'
                    }
                    return errors;
                    }}
                    onSubmit={(values) => {
                    saveDevice(values)
                    }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="fa fa-tools" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Device"
                        type="text"
                        name='device'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.device}
                    />
                    </InputGroup>
                    <small className=' ml-2 text-danger'>{errors.device && touched.device && errors.device}</small>
                </FormGroup>
                <FormGroup>
                    <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="fa fa-desktop" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="os"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="os"
                        value={values.os}
                    />
                    </InputGroup>
                    <small className=' ml-2 text-danger'>{errors.os && touched.os && errors.os}</small>
                </FormGroup>
                <FormGroup>
                    <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="fa fa-industry" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Manufacturer"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="manufacturer"
                        value={values.manufacturer}
                    />
                    </InputGroup>
                    <small className=' ml-2 text-danger'>{errors.manufacturer && touched.manufacturer && errors.manufacturer}</small>
                </FormGroup>

                <div className="text-center">
                    <Button className="my-4" color="success" type="submit">
                    SAVE DEVICE {Adddevice.loading && (<i className='fa fa-spinner fa-spin'> </i>)}
                    </Button>
                </div>
                </Form>
                )}
                </Formik>
            </CardBody>
            </Card>
        </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Deviceform
