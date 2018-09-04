import React from 'react'
import Lottie from "react-lottie";
import animationLoading from "./loading.json";
import { updateData } from "./../../redux/actions/data";
import { connect } from 'react-redux'
import { serverApi } from './../../utilis/config'

const Loading = ({
    location,
    updateData,
}) => {


    const csv = location.search.split('?url=')[1];
    fetch(serverApi + '/apify?url=' + csv)
    .then(response => response.json())
    .then(json => {
        if(json.ok) {
            // const id = json.endpoint.split('/');
            // console.log(id[id.length - 1])
            updateData(json.endpoint + '?_shape=objects')
        } else {
            Error()
        }
    })
    .catch(error => console.error(error))
    // const id = location.pathname.split('/')[2];

    return (
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', height: '100vh', width: '100vw'}}>
            <Lottie
                isClickToPauseDisabled={true}
                options={{
                    loop: true,
                    autoplay: true,
                    renderer: "svg",
                    animationData: animationLoading,
                    rendererSettings: {},
                }}
                heigth={'100%'}
                width={'100%'}
            />
        </div>
    );
};

export const mapStateToProps = state => ({
    location: state.router.location,
});

const mapDispatchToProps = {
    updateData: updateData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
