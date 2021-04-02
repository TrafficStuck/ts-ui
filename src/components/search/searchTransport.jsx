import React from "react"


const SearchTransport = ({ transports, currentRoute, setRouteName }) => {
    return (
        <>
            {transports.map(item => (
                <div key={item.route_type} className="search-transport-wrapper">
                    <div className="search-transport-title">
                        {item.route_type}
                    </div>
                    <div className="search-transport-container">
                        {item.route_names.map(name => (
                            <div key={name}
                                className={
                                    currentRoute !== name
                                        ? "search-transport"
                                        : "search-transport search-transport-active"
                                }
                                data-name={name}
                                onClick={() => {
                                    setRouteName(name)
                                }}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default SearchTransport
