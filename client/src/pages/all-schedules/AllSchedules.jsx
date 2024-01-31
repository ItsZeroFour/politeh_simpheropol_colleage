"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactPaginate from "react-paginate";

const AllSchedules = () => {
  const [schedules, setSchedules] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    async function getAllSchedules() {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/getAll`)
        .then((res) => res.json``)
        .then((doc) => setSchedules(doc))
        .catch((err) => {
          console.log(err);

          return (
            <main>
              <h1>Произошла ошибка</h1>
            </main>
          );
        });
    }

    getAllSchedules();
  }, []);

  const itemsPerPage = 36;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = schedules && schedules.slice(itemOffset, endOffset);
  const pageCount = schedules && Math.ceil(schedules.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % schedules.length;
    setItemOffset(newOffset);
  };

  return (
    <main className={style.schedules}>
      <section className={style.schedules__main}>
        <ul className={style.schedules__list}>
          {schedules &&
            currentItems &&
            currentItems.map(({ _id, scheduleOne, scheduleTwo, date }) => (
              <li key={_id}>
                <div className={style.schedules__list__items}>
                  <Zoom>
                    <Image
                      src={scheduleOne}
                      width={400}
                      height={300}
                      alt={`Расписание ${date}`}
                    />
                  </Zoom>

                  <Zoom>
                    <Image
                      src={scheduleTwo}
                      width={400}
                      height={300}
                      alt={`Расписание ${date}`}
                    />
                  </Zoom>
                </div>

                <p>{date}</p>
              </li>
            ))}
        </ul>
      </section>

      {schedules && currentItems && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Следующая"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Предыдущая"
          renderOnZeroPageCount={null}
          pageLinkClassName="page__link"
          containerClassName="page__container"
          activeClassName="page__link__active"
          nextLinkClassName="page__next"
          previousLinkClassName="page__prev"
        />
      )}
    </main>
  );
};

export default AllSchedules;
