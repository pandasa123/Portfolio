const getTheme = () => {
  // const hour = new Date().getHours()
  const hour = 3
  return (hour < 6 || hour > 19)
}

export default getTheme
