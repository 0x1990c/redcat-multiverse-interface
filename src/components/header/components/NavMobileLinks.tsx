import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useCollapse from 'react-collapsed';
import { langItems } from './constants';
import styles from '../header.module.scss';
import ArrowDown from '../../Icons/ArrowDown';

export const NavMobileLinks = ({ links, onOpenConnectModal, onCloseNav }: any) => {
  const router = useRouter();
  const [isLangExpanded, setIsLangExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded: isLangExpanded });

  const { pathname, asPath, query } = router

  const handleConnectClick = () => {
    onOpenConnectModal()
  }

  const handleLinkClick = (link: any) => {
    router.push(link);

    onCloseNav();
  }

  const handleClickLangItem = (idx: any) => {
    router.push({ pathname, query }, asPath, { locale: langItems[idx] });

    onCloseNav();
  }

  return (
    <div className={styles['container-options-links']}>
      {
        links.map((link: any, index: any) => {
          if (link.link === 'whitepaper') {
            return (
              <a className={styles.option} key={index} href='https://whitepaper.redcatmultiverse.io/' target='_blank' rel="noreferrer">
                {link.name}
                <div className={styles['line-gradient']}></div>
                {link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
              </a>
            )
          }
          if (link.link === 'blog') {
            return (
              <a className={styles.option} key={index} href='https://blog.redcatmultiverse.io/' target='_blank' rel="noreferrer">
                {link.name}
                <div className={styles['line-gradient']}></div>
                {link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
              </a>
            )
          }
          if (link.link === 'connect') {
            return (
              <a className={styles.option} key={index} target='_blank' rel="noreferrer" onClick={handleConnectClick}>
                {link.name}
                <div className={styles['line-gradient']}></div>
              </a>
            )
          }
          if (link.finished == false) {
            return (
              <a className={styles.option} key={index} rel="noreferrer">
                {link.name}
                <div className={styles['line-gradient']}></div>
                {link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
              </a>
            )
          }
          return (
            <a className={styles.option} key={index} onClick={() => handleLinkClick(link.link.toLowerCase())}>
              {link.name}
              <div className={styles['line-gradient']}></div>
            </a>
          )
        })
      }
      <a className={styles.langMobDropDownContainer}>
        <div
          className={`${styles.langMenuItem}`}
          {...getToggleProps({
            style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
            onClick: () => setIsLangExpanded((x) => !x)
          })}
        >
          Language
          <div className={`${styles.arrowWrapper} ${isLangExpanded ? styles.expanded : ''}`}>
            <ArrowDown />
          </div>
        </div>
        <div className={styles['line-gradient']}></div>
        <div {...getCollapseProps()}>
          {langItems.map((lang, idx) => {
            return (
              <div key={idx} className={styles.langMobItem} onClick={() => handleClickLangItem(idx)} >
                {lang}
                {langItems.indexOf(lang) !== langItems.length - 1 && <div className={styles['line-gradient']}></div>}
              </div>
            )
          })}
          <div className={styles['line-gradient']}></div>
        </div>
      </a>
    </div>
  )
}
