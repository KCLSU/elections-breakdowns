
import Progress from "./Progress";
import { Candidate, Stage } from "./types";

type BarsProps = {
    stages: Stage[],
    candidates: Candidate[]
}


const Bars: React.FC<BarsProps> = ({ stages, candidates }) => {
    return (
        <>
            {candidates.map((obj: Candidate) => <Progress key={obj.Id} stages={stages} candidateId={obj.Id} candidateName={obj.Name} />)}
        </>
    )
};

export default Bars;