/// <reference path="../typings/jquery.d.ts" />
import Notify = PhoneBook.Notifications;

module PhoneBook
{
    var _domUtil = new DomUtil.DomUtil();
    var _notifier = new Notify.Notifier();
    //show add form
    $('#addBtn').click(() => _domUtil.ShowAddForm());
    
    $('#closeBtn').click(() => _domUtil.HideAddForm());
    
    $('#saveBtn').click(() => {
        var contact = new Models.Contact($('#contactName').val(), $('#contactEmail').val(), $('#contactPhone').val());
        if(contact.Email == "" && contact.Name == "" && contact.PhoneNumber == ""){
           _notifier.showInfo("Please fill the form to proceed");
           return;
        }
        _domUtil.AddContact(contact);
    });
    
    $('.del-btn').click((event: Event) => {
        var _target = event.target;
    })
}