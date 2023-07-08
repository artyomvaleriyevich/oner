import {ReactNode} from "react";

const containerStyle = {
    maxWidth: '1300px',
    width: '100%',
    margin: '0 auto',
    padding: '0 20px',
}

const Container = ({children}:ReactNode) => {
    return (
        <div className={'container'} style={containerStyle}>
            {children}
        </div>
    );
};

export default Container;