import React from 'react';

type OrdersProp = {
  orders: { date: String; order: { title: String; price: Number }[] }[];
};

const OrderCard: React.FC<OrdersProp> = ({ orders }) => {
  return (
    <div className="grid-cols-1 grid xls:grid-cols-2 place-items-center gap-6 gap-y-6 w-full">
      {orders?.map((or: any, idx: number) => (
        <div
          key={idx}
          className="flex flex-col gap-5 bg-lighterGrayBg p-6 rounded-lg w-full"
        >
          <p className="text-secondaryDark text-sm">{or.date}</p>
          {or?.order &&
            or.order?.map((o: any, index: number) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="flex gap-6 justify-between items-center font-bold text-base">
                  <p className="font-medium">{o.title}</p>
                  <p>$ {o.price}</p>
                </div>
                {index === or.order.length - 1 && (
                  <>
                    <hr className="border-b border-horizontalLine/50" />
                    <div className="flex gap-6 justify-between items-center font-bold text-base">
                      <p className="font-medium">Total</p>
                      {orders?.length && (
                        <p>
                          ${' '}
                          {or.order?.reduce(
                            (tot: number, or: any) => tot + or.price,
                            0
                          )}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          <button className="flex bg-primaryGreen px-6 py-3 w-fit text-primaryWhite rounded font-bold">
            Reorder
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
