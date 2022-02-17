import { PageHeader, Radio, Statistic, Descriptions } from 'antd';



type HeaderProps = {
    setView: (type: 'bars' | 'table') => void
}

const Header: React.FC<HeaderProps> = ({ setView }) => {


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

    const handleChangeView = (e: any) => {
        const view = e.target.value;
        setView(view)
    }

    return (
        <PageHeader
            className="site-page-header-responsive"
            backIcon={false}
            onBack={() => window.history.back()}
            title="President (full-time, paid)"
            // subTitle="A visual representation of the vote breakdown"
            footer={
                <Radio.Group onChange={handleChangeView}>
                    <Radio.Button value="bars">Bars</Radio.Button>
                    <Radio.Button value="table">Table</Radio.Button>
                </Radio.Group>
            }>
            <div className="content">
                <div className="main">{renderContent}</div>
                {/* <div className="extra">{extraContent}</div> */}
            </div>
        </PageHeader>
    )
};

export default Header;