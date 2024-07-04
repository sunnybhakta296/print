export const Address = ({ data }) => {
    if (!data) return null;
    return (
      <address>
        <strong>{data.name}</strong>
        <br />
        {/* {data.name && (
          <>
            {data.name}
            <br />
          </>
        )} */}
        {data.address1 && (
          <>
            {data.address1}
            <br />
          </>
        )}
        {data.address2 && (
          <>
            {data.address2}
            <br />
          </>
        )}
        {data.gst && (
          <>
            {data.gst}
            <br />
          </>
        )}
        {data.phone && (
          <>
            {data.phone}
            <br />
          </>
        )}
        {data.email && (
          <>
            {data.email}
            <br />
          </>
        )}
        {data.website && (
          <>
            {data.website}
            <br />
          </>
        )}
      </address>
    );
  };
  