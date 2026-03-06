import { NextRequest, NextResponse } from 'next/server';
import Income from '@/app/db/models/Income';
import { connectToDatabase } from '@/app/db/mongo';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDatabase();
    const incomes = await Income.find();
    return NextResponse.json({ data: incomes }, { status: 200 });
  } catch (error) {
    console.error('Error fetching incomes:', error);
    return NextResponse.json({ error: 'Failed to fetch incomes' }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    await connectToDatabase();
    const newIncome = new Income(data);
    await newIncome.save();
    return NextResponse.json({ success: true, message: 'Income created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating income:', error);
    return NextResponse.json({ success: false, message: 'Failed to create income' }, { status: 500 });
  }
}


export const DELETE = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const incomeId = searchParams.get('id');
  try {
    await connectToDatabase();
    await Income.findByIdAndDelete(incomeId);
    return NextResponse.json({ success: true, message: "Income deleted successfully" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false, message: "Failed to delete income." }, { status: 500 });
  }
};

export const PUT = async (request: NextRequest) => {
  const data = await request.json();
  return NextResponse.json({ message: "API route is working", your_stuffs: JSON.stringify(data) }, { status: 200 });
};