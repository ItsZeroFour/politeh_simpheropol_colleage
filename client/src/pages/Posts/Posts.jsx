/* itsZeroFourX@gmail.com code side */

"use client";

import Post from "@/widgets/Posts/Post";
import { Fragment, useEffect, useState } from "react";
import style from "../../widgets/Posts/style.module.scss";
import ReactPaginate from "react-paginate";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post/getAll`
      );
      const response = await query.json();
      setPosts(response);
    };

    getData();
  }, []);

  useEffect(() => {
    if (posts) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(posts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(posts.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, posts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <section className={style.posts}>
      {currentItems && (
        <Fragment>
          <ul className={style.posts__list}>
            {currentItems.map(
              (
                { title, subtitle, image, text, createdAt, viewsCount, _id },
                index
              ) => (
                <li key={index}>
                  <Link href={`/post/${_id}`}>
                    <Post
                      title={title}
                      subtitle={subtitle}
                      image={image}
                      text={text}
                      createdAt={createdAt}
                      viewsCount={viewsCount}
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
        </Fragment>
      )}

      {currentItems && (
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={null}
          onPageChange={handlePageClick}
          containerClassName={"posts__pages"}
          pageClassName={"posts__pages__page"}
          pageLinkClassName={"posts__pages__link"}
          previousLinkClassName={"posts__pages__previous"}
          nextLinkClassName={"posts__pages__next"}
          breakClassName={"posts__pages__break"}
          activeClassName={"posts__pages__active"}
        />
      )}
    </section>
  );
};

export default Posts;
