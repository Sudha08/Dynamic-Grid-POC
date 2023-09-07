import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-create-template',
  templateUrl: './admin-create-template.component.html',
  styleUrls: ['./admin-create-template.component.scss']
})
export class AdminCreateTemplateComponent {

  sideNavStatus: boolean = false;
  planName: string = '';

  rows = [
    { title: '', type: 'Textbox' }
  ];
  fieldTypeOptions = ['Textbox', 'Radio button', 'Checkbox', 'Dropdown'];

  addRow() {
    this.rows.push({ title: '', type: 'Textbox' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

  saveData() {
    const outputData = {
      planName: this.planName,
      fields: this.rows
    };
    
    const jsonData = JSON.stringify(outputData, null, 2);
    
    // Create a blob of the data
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a link element, click it, and then destroy it
    const a = document.createElement('a');
    a.href = url;
    const fileName = this.planName.trim() || 'data';
    a.download = `${fileName}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

}
