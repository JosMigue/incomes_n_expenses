'use server';

import { revalidatePath } from 'next/cache';
import {IncomeCreateType} from '@/app/types/income'
export async function createIncome(data: IncomeCreateType) {
    try{
        console.log('Creating income with data:', data);
        let request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/incomes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(request);
        let response = await request.json();
    
        revalidatePath('/incomes');
        if(response.status == 200){
          return { success: true , message: response.message  };
        }
        return { success: false , message: response.message};
    }catch(e){
        console.error('Error creating income:', e);
        return { success: false, message: 'Internal Error: Failed to create user', err:e};
    }
}