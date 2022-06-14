import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';
import { NotificationService } from '../notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification!: Notification[];
  notifications: Notification = new Notification();
  id!: number;

  constructor(private notificationService: NotificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNotification();
  }

  private getNotification() {
    this.notificationService.getAllNotifications().subscribe(data => {
      this.notification = data;
    });
  }

  update(id: number) {
    this.id = this.route.snapshot.params['id'];
    console.log('id', id);
    this.notificationService.getNotificationById(id).subscribe(data => {
      this.notifications = data;
    },
      error => console.log(error));
    this.notificationService.updateNotification(id, this.notifications).subscribe(data => {

    });
  }
}
