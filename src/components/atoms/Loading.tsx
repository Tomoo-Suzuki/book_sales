import * as React from "react";

export default function Loading(props:{error:boolean}):JSX.Element {
  if (props.error) {
    return <div>Error!...</div>;
  } else {
    return <div>Loading...</div>;
  }
}
