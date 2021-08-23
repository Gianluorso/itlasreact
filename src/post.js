import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Post extends Component{
    render(){
    return(
        <Container className="post">
            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 5, order: 2}}className="verticalCentre">
                    <h4>{this.props.titolo}</h4>
                    <p>{this.props.testo}</p>
                    <a href="#ciao" className="scopri">Scopri i pavimenti in legno</a>
                    <div className="icona">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-right "
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>

                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 7, order: 1 }}>
                    <img src={this.props.immagine} className="img-fluid" alt="" />
                </Col>
            </Row>
        </Container>
    );
    }
}
export default Post;