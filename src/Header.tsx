import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';

const { TabPane } = Tabs;



// const Content = ({ children, extra }) => (
//     <div className="content">
//         <div className="main">{children}</div>
//         <div className="extra">{extra}</div>
//     </div>
// );

const Header = () => {


    const renderContent = (
        <Descriptions size="middle" column={2}>
            <Descriptions.Item label="Places">1</Descriptions.Item>
            <Descriptions.Item label="Quota">914.50</Descriptions.Item>
            <Descriptions.Item label="TotalValidVote">1829</Descriptions.Item>
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

    return (
        <PageHeader
            className="site-page-header-responsive"
            backIcon={false}
            onBack={() => window.history.back()}
            title="President (full-time, paid)"
            // subTitle="A visual representation of the vote breakdown"
            footer={
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Details" key="1" />
                    <TabPane tab="Rule" key="2" />
                </Tabs>
            }>
            <div className="content">
                <div className="main">{renderContent}</div>
                {/* <div className="extra">{extraContent}</div> */}
            </div>
        </PageHeader>
    )
};

export default Header;