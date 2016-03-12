module PhoneBook.Models {
  export class Contact {
        
        public Name: string;
        
        public Email: string;
        
        public PhoneNumber: string;
        
        public Address: string;
        
        public Age: number;
        
        public Gender: string;
        
        constructor(name: string, email: string, phoneNumber:string, address: string, age: number, gender: string)
        {
            this.Name = name;
            this.Email = email;
            this.PhoneNumber = phoneNumber;
            this.Address = address;
            this.Age = age;
            this.Gender = gender;
        }
    }
}