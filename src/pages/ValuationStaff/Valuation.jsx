import {
    Button,
    Card,
    Col,
    Form,
    Input,
    Row,
    Select,
    Slider,
    Spin,
    Steps,
    message,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

function Valuation() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useEffect(() => {
        const getAllRequests = async () => {
            await axios
                .get(`http://localhost:8080/api/requests/${id}`, {
                    withCredentials: true,
                })
                .then((res) => {
                    setResults(res.data.request);
                    form.setFieldsValue(res.data.request[0]);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getAllRequests();
    }, [form, id]);
    const valuation = () => {
        navigate(`/valuationStaff/requests/detail/${id}`);
    };
    if (loading) {
        return (
            <div className="loading">
                <Spin size="large" />
            </div>
        );
    }

    if (!results) {
        return <div>No request found</div>;
    }

    //   const handleFormChange = (changedFields) => {
    //     setSelectedResult((prevResult) => ({ ...prevResult, ...changedFields }));
    //   };

    const handleSubmit = async () => {
        try {
            await axios.put(
                `http://localhost:8080/api/changeProcess/${id}`,
                {
                    processId: 5,
                },
                { withCredentials: true }
            );
            await form.validateFields();
            const values = form.getFieldsValue();
            const response = await axios.put(
                `http://localhost:8080/api/valuation/${id}`,
                values,
                { withCredentials: true }
            );
            if (response.data.errCode === 0) {
                message.success(response.data.message);
                valuation();
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            message.error("An error occurred while submitting the valuation.");
        }
    };

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col span={24} md={8} className="mb-24">
                    <Card
                        bordered={false}
                        className="header-solid h-full ant-invoice-card"
                        title={<h6 className="font-semibold m-2">Process</h6>}
                    >
                        <Steps
                            direction="vertical"
                            current={1}
                            items={[
                                {
                                    title: "Received",
                                    description:
                                        "The diamond has been received by the valuation staff.",
                                },
                                {
                                    title: "In Progress",
                                    description:
                                        "The diamond is being valuated by the valuation staff.",
                                },
                                {
                                    title: "Done",
                                    description:
                                        "The diamond has been valuated by the valuation staff.",
                                },
                            ]}
                        />
                    </Card>
                </Col>
                <Col span={24} md={16} className="mb-24">
                    <Card
                        className="header-solid h-full"
                        bordered={false}
                        title={<h3 className="font-semibold m-0">Diamond Information</h3>}
                        bodyStyle={{ paddingTop: "0" }}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                        >
                            <Row gutter={[24, 24]}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Proportions"
                                        name="proportions"
                                        rules={[
                                            { required: true, message: "Please enter proportions" },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Diamond Origin"
                                        name="diamondOrigin"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter diamond origin",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Carat Weight"
                                        name="caratWeight"
                                        rules={[
                                            { required: true, message: "Please enter carat weight" },
                                        ]}
                                    >
                                        <Slider min={0.01} max={10.99} step={0.01} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Measurements"
                                        name="measurements"
                                        rules={[
                                            { required: true, message: "Please enter measurements" },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Polish"
                                        name="polish"
                                        rules={[{ required: true, message: "Please enter polish" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Fluorescence"
                                        name="flourescence"
                                        rules={[
                                            { required: true, message: "Please enter fluorescence" },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Color"
                                        name="color"
                                        rules={[{ required: true, message: "Please enter color" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Cut"
                                        name="cut"
                                        rules={[{ required: true, message: "Please enter cut" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Clarity"
                                        name="clarity"
                                        rules={[
                                            { required: true, message: "Please enter clarity" },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Symmetry"
                                        name="symmetry"
                                        rules={[
                                            { required: true, message: "Please enter symmetry" },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Shape"
                                        name="shape"
                                        rules={[
                                            { required: true, message: "Please select a shape" },
                                        ]}
                                    >
                                        <Select placeholder="Select a shape">
                                            <Option value="Round">Round</Option>
                                            <Option value="Princess">Princess</Option>
                                            <Option value="Emerald">Emerald</Option>
                                            <Option value="Cushion">Cushion</Option>
                                            <Option value="Radiant">Radiant</Option>
                                            <Option value="Asscher">Asscher</Option>
                                            <Option value="Heart">Heart</Option>
                                            <Option value="Trilliant">Trilliant</Option>
                                            <Option value="Oval">Oval</Option>
                                            <Option value="Pear">Pear</Option>
                                            <Option value="Marquise">Marquise</Option>
                                            <Option value="Baguette">Baguette</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Price"
                                        name="price"
                                        rules={[
                                            { required: true, message: "Please enter price" },
                                        ]}
                                    >
                                        <Input type="number" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Button type="primary" onClick={handleSubmit}>
                                        Submit Valuation
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Valuation;
