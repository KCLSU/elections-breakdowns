
import Progress from "./Progress";
import { Small } from "./StageVotes";
import { Candidate, Stage } from "./types";

type BarsProps = {
    stages: Stage[],
    candidates: Candidate[]
}


const Bars: React.FC<BarsProps> = ({ stages, candidates }) => {
    return (
        <>
            {candidates.map((obj: Candidate) => <Progress stages={stages} candidateId={obj.Id} candidateName={obj.Name} />)}
        </>
    )
};

export default Bars;