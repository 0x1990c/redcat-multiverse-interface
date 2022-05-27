import { useState, useEffect } from 'react';

/* the function return a element of array, return any element
  Example:
  const 'orange' = randomElement(['orange-red', 'orange'])
*/

const randomElement = (array: any) => {

  if (!array) {
    throw new Error('Invalid argument, must be of type Array')
  }

  const [element, setElement] = useState('');

  useEffect(() => {
    const randomElement = Math.floor(Math.random() * array.length)
    setElement(array[randomElement])
  }, [])

  return {
    element
  }
}

export default randomElement