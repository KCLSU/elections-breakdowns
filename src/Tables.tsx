import { Table } from "antd";
import { Candidate, Stage } from "./types";

type TablesProps = {
    stages: Stage[],
    candidates?: Candidate[]
}

const Tables: React.FC<TablesProps> = ({ stages, candidates }) => {

    const data = stages.map(stage => {
        const excluded = stage.Excluded.join(',');
        const elected = stage.Elected.join(',');
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
    )
}


export default Tables;