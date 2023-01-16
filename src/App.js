import React, {useEffect, useMemo, useState} from 'react'
import './styles/App.css'
import CardList from "./components/CardList";
import MyModal from "./components/Modal/MyModal";
import CardCreator from "./components/CardCreator";

function App() {
    const [cardList, setCardList] = useState([])
    const [visible, setVisible] = useState(false)

    const colorsArray = [
        '#FFCC66','#FFCC00','#FFCC33','#CC9900','#CC9933',
        '#FFCC99','#FF9966','#FF6600','#CC6633','#993300',
        '#FF6633','#CC3300','#FF3300','#FF0000','#CC0000',
        '#CC99CC','#CC66CC','#CC00CC','#CC33CC','#990099',
        '#9999CC','#6666FF','#6666CC','#666699','#333399',
        '#6699FF','#3366FF','#0000FF','#0000CC','#0033CC',
        '#66CCFF','#33CCFF','#00CCFF','#3399CC','#0099CC',
        '#66FF99','#33FF99','#00FF99','#33CC66','#00CC66',
        '#66FF00','#66FF33','#33FF00','#33CC00','#339900'
    ]
    function getRndColor() {
        return colorsArray[Math.floor(Math.random() * (colorsArray.length + 1))];
    }

    const createTask = (nameCard, tasksCard) => {
        setCardList([...cardList, {
            name: nameCard.toUpperCase(),
            tasks: tasksCard,
            color: getRndColor(),
            completed: [...tasksCard.map(task => false)],
            posX: `${30+(cardList.length)*250}`,
            posY: `${30+(Math.floor(cardList.length/5))*500}`}
        ])
    }

  return (
    <div className="App">
        <header className="header">
            <button onClick={() => setVisible(true)}>+</button>
        </header>
        <CardList cardList={cardList} setCardList={setCardList}/>
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
