import { PageHeader, Radio, Descriptions, Button } from 'antd';
import styled from 'styled-components';



type HeaderProps = {
    setView: (type: 'bars' | 'table') => void;
    places: number;
    quota: number;
    candidatesTotal: number;
    totalVote: number;
    post: string;
}


const Buttons = styled.div`
    padding: 1.5rem 0;
    .ant-radio-button-wrapper {
        margin-right: 1rem;
    }

`

const HeaderWrapper = styled.div`
    .ant-descriptions-view {
        max-width: 900px;
    }
`

const Header: React.FC<HeaderProps> = ({ setView, places, quota, candidatesTotal, totalVote, post }) => {


    const renderContent = (
        <Descriptions size="middle" column={{ xs: 1, sm: 1, md: 2 }}>
            <Descriptions.Item label="Places">{places}</Descriptions.Item>
            <Descriptions.Item label="Quota">{quota}</Descriptions.Item>
            <Descriptions.Item label="Total Valid Vote">{totalVote}</Descriptions.Item>
            <Descriptions.Item label="Candidates Running">{candidatesTotal}</Descriptions.Item>
        </Descriptions>
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
                title={post}
                // extra={[
                //     <Button type="primary" key="3">Elections counts explained</Button>
                // ]}
                footer={
                    <Buttons>
                        <Radio.Group buttonStyle="solid" onChange={handleChangeView} defaultValue="bars">
                            <Radio.Button autoFocus value="bars">Bars</Radio.Button>
                            <Radio.Button value="table">Table</Radio.Button>
                            <Radio.Button value="definitions">Definitions</Radio.Button>
                        </Radio.Group>
                    </Buttons>

                }>
                <div className="content">
                    <div className="main">{renderContent}</div>
                </div>
            </PageHeader>
        </HeaderWrapper>
    )
};

export default Header;