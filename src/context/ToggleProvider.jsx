import { createContext, useContext, useState } from 'react'

const toggleContext = createContext()

export const useToggleContext = () => useContext(toggleContext)

const ToggleProvider = ({ children }) => {
  const [isShowText, setIsShowText] = useState(false)
  const toggleShowText = () => {
    setIsShowText(!isShowText)
  }

  return (
    <toggleContext.Provider
      value={{
        isShowText,
        toggleShowText,
      }}
    >
      {children}
    </toggleContext.Provider>
  )
}

export default ToggleProvider
