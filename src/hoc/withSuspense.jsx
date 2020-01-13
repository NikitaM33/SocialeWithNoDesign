import React, { Suspense } from 'react';


// HOC ВОЗВРАЩАЕТ КОМПОНЕНТУ а не JSX
export const withSuspens = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />
            </Suspense>
        )
    }
}