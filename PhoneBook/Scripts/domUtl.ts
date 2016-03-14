/// <reference path="../typings/jquery.d.ts" />
/// <reference path="model.ts" />


module PhoneBook.DomUtil {
    export class DomUtil {
        
        constructor() {
            
        }
        
        public AddContact(contact: Models.Contact) {
            var _availableContacts = $('#contactList').children();
            var addTemplate = this.getContactTemplate(_availableContacts.length + 1, contact);
            $('#contactList').append(addTemplate);
            this.HideAddForm();
        }
        
        public DeleteContact(id: string) {
            $('#' + id).remove();
        }
        
        
        private getContactTemplate(id: number,contact: Models.Contact): string {
            return "<li class='contact-item'><div>"+contact.Name+"</div><div>email:"+contact.Email+"</div><div>Phone"+contact.PhoneNumber+"</div>"+
            "<span class='del-btn lnr lnr-cross' id='"+ id.toString() +"'></span>" + "</li>"
        }
        
        public ShowAddForm(){
            $('#contactAdd').show(200);
        }
        
        public HideAddForm() {
            $('#contactAdd').hide(100);
        }
    }
}