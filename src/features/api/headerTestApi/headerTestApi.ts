type CompanyNameResponse = {
    data: {
        company_name: string;
    };
};


export const getCompanyName = async () : Promise<string>=> {
    const response = await fetch ("https://admin.baltikstyle.ru/items/site_settings?fields=company_name")
        .then(res =>  res.json())
            .then((data: CompanyNameResponse) => {
                return data.data.company_name
            })
    return response

}