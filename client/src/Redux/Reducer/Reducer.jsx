/* eslint-disable no-case-declarations */
import { GET_COUNTRIES, GET_BYNAME, GET_ACTIVITIES, GET_BYID, POST_ACTIVITIES, ORDER_COUNTRIES, ORDER_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, NEXT_PAGE, PREV_PAGE } from '../Actions/Types'

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
        filter: action.payload
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
    case POST_ACTIVITIES:
        return {
        ...state,
        activities: action.payload
        }
    case ORDER_COUNTRIES:
        let orderedCountries =action.payload === 'asc' ? state.countries.sort((a, b) => a.name.localeCompare(b.name)) :
        state.countries.sort((a, b) => b.name.localeCompare(a.name))
        if(action.payload === 'all') orderedCountries = state.countries;

        return {
        ...state,
        filter: [...orderedCountries]
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
        filter: [...orderedPopulation],
        page: 1
        }
    case FILTER_BY_CONTINENT:
        const boolean= action.payload === 'all'
        const filteredContinent = boolean ? state.countries :
            state.countries.filter(country => country.continent === action.payload);
        return {
            ...state,
            filter: [...filteredContinent]
        }
    case FILTER_BY_ACTIVITY:
        const filterAct = action.payload === 'all' ? state.countries :
        state.filter.filter((country) =>
            country.Activities?.some((activity) => activity.name === action.payload))
        return {
        ...state,
        filter: [...filterAct],
        }
    case NEXT_PAGE:
        return {
        ...state,
        nextPage: state.page + 1
        }
    case PREV_PAGE:
        return {
        ...state,
        prevPage: state.page - 1
        }
    default:
        return { ...state };
    }
}

export default reducer