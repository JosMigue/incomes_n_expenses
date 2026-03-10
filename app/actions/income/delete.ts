'use server';

import { revalidatePath } from 'next/cache';

export async function deleteIncome(id: string) {
  try {
    let request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/incomes?id=${id}`, {
      method: 'DELETE'
    });
    let response = await request.json();

    revalidatePath('/incomes');
    if(response.status == 200){
      return { success: true , message: response.message  };
    }
    return { success: false , message: response.message};
  } catch (e) {
    console.error('Error deleting income:', e);
    return { success: false, message: 'Internal Error: Failed to create user', err:e};
  }
}