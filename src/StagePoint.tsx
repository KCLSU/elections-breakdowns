import { MouseEvent, useState } from "react";
import { Popover, Badge } from 'antd';
import StageVotes from "./StageVotes";
import styled from "styled-components";


type StagePointProps = {
    stageNumber: number;
    voteCount: number;
    voteTotal: number;
    nonTransferrable: number;
    activeVote: number;
    elected: boolean;
    excluded: boolean;
}

const ButtonPoint = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

    :focus-visible {
        outline: 3px dashed #ec6335;
    }
`

const Dot = styled(Badge)`
    
    .ant-scroll-number {
        background: #502669;
        transition: transform 0.2s ease-out;

        :hover {
            transform: scale(1.3)
        }
    }
`

const StagePoint: React.FC<StagePointProps> = ({ stageNumber, voteCount, voteTotal, activeVote, nonTransferrable, elected, excluded }) => {

    const [showToolTip, setShowToolTip] = useState(false);

    const handleVisibleChange = (visible: any) => {
        setShowToolTip(visible)
    };

    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        setShowToolTip(true)
    }

    return (
        <ButtonPoint aria-label={`Show Stage${stageNumber}`} onClick={handleClick} style={{ color: 'white' }}>
            <Popover
                title={`Stage ${stageNumber}`}
                trigger="click"
                content={<StageVotes votes={voteCount} total={voteTotal} activeVote={activeVote} nonTransferrable={nonTransferrable} elected={elected} excluded={excluded} />}
                visible={showToolTip}
                onVisibleChange={handleVisibleChange}
            >
                <Dot count={stageNumber} />

            </Popover>
        </ButtonPoint>
    )
};

export default StagePoint;