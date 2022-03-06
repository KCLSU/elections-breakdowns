import { Small } from "./StageVotes";

const Definitions = () => (
    <>
        <h3>Stage</h3>
        <p>The determination of the first preference vote for each candidate (first stage), or the transfer of a surplus, or the exclusion of a candidate, or two or more candidates at the same time, and the transfer of their votes.</p>
        <h3>Vote required for election</h3>
        <p>The minimum number of votes a candidate must receive to be elected. At the first stage, this is the same as the Quota, but as votes are counted or become inactive the vote required for election will reduce as fewer active votes are remaining.</p>
        <h3>Quota</h3>
        <p>The minimum number of votes a candidate must receive to be elected. In a multi-seater election count, any votes a candidate receives above the quota become surplus votes and are transferred to another candidate.</p>
        <h3>Total active vote</h3>
        <p>The sum of the votes credited to all continuing candidates, plus any votes awaiting transfer.</p>
        <h3>Total valid vote</h3>
        <p>The total number of valid voting ballots (a voting ballot on which a first or an only preference is unambiguously expressed).</p>
        <h3>Elected</h3>
        <p>If someone has received enough votes to be elected.</p>
        <h3>Excluded</h3>
        <p>If there is nobody to elect and the surplus votes can't affect the standings at the bottom of the candidate list you exclude the candidates who have too few votes to benefit from the receipt of any second or third preferences at that stage and transfer their papers.</p>
        <h3>Non-transferable votes</h3>
        <p>If all preferences for a vote are excluded from the count the vote becomes non-transferable, these votes no longer count towards the quota (the vote required for election)</p>
        <h3> The Single Transferrable Vote System</h3>
        <p>We use the single transferable vote system which mean when students cast their vote they can order candidates in order of preference. You can watch this <a href="https://www.youtube.com/watch?v=WfingO_mvLw&t=2s" target="_blank" rel="noopener noreferrer">handy video</a>  to help explain how this works and translates into the vote count.</p>
    </>
)

export default Definitions;