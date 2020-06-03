import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';

const ProfileInformation = ({ myProfile }) => {
  const { Title } = Typography;
  return (
    <Fragment>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={4}>INFORMATION</Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text
            strong
            style={{
              color: '#FFFFFF',
              fontSize: '14px',

              marginLeft: '20px',
            }}
          >
            Hostel
          </Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text
            level={4}
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              paddingRight: '20px',
            }}
          >
            J
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text
            strong
            style={{
              color: '#FFFFFF',
              fontSize: '14px',

              marginLeft: '20px',
            }}
          >
            Year
          </Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text
            level={4}
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              paddingRight: '20px',
            }}
          >
            {myProfile && myProfile.year}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text
            strong
            style={{
              color: '#FFFFFF',
              fontSize: '14px',

              marginLeft: '20px',
            }}
          >
            Branch
          </Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text
            level={4}
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              paddingRight: '20px',
            }}
          >
            {myProfile && myProfile.branch}
          </Text>
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col span={24} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <Button
            type="primary"
            block
            style={{ backgroundColor: '#000000', border: 'none' }}
          >
            Edit Profile
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProfileInformation;
