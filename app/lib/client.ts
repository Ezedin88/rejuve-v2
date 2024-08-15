import { IFaqDetail, IFrontPageContent, IIvTherapyPageContent } from "./definitions";

const encodedCredentials = btoa(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`);

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
        return await response.json();
    } catch (error: any) {
        console.error('Error creating order:', error.message || error);
        throw new Error('Failed to create order');
    }
};

export const getPaymentIntent = async (userData: {
    totalValue: number;
    email: string;
    first_name: string;
    last_name: string;
}) => {
    const url = 'https://rejuve.md/wp-json/stripe/v1/create-payment-intent';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                totalWithTip: userData.totalValue,
                customer_email: userData.email,
                customer_name: `${userData.first_name} ${userData.last_name}`,
            }),
        });

        const data = await response.json();
        if (data.clientSecret) {
            return data.clientSecret;
        } else {
            throw new Error(data.message || 'Failed to fetch client secret');
        }
    } catch (error: any) {
        console.error('Error fetching payment intent:', error.message || error);
        throw new Error('Failed to fetch client secret');
    }
};

export const sendEmail = async (emailData: string) => {
    const url = 'https://rejuve.com/wp-json/custom/v1/send-email';

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'booking@rejuve.com',
                subject: 'Discrepancy in Cardholder Information for Patient Billing',
                message: emailData,
            }),
        });
    } catch (error: any) {
        console.error('Error sending email:', error.message || error);
        throw new Error('Failed to send email');
    }
};

export const fetchOptions = async () => {
    const url = 'https://rejuve.md/wp-json/wp/v2/custom/options';

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: `Basic ${encodedCredentials}`,
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.error('Error fetching options:', error.message || error);
        throw new Error('Failed to fetch options');
    }
};

export const fetchProducts = async () => {
    const url = 'https://rejuve.md/wp-json/wp/v2/custom/products';

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: `Basic ${encodedCredentials}`,
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 86400,
            },
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.error('Error fetching products:', error.message || error);
        throw new Error('Failed to fetch products');
    }
};

export const fetchIVProducts = async () => {
    const url = 'https://rejuve.md/wp-json/wp/v2/custom/iv-therapy-page';

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: `Basic ${encodedCredentials}`,
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.error('Error fetching IV products:', error.message || error);
        throw new Error('Failed to fetch IV products');
    }
};

export const fetchFrontPageContent = async (): Promise<IFrontPageContent> => {
    const url = "https://rejuve.md/wp-json/wp/v2/custom/front-page";

    const res = await fetch(url, {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/json",
        },
        next: {
            revalidate: 86400,
        },
    });

    const data = await res.json();
    return data;

}

export const fetchIvTherapyPageContent = async (): Promise<IIvTherapyPageContent> => {
    const url = "https://rejuve.md/wp-json/wp/v2/custom/iv-therapy-page";

    const res = await fetch(url, {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/json",
        },
        next: {
            revalidate: 86400,
        },
    });

    const data = await res.json();
    return data;
}

export const getFaqData = async (): Promise<IFaqDetail[]> => {
    const url = 'https://rejuve.md/wp-json/wp/v2/custom/faq';

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: `Basic ${encodedCredentials}`,
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 86400,
            },
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.error('Error fetching FAQ data:', error.message || error);
        throw new Error('Failed to fetch FAQ data');
    }
}