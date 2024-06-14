type activeButton = {
    title: string,
    isActive: boolean,
}

type bookInput = {
    title: string,
    type: string,
    placeholder: string,
    name: string,
}

const activeButtons: activeButton[] = [
    {
        title: "Engagement",
        isActive: false,
    },
    {
        title: "Business event",
        isActive: false,
    },
    {
        title: "Wedding",
        isActive: false,
    },
    {
        title: "Birthday",
        isActive: false,
    },
    {
        title: "Maternity",
        isActive: false,
    },
    {
        title: "Graduation",
        isActive: false,
    },
    {
        title: "Product",
        isActive: false,
    },
    {
        title: "Honeymoon",
        isActive: false,
    },
    {
        title: "Fashion",
        isActive: false,
    },
    {
        title: "Anniversary",
        isActive: false,
    },
    {
        title: "Food",
        isActive: false,
    },
    {
        title: "Conference",
        isActive: false,
    },
    {
        title: "Team and workspace",
        isActive: false,
    },
    {
        title: "Personal Potrait",
        isActive: false,
    },
    {
        title: "Family",
        isActive: false,
    },
    {
        title: "Travel shoot",
        isActive: false,
    },
    {
        title: "Baby",
        isActive: false,
    },
    {
        title: "Others",
        isActive: false,
    },
]

const bookInputsData: bookInput[] = [
    {
        title: "Address",
        type: "text",
        placeholder: "Enter the location address",
        name: "address",
    },
    {
        title: "Name",
        type: "text",
        placeholder: "Enter full name",
        name: "name",
    },
    {
        title: "Phone number",
        type: "text",
        placeholder: "Enter phone number",
        name: "number",
    },
    {
        title: "Email",
        type: "email",
        placeholder: "Enter email address",
        name: "email",
    },
]

export {
    activeButtons,
    bookInputsData,
}
