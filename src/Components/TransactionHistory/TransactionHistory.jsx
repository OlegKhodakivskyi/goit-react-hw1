import React from "react";
import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <>
            <table className={style.['transaction-history']}>
                <thead>
                    <tr className={style.sheetColor}>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <tr className={style.list} key={item.id}>
                            <td className={style.listItem}>{item.type}</td>
                            <td className={style.listItem}>{item.amount}</td>
                            <td className={style.listItem}>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.array,
};

export default TransactionHistory;