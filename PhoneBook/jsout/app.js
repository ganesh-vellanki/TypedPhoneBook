var PhoneBook;
(function (PhoneBook) {
    var Models;
    (function (Models) {
        var Contact = (function () {
            function Contact(name, email, phoneNumber) {
                this.Name = name;
                this.Email = email;
                this.PhoneNumber = phoneNumber;
            }
            return Contact;
        }());
        Models.Contact = Contact;
    })(Models = PhoneBook.Models || (PhoneBook.Models = {}));
})(PhoneBook || (PhoneBook = {}));
var PhoneBook;
(function (PhoneBook) {
    var Notifications;
    (function (Notifications) {
        var Notifier = (function () {
            function Notifier() {
                this.myToasterOptions = new MyToastrOptions();
                this.myToasterOptions.newestOnTop = true;
                this.myToasterOptions.closeButton = false,
                    this.myToasterOptions.debug = false;
                this.myToasterOptions.newestOnTop = true;
                this.myToasterOptions.positionClass = "toast-bottom-right";
                this.myToasterOptions.onclick = null;
                this.myToasterOptions.showDuration = 150;
                this.myToasterOptions.hideDuration = 200;
                this.myToasterOptions.timeOut = 3000;
                this.myToasterOptions.extendedTimeOut = 1000;
                this.myToasterOptions.showEasing = "swing";
                this.myToasterOptions.hideEasing = "linear";
                this.myToasterOptions.showMethod = "slideDown";
                this.myToasterOptions.hideMethod = "slideUp";
                toastr.options = this.myToasterOptions;
            }
            Notifier.prototype.showInfo = function (msg) {
                toastr.info(msg);
            };
            return Notifier;
        }());
        Notifications.Notifier = Notifier;
        var MyToastrOptions = (function () {
            function MyToastrOptions() {
            }
            return MyToastrOptions;
        }());
    })(Notifications = PhoneBook.Notifications || (PhoneBook.Notifications = {}));
})(PhoneBook || (PhoneBook = {}));
var PhoneBook;
(function (PhoneBook) {
    var DomUtil;
    (function (DomUtil_1) {
        var DomUtil = (function () {
            function DomUtil() {
            }
            DomUtil.prototype.AddContact = function (contact) {
                var _availableContacts = $('#contactList').children();
                var addTemplate = this.getContactTemplate(_availableContacts.length + 1, contact);
                $('#contactList').append(addTemplate);
                this.HideAddForm();
            };
            DomUtil.prototype.DeleteContact = function (id) {
                $('#' + id).remove();
            };
            DomUtil.prototype.getContactTemplate = function (id, contact) {
                return "<li class='contact-item'><div>" + contact.Name + "</div><div>email:" + contact.Email + "</div><div>Phone" + contact.PhoneNumber + "</div>" +
                    "<span class='del-btn lnr lnr-cross' id='" + id.toString() + "'></span>" + "</li>";
            };
            DomUtil.prototype.ShowAddForm = function () {
                $('#contactAdd').show(200);
            };
            DomUtil.prototype.HideAddForm = function () {
                $('#contactAdd').hide(100);
            };
            return DomUtil;
        }());
        DomUtil_1.DomUtil = DomUtil;
    })(DomUtil = PhoneBook.DomUtil || (PhoneBook.DomUtil = {}));
})(PhoneBook || (PhoneBook = {}));
var Notify = PhoneBook.Notifications;
var PhoneBook;
(function (PhoneBook) {
    var _domUtil = new PhoneBook.DomUtil.DomUtil();
    var _notifier = new Notify.Notifier();
    $('#addBtn').click(function () { return _domUtil.ShowAddForm(); });
    $('#closeBtn').click(function () { return _domUtil.HideAddForm(); });
    $('#saveBtn').click(function () {
        var contact = new PhoneBook.Models.Contact($('#contactName').val(), $('#contactEmail').val(), $('#contactPhone').val());
        if (contact.Email == "" && contact.Name == "" && contact.PhoneNumber == "") {
            _notifier.showInfo("Please fill the form to proceed");
            return;
        }
        _domUtil.AddContact(contact);
    });
    $('.del-btn').click(function (event) {
        var _target = event.target;
    });
})(PhoneBook || (PhoneBook = {}));
