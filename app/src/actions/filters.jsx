const setFilter = (filter={}) => ({type: 'SET_FILTER', filter});
const resetFilter = () => ({type:'RESET_FILTER'})

export {setFilter, resetFilter};
