import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {TableModule} from 'primeng/table';
import {CompaniesListComponent} from '../companies-list/companies-list.component';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [CommonModule, TableModule, CompaniesListComponent, ButtonModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss',
})
export class InvoicesListComponent {
  invoices = [
    {
      number: '001',
      date_bill: '2022-01-01',
      total: 100,
      rif: 'ABC123',
      address: 'Calle 2',
    },
    {
      number: '002',
      date_bill: '2022-01-02',
      total: 200,
      rif: 'DEF456',
      address: 'Calle 3',
    },
    {
      number: '003',
      date_bill: '2022-01-03',
      total: 300,
      rif: 'GHI789',
      address: 'Calle 1',
    },
    {
      number: '004',
      date_bill: '2022-01-04',
      total: 400,
      rif: 'JKL012',
      address: 'Calle 4',
    },
    {
      number: '005',
      date_bill: '2022-01-05',
      total: 500,
      rif: 'MNO345',
      address: 'Calle 56',
    },
    {
      number: '006',
      date_bill: '2022-01-06',
      total: 600,
      rif: 'PQR678',
      address: 'Calle 112',
    },
    {
      number: '007',
      date_bill: '2022-01-07',
      total: 700,
      rif: 'STU901',
      address: 'Calle 12',
    },
    {
      number: '008',
      date_bill: '2022-01-08',
      total: 800,
      rif: 'VWX234',
      address: 'Calle 45',
    },
    {
      number: '009',
      date_bill: '2022-01-09',
      total: 900,
      rif: 'YZA567',
      address: 'Calle 45',
    },
    {
      number: '010',
      date_bill: '2022-01-10',
      total: 1000,
      rif: 'BCD890',
      address: 'Calle 124 con 45',
    },
  ];

  deleteSelectedInvoice(invoice: any) {}
}
