import React, { useEffect } from 'react';
import Item from './components/Item';
import Context from './context';
import Preloader from './components/Preloader';




const NewList = React.lazy(() => import('./components/NewList'));

function App() {
  const [lists, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(lists => {
        setTimeout(() => {
          setList(lists);
          setLoading(false)
        }, 2000);
      })
  }, [])

  function check(id) {
    setList(lists.map(list => {
      if (list.id === id) {
        list.completed = !list.completed
      }
      return list
    }))
  }

  function removeList(id) {
    setList(lists.filter(list => list.id !== id))
  }

  function newList(text) {
    setList(
      lists.concat([{
        title: text,
        id: Date.now(),
        completed: false
      }])
    )
  }

  return (

    <Context.Provider value={{ removeList }}>
      <div className="main">
        <React.Suspense fallback={<p>loading...</p>}>
          <NewList onCreate={newList} />
        </React.Suspense>
        <h1>Список покупок</h1>
        {loading && <Preloader />}
        {lists.length ?
          <Item lists={lists} check={check} />
          : loading ? null : (<p style={{ textAlign: 'center' }}>Список покупок пуст!</p>)}
      </div>
    </Context.Provider>

  );
}

export default App;
