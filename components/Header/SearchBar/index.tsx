import { useState } from 'react';
import ButtonIcon from '../../ButtonIcon';
import styles from '././styles/SearchBar.module.scss';

interface Props {
  parentStyles?: { [key: string]: string };
  isOpened?: boolean;
}

export default function SearchBar({ parentStyles, isOpened = false }: Props) {
  const [isOpen, setIsOpen] = useState(isOpened);

  return (
    (isOpen) ? (
      <div
        className={`${styles['search-bar']}` + (parentStyles != undefined ? ` ${parentStyles["search-bar"]}` : '')}
      >
        <input type="text" placeholder="Digite sua busca" />

        <ButtonIcon
          icon="\assets\svgs\search.svg"
          link="#"
          parentStyles={parentStyles}
          onClick={() => {
            console.log('click');
          }}
        />
      </div>
    )
      :
      (<div className={`${styles['search-bar-closed-button']}` + (parentStyles != undefined ? ` ${parentStyles["search-bar-closed-button"]}` : '')}>
        <ButtonIcon
          icon="\assets\svgs\search.svg"
          link="#"
          parentStyles={parentStyles}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>)
  )
}
