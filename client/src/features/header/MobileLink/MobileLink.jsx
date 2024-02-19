"use client";

import React, { useState } from "react";
import style from "./../../../widgets/header/header.module.scss";
import Link from "next/link";
import Triangle from "@public/assets/icons/triangle.svg";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "@app/hooks/useActions";

const MobileLink = React.memo(function MobileLink({ stlye, link }) {
  const dispatch = useDispatch();
  const { setIsOpenedMenu } = useActions();

  const onMenuClick = () => {
    dispatch(setIsOpenedMenu(false));
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      return setIsClosing(false);
    }

    setIsClosing(true);
    setIsClicked(false);
  };

  return (
    <li
      className={
        link.nestedObjects.length !== 0 ? style.categoryLink : style.link
      }
      onClick={link.nestedObjects.length !== 0 ? handleClick : () => {}}
      id={link.nestedObjects.length !== 0 ? link.text : null}
    >
      {link.nestedObjects.length === 0 ? (
        <Link href={link.url} onClick={onMenuClick}>
          {link.text}
        </Link>
      ) : (
        <span className="header__link__34">{link.text}</span>
      )}
      {link.nestedObjects.length !== 0 && (
        <Triangle
          className={`${style.dropdownIcon} ${
            isClicked && style.dropdownIconActive
          }`}
        />
      )}

      {link.nestedObjects.length !== 0 && (
        <div
          className={`${style.mobileDropdown} ${
            isClicked && style.mobileDropdownActive
          }`}
        >
          <ul className={"overflow-hidden"}>
            <div className={style.mobileDropdownDelimiter}></div>
            {link.nestedObjects.map((link, index) => (
              <li key={index} className={style.link}>
                <Link href={link.url} onClick={onMenuClick}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
});

export default MobileLink;
