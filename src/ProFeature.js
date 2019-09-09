import React from 'react';


const ProFeature = ( FeatureComponent ) => {
    return (props) => {
        if (props.pro) {
            let { pro, ...childProps } = props;
            return <FeatureComponent { ...childProps } />
        } else {
            return (
                <h5 className="bg-warning text-white text-center">
                    This is a Pro Feature
                </h5>
            )
        }
    }
};

export default ProFeature;