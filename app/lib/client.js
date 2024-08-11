export const createOrder = async (order) => {
    const url = `https://rejuve.com/wp-json/wc/v3/orders`;
    const consumerKey = "ck_e7aa9e0555bdbad2db0811eda91b501d0d759dcb";
    const consumerSecret = "cs_661249c3135e6b9d86ae3fd7fae5a94bbc624e9e";
    const encodedCredentials = btoa(`${consumerKey}:${consumerSecret}`);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${encodedCredentials}`,
            },
            body: JSON.stringify(order),
        });
        return response.json();
    }
    catch (error) {
        console.error(error);
    }
};