import React, {useState} from 'react';
import Button from "./Button";
import Card from "./Card";

const Project = () => {

    const [active, setActive] = useState(false);


    return (
        <Card className="project">
                <img className="logo" src="/logo-mastercraft.svg" alt="logo mastercraft"/>
                <h3>Mastercraft Bamboo Monitor Riser</h3>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="actions">
                    <Button className={"button"} variant="primary" size="big" wording={"Back to this project"}/>
                    <Button className={`button ${active ? "button__active" : ""}`} variant="secondary" icon wording={`${active ? "Bookmarked" : "Bookmark"}`} onClick={() => setActive(!active)}/>
                </div>
        </Card>
    );
};

export default Project;