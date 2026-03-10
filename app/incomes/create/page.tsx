'use server'
import Form from '@/app/components/Form';
import { createIncome } from '@/app/actions/income/create';
const Page = async () => {
  return (
    <>
      <div className="bg-[#0B1220] text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <div>
            <h2 className="text-base/7 font-semibold text-white">Income</h2>
            <p className="mt-1 text-sm/6 text-gray-400">This information will be displayed publicly so be careful what you share.</p>
            <Form createAction={createIncome} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;