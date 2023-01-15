import React, {useState} from 'react';

const CardCreator = ({createTask, setVisible}) => {
    const [cardName, setCardName] = useState('')
    const [tasksList, setTasksList] = useState([''])

    const createButton = () =>{
        createTask(cardName, tasksList)
        setVisible(false)
        setCardName('')
        setTasksList([''])
    }

    return (
        <div className="card-creator">
            <input className="card-creator-name-card"
                style={{marginBottom: 10}}
                placeholder="Название карточки"
                value={cardName}
                onChange={e => {setCardName(e.target.value)}}
            />
            <div className="card-creator-task-list">
                {tasksList.map((task, index) =>
                    <div className="card-creator-single-task" key={index}>
                        <input
                            placeholder="Таск"
                            value={tasksList[index]}
                            onChange={e => {setTasksList(tasksList.map((curTask,curIndex) => (curIndex === index ? e.target.value : curTask)))}}
                        />
                        <button onClick={e => {setTasksList(tasksList.filter((curTask,curIndex) => curIndex !== index))}}>X</button>
                    </div>
                )}
                {tasksList.length <= 15
                    ? <button className="card-creator-add-task" onClick={e => setTasksList([...tasksList, ''])}>Добавить таск..</button>
                    : <></>
                }
            </div>
            <button className="card-creator-button-create" onClick={e => createButton}>Создать</button>
        </div>
    );
};

export default CardCreator;