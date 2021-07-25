import {useState, useContext} from 'react';
import {AnimalsContext} from '../context/Animals';

const StatusButton = () => {
  const [text, setText] = useState('Available')

  const {refresh} = useContext(AnimalsContext)


  const onClick = async () => {
    const updateText = text === 'Available' ? 'Sold' : 'Available'
    setText(updateText)
    await refresh(updateText.toLowerCase())
  }

  return (
    <button
      onClick={onClick}
      className='btn'> View {text}
    </button>
  )
}

export default StatusButton