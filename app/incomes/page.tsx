'use server'
import List from '@/app/components/List'
import { deleteIncome } from '@/app/actions/income/delete';
const fetchIncomes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/incomes`);
    const json = await res.json();
    return json.data;
}
const Page = async () => {
    const incomes = await fetchIncomes();
    return(
        <>
            <h1>Incomes Page</h1>
            <List data={incomes} deleteIncome={deleteIncome} />
        </>
    );
}
export default Page;