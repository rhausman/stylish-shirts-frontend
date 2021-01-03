import React from "react"

const ShirtContext = React.createContext({ resp: "yeet", setResp: () => { } })
export const ShirtProvider = ShirtContext.Provider;
export const ShirtConsumer = ShirtContext.Consumer;
export default ShirtContext