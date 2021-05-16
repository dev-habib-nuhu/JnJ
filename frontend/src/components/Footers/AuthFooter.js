
import React from "react";

import {Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
          <Col xl="4"> </Col>
            <Col>
              <div className="copyright text-center text-xl-left text-muted">
                <small>
                Copyrights © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="#"
                  target="_blank"
                >
                  J AND J
                </a>
                <span className='ml-1'>,All rights reserved.</span>
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
