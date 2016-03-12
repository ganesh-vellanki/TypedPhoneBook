/// <reference path="../typings/jquery.d.ts" />
import Notify = PhoneBook.Notifications;

module PhoneBook
{
    var Notifier = new Notify.Notifier();
    //main.ts
    $("#addBtn").click(() => {
        Notifier.showInfo("Working Ganesh");
    })
}