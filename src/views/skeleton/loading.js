import React from 'react'
import Lottie from "react-lottie";
import animationLoading from "./loading.json";
import { updateData } from "./../../redux/actions/data";
import { connect } from 'react-redux'
import { csvapiUrl } from './../../utilis/config'

const Loading = ({
    location,
    updateData,
}) => {
    const params = new URLSearchParams(location.search);
    const url = params.get('url');
    const serverUrl = new URL(csvapiUrl);
    serverUrl.pathname = '/apify'
    serverUrl.searchParams.set('url', url)
    fetch(serverUrl)
    .then(response => response.json())
    .then(json => {
        if(json.ok) {
            const url = new URL(json.endpoint)
            url.searchParams.set('_shape', 'objects')
            url.searchParams.set('_rowid', 'hide')
            updateData(url)
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
