import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'srm-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  notifications: any;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  ngOnInit() {
    this.notifications = this.data.notifications;
  }

  clearAll() {
    this.bottomSheetRef.dismiss([]);
  }

  closeAndRemoveNotification(index) {
    this.notifications.splice(index, 1);
    this.bottomSheetRef.dismiss(this.notifications);
  }

  close() {
    this.bottomSheetRef.dismiss(this.notifications);
  }

}
