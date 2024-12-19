export const inputFields = [
    {
      id: "name",
      label: "Patient Name (*)",
      name: "name",
      type: "text",
      required: true,
      placeholder: 'Full name',
    },
    {
      id: "age",
      label: "Age (*)",
      name: "age",
      type: "number",
      required: true,
    },
    {
      id: "doB",
      label: "Date of Birth",
      name: "doB",
      type: "date",
    },
    {
      id: "bloodGroup",
      label: "Blood Group",
      name: "bloodGroup",
      type: "dropdown",
      placeholder: "Select Blood Group",
      options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    {
      id: "gender",
      label: "Gender (*)",
      name: "gender",
      type: "text",
      placeholder: "Male/Female/Child",
      required: true,
    },
    // {
    //   id: "email",
    //   label: "Email ID",
    //   name: "email",
    //   type: "dropdown",
    //   placeholder: "Select Email Domain",
    //   options: ["@gmail.com", "@yahoo.com", "@outlook.com", "@icloud.com"],
    // },
    {
      id: "contactNumber",
      label: "Mobile Number (*)",
      name: "contactNumber",
      type: "text",
      required: true,
      placeholder: '0812345678' , 
    },
    // {
    //   id: "height",
    //   label: "Height",
    //   name: "height",
    //   type: "text",
    // },
    // {
    //   id: "weight",
    //   label: "Weight",
    //   name: "weight",
    //   type: "text",
    // },
    
  ];
  