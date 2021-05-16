import React from 'react'
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
  import { Formik } from 'formik';
const Deviceform = () => {
    const history = useHistory();

    //Request login
    const loginRequest = (details) =>{
      console.log('details',details)
    }
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
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.device)
                    ) {
                        errors.device = 'Invalid device address';
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
                    loginRequest(values)
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
                    SAVE DEVICE <i className='fa fa-spinner fa-spin'> </i>
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
