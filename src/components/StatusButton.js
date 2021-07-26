import {useState, useContext} from 'react';
import {AnimalsContext} from '../context/Animals';

const StatusButton = () => {
  const [text, setText] = useState('Available')

  const {refresh} = useContext(AnimalsContext)

  const onClick = async () => {
    const status = text === 'Available' ? 'Sold' : 'Available'
    setText(status)
    await refresh(status.toLowerCase())
  }

  return (
    <button
      onClick={onClick}
      className='btn'> View: {text}
    </button>
  )
}

export default StatusButton