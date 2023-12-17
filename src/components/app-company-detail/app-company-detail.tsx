import './app-company-detail.css'

import Company from "../../model";


function AppCompanyDetail(props: {
    company: Company,
    addFilter: any
}) {


    let companyFilters = [props.company.role, props.company.level, ...props.company.languages, ...props.company.tools]


    const companyFiltersHTML = companyFilters.map((item, i) => {
        return (
            <div key={i} className="CompanyDetail_filterItem" onClick={() => {
                props.addFilter(item)
            }}>{item}</div>
        )


    })


    return (
        <div className={'AppCompanyDetail ' + (props.company.featured ? 'Featured' : '')}>

            <div className="CompanyDetail__wrapper">
                <div className="CompanyDetail__logo">

                    <img src={require('../../assets/' + props.company.logo.substring(2))}
                         alt=''/>
                </div>
                <div className="CompanyDetail__text">

                    <div className="CompanyDetail__company">
                        <div className="companyTitle">
                            {props.company.company}
                        </div>

                        {props.company.new && <div className="isNew"> NEW!</div>}
                        {props.company.featured && <div className="isFeatured"> FEATURED </div>}

                    </div>
                    <div className="CompanyDetail__title">
                        {props.company.position}
                    </div>
                    <div className="CompanyDetail__description">

                        <ul className="description">
                            <li className="descriptionItem">{props.company.postedAt}</li>
                            <li className="descriptionItem">{props.company.contract}</li>
                            <li className="descriptionItem">{props.company.location}</li>
                        </ul>

                    </div>

                </div>
            </div>

            <div className="CompanyDetail__filters">
                {companyFiltersHTML}
            </div>

        </div>
    );
}

export default AppCompanyDetail;
