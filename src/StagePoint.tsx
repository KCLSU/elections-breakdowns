import { useState } from "react";
import { Popover, Badge } from 'antd';
import StageVotes from "./StageVotes";


type StagePointProps = {
    stageNumber: number;
    voteCount: number;
    voteTotal: number;
    nonTransferrable: number;
    activeVote: number;
    elected: boolean;
    excluded: boolean;
}

const StagePoint: React.FC<StagePointProps> = ({ stageNumber, voteCount, voteTotal, activeVote, nonTransferrable, elected, excluded }) => {

    const [showToolTip, setShowToolTip] = useState(false);

    const handleVisibleChange = (visible: any) => {
        setShowToolTip(visible)
    };

    return (
        <div onClick={() => setShowToolTip(true)} style={{ color: 'white' }}>
            <Popover
                title={`Stage ${stageNumber}`}
                trigger="click"
                content={<StageVotes votes={voteCount} total={voteTotal} activeVote={activeVote} nonTransferrable={nonTransferrable} elected={elected} excluded={excluded} />}
                visible={showToolTip}
                onVisibleChange={handleVisibleChange}
            >
                <Badge style={{ background: 'purple' }} count={stageNumber} />

            </Popover>
        </div>
    )
};

export default StagePoint;