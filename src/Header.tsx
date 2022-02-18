import { PageHeader, Radio, Statistic, Descriptions, Button } from 'antd';
import styled from 'styled-components';



type HeaderProps = {
    setView: (type: 'bars' | 'table') => void
}


const Buttons = styled.div`
    padding: 1.5rem 0;
    .ant-radio-button-wrapper {
        margin-right: 1rem;
    }

    /* .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)  {
        border-color: red!important;
    } */

`

const HeaderWrapper = styled.div`
    .ant-descriptions-view {
        max-width: 900px;
    }
    /* max-width: 700px; */
`

const Header: React.FC<HeaderProps> = ({ setView }) => {


    const renderContent = (
        <Descriptions size="middle" column={2}>
            <Descriptions.Item label="Places">1</Descriptions.Item>
            <Descriptions.Item label="Quota">914.50</Descriptions.Item>
            <Descriptions.Item label="Total Valid Vote">1829</Descriptions.Item>
            <Descriptions.Item label="Candidates Running">9</Descriptions.Item>
        </Descriptions>
    );

    const extraContent = (
        <div
            style={{
                display: 'flex',
                width: 'max-content',
                justifyContent: 'flex-end',
            }}
        >
            <Statistic title="Price" value={568.08} />
            <Statistic title="Price" value={568.08} />
        </div>
    );

    const handleChangeView = (e: any) => {
        const view = e.target.value;
        setView(view)
    }

    return (
        <HeaderWrapper>
            <PageHeader
                className="site-page-header-responsive"
                backIcon={false}
                onBack={() => window.history.back()}
                title="President (full-time, paid)"
                extra={[
                    <Button key="3">Elections counts explained</Button>, ,
                ]}
                // subTitle="A visual representation of the vote breakdown"
                footer={
                    <Buttons>
                        <Radio.Group onChange={handleChangeView} defaultValue="bars">
                            <Radio.Button autoFocus value="bars">Bars</Radio.Button>
                            <Radio.Button value="table">Table</Radio.Button>
                        </Radio.Group>
                    </Buttons>
                }>
                <div className="content">
                    <div className="main">{renderContent}</div>
                    {/* <div className="extra">{extraContent}</div> */}
                </div>
            </PageHeader>
        </HeaderWrapper>
    )
};

export default Header;