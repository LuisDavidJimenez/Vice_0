import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [Header],
  templateUrl: './proyecto.html',
  styleUrl: './proyecto.css',
})
export class Proyecto {}
