const encodedCredentials = btoa(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`)

export const createOrder = async (order) => {
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

export const fetchOptions = async () => {
      const res = await fetch('https://rejuve.md/wp-json/wp/v2/custom/options',{
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      return data;
    };

export const fetchProducts = async () => {
      const res = await fetch('https://rejuve.md/wp-json/wp/v2/custom/products',{
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      return data;
}

export const fetchIVProducts = async () => {
      const res = await fetch('https://rejuve.md/wp-json/wp/v2/custom/iv-therapy-page',{
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      return data;
}
