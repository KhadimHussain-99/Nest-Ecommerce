import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({
  imageOne,
  imageTwo,
  type,
  title,
  by,
  price,
  redprice,
  cardFor,
}) => {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/product");
  }

  if (cardFor === "deals-card") {
    return (
      <div className="flex flex-col group border rounded-lg md:h-[470px] p-2 md:pt-8">
        <div className="flex justify-center items-center">
          <img
            className="w-[120px] md:w-[140px] h-[120px] md:h-[140px] rounded-lg"
            src={imageOne}
            alt=""
          />
        </div>
        <span className="text-xs md:text-sm text-gray-400">{type}</span>
        <p className="leading-none h-14 md:h-20 text-gray-700 text-base md:text-lg md:leading-tight md:mt-2 font-bold">
          {title}
        </p>
        <div className="flex mt-3 md:mt-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Star 1"
              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
              fill="#FFE033"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Star 1"
              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
              fill="#FFE033"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Star 1"
              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
              fill="#FFE033"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Star 1"
              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
              fill="#FFE033"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Star 1"
              d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
              fill="#FFE033"
            />
          </svg>
        </div>
        <div className="text-green-600 text-lg md:text-sm font-bold my-4 md:my-2">
          <div>
            ${redprice}.85{" "}
            <span className="text-sm md:text-xs  text-gray-400 line-through">
              ${price}.0
            </span>
          </div>
        </div>
        <div className="w-[100%] h-1 bg-gray-400 rounded-full">
          <div className="w-[55%] h-[100%] bg-green-600"></div>
        </div>
        <span className="text-gray-700 bold-semibold text-sm md:text-xs mt-1 md:mt-2 mb-4 md:mb-6">
          sold: 90/120
        </span>
        <button className="flex w-[140px] md:w-[120px] lg:w-[160px] gap-2 items-center bg-green-600 hover:bg-yellow-400 text-sm md:text-xs lg:text-sm font-semibold text-white mx-auto md:my-4 px-3 py-2 lg:px-5 lg:py-3  rounded-md">
          <img
            className="w-4 h-4"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
            alt=""
          />
          Add To Cart
        </button>
      </div>
    );
  }

  return (
    <div
      className="w-[90%] sm:w-[48%] md:w-[30%] lg:w-[18%] group h-full mt-5 border rounded-2xl hover:shadow-lg font-Quicksand"
      onClick={handleNavigation}
    >
      <div className="flex justify-center items-center">
        <img
          className="w-[200px] h-[200px] lg:w-[170px] lg:h-[170px] object-cover group-hover:hidden rounded-t-2xl"
          src={imageOne}
          alt=""
        />

        <img
          className="w-[200px] h-[200px] lg:w-[170px] lg:h-[170px] hidden object-cover group-hover:flex rounded-t-2xl"
          src={imageTwo}
          alt=""
        />
      </div>
      <div className="px-5">
        <div className="text-gray-500 text-sm">{type}</div>
        <p className="text-base lg:text-sm font-bold text-gray-800 my-2 cursor-pointer hover:text-green-600 lg:leading-tight">
          {title}
        </p>
        <div className="flex justify-start items-center gap-2">
          <div className="flex">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 1"
                d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                fill="#FFE033"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 1"
                d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                fill="#FFE033"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 1"
                d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                fill="#FFE033"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 1"
                d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                fill="#FFE033"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 1"
                d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                fill="#FFE033"
              />
            </svg>
          </div>
          <span className="text-gray-500 text-sm lg:text-xs font-medium">
            (4.0)
          </span>
        </div>
        <div className="text-sm lg:text-xs text-gray-500 my-2">
          By <span className="text-green-600 font-semibold">{by}</span>
        </div>
        <div className="flex justify-between items-center my-5">
          <div className="flex lg:flex-col justify-end items-center gap-2 text-lg sm:text-sm lg:text-base font-bold text-green-600">
            {price}
            <span className="text-gray-400 text-sm sm:text-xs  line-through">
              {redprice}
            </span>
          </div>
          <button className="flex justify-center items-center gap-2 sm:gap-1 bg-green-200 hover:bg-green-600 text-green-600 hover:text-white lg:text-xs font-bold px-5 py-2 sm:px-4 md:py-1 rounded-md">
            <img
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
              className="w-4 h-5 inline filter brightness-75 grayscale-0"
              alt=""
            />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
