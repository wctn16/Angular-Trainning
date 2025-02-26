import { Injectable } from '@angular/core';

export class Customer {
  ID?: number;
  FirstName?: string;
  LastName?: string;
  Position?: string;
  BirthDate?: string;
  HireDate?: string;
  Notes?: string;
  Address?: string;
  City?: string;
  State?: string;
  ZipCode?: string;
  Mobile?: string;
  Home?: string;
  Email?: string;
  Skype?: string;
}


const customer: Customer[] = [{
  ID: 1,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'CA',
  ZipCode: '90013',
  Home: '555-684-1334',
  Mobile: '555-684-1335',
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
}
, {
  ID: 2,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'CA',
  ZipCode: '90013',
  Home: '555-684-1334',
  Mobile: '555-684-1335',
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
}, {
  ID: 3,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'CA',
  ZipCode: '90013',
  Home: '555-684-1334',
  Mobile: '555-684-1335',
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
}, {
  ID: 4,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'CA',
  ZipCode: '90013',
  Home: '555-684-1334',
  Mobile: '555-684-1335',
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
}, {
  ID: 5,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'CA',
  ZipCode: '90013',
  Home: '555-684-1334',
  Mobile: '555-684-1335',
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
}, {
  ID: 6,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'CA',
  ZipCode: '90013',
  Home: '555-684-1334',
  Mobile: '555-684-1335',
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
}]


const positions: string[] = [
  'HR Manager',
  'IT Manager',
  'CEO',
  'Controller',
  'Sales Manager',
  'Support Manager',
  'Shipping Manager',
];

const states: string[] = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

@Injectable()
export class Service {
  static DataSource(): import("devextreme/data/data_source").default<any, any> {
    throw new Error('Method not implemented.');
  }
  static getDataSource(): import("devextreme/data/data_source").default<any, any> {
    throw new Error('Method not implemented.');
  }
  getDataSource(): import("devextreme/data/data_source").default<any, any> {
    throw new Error('Method not implemented.');
  }
  getCountries(): string[] {
    throw new Error('Method not implemented.');
  }
  getCustomer(): any {
    throw new Error('Method not implemented.');
  }
  getCities(): any {
    throw new Error('Method not implemented.');
  }
  getEmployee() {
    return customer;
  }

  getPositions() {
    return positions;
  }

  getStates() {
    return states;
  }
}
