import mongoose, { set } from'mongoose';
import {capitalizeString} from '@/app/utils/utils'
const IncomeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    source_type: {type: String, required: true, enum: ['salary', 'fee', 'freelance', 'bonus', 'refund', 'other'], get:(v: string) => capitalizeString(v)},
    source_name: {type: String, required: true},
    income_frequency: {type: String, required: true, enum: ['one-time', 'recurring']},
    amount: {type: Number, required: true},
    currency: {type: String, required: true},
    payment_method: {type: String, required: true, enum: ['bank_transfer', 'cash', 'check', 'paypal', 'other'], get: (v: string) => capitalizeString(v)},
    recieved_from: {type: String, required: true},
    recieved_at: {type: Date, required: true, default: Date.now},
    status: {type: String, required: true, enum: ['pending', 'confirmed', 'failed'], default: 'confirmed', get: (v: string) => capitalizeString(v)},
}, {timestamps: true});
IncomeSchema.set('toJSON', { getters: true });
IncomeSchema.set('toObject', { getters: true });
export default mongoose.models.Income || mongoose.model("Income", IncomeSchema);