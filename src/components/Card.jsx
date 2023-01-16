import React from 'react';

const Card = ({card, cardList, setCardList}) => {

    const setCheckBox = (event, index) => {
        setCardList(cardList.map(
            curCard => curCard === card
                ? {...curCard, completed: curCard.completed.map((com, curIndex) => curIndex === index ? event.target.checked : com)}
                : curCard))
    }

    return (
        <div className="card" style={{backgroundColor: card.color}}>
            <div className="card-inner">
                <div className="card-title">
                    {card.name}
                </div>
                <div className="card-tasks-list-cover">
                    <div className="card-tasks-list">
                        {card.tasks.map((task, index) =>
                            <div key={index}>
                                <input type="checkbox" checked={card.completed[index]} onChange={event => setCheckBox(event, index)}/>
                                <span className={card.completed[index] ? "card-task completed" : "card-task"}>
                                    {task}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;