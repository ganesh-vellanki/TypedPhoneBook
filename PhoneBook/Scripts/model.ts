module PhoneBook.Models {
  export class Contact {
        
        public Name: string;
        
        public Email: string;
        
        public PhoneNumber: string;
        
        constructor(name: string, email: string, phoneNumber:string)
        {
            this.Name = name;
            this.Email = email;
            this.PhoneNumber = phoneNumber;
        }
    }
}