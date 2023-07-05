import { useEffect, useState } from 'react';
import useIsMobile from "../../utils/MobileDetect";
import ButtonIcon from '../../ButtonIcon';
import SearchBar from '../SearchBar';
import Minicart from './FuctionsComponents/Minicart/Minicart';
import styles from './styles/TopBar.module.scss';
import Menu from '../Menu';

export default function TopBar() {
  const [isOpenMinicart, setIsOpenMinicart] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const animationTime = 525;
  const [ closeMenu, setCloseMenu ] = useState(false);
  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (isOpenMinicart) {
      setIsOpenMenu(false);
    }
    else if (isOpenMenu) {
      setIsOpenMinicart(false);
    }

  }, [isOpenMinicart, isOpenMenu]);

  useEffect(() => {
    setIsOpenMenu(false);

    setIsOpenMinicart(false);
  }, [isMobile]);

  return (
    <div className={styles['top-bar-container']}>
      {
        isMobile ? (
          <>
            <div className={styles['top-bar-mobile']}>
              <div className={styles['top-bar-group']}>
                <div className={styles['top-bar-header-container']}>
                  <div className={styles['top-bar__left']}>
                    <ButtonIcon
                      icon="/assets/svgs/menu_mobile.svg"
                      alt="Menu - Mobile"
                      onClick={() => {
                        setCloseMenu(isOpenMenu ? true : false);

                        if(isOpenMenu) {
                            setTimeout(() => {
                              setIsOpenMenu(false);
                            }, animationTime);
                        }
                        else {
                          setIsOpenMenu(true);
                        }

                      }}
                      parentStyles={styles}
                    />

                    <div className={styles['top-bar-wishlist-button']}>
                      <ButtonIcon
                        icon="/assets/svgs/wishlist.svg"
                        alt="Wishlist"
                        link="/"
                        parentStyles={styles}
                      />
                    </div>
                  </div>

                  <div className={styles['top-bar__center']}>
                    <ButtonIcon
                      icon="/assets/imgs/Red Gallen - Logo.png"
                      alt="WIKKA - Logo"
                      link="/"
                      parentStyles={styles}
                    />
                  </div>

                  <div className={styles['top-bar__right']}>
                    <div className={styles['top-bar__right__actions']}>
                      <div className={styles['top-bar__right__actions__item']}>
                        <div className={styles['top-bar_login_button']}>
                          <ButtonIcon icon="/assets/svgs/login.svg" alt="User" parentStyles={styles} />
                        </div>
                      </div>

                      <div className={styles['top-bar__right__actions__item']}>
                        <div className={styles['top-bar_minicart_button']}>
                          <ButtonIcon icon="/assets/svgs/minicart.svg" alt="Minicart" parentStyles={styles} onClick={() => {
                            setIsOpenMinicart(true);
                          }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles['top-bar-search-container']}>
                  <SearchBar parentStyles={styles} isOpened={true} />
                </div>
              </div>

              {
                isOpenMenu && (
                  <div className={styles['top-bar-menu-container']}
                    style={{
                      animationName: !closeMenu ? `${styles['OpenMenu']}` : `${styles['CloseMenu']}`,
                      animationDuration: animationTime + 'ms',
                      animationTimingFunction: 'ease-in-out',
                      animationDirection: 'normal',
                      animationFillMode: 'forwards',
                    }}
                  >
                    <div className={styles['top-bar_wishlist_button']}>
                      <ButtonIcon
                        icon="/assets/svgs/wishlist.svg"
                        alt="Wishlist"
                        text='Lista de Presentes'
                        link="/"
                        parentStyles={styles}
                      />
                    </div>
                    <Menu />
                  </div>
                )
              }

            </div>
            {
              isOpenMinicart && (
                <Minicart closeMinicart={setIsOpenMinicart} />
              )
            }
          </>
        ) :
          (
            <>
              <div className={styles["top-bar"]}>
                <div className={styles['top-bar__left']}>
                  <div className={styles['top-bar__left__actions']}>
                    <div className={styles['top-bar__left__actions__item']}>
                      <div className={styles['top-bar_wishlist_button']}>
                        <ButtonIcon
                          icon="/assets/svgs/wishlist.svg"
                          alt="Wishlist"
                          text='Lista de Presentes'
                          link="/"
                          parentStyles={styles}
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div className={styles['top-bar__center']}>
                  <div className={styles['top-bar__center__logo']}>
                    <ButtonIcon
                      icon="/assets/imgs/Red Gallen - Logo.png"
                      alt="WIKKA - Logo"
                      link="/"
                      parentStyles={styles}
                    />
                  </div>
                </div>

                <div className={styles['top-bar__right']}>
                  <div className={styles['top-bar__right__actions']}>
                    <div className={styles['top-bar__right__actions__item']}>
                      <SearchBar parentStyles={styles} />
                    </div>

                    <div className={styles['top-bar__right__actions__item']}>
                      <div className={styles['top-bar_map_button']}>
                        <ButtonIcon icon="/assets/svgs/map_pin.svg" alt="Map" parentStyles={styles} />
                      </div>
                    </div>


                    <div className={styles['top-bar__right__actions__item']}>
                      <div className={styles['top-bar_login_button']}>
                        <ButtonIcon icon="/assets/svgs/login.svg" alt="User" parentStyles={styles} />
                      </div>
                    </div>

                    <div className={styles['top-bar__right__actions__item']}>
                      <div className={styles['top-bar_minicart_button']}>
                        <ButtonIcon icon="/assets/svgs/minicart.svg" alt="Minicart" parentStyles={styles} onClick={() => {
                          setIsOpenMinicart(true);
                        }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {
                isOpenMinicart && (
                  <Minicart closeMinicart={setIsOpenMinicart} />
                )
              }
            </>
          )
      }
    </div>
  );
}

