import { useEffect, useRef } from 'react'
import { closeIcon } from '/utils/svgImages'

import styles from './style.module.scss'

export const PopUpWrapper = ({ handler, children }) => {
  const wrapperRef = useRef(null)

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Run action (helper) if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current === event.target) {
          handler()
        }
      }
      
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useOutsideAlerter(wrapperRef)

  return (
    <div className={`${styles.popupWrapper} flex align-center justify-center`} ref={wrapperRef}>
      <div className="popupWindow flex flex-column align-center justify-center w-100 relative bg-almostWhite border-r20px box-shadow">
       
        <span
          datacy="closeButton"
          className="close absolute pointer transition"
          dangerouslySetInnerHTML={{ __html: closeIcon() }}
          onClick={() => {
            handler()
          }}
        />
        <div className="w-100">{children}</div>
      </div>
    </div>
  )
}
