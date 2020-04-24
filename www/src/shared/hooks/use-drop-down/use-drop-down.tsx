import React, { useState, useRef, RefObject } from 'react'

const useDropDown = function <T extends Element = any>(): [
  RefObject<T>,
  boolean,
  (event?: React.MouseEvent | any) => any,
  (event?: MouseEvent | any) => any
] {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const dropDownRef = useRef<T>(null)

  const dropDownCloserRef = useRef((event?: MouseEvent) => {
    if (event && dropDownRef.current?.contains(event.target as any)) return
    setIsDropDownOpen(false)
    document.removeEventListener('click', dropDownCloserRef.current)
  })

  const openDropDown = (event?: React.MouseEvent) => {
    event?.preventDefault()
    setIsDropDownOpen(true)
    document.addEventListener('click', dropDownCloserRef.current)
  }

  return [dropDownRef, isDropDownOpen, openDropDown, dropDownCloserRef.current]
}

export default useDropDown
