export const Actions = {
    SIGNUP_INIT: 'signup init',
    SIGNUP_VERIFICATION: 'signup verification'
};
export class ApiError extends Error {
    message;
    action;
    code;
    constructor(message, action, code) {
        super();
        this.message = message;
        this.action = action;
        this.code = code;
    }
    get data() {
        return {
            message: this.message,
            action: this.action,
        };
    }
}
