import { Table } from "antd";
import { Small } from "./StageVotes";
import { Candidate, Stage } from "./types";


type TablesProps = {
    stages: Stage[],
    candidates: Candidate[]
}



const Tables: React.FC<TablesProps> = ({ stages, candidates }) => {

    const data = stages.map(stage => {
        //const excluded = stage.Excluded.join(',');
        // const elected = stage.Elected.join(',');
        const excluded = stage.Excluded.map(id => {
            const cand = candidates.find(cand => cand.Id === id)
            return cand?.Name
        }).join(',')
        const elected = stage.Elected.map(id => {
            const cand = candidates.find(cand => cand.Id === id)
            return cand?.Name
        }).join(',')
        return {
            stageNumber: `Stage ${stage.Number}`,
            excluded,
            elected,
            totalActiveVote: stage.TotalActiveVote,
            nonTransferrable: stage.NonTransferableDifference
        }
    })

    console.log(data)

    return (
        <>
            <Table
                dataSource={data}
                bordered
                size="small"
            >

                <Table.Column align="center" title="Stage" dataIndex="stageNumber" key="stageNumber" />
                <Table.Column align="center" title="Total Active Vote" dataIndex="totalActiveVote" key="totalActiveVote" />
                <Table.Column align="center" title="Non Transferrable Difference" dataIndex="nonTransferrable" key="nonTransferrable" />
                <Table.Column align="center" title="Excluded" dataIndex="excluded" key="excluded" />
                <Table.Column align="center" title="Elected" dataIndex="elected" key="elected" />

            </Table>

            <Small>** Excluded means failing to reach the stage quota of votes. </Small>
            <Small>** If candidates reach the final stage without being excluded, the candidates with the highest votes are elected </Small>
        </>
    )
}


export default Tables;