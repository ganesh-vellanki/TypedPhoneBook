var PhoneBook;
(function (PhoneBook) {
    var Models;
    (function (Models) {
        var Contact = (function () {
            function Contact(name, email, phoneNumber, address, age, gender) {
                this.Name = name;
                this.Email = email;
                this.PhoneNumber = phoneNumber;
                this.Address = address;
                this.Age = age;
                this.Gender = gender;
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
            return DomUtil;
        }());
        DomUtil_1.DomUtil = DomUtil;
    })(DomUtil = PhoneBook.DomUtil || (PhoneBook.DomUtil = {}));
})(PhoneBook || (PhoneBook = {}));
var Notify = PhoneBook.Notifications;
var PhoneBook;
(function (PhoneBook) {
    var Notifier = new Notify.Notifier();
    $("#addBtn").click(function () {
        Notifier.showInfo("Working Ganesh");
    });
})(PhoneBook || (PhoneBook = {}));
