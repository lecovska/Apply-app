import React from 'react';
import "./Candidates.scss";

const Candidates = () => {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <div className="candidates">
            {arr.map((e, i) => {
                return <div className="candidateCard" key={i}>
                    {e}
                    </div>
            }
            )}
        </div>
    )
}

export default Candidates;
