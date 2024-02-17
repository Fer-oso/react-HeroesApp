import { types } from "./types/types";

export const authReducer = (state, action) => {

    switch (action.type) {

        case types.login:

            return {
                ...state,
                logged: true,
                authUser: action.payload
                
            }

        case types.logout:
            return {
                ...state,
                logged: false,
                authUser: {}
            }

        default:
            return state;
    }

}