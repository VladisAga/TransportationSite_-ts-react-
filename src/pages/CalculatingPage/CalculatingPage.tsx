import { Button, Form, Input, Select, DatePicker, Radio } from 'antd';
import Divider from '../../components/Divider/Divider';
import Topic from '../../components/Topic/Topic';
import styles from './CalculatingPage.module.scss';
import { useRef, useState } from 'react';
import cn from 'classNames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CalculatingPage = () => {
    const [value, setValue] = useState('');
    const formRef = useRef<any>(null);
    const formRef2 = useRef<any>(null);
    const { t } = useTranslation();

    const sendData = (dataToSend: any, path: string) => {
        fetch(`http://localhost:3000/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при отправке данных');
                }
                return response.json();
            })
            .then(data => {
                console.log('Данные успешно отправлены:', data);
            })
            .catch(error => {
                console.error('Ошибка при отправке данных:', error);
            });
    };

    const { Option } = Select;

    const handleSendReq = (value: any) => {
        sendData(value, 'costRequests')
        formRef.current.resetFields();
        alert(t('CalculatingPage.alert1'));
    };

    const handleSendOrder = (value: any) => {
        sendData(value, 'orderCalls')
        formRef2.current.resetFields();
        alert(t('CalculatingPage.alert2'));
    };

    return (
        <section className={styles.calculatingArea}>
            <div className={styles.calculatingContent}>
                <div className={styles.topicBox}>
                    <Topic>{t('CalculatingPage.text18')}</Topic>
                    <Divider className={styles.divider} />
                </div>
                <div className={styles.boxOfTwo}>
                    <Form
                        ref={formRef}
                        name="form"
                        className="login-form"
                        initialValues={{ remember: false }}
                        onFinish={handleSendReq}
                    >
                        <div className={styles.inputTextBox}>
                            <label htmlFor="username">{t('CalculatingPage.text1')}</label>
                            <Form.Item
                                name="username"
                                id='username'
                                rules={[{ required: true, message: t('CalculatingPage.warningText1') }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="email">{t('CalculatingPage.text2')}</label>
                            <Form.Item
                                name="email"
                                id='email'
                                rules={[{ type: 'email', required: true, message: t('CalculatingPage.warningText2') },
                                ]}>
                                <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="phone">{t('CalculatingPage.text3')}</label>
                            <Form.Item
                                name="phone"
                                id='phone'
                                rules={[
                                    { required: true, message: t('CalculatingPage.warningText3') },
                                    {
                                        pattern: /^[\d() +-]*$/,
                                        message: t('CalculatingPage.warningText3.1') 
                                    }
                                ]}
                            >
                                <Input type='tel' />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="input4">{t('CalculatingPage.text4')}</label>
                            <Form.Item id='input4' name="from" rules={[{ required: true, message: t('CalculatingPage.warningText4')  }]}>
                                <Input />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="input1">{t('CalculatingPage.text5')}</label>
                            <Form.Item id='input1' name="to" rules={[{ required: true, message: t('CalculatingPage.warningText4') }]}>
                                <Input />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="transport">{t('CalculatingPage.text6')}</label>
                            <Form.Item
                                name="transport"
                                id='transport'
                                rules={[{ required: true, message: t('CalculatingPage.warningText5')  }]}
                            >
                                <Select placeholder={t('CalculatingPage.placeholder')}>
                                    <Option value="train">{t('CalculatingPage.option1')}</Option>
                                    <Option value="truck">{t('CalculatingPage.option2')}</Option>
                                    <Option value="multiple">{t('CalculatingPage.option3')}</Option>
                                    <Option value="plane">{t('CalculatingPage.option4')}</Option>
                                    <Option value="ship">{t('CalculatingPage.option5')}</Option>
                                    <Option value="unknown">{t('CalculatingPage.option6')}</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="DatePicker">{t('CalculatingPage.text7')}</label>
                            <Form.Item
                                id='DatePicker'
                                name="getTime"
                                rules={[{ required: true, message: t('CalculatingPage.warningText6')  }]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="DatePicker2">{t('CalculatingPage.text8')}</label>
                            <Form.Item
                                name="putTime"
                                id='DatePicker2'
                                rules={[{ required: true, message: t('CalculatingPage.warningText6')  }]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="Input2">{t('CalculatingPage.text9')}</label>
                            <Form.Item
                                name="weight"
                                id='Input2'
                                rules={[
                                    {
                                        required: true,
                                        message: t('CalculatingPage.warningText7') 
                                    }
                                ]}
                            >
                                <Input type="number" pattern="[0-9]*[.,]?[0-9]+" />
                            </Form.Item>
                        </div>
                        <div className={styles.inputTextBox}>
                            <label htmlFor="Input3">{t('CalculatingPage.text10')}</label>
                            <Form.Item
                                name="amount"
                                id='Input3'
                                rules={[
                                    {
                                        required: true,
                                        message: t('CalculatingPage.warningText8') 
                                    }
                                ]}
                            >
                                <Input type="number" pattern="[0-9]*[.,]?[0-9]+" />
                            </Form.Item>
                        </div>
                        <div className={styles.textAreaRadio}>
                            <div className={cn(styles.inputTextBox, styles.textArea)}>
                                <label htmlFor="TextArea">{t('CalculatingPage.text11')}</label>
                                <Form.Item
                                    name="details"
                                    id='TextArea'
                                    rules={[{ required: true, message: t('CalculatingPage.warningText9') }]}
                                >
                                    <Input.TextArea />
                                </Form.Item>
                            </div>
                            <Form.Item name="agreement" rules={[{ required: true, message: t('CalculatingPage.warningText10')  }]}>
                                <Radio.Group>
                                    <Radio value="true">{t('CalculatingPage.text12')} <Link to='/agreement'>{t('CalculatingPage.text13')}</Link> {t('CalculatingPage.text14')}</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className={styles.btnBox}>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    {t('CalculatingPage.text15')}
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                    <div className={styles.callOrder}>
                        <Topic className={styles.topicBox2}>{t('CalculatingPage.text16')}</Topic>
                        <Divider className={styles.divider2} />
                        <Form
                            ref={formRef2}
                            name="form2"
                            className="login-form"
                            initialValues={{ remember: false }}
                            onFinish={handleSendOrder}
                        >
                            <div className={styles.inputTextBox}>
                                <label htmlFor="usernameorder">{t('CalculatingPage.text1')}</label>
                                <Form.Item
                                    name="usernameorder"
                                    id='usernameorder'
                                    rules={[{ required: true, message: t('CalculatingPage.warningText1')  }]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className={styles.inputTextBox}>
                                <label htmlFor="phoneToOrder">{t('CalculatingPage.text3')}</label>
                                <Form.Item
                                    name="phoneToOrder"
                                    id='phoneToOrder'
                                    rules={[
                                        { required: true, message: t('CalculatingPage.warningText3')  },
                                        {
                                            pattern: /^[\d() +-]*$/,
                                            message: t('CalculatingPage.warningText3.1') 
                                        }
                                    ]}
                                >
                                    <Input type='tel' />
                                </Form.Item>
                            </div>
                            <div className={styles.btnBoxOrder}>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        {t('CalculatingPage.text17')}
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CalculatingPage;