import {GET_COUNTRIES, GET_BYNAME, GET_ACTIVITIES,GET_BYID, POST_ACTIVITIES, ORDER_COUNTRIES, ORDER_POPULATION,
    FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, NEXT_PAGE, PREV_PAGE,} from '../Actions/Types'

const initialState = {
    allCountries:[],
    countries:[],
    byId:{},
    activities:[],
    filter:[],
    order:[],
    page:1
    
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries:action.payload,
                countries:action.payload
            }
        case GET_BYNAME:
            return{
                ...state,
                countries:action.payload
            }
        case GET_BYID:
            return{
                ...state,
                byId:action.payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        case POST_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        case ORDER_COUNTRIES:
            let orderedCountries;
            if(action.payload === 'asc'){
                orderedCountries = state.allCountries.sort((a, b) => a.name.localCompare(b.name));
            }else{
                orderedCountries= state.allCountries.sort((a, b) => b.name.localCompare(a.name));
            }
            return{
                ...state,
                order:[...orderedCountries]
            };
        case ORDER_POPULATION:
            let orderedPopulation;
            if(action.payload === 'Mayor'){
                orderedPopulation = state.allCountries.sort((a, b) => (a.population > b.population) ? 1 : -1);
            }else{
                orderedPopulation= state.allCountries.sort((a, b) => (a.population > b.population) ? -1 : 1);
            }
            return{
                ...state,
                order:[...orderedPopulation]
            }
        case FILTER_BY_CONTINENT:
            return{
                ...state,
                filter:[...action.payload]
            }
        case FILTER_BY_ACTIVITY:
            return{
                ...state,
                filter:action.payload
            }
        case NEXT_PAGE:
            return{
                ...state,
                nextPage:action.payload
            }
        case PREV_PAGE:
            return{
                ...state,
                prevPage:action.payload
            }
        default:
            return {...state};
        }
}

export default reducer