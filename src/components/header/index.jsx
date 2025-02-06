import { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = forwardRef(function index(props, ref) {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div className={styles.header}>
          <Magnetic>
            <div onClick={() => {setIsActive(!isActive)}}>
              <div ref={ref} className={`${styles.navIcon} ${isActive ? styles.open : ""}`}>
                {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} />
                  ))}
              </div>
            </div>
          </Magnetic>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )}
)

export default Header