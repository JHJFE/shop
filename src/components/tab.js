import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Tab({ size, review, request }) {

    let [tabIndex, setTabIndex] = useState(0);
    let tabData = [size, review, request]
    const whichTab = (i) => {
        setTabIndex(i)
    }

    return (
        <article>
            <section>
                <button onClick={() => whichTab(0)}>사이즈</button>
                <button onClick={() => whichTab(1)}>리뷰</button>
                <button onClick={() => whichTab(2)}>문의</button>

                {tabData[tabIndex].map((el)=>{
                    return(
                        <li>{el}</li>
                    )
                })}

            </section>
        </article>
    )
}
export default Tab