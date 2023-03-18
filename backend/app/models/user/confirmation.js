import crypto from 'crypto';
import { Schema, model } from 'mongoose';
const TimeShift = 60 * 60 * 1000;
const Range = 9999 - 1000;
const ConfirmationCodeSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    until: {
        type: Date,
        required: true
    }
}, {
    methods: {
        verify: function (value) {
            if (!this.active)
                return false;
            if (this.until < new Date())
                return false;
            return this.value === value;
        },
        createCode: function () {
            const value = crypto.randomInt(Range);
            const date = new Date(Date.now() + TimeShift);
            return [value, date];
        }
    }
});
const ConfirmationCode = model('code', ConfirmationCodeSchema);
export default ConfirmationCode;
