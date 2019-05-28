import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';

@NgModule({
  declarations: [
    BsComponentComponent,
    AlertComponent,
    ButtonsComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent,
    ],
  imports: [
    CommonModule,
    BsComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PageHeaderModule
  ]
})
export class BsComponentModule { }
