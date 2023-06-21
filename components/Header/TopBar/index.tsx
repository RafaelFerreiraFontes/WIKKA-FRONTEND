import ButtonIcon from '../../ButtonIcon';
import SearchBar from '../SearchBar';
import styles from './styles/TopBar.module.scss';

export default function TopBar() {
  return (
    <>
      <div className={styles['top-bar-container']}>
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
                  <ButtonIcon icon="/assets/svgs/minicart.svg" alt="Minicart" parentStyles={styles} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['top-bar-mobile']}>
          <div className={styles['top-bar-header-container']}>
            <div className={styles['top-bar__left']}>
              <ButtonIcon
                icon="/assets/svgs/menu_mobile.svg"
                alt="Menu - Mobile"
                parentStyles={styles}
              />
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
              <ButtonIcon icon="/assets/svgs/minicart.svg" alt="Minicart" parentStyles={styles} />
            </div>
          </div>
          <div className={styles['top-bar-search-container']}>
            <SearchBar parentStyles={styles} />
          </div>
        </div>
      </div>
    </>
  );
}
