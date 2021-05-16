
import React,{useEffect} from "react";

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

  Col,
} from "reactstrap";
import { Formik } from 'formik';
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {register} from '../redux/actions/authActions.js';
const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const Registerstatus = useSelector(state => state.Registerstatus)

  const createAccount = (details) =>{
    console.log('Details',details)
    dispatch(register(details));
  }

  useEffect(()=>{
    if(Registerstatus.success){
        console.log('Created')
    }
  },[Registerstatus])
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center my-2">
              <h3>Create Account</h3>
            </div>
            {Registerstatus.error ? (
          <span className='text-danger text-center ml-4'>
            <small><i className='fa fa-times-circle'> </i> {Registerstatus.error ? Registerstatus?.data : ''}
            </small>
          </span>): Registerstatus.success ?(<span className='text-success'><i className='fa fa-check'> </i> {Registerstatus?.data}</span>):''}
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
          <Formik
                initialValues={{ fullname:'', username:'',email: '', password: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Email is required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  if(!values.fullname){
                    errors.fullname = 'Fullname is required'
                  }
                  else if (!/^[a-zA-Z ]*$/.test(values.fullname)){
                    errors.fullname = 'Fullname should consist of only alphabets.'
                  }
                  if(!values.username){
                    errors.username = 'Username is required'
                  }
                  else if (!/^[a-zA-Z0-9_]*$/.test(values.username)){
                    errors.username = 'Username should consist of only alphanumeric characters'
                  }
                  if(!values.password){
                    errors.password = 'Password is required'
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  createAccount(values)
                }}
              >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                  placeholder="Full name" 
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname} />
                </InputGroup>
               {errors.fullname && touched.fullname && errors.fullname && (<small className=' ml-2 text-danger'>{errors.fullname}</small>)}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="false"
                  />
                </InputGroup>
                {errors.username && touched.username && errors.username && (<small className=' ml-2 text-danger'>{errors.username}</small>)}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    autoComplete="new-email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  />
                </InputGroup>
                {errors.email && touched.email && errors.email && (<small className=' ml-2 text-danger'>{errors.email}</small>)}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    autoComplete="new-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {errors.password && touched.password && errors.password && (<small className=' ml-2 text-danger'>{errors.password}</small>)}
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit" disabled={Object.keys(errors).length === 0 ? false:true}>
                  Create account {Registerstatus.loading && (<i className='fa fa-spinner fa-spin'> </i>)}
                </Button>
              </div>
            </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
