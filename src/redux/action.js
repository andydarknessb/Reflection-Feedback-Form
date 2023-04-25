export const SET_FEELING = "SET_FEELING";

export function setFeeling(feeling) {
    return {
        type: SET_FEELING,
        payload: feeling,
    };
    }
