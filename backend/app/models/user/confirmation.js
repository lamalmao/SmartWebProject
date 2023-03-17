import crypto from 'crypto';
class ConfirmationCode {
    static Range = 9999 - 1000;
    static TimeShift = 60 * 60 * 1000;
    value;
    active;
    until;
    constructor() {
        this.value = crypto.randomInt(ConfirmationCode.Range);
        this.active = true;
        this.until = new Date(Date.now() + ConfirmationCode.TimeShift);
    }
    verify(value) {
        if (!this.active)
            return false;
        if (this.until > new Date())
            return false;
        return this.value === value;
    }
}
export default ConfirmationCode;
