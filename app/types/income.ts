export type IncomeCreateType =  {
    'title': string,
    'description': string,
    'source_type': string,
    'source_name': string,
    'income_frequency': string,
    'amount': number,
    'currency': string,
    'payment_method': string,
    'recieved_from': string,
    'recieved_at': Date,
    'status': string
}
export const incomeObject = {
    'title': '',
    'description': '',
    'source_type': '',
    'source_name': '',
    'income_frequency': '',
    'amount': 0,
    'currency': '',
    'payment_method': '',
    'recieved_from': '',
    'recieved_at': new Date(),
    'status': ''
}