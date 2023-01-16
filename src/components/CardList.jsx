import React from 'react';
import Card from "./Card";

const CardList = ({cardList,setCardList}) => {


    return (
        <div className="card-list">
            {cardList.map((card, index)=>
                <Card key={index} card={card} cardList={cardList} setCardList={setCardList}/>
            )}
        </div>
    );
};

export default CardList;