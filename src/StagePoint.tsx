import { useState } from "react";
import { Popover, Badge } from 'antd';


type StagePointProps = {
    stageNumber: number;
    voteCount: number;
}

const StagePoint: React.FC<StagePointProps> = ({ stageNumber, voteCount }) => {

    const [showToolTip, setShowToolTip] = useState(false);

    const handleVisibleChange = (visible: any) => {
        setShowToolTip(visible)
    };

    return (
        <div onClick={() => setShowToolTip(true)} style={{ color: 'white' }}>
            <Popover
                title={`Stage ${stageNumber}`}
                trigger="click"
                content={<p>{voteCount}</p>}
                visible={showToolTip}
                onVisibleChange={handleVisibleChange}
            >
                <Badge style={{ background: 'purple' }} count={stageNumber} />
            </Popover>
        </div>
    )
};

export default StagePoint;