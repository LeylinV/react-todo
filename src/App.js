import React, {useEffect, useMemo, useState} from 'react'
import './styles/App.css'
import CardList from "./components/CardList";
import MyModal from "./components/Modal/MyModal";
import CardCreator from "./components/CardCreator";

function App() {
    const [cardList, setCardList] = useState([])

    const [visible, setVisible] = useState(false)

    const createTask = (nameCard, tasksCard) => {
        setCardList([...cardList, {
            name: nameCard,
            tasks: tasksCard,
            posX: `${30+(cardList.length)*250}`,
            posY: `${30+(Math.floor(cardList.length/5))*500}`}
        ])
    }

  return (
    <div className="App">
        <header className="header">
            <button onClick={() => setVisible(true)}>+</button>
        </header>
        <CardList />
        <MyModal
            visible={visible}
            setVisible={setVisible}
        >
            <CardCreator createTask={createTask} setVisible={setVisible}/>
        </MyModal>
    </div>
  );
}

export default App;
