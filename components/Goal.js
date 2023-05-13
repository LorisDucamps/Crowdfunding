import React from 'react';
import Card from "./Card";

const Goal = () => {
    return (
        <Card>
            <ul className="goal">
                <li className="goal__amount">
                    <dt className="h2">$89,914</dt>
                    <dd>of $100,000 backed</dd>
                </li>
                <li className="goal__backers">
                    <dt className="h2">5,007</dt>
                    <dd>total backers</dd>
                </li>
                <li className="goal__days">
                    <dt className="h2">56</dt>
                    <dd>days left</dd>
                </li>
            </ul>

        </Card>
    );
};

export default Goal;