/// <reference path="../typings/toastr.d.ts" />

module PhoneBook.Notifications {
    
    export /**
     * toaster Notifications layer
     */
    class Notifier {
        
        public myToasterOptions: ToastrOptions;
        
        constructor(){
            //initalize the class so that it can't be null;
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
            //initalize toaster options
            toastr.options = this.myToasterOptions;
        }
        
        public showInfo(msg: string)  {
            toastr.info(msg);
        }
    }
    
    class MyToastrOptions implements ToastrOptions {
        constructor() {
        }
    }
}