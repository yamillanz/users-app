import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.scss',
})
export class CompaniesListComponent {
  companies = [
    {
      name: 'Empresa 1',
      rif: 'J-12345678-9',
      address: 'Dirección 1',
      phone: '1234567890',
    },
    {
      name: 'Empresa 2',
      rif: 'J-98765432-1',
      address: 'Dirección 2',
      phone: '0987654321',
    },
    {
      name: 'Empresa 3',
      rif: 'J-56789012-3',
      address: 'Dirección 3',
      phone: '3456789012',
    },
    {
      name: 'Empresa 4',
      rif: 'J-21098765-4',
      address: 'Dirección 4',
      phone: '6789012345',
    },
    {
      name: 'Empresa 5',
      rif: 'J-43210987-6',
      address: 'Dirección 5',
      phone: '9012345678',
    },
  ];

  editing: boolean = false;

  onRowEditInit(company : any) {}
  deleteSelectedProducts(company : any) {}
}
