const encodedCredentials = btoa(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`)

export const createOrder = async (order: any) => {
    const url = `https://rejuve.com/wp-json/wc/v3/orders`;

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

export const getPaymentIntent = async (userData: {
    totalValue: number;
    email: string;
    first_name: string;
    last_name: string;
}) => {
    try {
        const response = await fetch(
            'https://rejuve.md/wp-json/stripe/v1/create-payment-intent',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    totalWithTip: userData.totalValue,
                    customer_email: userData.email,
                    customer_name:
                        userData.first_name +
                        ' ' +
                        userData.last_name,
                }),
            }
        );

        const data = await response.json();
        if (data) {
            // setClientSecret(data.clientSecret);
            return data.clientSecret;
        } else {
            throw new Error(data.message || 'Failed to fetch client secret');
        }
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch client secret');
    }
}

export const sendEmail = async (emailData: string) => {
    const url = 'https://rejuve.com/wp-json/custom/v1/send-email';

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: 'booking@rejuve.com',
            subject: 'Discrepancy in Cardholder Information for Patient Billing',
            message: emailData
        })
    });
}


export const fetchOptions = async () => {
    const res = await fetch('https://rejuve.md/wp-json/wp/v2/custom/options', {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();
    return data;
};

export const fetchProducts = async () => {
    const res = await fetch('https://rejuve.md/wp-json/wp/v2/custom/products', {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();
    return data;
}

export const fetchIVProducts = async () => {
    const res = await fetch('https://rejuve.md/wp-json/wp/v2/custom/iv-therapy-page', {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();
    return data;
}
