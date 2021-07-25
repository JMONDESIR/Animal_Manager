import {useContext} from 'react';
import {AnimalsContext} from '../context/Animals';
import API from '../service/AnimalService';
import Toastify from 'toastify-js';

const SoldButton = ({pet}) => {
  const {refresh} = useContext(AnimalsContext)

  const onClick = async () => {
      pet.status = "sold"
      console.log(pet)
    try {
        await API.update(pet, () => refresh('available'));
        Toastify({
            text: `${pet.name} successfully marked as "sold" `,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
    } catch(e) {
        console.error(e)
    }

    // await refresh(updateText.toLowerCase())
  
  return (
    <button
      onClick={onClick}
      className='btn'>Sold
    </button>
  )
  }
}

export default SoldButton