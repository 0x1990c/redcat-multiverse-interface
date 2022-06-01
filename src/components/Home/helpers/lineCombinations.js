export const combinationColors = (element) => {
  const colorBorder = (element) => (element === 'orange-red' ? '#000' : '#e83324')

  const colorLine = (element) => {
    if (element === 'orange') {
      return '#f9c930 25%, #e83324 49%, #7192f3 75%'
    } else if (element === 'light-blue') {
      return '#f9c930 25%, #e83324 49%, #f2957c 75%'
    } else if (element === 'yellow') {
      return '#e83324 25%, #7192f3 49%, #f2957c 75%'
    } else if (element === 'orange-red') {
      return '#f9c930 25%, #f2957c 49%, #7192f3 75%'
    }
  }
  return {
    color: colorBorder(element),
    color2: colorLine(element)
  }
}