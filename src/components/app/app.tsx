import React from 'react';
import './app.css'
import desktopImage from '../../assets/images/bg-header-desktop.svg'
import mobileImage from '../../assets/images/bg-header-mobile.svg'
import Company from '../../model';
import dataJSON from '../../assets/data.json'

import AppFilter from "../app-filter/app-filter";
import AppCompanyList from "../app-company-list/app-company-list";


function App() {
    const imageUrl = window.innerWidth >= 375 ? desktopImage : mobileImage
    const data: Company[] = dataJSON


    const [state, setState] = React.useState<Array<string>>([]);


    const clearFilters = () => {

        let res: React.SetStateAction<[]> = []

        setState(res);
    }

    const deleteFilters = (i: number) => {
        let res = state.filter((item: any, index: number) => index !== i)

        setState(res);
    }

    const addFilter = (filter: string) => {

        let res = [...state]

        if (!res.includes(filter)) {
            let res = [...state, filter]
            setState(res)
        }


    }


    return (
        <div className="App">
            <header className="header" style={{backgroundImage: `url(${imageUrl})`}}>

            </header>

            <AppFilter filters={state} clearFilters={clearFilters} deleteFilters={deleteFilters}/>

            <AppCompanyList companies={data} addfilter={addFilter} userFilters={state}/>

        </div>
    );
}

export default App;
