import { Statistic } from "antd"
import styled from "styled-components"

type StageVotesProps = {
    votes: number;
    total: number;
    nonTransferrable: number;
    activeVote: number;
    elected: boolean;
    excluded: boolean;
}

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Small = styled.small`
    font-size: 14px;
    display: block;
    margin: 5px 0;
    span {
        font-weight: bold;
    }
`

const StageVotes: React.FC<StageVotesProps> = ({ votes, total, nonTransferrable, activeVote, elected, excluded }) => {
    return (
        <div>
            <Flex>
                <Statistic title="Votes" value={votes} />
                <Statistic title="Total" value={total} />
            </Flex>

            <Small>Non-transferrable: <span>{nonTransferrable}</span></Small>
            <Small>Total Active Vote: <span>{activeVote}</span></Small>
            {elected && <p>🏆 Candidate elected!</p>}
            {excluded && <p>⛔ Not enough received votes.</p>}
        </div>
    )
}

export default StageVotes;