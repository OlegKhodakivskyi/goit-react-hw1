import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    return (
    <>
      <section className={styles.sections}>
        {title ? <h2 className={styles.title}>{title}</h2> : ''}
        <ul className={styles.list}>
          {stats.map(stat => (
            <li
              className={styles.item}
              key={stat.id}
              style={{
                backgroundColor: `#${((Math.random() * 0xffffff) << 0).toString(
                  16,
                )}`,
              }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage} %</span>
            </li>
          ))}
          </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
