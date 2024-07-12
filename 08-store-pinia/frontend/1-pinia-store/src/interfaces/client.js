const clientInterface = {
    id: Date.now(),
    firstName: "",
    lastName: "",
    companyName: "",
    date: new Date().toISOString().slice(0, 10),
    function: "",
    telephone: "",
    email: "",
    address: {
        address1: "",
        address2: "",
        postCode: "",
        city: "",
        country: ""
    }
}

export { clientInterface }
