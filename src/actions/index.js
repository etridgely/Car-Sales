export const ADD_CAR_FEATURES = "ADD_CAR_FEATURES";
export const REMOVE_CAR_FEATURES = "REMOVE_CAR_FEATURES";

export const addCarFeatures = carFeature => {
    console.log(carFeature);
    return {
        type: ADD_CAR_FEATURES,
        payload: carFeature
    };
};

export const removeCarFeatures = carFeature => {
    console.log(carFeature);
    return {
        type: REMOVE_CAR_FEATURES,
        payload: carFeature
    };
}
