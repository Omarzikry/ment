export const returnObject = (state , changedProperty) => {
    return{
        ...state,
        ...changedProperty
    };
}