import React from 'react'
import Products from './Products';
import Filter from './Filter';
import Hero from './Hero';
import Breadcrumb from './Breadcrumb';

function Home({ category }) {
    return (
        <>
            <Hero />
            <div>
                <Breadcrumb />
            </div>
            <div class="aem-Grid aem-Grid--12 container">
                <div class="aem-GridColumn aem-GridColumn--default--3">
                    <Filter />
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    <Products category={category} />
                </div>
            </div>
        </>

    )
}

export default Home
