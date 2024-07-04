import { generateRandomId } from "../utils/helpers";
export const BankDetails = ({ data }) => {
  if (!data) return null;
  const orderId = generateRandomId(6);
  return (
    <div class="col-12 col-sm-6 col-md-4">
      {/* <h4 class="row">
          <span class="col-6">Invoice #</span>
          <span class="col-6 text-sm-end">INT-001</span>
        </h4> */}
      <div class="row">
        <span class="col-6">Order ID</span>
        <span class="col-6 text-sm-end">#{orderId}</span>
        {Object.keys(data).map((key) => (
          <>
            <span class="col-6">{key}</span>
            <span class="col-6 text-sm-end">{data?.[key]}</span>
          </>
        ))}
      </div>
    </div>
  );
};
