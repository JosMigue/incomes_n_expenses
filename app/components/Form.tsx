'use client'
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useTransition } from 'react';
import { incomeObject, IncomeCreateType } from '@/app/types/income'
const Page = ({ createAction }: { createAction: (data: IncomeCreateType) => Promise<{ success: boolean, message: string }> }) => {
  const [formData, setFormData] = useState(incomeObject);
  const [isPending, startTransition] = useTransition();
  const handleOnChange = (field: keyof IncomeCreateType, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async () => {
    startTransition(async () => {
      const response = await createAction(formData);
      if (response.success) {
        toast.success(response.message);
      }else{
        toast.error(response.message);
      }
    });
  }
  return (
    <>
      <Toaster />
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="title" className="block text-sm/6 font-medium text-white">Title</label>
              <div className="mt-2">
                <input onChange={(e) => handleOnChange('title', e.target.value)} id="title" type="text" name="title" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="source_type" className="block text-sm/6 font-medium text-white">Source Type</label>
              <div className="mt-2 grid grid-cols-1">
                <select defaultValue={''} onChange={(e) => handleOnChange('source_type', e.target.value)} id="source_type" name="source_type" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                  <option disabled value="">Select Source Type</option>
                  <option value="salary">Salary</option>
                  <option value="fee">Fee</option>
                  <option value="freelance">Freelance</option>
                  <option value="bonus">Bonus</option>
                  <option value="refund">Refund</option>
                  <option value="other">Other</option>
                </select>
                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                  <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="description" className="block text-sm/6 font-medium text-white">Description</label>
              <div className="mt-2">
                <textarea onChange={(e) => handleOnChange('description', e.target.value)} id="description" rows={4} cols={33} name="description" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="source_name" className="block text-sm/6 font-medium text-white">Source Name</label>
              <div className="mt-2">
                <input onChange={(e) => handleOnChange('source_name', e.target.value)} id="source_name" type="text" name="source_name" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="income_frequency" className="block text-sm/6 font-medium text-white">Income Frequency</label>
              <div className="mt-2">
                <select defaultValue={''} onChange={(e) => handleOnChange('income_frequency', e.target.value)} id="income_frequency" name="income_frequency" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                  <option disabled value="">Select Frequency</option>
                  <option value="one-time">One Time</option>
                  <option value="recurring">Recurring</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="amount" className="block text-sm/6 font-medium text-white">Amount</label>
              <div className="mt-2">
                <input onChange={(e) => handleOnChange('amount', e.target.value)} id="amount" type="text" name="amount" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="currency" className="block text-sm/6 font-medium text-white">Currency</label>
              <div className="mt-2">
                <select defaultValue={''} onChange={(e) => handleOnChange('currency', e.target.value)} id="currency" name="currency" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                  <option disabled value="">Select Currency</option>
                  <option value="usd">$USD</option>
                  <option value="eur">€EUR</option>
                  <option value="mxn">$MXN</option>
                </select>
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="payment_method" className="block text-sm/6 font-medium text-white">Payment Method</label>
              <div className="mt-2">
                <select defaultValue={''} onChange={(e) => handleOnChange('payment_method', e.target.value)} id="payment_method" name="payment_method" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                  <option disabled value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="check">Check</option>
                  <option value="bank_transfer">Bank Transfer</option>
                  <option value="paypal">PayPal</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="recieved_from" className="block text-sm/6 font-medium text-white">Received From</label>
              <div className="mt-2">
                <input onChange={(e) => handleOnChange('recieved_from', e.target.value)} id="recieved_from" type="text" name="recieved_from" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="recieved_at" className="block text-sm/6 font-medium text-white">Received At</label>
              <div className="mt-2">
                <input onChange={(e) => handleOnChange('recieved_at', e.target.value)} value={new Date(formData.recieved_at).toISOString().split('T')[0]} id="recieved_at" type="date" name="recieved_at" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>
          </div>
        </div>
        <fieldset>
          <legend className="text-sm/6 font-semibold text-white">Status</legend>
          <p className="mt-1 text-sm/6 text-gray-400">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input id="status-pending" value="pending" onChange={(e) => handleOnChange('status', e.target.value)} type="radio" name="status" className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
              <label htmlFor="status-pending" className="block text-sm/6 font-medium text-white">Pending</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="status-confirmed" value="confirmed" onChange={(e) => handleOnChange('status', e.target.value)} type="radio" name="status" className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
              <label htmlFor="status-confirmed" className="block text-sm/6 font-medium text-white">Confirmed</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="status-failed" value="failed" onChange={(e) => handleOnChange('status', e.target.value)} type="radio" name="status" className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
              <label htmlFor="status-failed" className="block text-sm/6 font-medium text-white">Failed</label>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-white">Cancel</button>
        <button onClick={() => handleSubmit()} type="button" className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
      </div>
    </>
  )
}
export default Page;