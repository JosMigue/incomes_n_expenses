'use client'
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'
type PageProps = {
  data: [any],
  deleteIncome: (id: string) => Promise<{ success: boolean; message: string }>
}
const Page = ({ data, deleteIncome }: PageProps) => {
  const [isPendingDelete, startTransitionDelete] = useTransition();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    startTransitionDelete(async () => {
      const result = await deleteIncome(id);
      toast.success(result.message);
      router.refresh();
    });
  }
  return (
    <>
      <Toaster/>
        <div className="bg-[#0B1220] text-white rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Incomes</h2>
            <p className="text-sm text-gray-400">
              A table of your incomes records.
            </p>
          </div>

          <Link href="/incomes/create" className="bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg text-sm font-medium">
            Create
          </Link>
          {isPendingDelete && <span>Deleting...</span>}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                <th className="text-left py-3 px-2">Title</th>
                <th className="text-left py-3 px-2">Source</th>
                <th className="text-left py-3 px-2">Recieved At</th>
                <th className="text-left py-3 px-2">Status</th>
                <th className="text-left py-3 px-2">Amount</th>
                <th className="text-left py-3 px-2">Payment Method</th>
                <th className="text-left py-3 px-2">Source Type</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {data.map((tx) => (
                <tr
                  key={tx._id}
                  className="border-b border-gray-800 hover:bg-[#121a2f] transition"
                >
                  <td className="py-3 px-2 text-gray-300">{tx.title}</td>
                  <td className="py-3 px-2 font-medium">{tx.source_name}</td>
                  <td className="py-3 px-2 text-gray-300">{tx.recieved_at.split('T')[0]}</td>

                  <td
                    className={`py-3 px-2 font-bold ${tx.status.toLowerCase().startsWith('confirmed') ? 'text-green-400' : ''}  ${tx.status.toLowerCase().startsWith('failed') ? 'text-red-400' : ''}  ${tx.status.toLowerCase().startsWith('pending') ? 'text-yellow-400' : ''}`}
                  >
                    {tx.status}
                  </td>

                  <td className="py-3 px-2 text-gray-300">{tx.amount} {tx.currency}</td>
                  <td className="py-3 px-2 text-gray-300">{tx.payment_method}</td>
                  <td className="py-3 px-2 font-semibold">{tx.source_type}</td>

                  <td className="py-3 px-2 text-right">
                    <button onClick={() => handleDelete(tx._id)} className="text-indigo-400 hover:text-indigo-300 text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {!data.length && (
                <tr className='border-b border-gray-800 hover:bg-[#121a2f] transition'>
                  <td colSpan={8} className="py-3 px-2 text-gray-300 text-center">
                    No incomes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Page;