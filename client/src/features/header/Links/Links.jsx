import LinkDropdown from "@features/header/LinkDropdown/LinkDropdown";
import Triangle from "@public/assets/icons/triangle.svg";
import { useDebounce } from "@uidotdev/usehooks";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./../../../widgets/header/header.module.scss";

const Links = React.memo(function Links() {
  const [linksServer, setLinksServer] = useState([]);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheaderall`
        );
        setLinksServer([...data.data]);
        console.log([...data.data])
      } catch (error) {
        // alert('error' + error)
      }
    };
    fetchingData();
  }, []);

  const handleHover = (id) => {
    setHoveredLinkId(id);
    setIsRemoving(false);
  };

  const handleUnhover = () => {
    setIsRemoving(true);
    setTimeout(() => setHoveredLinkId(null), 330);
  };

  const debouncedIsHovered = useDebounce(hoveredLinkId !== null, 300);

  return (
    <ul style={{ display: "flex", justifyContent: "space-between" }}>
      {linksServer.map((link, index) => {
        const id = style.link + index;
        link.id = id;

        return (
          <li
            style={{ marginLeft: 20, cursor: "pointer" }}
            key={index}
            className={
              link.nestedObjects.length !== 0 ? style.categoryLink : style.link
            }
            id={id}
            onMouseEnter={() =>
              link.nestedObjects.length !== 0 && handleHover(id)
            }
            onMouseLeave={() =>
              link.nestedObjects.length !== 0 && handleUnhover()
            }
          >
            {!link.isCategory ? (
              <Link href={link.url}>{link.text}</Link>
            ) : (
              link.text
            )}
            {link.nestedObjects.length !== 0 && (
              <Triangle
                className={`${style.dropdownIcon} ${
                  hoveredLinkId === id && style.dropdownIconActive
                }`}
              />
            )}

            {link.nestedObjects.length !== 0 &&
              debouncedIsHovered &&
              hoveredLinkId === id && (
                <LinkDropdown data={link} isRemoving={isRemoving} />
              )}
          </li>
        );
      })}
    </ul>
  );
});

export default Links;
