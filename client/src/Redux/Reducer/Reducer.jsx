/* eslint-disable no-case-declarations */
import { GET_COUNTRIES, GET_BYNAME, GET_ACTIVITIES, POST_ACTIVITY, GET_BYID, ORDER_COUNTRIES, ORDER_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, NEXT_PAGE, PREV_PAGE } from '../Actions/Types'

const initialState = {
    allCountries: [],
    countries : [],
    byId: {},
    activities: [],
    filter: [],
    page: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_COUNTRIES:
        return {
        ...state,
        allCountries: action.payload,
        countries: action.payload
        }
    case GET_BYNAME:
        
        return {
        ...state,
        countries: action.payload,
        page:1
        }
    case GET_BYID:
        return {
        ...state,
        byId: action.payload
        }
    case GET_ACTIVITIES:
        return {
        ...state,
        activities: action.payload
        }
        
    case POST_ACTIVITY:
        return {...state}

    case ORDER_COUNTRIES:
        let orderedCountries =action.payload === 'asc' ? state.countries.sort((a, b) => a.name.localeCompare(b.name)) :
        state.countries.sort((a, b) => b.name.localeCompare(a.name))
        if(action.payload === 'all') orderedCountries = state.countries;

        return {
        ...state,
        countries: [...orderedCountries]
        };
    case ORDER_POPULATION:
        let orderedPopulation;
        if (action.payload === 'Maj') {
        orderedPopulation = state.countries.sort((a, b) => (a.population > b.population) ? -1 : 1);
        } else {
        orderedPopulation = state.countries.sort((a, b) => (a.population > b.population) ? 1 : -1);
        }
        return {
        ...state,
        countries: [...orderedPopulation]
        }
    case FILTER_BY_CONTINENT:
        let countrCopy = state.countries;
        const filteredContinent =action.payload==='all' ? countrCopy:state.countries.filter(country=>country.continents === action.payload);
        
        return {
            ...state,
            countries: [...filteredContinent],
            page:1
        }
    case FILTER_BY_ACTIVITY:
        let countCopy = state.countries;
        const filterAct = action.payload === 'all' ? countCopy :
        state.countries.filter((country) =>
            country.Activities?.some((activity) => activity.name === action.payload))
        return {
        ...state,
        countries: [...filterAct],
        page:1
        }
    case NEXT_PAGE:
        return {
        ...state,
        page: state.page + 1
        }
    case PREV_PAGE:
        return {
        ...state,
        page: state.page-1
        }
    default:
        return { ...state };
    }
}

export default reducer