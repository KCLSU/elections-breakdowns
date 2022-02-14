export interface MSLCountResponse {
    Id: number
    Post: Post
    Places: number
    Quota: number
    Candidates: Candidate[]
    Stages: Stage[]
}

export interface Post {
    Id: number
    Title: string
}

export interface Candidate {
    Id: number
    Name: string
    Slate: any
}

export type VoteTotal = {
    CandidateId: number;
    Vote: number;
    Total: number;
}

export interface Stage {
    Number: number
    TotalActiveVote: number
    NonTransferableDifference: number
    Elected: number[]
    Excluded: number[]
    VoteTotals: VoteTotal[];
}


export type ChartCandidates = Candidate[];

export type ChartStages = Stage[];