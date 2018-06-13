export default store => next => async action => {
    debugger;
    if (!action.payload || !action.payload.then) {
        return next(action);
    };

    const response = await action.payload;

    const newAction = {
        ...action,
        payload: response
    };

    store.dispatch(newAction);
    //newAction is the old action with the payload replaced via middleware

    return action.payload;
}