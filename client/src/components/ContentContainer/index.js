import { Col } from 'antd';

function CContainer (props){
    return(
        <>
          <Col span={12} offset={6}>
        {props.content}
      </Col>
        </>
    )
}

export default CContainer;